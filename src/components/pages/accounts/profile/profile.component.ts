import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../services/user.service';
import { NavbarComponent } from '../../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder) {}
  icons = {
    edit: faEdit,
    lock: faLock,
  };

  user: any = null;

  // Profile form
  successMessage: string | null = null;

  profileForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    date_of_birth: [''],
    gender: ['', [Validators.required]],
  });

  get name() {
    return this.profileForm.controls['name'];
  }
  get email() {
    return this.profileForm.controls['email'];
  }
  get date_of_birth() {
    return this.profileForm.controls['date_of_birth'];
  }
  get gender() {
    return this.profileForm.controls['gender'];
  }

  updateProfile() {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      let id = localStorage.getItem('id');

      this.userService.updateUser(id, token, this.profileForm.value).subscribe({
        next: (res: any) => {
          this.successMessage = res.data.message;
          if (typeof window !== 'undefined') {
            let token = localStorage.getItem('token');
            let id = localStorage.getItem('id');
            this.userService.getUser(id, token).subscribe({
              next: (res) => {
                this.user = res;
                this.profileForm.controls['name'].setValue(this.user.name);
                this.profileForm.controls['email'].setValue(this.user.email);
                this.profileForm.controls['date_of_birth'].setValue(
                  this.user.date_of_birth
                );
                this.profileForm.controls['gender'].setValue(this.user?.gender);
              },
            });
          }
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  // Avatar form
  avatarForm = this.fb.group({
    avatar: '',
  });

  get avatar() {
    return this.avatarForm.controls['avatar'];
  }

  updateAvatar(event: any) {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      let id = localStorage.getItem('id');

      this.userService.updateAvatar(event.target.files[0], token).subscribe({
        next: (res) => {
          this.userService.getUser(id, token).subscribe({
            next: (res) => {
              this.user = res;
              this.profileForm.controls['name'].setValue(this.user.name);
              this.profileForm.controls['email'].setValue(this.user.email);
              this.profileForm.controls['date_of_birth'].setValue(
                this.user.date_of_birth
              );
              this.profileForm.controls['gender'].setValue(this.user?.gender);
            },
          });
        },
      });
    }
  }

  // Password form

  passwordForm = this.fb.group({
    old_password: ['', [Validators.required]],
    new_password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get old_password() {
    return this.passwordForm.controls['old_password'];
  }
  get new_password() {
    return this.passwordForm.controls['new_password'];
  }

  passwordSuccessMessage: null | string = null;
  passwordErrorMessage: null | string = null;

  updatePassword() {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      this.userService
        .updatePassword(this.passwordForm.value, token)
        .subscribe({
          next: (res: any) => {
            res.statusCode == 200
              ? (this.passwordSuccessMessage = res.data.message)
              : (this.passwordErrorMessage = res.data.message);

            setTimeout(() => {
              this.passwordErrorMessage = null;
              this.passwordSuccessMessage = null;
            }, 3000);
          },
        });
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      let id = localStorage.getItem('id');
      this.userService.getUser(id, token).subscribe({
        next: (res) => {
          this.user = res;
          this.profileForm.controls['name'].setValue(this.user.name);
          this.profileForm.controls['email'].setValue(this.user.email);
          this.profileForm.controls['date_of_birth'].setValue(
            this.user.date_of_birth
          );
          this.profileForm.controls['gender'].setValue(this.user?.gender);
        },
      });
    }
  }
}
