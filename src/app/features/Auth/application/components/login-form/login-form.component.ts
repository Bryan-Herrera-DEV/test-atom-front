import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@spartan-ng/ui-forms-brain';
import { HlmInputDirective, HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSelectImports, HlmSelectModule } from '@spartan-ng/ui-select-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { GetUserUseCase } from '../../../../Users/application/use-case/get-user.use-case';

@Component({
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  standalone: true,
  selector: 'app-login-form',
  imports: [
    CommonModule,
    HlmFormFieldModule,
    HlmSelectModule,
    HlmInputDirective,
    HlmSelectImports,
    HlmButtonModule,
    HlmInputModule,
    ReactiveFormsModule,
    HlmLabelDirective,
    HlmSeparatorDirective
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  loadingSignal = this.getUserUseCase.loadingSignal;

  constructor(
    private readonly fb: FormBuilder,
    private readonly getUserUseCase: GetUserUseCase,
  ) {}

  submit() {
    if (this.form.invalid) return;

    this.getUserUseCase.execute(this.form.value.email).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
    });
  }
}
