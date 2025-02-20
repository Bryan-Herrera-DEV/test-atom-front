import { Component, inject } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { CommonModule } from '@angular/common';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent
} from '@spartan-ng/ui-menu-helm';
import { GetUserUseCase } from '../../use-case/get-user.use-case';
import { LogoutUseCase } from '../../use-case/logout.use-case';

@Component({
  selector: 'app-user-info',
  standalone: true,
  providers: [provideIcons({ lucideUser })],
  imports: [
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmButtonDirective,
    HlmIconComponent,
    CommonModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {

  user = inject(GetUserUseCase).userSignal;
  logoutUseCase = inject(LogoutUseCase);


  get fullName(): string {
    return `${this.user?.name} ${this.user?.lastName}`;
  }

  get email(): string | undefined {
    return this.user?.email;
  }

  logout() {
    this.logoutUseCase.execute();
  }
}
