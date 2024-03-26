import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faWifi,
  faParking,
  faMoneyBill1,
  faCreditCard,
  faAirFreshener,
  faWheelchair,
  faBaby,
  faTv,
  faHelmetSafety,
  faClock,
  faMartiniGlass,
  faMugHot,
  faIceCream,
  faBurger,
  faPeopleRoof,
  faRestroom,
  faDoorClosed,
  faBath,
  faHouseUser,
  faUserTie,
  faDrumstickBite,
  faWineGlass,
  faHandshake,
  faChildReaching,
  faCube,
  faSkiing,
  faBowlingBall,
  faCar,
  faTheaterMasks,
  faUserGroup,
  faCannabis,
  faBowlFood,
  faHome,
  faKitchenSet,
  faLaptop,
  faPersonBreastfeeding,
  faPersonDress,
  faBook,
  faEarListen,
  faVirus,
  faPumpMedical,
  faArrowRotateBack,
  faCalendarDays,
  faLocation,
  faAngleRight,
  faAngleLeft,
  faStar,
  faComment,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAirbnb,
  faPadlet,
  faShoelace,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from '@angular/router';
import { MainService } from '../../../../services/main.service';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryComponent implements OnChanges, OnInit {
  constructor(
    private mainService: MainService,
    private userService: UserService
  ) {}
  icons = {
    regularHeart: faHeartRegular,
    heart: faHeart,
    prev: faAngleRight,
    next: faAngleLeft,
    star: faStar,
    comment: faComment,
    views: faEye,
  };

  // Filters
  filters = [
    {
      id: 1,
      title: 'عام',
      items: [
        { id: 1, icon: faWifi, title: 'واي فاي', value: 'wifi' },
        { id: 2, icon: faParking, title: 'جراج', value: 'garage' },
        { id: 3, icon: faMoneyBill1, title: 'دفع نقدي', value: 'cash' },
        { id: 4, icon: faCreditCard, title: 'دفع بالفيزا', value: 'visa' },
        {
          id: 5,
          icon: faAirFreshener,
          title: 'مكيف هواء',
          value: 'aircondetion',
        },
        {
          id: 6,
          icon: faWheelchair,
          title: 'كراسي متحركة',
          value: 'wheelChair',
        },
        {
          id: 7,
          icon: faBaby,
          title: 'منطقة مخصصة للأطفال',
          value: 'kidsArea',
        },
        { id: 8, icon: faTv, title: 'تلفزيون', value: 'TV' },
        { id: 9, icon: faHelmetSafety, title: 'أمن', value: 'security' },
        { id: 10, icon: faClock, title: 'خدمة 24 ساعة', value: '24hours' },
      ],
    },
    {
      id: 2,
      title: 'مطاعم ومقاهي',
      items: [
        {
          id: 1,
          icon: faMartiniGlass,
          title: 'مشروبات باردة',
          value: 'coldDrinks',
        },
        { id: 2, icon: faMugHot, title: 'مشروبات ساخنة', value: 'hotDrinks' },
        { id: 3, icon: faIceCream, title: 'حلوي', value: 'sweets' },
        { id: 4, icon: faBurger, title: 'وجبات سريعة', value: 'takeaway' },
      ],
    },
    {
      id: 3,
      title: 'فنادق',
      items: [
        {
          id: 1,
          icon: faPeopleRoof,
          title: 'غرفة عائلية',
          value: 'familyRoom',
        },
        { id: 2, icon: faRestroom, title: 'غرفة مزدوجة', value: 'doubleRoom' },
        { id: 3, icon: faDoorClosed, title: 'خزينة', value: 'safeCase' },
        { id: 4, icon: faBath, title: 'غرفة بحمام', value: 'bathroom' },
        { id: 5, icon: faHouseUser, title: 'تنظيف الغرف', value: 'roomsClean' },
        {
          id: 6,
          icon: faUserTie,
          title: 'تنظيف الملابس',
          value: 'clothesClean',
        },
        { id: 7, icon: faDrumstickBite, title: 'وجبات', value: 'meals' },
        { id: 8, icon: faWineGlass, title: 'بار', value: 'bar' },
        { id: 9, icon: faAirbnb, title: 'مكواة ملابس', value: 'iron' },
        {
          id: 10,
          icon: faHandshake,
          title: 'قاعة اجتماعات',
          value: 'meetingRoom',
        },
      ],
    },
    {
      id: 4,
      title: 'ترفيه',
      items: [
        {
          id: 1,
          icon: faChildReaching,
          title: 'ملاهي أطفال',
          value: 'kidsSwing',
        },
        { id: 2, icon: faCube, title: 'ملاهي للكبار', value: 'gamesPark' },
        { id: 3, icon: faBurger, title: 'المطاعم', value: 'resturant' },
        { id: 4, icon: faMugHot, title: 'المقاهي', value: 'cafe' },
        { id: 5, icon: faSkiing, title: 'التزحلق على الجليد', value: 'ski' },
        { id: 6, icon: faBowlingBall, title: 'صالات بولنج', value: 'bowling' },
        { id: 7, icon: faPadlet, title: 'ملاعب بودل', value: 'padel' },
        { id: 8, icon: faCar, title: 'مضمار للسيارات', value: 'carsRace' },
        { id: 9, icon: faTheaterMasks, title: 'عروض مسرحية', value: 'theater' },
        { id: 10, icon: faUserGroup, title: 'جلسات عامة', value: 'publicArea' },
        { id: 11, icon: faCannabis, title: 'دخول مجاني', value: 'freeEntry' },
      ],
    },
    {
      id: 5,
      title: 'تسوق',
      items: [
        { id: 1, icon: faBowlFood, title: 'الطعام', value: 'foods' },
        {
          id: 2,
          icon: faCannabis,
          title: 'الخضروات والفاكهة',
          value: 'vegitables',
        },
        { id: 3, icon: faHome, title: 'المنزل والمعيشة', value: 'homeparts' },
        { id: 4, icon: faKitchenSet, title: 'المطبخ', value: 'kichenMachiens' },
        {
          id: 5,
          icon: faShoelace,
          title: 'الملابس والأحذية',
          value: 'clothesShoes',
        },
        { id: 6, icon: faLaptop, title: 'الكترونيات', value: 'electronics' },
        {
          id: 7,
          icon: faPersonBreastfeeding,
          title: 'رعاية الأم والطفل',
          value: 'kidsCare',
        },
      ],
    },
    {
      id: 6,
      title: 'طب',
      items: [
        {
          id: 1,
          icon: faClock,
          title: 'مدة انتظار قليلة',
          value: 'watingTime',
        },
        { id: 2, icon: faEarListen, title: 'مستمع جيد', value: 'goodListner' },
        {
          id: 3,
          icon: faVirus,
          title: 'متعدد التخصصات',
          value: 'manyDepartments',
        },
        { id: 4, icon: faPumpMedical, title: 'النظافة', value: 'cleanPlace' },
        {
          id: 5,
          icon: faArrowRotateBack,
          title: 'أجهزة حديثة',
          value: 'smartDevices',
        },
        {
          id: 6,
          icon: faCalendarDays,
          title: 'متاح يومياً',
          value: 'avaliable',
        },
      ],
    },
    {
      id: 7,
      title: 'المساجد',
      items: [
        {
          id: 1,
          icon: faPersonDress,
          title: 'مصلى للنساء',
          value: 'womanMosque',
        },
        { id: 2, icon: faBook, title: 'دار تحفيظ قرآن', value: 'quraan' },
      ],
    },
  ];
  customFilters: any[] = [];
  filterDestinations(event: any) {
    if (!event.target.checked) {
      let customFilters = this.customFilters.filter((item) => {
        return item !== event.target.id;
      });
      this.customFilters = customFilters;
    }
    if (event.target.checked) {
      this.customFilters.push(event.target.id);
    }

    this.mainService
      .getFilteredCityDestinations(
        this.currentCity.id,
        this.currentCategory.id,
        1,
        this.customFilters
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);

          if (res.status == 200) {
            this.errorMessage = null;
            let destinations = res.data.data;

            let handledDestinations = [];
            this.destinations = [];
            for (const destination of destinations) {
              let fullRate = 0;
              let rate = 0;
              for (let comment of destination.comments) {
                rate += Number(comment.rate);
                fullRate += 5;
              }
              if (fullRate !== 0) {
                destination['final_rate'] = (
                  ((rate / fullRate) * 100) /
                  10
                ).toFixed(1);
              } else {
                destination['final_rate'] = 0;
              }
              handledDestinations.push(destination);
            }
            this.destinations = handledDestinations;
            this.paginationInfo = res.data;
          } else {
            this.destinations = null;
            this.errorMessage = 'لا توجد بيانات.';
          }
        },
      });
  }

  // Destinations
  currentCity: any = [];
  currentCategory: any = [];
  destinations: any = undefined;
  errorMessage: null | string = null;
  locationIcon = faLocation;
  @Input() id: string | undefined = undefined;

  // Favorites
  favoritesIDs: any = [];
  favoritesIDsComplete: boolean = false;

  addToFavorites(id: string) {
    this.userService.addToFavorites(id).subscribe({
      next: () => {
        this.favoritesIDsComplete = false;
        this.favoritesIDs.push(id);
        this.favoritesIDsComplete = true;
      },
    });
  }
  removeFromFavorites(id: string) {
    let filteredFavoritesIDs = this.favoritesIDs.filter((item: any) => {
      return item != id;
    });
    this.userService.removeFromFavorites(id).subscribe({
      next: () => {
        this.favoritesIDsComplete = false;

        this.favoritesIDs = filteredFavoritesIDs;
        this.favoritesIDsComplete = true;
      },
    });
  }

  // Pagingation
  paginationInfo: any = undefined;
  isPrev: boolean | undefined = undefined;
  isNext: boolean | undefined = undefined;

  showPage(pageNumber: number) {
    this.mainService
      .getCityDestinations(
        this.currentCity.id,
        this.currentCategory.id,
        pageNumber
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            this.errorMessage = null;
            let destinations = res.data.data;

            let handledDestinations = [];
            for (const destination of destinations) {
              let fullRate = 0;
              let rate = 0;
              for (let comment of destination.comments) {
                rate += Number(comment.rate);
                fullRate += 5;
              }
              if (fullRate !== 0) {
                destination['final_rate'] = (
                  ((rate / fullRate) * 100) /
                  10
                ).toFixed(1);
              } else {
                destination['final_rate'] = 0;
              }
              handledDestinations.push(destination);
            }
            this.destinations = handledDestinations;
            this.paginationInfo = res.data;
          } else {
            this.destinations = null;
            this.errorMessage = 'لا توجد بيانات.';
          }
        },
      });
  }

  ngOnChanges(): void {
    let categories = [];
    let currentCitySlug: string | null = '';

    this.mainService.getCategories().subscribe({
      next: (res: any) => {
        categories = res.data;
        this.currentCategory = res.data.find((cat: any) => {
          return cat.slug == this.id;
        });

        if (typeof window !== 'undefined') {
          currentCitySlug = window.localStorage.getItem('citySlug');
          this.mainService.getAllCities().subscribe({
            next: (res: any) => {
              this.currentCity = res.data.find((city: any) => {
                return city.slug.toLowerCase() == currentCitySlug;
              });

              this.mainService
                .getCityDestinations(
                  this.currentCity.id,
                  this.currentCategory.id,
                  1
                )
                .subscribe({
                  next: (res: any) => {
                    if (res.statusCode == 200) {
                      this.errorMessage = null;
                      let destinations = res.data.data;

                      let handledDestinations = [];
                      for (const destination of destinations) {
                        let fullRate = 0;
                        let rate = 0;
                        for (let comment of destination.comments) {
                          rate += Number(comment.rate);
                          fullRate += 5;
                        }
                        if (fullRate !== 0) {
                          destination['final_rate'] = (
                            ((rate / fullRate) * 100) /
                            10
                          ).toFixed(1);
                        } else {
                          destination['final_rate'] = 0;
                        }
                        handledDestinations.push(destination);
                      }
                      this.destinations = handledDestinations;
                      this.paginationInfo = res.data;
                    } else {
                      this.destinations = null;
                      this.errorMessage = 'لا توجد بيانات.';
                    }
                  },
                });
            },
          });
        }
      },
    });
  }

  ngOnInit(): void {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    // Get user favorites
    if (token) {
      this.userService.getFavorites(token).subscribe({
        next: (res: any) => {
          for (const item of res.data) {
            this.favoritesIDs.push(item.place_id);
          }
        },
        complete: () => {
          this.favoritesIDsComplete = true;
        },
      });
    }
  }
}
