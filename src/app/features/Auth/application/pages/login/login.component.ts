import { Component } from '@angular/core';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { LogoAppTextComponent } from '../../../../../shared/application/components/intern/logo-app-text/logo-app-text.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

import {
  BrnDialogContentDirective,
  BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective
} from '@spartan-ng/ui-dialog-helm';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
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
    HlmButtonModule,

    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    RegisterFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: {
    class: 'w-full',
  },
})
export class LoginComponent {}
