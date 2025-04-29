import { AfterViewInit, Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";

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
export class LayoutComponent implements AfterViewInit {

    @ViewChild('dropDown') dropDown!: ElementRef<HTMLDivElement>
    @ViewChildren('link') links!: QueryList<ElementRef<HTMLAnchorElement>>

    private router = inject(Router)

    ngAfterViewInit(): void {
        this.links.forEach(l => l.nativeElement.addEventListener('click', () => this.toggleDropdown()))
    }

    toggleDropdown(): void {
        this.dropDown.nativeElement.classList.toggle('hidden')
        this.dropDown.nativeElement.classList.toggle('flex')
    }

    logOut(): void {
        this.router.navigate(['/'])
    }
}