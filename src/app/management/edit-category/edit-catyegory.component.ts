import { Component, inject, OnInit, output } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CategoryService } from "@services/category";
import { AlertService } from "@shared/services/alert.service";
import { Category } from "@shared/types/category.type";

@Component({
  templateUrl: './edit-catyegory.component.html',
  selector: 'edit-category',
  standalone: false
})
export class EditCategoryComponent implements OnInit {

  show = false
  category?: Category
  saveCategory = output<Category>()

  form!: FormGroup
  categoryService = inject(CategoryService)
  alertService = inject(AlertService)

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      name: ['', Validators.required]
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
    this.categoryService.editCategory(<number>this.category?.id, this.form.get('name')?.value)
      .subscribe({
        next: (res: any) => {
          this.saveCategory.emit(res.data as Category)
        },
        complete: ()=> this.alertService.success('Modalidade editada com sucesso!')
      })
  }

  private createNewCategory() {
    if (this.form.valid) {
      this.categoryService.createNewCategory(this.form.get('name')?.value)
        .subscribe({
          next: (res: any) => {
            this.saveCategory.emit(res.data as Category)
          },
          error: err => this.alertService.error(err),
          complete: ()=> this.alertService.success('Modalidade adicionada com sucesso!')
        })
      return
    }
    this.alertService.error('Preencha os campos obrigatórios!')
    return
  }

  toogleModal(category?: Category): void {
    this.show = !this.show
    if (category) {
      this.category = category
      this.form.get('name')?.setValue(category.nome)
      return
    }

    if (this.category) {
      this.category = undefined
      this.form.reset()
    }
  }

}