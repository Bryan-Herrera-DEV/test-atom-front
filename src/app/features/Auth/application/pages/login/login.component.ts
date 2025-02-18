import { Component } from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { LogoAppTextComponent } from '../../../../../shared/application/components/intern/logo-app-text/logo-app-text.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogoAppTextComponent,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    LoginFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: {
    class: 'w-full',
  },
})
export class LoginComponent {

}
