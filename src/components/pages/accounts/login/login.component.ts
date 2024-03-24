import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  errorMessage: string | null = null;

  login() {
    this.userService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        if (res.statusCode === 401) {
          this.errorMessage = res.data.message;
        }
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('email', res.data.user_data.email);
          localStorage.setItem('name', res.data.user_data.name);
          localStorage.setItem('id', res.data.user_data.id);
        }

        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
}
