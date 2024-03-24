import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MainService } from '../../../services/main.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constructor(private mainService: MainService) {}
  socialMediaIcons = [
    { id: 1, icon: faFacebook, path: '' },
    { id: 2, icon: faTwitter, path: '' },
    { id: 3, icon: faInstagram, path: '' },
    { id: 4, icon: faYoutube, path: '' },
  ];

  items = [
    {
      id: 2,
      title: 'تواصل معنا',
      items: [
        { id: 1, title: 'خدمة العملاء', path: '' },
        { id: 2, title: 'نبذة عن قوائم', path: '' },
      ],
    },
    {
      id: 3,
      title: 'روابط سريعة',
      items: [
        { id: 1, title: 'الأسئلة المتكررة بخصوص فيروس كورونا', path: '' },
        { id: 2, title: 'مركز معلومات السلامة', path: '' },
        { id: 3, title: 'الشروط والأحكام', path: '' },
        { id: 4, title: 'الإرشادات الخاصة بالمحتوى', path: '' },
      ],
    },
  ];

  // Cities
  cities: any = undefined;

  ngOnInit(): void {
    this.mainService.getAllCities().subscribe({
      next: (res: any) => {
        this.cities = res.data;
      },
    });
  }
}
