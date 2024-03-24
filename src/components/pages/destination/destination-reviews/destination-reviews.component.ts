import { Component, Input } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { QaComponent } from './qa/qa.component';

@Component({
  selector: 'app-destination-reviews',
  standalone: true,
  imports: [CommentsComponent, QaComponent],
  templateUrl: './destination-reviews.component.html',
  styleUrl: './destination-reviews.component.scss',
})
export class DestinationReviewsComponent {
  @Input() comments = [];
  @Input() questions = [];
  @Input() destinationID: string | null = null;

  items = [
    { id: 1, title: 'التعليقات' },
    { id: 2, title: 'سؤال وجواب' },
  ];
  activeTab: string = 'التعليقات';

  setActiveTab(tabTitle: string) {
    this.activeTab = tabTitle;
  }
}
