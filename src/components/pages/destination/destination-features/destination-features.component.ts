import { Component, Input } from '@angular/core';
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
} from '@fortawesome/free-solid-svg-icons';
import {
  faAirbnb,
  faPadlet,
  faShoelace,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-destination-features',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './destination-features.component.html',
  styleUrl: './destination-features.component.scss',
})
export class DestinationFeaturesComponent {
  @Input() destination: any = [];
  filters = [
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
    {
      id: 12,
      icon: faMartiniGlass,
      title: 'مشروبات باردة',
      value: 'coldDrinks',
    },
    { id: 13, icon: faMugHot, title: 'مشروبات ساخنة', value: 'hotDrinks' },
    { id: 14, icon: faIceCream, title: 'حلوي', value: 'sweets' },
    { id: 15, icon: faBurger, title: 'وجبات سريعة', value: 'takeaway' },
    {
      id: 16,
      icon: faPeopleRoof,
      title: 'غرفة عائلية',
      value: 'familyRoom',
    },
    { id: 17, icon: faRestroom, title: 'غرفة مزدوجة', value: 'doubleRoom' },
    { id: 18, icon: faDoorClosed, title: 'خزينة', value: 'safeCase' },
    { id: 19, icon: faBath, title: 'غرفة بحمام', value: 'bathroom' },
    {
      id: 20,
      icon: faHouseUser,
      title: 'تنظيف الغرف',
      value: 'roomsClean',
    },
    {
      id: 21,
      icon: faUserTie,
      title: 'تنظيف الملابس',
      value: 'clothesClean',
    },
    { id: 22, icon: faDrumstickBite, title: 'وجبات', value: 'meals' },
    { id: 23, icon: faWineGlass, title: 'بار', value: 'bar' },
    { id: 24, icon: faAirbnb, title: 'مكواة ملابس', value: 'iron' },
    {
      id: 25,
      icon: faHandshake,
      title: 'قاعة اجتماعات',
      value: 'meetingRoom',
    },
    {
      id: 26,
      icon: faChildReaching,
      title: 'ملاهي أطفال',
      value: 'kidsSwing',
    },
    { id: 27, icon: faCube, title: 'ملاهي للكبار', value: 'gamesPark' },
    { id: 28, icon: faBurger, title: 'المطاعم', value: 'resturant' },
    { id: 29, icon: faMugHot, title: 'المقاهي', value: 'cafe' },
    { id: 30, icon: faSkiing, title: 'التزحلق على الجليد', value: 'ski' },
    { id: 31, icon: faBowlingBall, title: 'صالات بولنج', value: 'bowling' },
    { id: 32, icon: faPadlet, title: 'ملاعب بودل', value: 'padel' },
    { id: 33, icon: faCar, title: 'مضمار للسيارات', value: 'carsRace' },
    {
      id: 34,
      icon: faTheaterMasks,
      title: 'عروض مسرحية',
      value: 'theater',
    },
    { id: 35, icon: faUserGroup, title: 'جلسات عامة', value: 'publicArea' },
    { id: 36, icon: faCannabis, title: 'دخول مجاني', value: 'freeEntry' },
    { id: 37, icon: faBowlFood, title: 'الطعام', value: 'foods' },
    {
      id: 38,
      icon: faCannabis,
      title: 'الخضروات والفاكهة',
      value: 'vegitables',
    },
    { id: 39, icon: faHome, title: 'المنزل والمعيشة', value: 'homeparts' },
    {
      id: 40,
      icon: faKitchenSet,
      title: 'المطبخ',
      value: 'kichenMachiens',
    },
    {
      id: 41,
      icon: faShoelace,
      title: 'الملابس والأحذية',
      value: 'clothesShoes',
    },
    { id: 42, icon: faLaptop, title: 'الكترونيات', value: 'electronics' },
    {
      id: 43,
      icon: faPersonBreastfeeding,
      title: 'رعاية الأم والطفل',
      value: 'kidsCare',
    },
    { id: 44, icon: faBowlFood, title: 'الطعام', value: 'foods' },
    {
      id: 45,
      icon: faCannabis,
      title: 'الخضروات والفاكهة',
      value: 'vegitables',
    },
    { id: 46, icon: faHome, title: 'المنزل والمعيشة', value: 'homeparts' },
    {
      id: 47,
      icon: faKitchenSet,
      title: 'المطبخ',
      value: 'kichenMachiens',
    },
    {
      id: 48,
      icon: faShoelace,
      title: 'الملابس والأحذية',
      value: 'clothesShoes',
    },
    { id: 49, icon: faLaptop, title: 'الكترونيات', value: 'electronics' },
    {
      id: 50,
      icon: faPersonBreastfeeding,
      title: 'رعاية الأم والطفل',
      value: 'kidsCare',
    },
    {
      id: 51,
      icon: faClock,
      title: 'مدة انتظار قليلة',
      value: 'watingTime',
    },
    { id: 52, icon: faEarListen, title: 'مستمع جيد', value: 'goodListner' },
    {
      id: 53,
      icon: faVirus,
      title: 'متعدد التخصصات',
      value: 'manyDepartments',
    },
    { id: 54, icon: faPumpMedical, title: 'النظافة', value: 'cleanPlace' },
    {
      id: 55,
      icon: faArrowRotateBack,
      title: 'أجهزة حديثة',
      value: 'smartDevices',
    },
    {
      id: 56,
      icon: faCalendarDays,
      title: 'متاح يومياً',
      value: 'avaliable',
    },
    {
      id: 57,
      icon: faPersonDress,
      title: 'مصلى للنساء',
      value: 'womanMosque',
    },
    { id: 58, icon: faBook, title: 'دار تحفيظ قرآن', value: 'quraan' },
  ];
}
