import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { EditCategoryComponent } from "@management/edit-category/edit-catyegory.component";
import { CategoryService } from "@services/category";
import { Category } from "@shared/types/category.type";

@Component({
    templateUrl: './management-home.component.html',
    selector: 'management-home',
    standalone: false
})
export class ManagementHomeComponent extends BaseComponent implements OnInit {

    @ViewChild(EditCategoryComponent) editCategory!: EditCategoryComponent

    categories: Category[] = []

    categoryService = inject(CategoryService)

    override ngOnInit(): void {
        this.loadingService.show()
        this.categoryService.listAllCategories()
            .subscribe({
                next: (res: any) => {
                    this.categories.push(...res.data)
                },
                error: (error) => {
                    this.alertService.error(error)
                },
                complete: ()=> this.loadingService.hide()
            })
    }

    openModal(category?: Category): void {
        this.editCategory.toogleModal(category)
    }

    newCategorySaved(newCategory: Category): void {

        const edited = this.categories.findIndex(cat => cat.id == newCategory.id)
        if(edited === -1){
            this.categories.push(newCategory)
            this.openModal()
            return
        }
        this.categories[edited].nome = newCategory.nome
        this.categories[edited].cor = newCategory.cor
        this.openModal()
        return
    }
}