import { Component, inject, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { CategoryService } from "@services/category";
import { SessionService } from "@services/sessions";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";
import { Category } from "@shared/types/category.type";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './summary.component.html',
    selector: 'session-summary',
    standalone: false
})
export class SummaryComponent extends BaseComponent {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent

    todaySessions: Session[] = []
    otherSessions: Session[] = []
    categories: any = {}
    today = new Date().toISOString().split('T')[0]

    showDropdown = false

    sessionService = inject(SessionService)
    categoryService = inject(CategoryService)

    override ngOnInit(): void {
        this.loadingService.show()
        this.categoryService.listAllCategories()
            .subscribe({
                next: (cat: any) => {
                    cat.data.forEach((c: Category) => {
                        Object.defineProperty(this.categories, String(c.id), { value: c.cor })
                    });
                },
                complete: () => {
                    this.sessionService.getAllSessions()
                        .subscribe({
                            next: (res: any) => {
                                res.data = (<Session[]>res.data).map(s => {
                                    return {
                                        ...s,
                                        modalidadeCor: this.categories[s.modalidadeId]
                                    }
                                })
                                this.otherSessions = (<Session[]>res.data).filter(s => s.data.split('T')[0] != this.today)
                                this.todaySessions = (<Session[]>res.data).filter(s => s.data.split('T')[0] == this.today)
                                this.loadingService.hide()
                            },
                            error: () => {
                                this.loadingService.hide()
                            }
                        })
                }
            })
    }

    openModal(session: Session): void {
        this.details.toogleModal(session)
    }

    toogleDropdown(): void {
        this.showDropdown = !this.showDropdown
    }

}