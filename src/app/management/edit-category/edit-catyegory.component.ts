import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject, output } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { CategoryService } from "@services/category";
import { Category } from "@shared/types/category.type";

@Component({
  templateUrl: './edit-catyegory.component.html',
  selector: 'edit-category',
  standalone: false
})
export class EditCategoryComponent extends BaseComponent {

  show = false
  category?: Category
  saveCategory = output<Category>()

  categoryService = inject(CategoryService)

  override ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      cor: ['', Validators.required]
    })
  }

  saveChanges(): void {
    if (!this.category) {
      this.createNewCategory()
      return
    }
    this.saveEditing()
  }

  private saveEditing(): void {
    if (this.formGroup.valid) {
      this.categoryService.editCategory(<number>this.category?.id, this.formGroup.value.name, this.formGroup.value.cor)
        .subscribe({
          next: (res: any) => {
            this.saveCategory.emit(res.data as Category)
          },
          complete: () => this.alertService.success('Modalidade editada com sucesso!')
        })
        return
    }
    this.alertService.warn('Preencha todos os campos obrigatórios!')
    return
  }

  private createNewCategory() {
    if (this.formGroup.valid) {
      this.categoryService.createNewCategory(this.formGroup.value.name, this.formGroup.value.cor)
        .subscribe({
          next: (res: any) => {
            this.saveCategory.emit(res.data as Category)
          },
          error: (err: HttpErrorResponse) => this.alertService.error(err.message),
          complete: () => this.alertService.success('Modalidade adicionada com sucesso!')
        })
      return
    }
    this.alertService.warn('Preencha todos os campos obrigatórios!')
    return
  }

  toogleModal(category?: Category): void {
    this.show = !this.show
    if (category) {
      this.category = category
      this.formGroup.get('name')?.setValue(category.nome)
      return
    }

    if (this.category) {
      this.category = undefined
      this.formGroup.reset()
    }
  }

}