import { Component, inject, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { NewUserComponent } from "@management/new-user/new-user.component";
import { UserService } from "@services/user";

@Component({
  templateUrl: './configurations.component.html',
  selector: 'configurations',
  standalone: false
})
export class ConfigurationsComponent extends BaseComponent {

  @ViewChild(NewUserComponent) newUser!: NewUserComponent
  users: any = []
  userService = inject(UserService)

  override ngOnInit(): void {
    this.loadingService.show()
    this.userService.listRegisteredUsers()
      .subscribe({
        next: (res: any) => {
          this.users = res.data
          console.log(this.users)
          this.loadingService.hide()
        },
        error: () => this.loadingService.hide()
      })
  }

  openModal(user?: any): void {
    this.newUser.toogleModal(user)
  }
}