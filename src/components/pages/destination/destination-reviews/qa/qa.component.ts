import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from '../../../../../services/main.service';

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './qa.component.html',
  styleUrl: './qa.component.scss',
})
export class QaComponent implements OnInit {
  constructor(
    private userService: UserService,
    private mainService: MainService,
    private fb: FormBuilder
  ) {}

  @Input() destinationID: string | null = null;
  questions: any = [];

  isAuthenticated: undefined | boolean = undefined;

  handledQuestions: any = [];
  shownQuestionsNumber: number = 4;
  shownAnswersNumber: number = 4;

  showMoreQuestions() {
    this.shownQuestionsNumber += 4;
  }
  showMoreAnswers() {
    this.shownAnswersNumber += 4;
  }

  // Answer Form

  answerForm = this.fb.group({
    answer: ['', Validators.required],
  });

  get answer() {
    return this.answerForm.controls['answer'];
  }

  successMessage: string | null = null;
  errorMessage: string | null = null;

  addAnswer(questionID: string) {
    this.answerForm.markAllAsTouched();
    let data = {
      answer: this.answerForm.controls.answer.value,
      question_id: questionID,
    };

    this.userService.addAnswer(data).subscribe({
      next: (res: any) => {
        const answer = res.data.answer;
        let answerData = {
          username: answer.username,
          profile_pic: answer.profile_pic,
          answer: answer.answer,
          date: answer.created_at.slice(0, 10),
          time: answer.created_at.slice(11, 16),
        };

        let question = this.handledQuestions.find((question: any) => {
          return question.id == answer.question_id;
        });
        question.answers.unshift(answerData);
        this.answerForm.reset();
        this.successMessage = 'تم إضافة الإجابة بنجاح.';
        setTimeout(() => {
          this.successMessage = null;
        }, 5000);
      },
      error: (err) => {
        this.errorMessage = 'تعذر إضافة الإجابة في الوقت الحالي.';
        setTimeout(() => {
          this.errorMessage = null;
        }, 5000);
      },
    });
  }

  // Question Form
  questionForm = this.fb.group({
    question: ['', Validators.required],
  });

  get question() {
    return this.questionForm.controls['question'];
  }

  questionSuccessMessage: string | null = null;
  questionErrorMessage: string | null = null;

  submitQuestion() {
    this.questionForm.markAllAsTouched();
    let data = {
      question: this.questionForm.controls.question.value,
      place_id: this.destinationID,
    };
    this.userService.addQuestion(data).subscribe({
      next: (res: any) => {
        const question = res.data.question;
        let questionData: any = {
          username: question.username,
          profile_pic: question.profile_pic,
          question: question.question,
          id: question.id,
          date: question.created_at.slice(0, 10),
          time: question.created_at.slice(11, 16),
        };
        this.handledQuestions.unshift(questionData);
        this.questionForm.reset();
        this.questionSuccessMessage = 'تم إضافة السؤال بنجاح.';
        setTimeout(() => {
          this.questionSuccessMessage = null;
        }, 5000);
      },
      error: (err) => {
        this.questionErrorMessage = 'تعذر إضافة السؤال في الوقت الحالي.';
        setTimeout(() => {
          this.questionErrorMessage = null;
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

    // Handle questions
    this.mainService.getDestinationQuestions(this.destinationID).subscribe({
      next: (res: any) => {
        this.questions = res.questions;
      },
      complete: () => {
        for (const question of this.questions.reverse()) {
          let questionData: any = {
            username: question.username,
            profile_pic: question.profile_pic,
            question: question.question,
            id: question.id,
            date: question.created_at.slice(0, 10),
            time: question.created_at.slice(11, 16),
          };
          let answers: any = [];
          for (const answer of question.answers.reverse()) {
            let answerData = {
              username: answer.username,
              profile_pic: answer.profile_pic,
              answer: answer.answer,
              date: answer.created_at.slice(0, 10),
              time: answer.created_at.slice(11, 16),
            };
            answers.push(answerData);
          }
          questionData.answers = answers;
          this.handledQuestions.push(questionData);
        }
      },
    });
  }
}
