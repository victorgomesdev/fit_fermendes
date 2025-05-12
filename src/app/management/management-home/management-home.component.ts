import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { EditCategoryComponent } from "@management/edit-category/edit-catyegory.component";
import { CategoryService } from "@services/category";
import { AlertService } from "@shared/services/alert.service";
import { Category } from "@shared/types/category.type";

@Component({
    templateUrl: './management-home.component.html',
    selector: 'management-home',
    standalone: false
})
export class ManagementHomeComponent implements OnInit {

    @ViewChild(EditCategoryComponent) editCategory!: EditCategoryComponent

    categories: Category[] = []

    categoryService = inject(CategoryService)
    alertService = inject(AlertService)

    ngOnInit(): void {
        this.categoryService.listAllCategories()
            .subscribe({
                next: (res: any) => {
                    this.categories.push(...res.data)
                },
                error: (error) => {
                    this.alertService.error(error)
                }
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
        this.openModal()
        return
    }
}