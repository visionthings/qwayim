import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NavbarComponent } from '../../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  notifications: any = undefined;
  shownNotificationsNumber = 10;
  readNotification(id: string, destinationID: string) {
    this.userService.readNotification(id).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl(`/destination/${destinationID}`);
      },
    });
  }

  showMoreNotifications() {
    this.shownNotificationsNumber += 10;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      let id = localStorage.getItem('id');
      if (token) {
        this.userService.getNotifications(token).subscribe({
          next: (res: any) => {
            this.notifications = res.data;
          },
        });
      }
    }
  }
}
