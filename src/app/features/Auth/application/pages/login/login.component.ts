import { Component } from '@angular/core';
import { LogoAppTextComponent } from '../../../../../shared/application/components/intern/logo-app-text/logo-app-text.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoAppTextComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
