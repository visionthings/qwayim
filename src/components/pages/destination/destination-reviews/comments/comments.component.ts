import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { UserService } from '../../../../../services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private mainService: MainService,
    private fb: FormBuilder
  ) {}

  icons = {
    star: faStar,
    regularStar: regularStar,
  };

  comments: any[] = [];
  @Input() destinationID: string | null = null;

  isAuthenticated: undefined | boolean = undefined;

  handledComments: any = [];
  shownCommentsNumber: number = 4;
  showMoreComments() {
    this.shownCommentsNumber += 4;
  }
  rate: number = 5;
  stars: number[] = [1, 2, 3, 4, 5];
  updateRate(star: number) {
    this.rate = star;
  }

  // Comment Form
  commentForm = this.fb.group({
    content: ['', Validators.required],
  });

  get content() {
    return this.commentForm.controls['content'];
  }

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submitComment() {
    this.commentForm.markAllAsTouched();
    let data = {
      content: this.commentForm.controls.content.value,
      rate: this.rate,
      place_id: this.destinationID,
    };

    this.userService.addComment(data).subscribe({
      next: (res: any) => {
        const comment = res.data.comment;
        let commentData = {
          username: comment.username,
          profile_pic: comment.profile_pic,
          comment: comment.content,
          date: comment.created_at.slice(0, 10),
          time: comment.created_at.slice(11, 16),
          rate: comment.rate,
        };

        this.handledComments.unshift(commentData);
        this.commentForm.reset();
        this.successMessage = 'تم إضافة التعليق بنجاح.';
        setTimeout(() => {
          this.successMessage = null;
        }, 5000);
      },
      error: (err) => {
        this.errorMessage = 'تعذر إضافة التعليق في الوقت الحالي.';
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      },
    });
  }

  ngOnInit(): void {
    // Check if user authenticated
    if (typeof window !== 'undefined') {
      localStorage.getItem('token')
        ? (this.isAuthenticated = true)
        : (this.isAuthenticated = false);
    }

    // Comments
    this.mainService.getDestinationComments(this.destinationID).subscribe({
      next: (res: any) => {
        this.comments = res.comments;
      },
      complete: () => {
        for (const comment of this.comments.reverse()) {
          let commentData = {
            username: comment.username,
            profile_pic: comment.profile_pic,
            comment: comment.content,
            date: comment.created_at.slice(0, 10),
            time: comment.created_at.slice(11, 16),
            rate: comment.rate,
          };
          this.handledComments.push(commentData);
        }
      },
    });
  }
}
