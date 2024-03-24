import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MainService } from '../../../services/main.service';
import { UserService } from '../../../services/user.service';
import {
  faBell,
  faBookmark,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(
    private mainService: MainService,
    private userService: UserService,
    private router: Router
  ) {}

  // Icons
  icons = {
    notification: faBell,
    bookmark: faBookmark,
    user: faUser,
    logout: faPowerOff,
  };

  // Check if user authenticated
  isAuthenticated: undefined | boolean = undefined;

  // Navbar items
  navItems = [
    { id: 1, title: 'الرئيسية', path: '/home' },
    {
      id: 2,
      title: 'المدن',
      path: '',
    },
    { id: 3, title: 'برامج سياحية', path: '/p' },
    { id: 4, title: 'مساعدة', path: '/help' },
  ];

  // Login buttons
  buttons = [
    { id: 1, title: 'الإشتراك', path: '/accounts/register' },
    { id: 2, title: 'تسجيل الدخول', path: '/accounts/login' },
  ];

  // Sidebar
  isSidebarActive = false;
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  // Cities and cities menu
  cities: any[] = [];
  isCitiesMenuActive = false;
  toggleCitiesMenu() {
    this.isCitiesMenuActive = !this.isCitiesMenuActive;
  }

  // User menu
  userProfilePic: any = undefined;
  isUserMenuActive = false;
  toggleUserMenu() {
    this.isUserMenuActive = !this.isUserMenuActive;
  }

  // Notification menu
  notifications: any = undefined;
  isNotificationMenuActive = false;
  toggleNotificationMenu() {
    this.isNotificationMenuActive = !this.isNotificationMenuActive;
  }
  unreadNotifications: number = 0;
  readNotification(id: string, destinationID: string) {
    this.userService.readNotification(id).subscribe({
      next: (res) => {
        if (typeof window !== 'undefined') {
          let id = localStorage.getItem('id');
          let token = localStorage.getItem('token');
          this.userService.getNotifications(token).subscribe({
            next: (res: any) => {
              this.notifications = res.data;
              let unreadNotifications = 0;
              for (const notification of res.data) {
                if (!notification.notification.read_at) {
                  unreadNotifications += 1;
                }
              }
              this.unreadNotifications = unreadNotifications;
            },
          });
        }
        this.router.navigateByUrl(`/destination/${destinationID}`);
      },
    });
  }

  // Logout
  logout() {
    let token = typeof window !== 'undefined' && localStorage.getItem('token');
    let id = typeof window !== 'undefined' && localStorage.getItem('id');
    this.userService.logout(token, id).subscribe({
      next: (res) => {
        localStorage.clear();
        this.isAuthenticated = false;
        this.router.navigateByUrl('/home');
      },
    });
  }

  // On init
  ngOnInit(): void {
    // Check auth status
    if (typeof window !== 'undefined') {
      localStorage.getItem('token')
        ? (this.isAuthenticated = true)
        : (this.isAuthenticated = false);
    }

    // Fetch cities
    this.mainService.getAllCities().subscribe({
      next: (res: any) => {
        this.cities = res.data;
      },
    });

    // Fetch user data
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      this.userService.getUser(id, token).subscribe({
        next: (res: any) => {
          this.userProfilePic = res.media[0].original_url;
        },
      });
    }
    // Fetch user notifications
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      if (token) {
        this.userService.getNotifications(token).subscribe({
          next: (res: any) => {
            console.log(res.data);
            this.notifications = res.data;
            for (const notification of res.data) {
              if (!notification.notification.read_at) {
                this.unreadNotifications += 1;
              }
            }
          },
        });
      }
    }
  }
}
