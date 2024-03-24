import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  emailConfirmValidator,
  passwordConfirmValidator,
} from '../../../../shared/validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgOptimizedImage, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) {}

  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    email_confirm: ['', [Validators.required, emailConfirmValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required, passwordConfirmValidator]],
  });

  get name() {
    return this.signupForm.controls['name'];
  }
  get email() {
    return this.signupForm.controls['email'];
  }
  get email_confirm() {
    return this.signupForm.controls['email_confirm'];
  }
  get password() {
    return this.signupForm.controls['password'];
  }
  get password_confirm() {
    return this.signupForm.controls['password_confirm'];
  }

  errorMessage = null;

  signup() {
    this.user.register(this.signupForm.value).subscribe({
      next: (res: any) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', res.token);
          localStorage.setItem('name', res.user.name);
          localStorage.setItem('email', res.user.email);
          localStorage.setItem('id', res.user.id);
        }

        this.router.navigateByUrl('/home');
      },
      error: (err: any) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
