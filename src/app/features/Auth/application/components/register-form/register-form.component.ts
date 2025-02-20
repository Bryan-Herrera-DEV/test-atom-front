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
import { HlmInputDirective, HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSelectImports, HlmSelectModule } from '@spartan-ng/ui-select-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
@Component({
  selector: 'app-register-form',
  standalone: true,
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
    HlmSeparatorDirective,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  public form: FormGroup = this.fb.group({
    email: ['hi@gmail.com', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor(private readonly fb: FormBuilder) {}

  submit() {
    if (this.form.invalid) return;
  }
}
