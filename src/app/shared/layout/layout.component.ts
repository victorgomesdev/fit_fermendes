import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    templateUrl: './layout.component.html',
    styles: `
        .active {
            background-color: #ffffff;
            color: #c9639b
        }
    `,
    selector: 'layout',
    standalone: false
})
export class LayoutComponent {

    @ViewChild('dropDown') dropDown!: ElementRef<HTMLDivElement>    

    toggleDropdown(): void {
        this.dropDown.nativeElement.classList.toggle('hidden')
        this.dropDown.nativeElement.classList.toggle('flex')
    }
}