import { Component, ViewChild } from "@angular/core";
import { EditCategoryComponent } from "@management/edit-category/edit-catyegory.component";

@Component({
    templateUrl: './management-home.component.html',
    selector: 'management-home',
    standalone: false
})
export class ManagementHomeComponent { 

    @ViewChild(EditCategoryComponent) editCategory!: EditCategoryComponent

    openModal(): void {
        this.editCategory.toogleModal()
    }
}