import { Component } from "@angular/core";

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
export class LayoutComponent { }