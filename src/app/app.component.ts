import { isNgTemplate } from '@angular/compiler';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  BehaviorSubject,
  filter,
  flatMap,
  from,
  interval,
  map,
  Observable,
  observable,
  Subject,
  subscribeOn,
  Subscriber,
  Subscription,
  switchMap,
  take,
  tap,
  timer,
  toArray,
} from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ObserverserviceService } from './observerservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  data: {}[];
  questions: string[];
  answers: [];
  index = 0;
  correct = 0;
  show: boolean = true;

  constructor(private serv: ObserverserviceService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.serv
      .getHeroes()
      .pipe(
        tap((val) => {
          this.data = val;
          this.questions = val.map((item) => {
            return item.question;
          });
          this.answers = val.map((item) => {
            return [...item.incorrect_answers, item.correct_answer].sort(
              () => Math.random() - 0.5
            );
          });
        })
      )
      .subscribe();
  }
  checkanswers(answer, answers) {
    if (answer.classList.contains('correct')) {
      this.correct++;
    }
    setTimeout(() => {
      this.index += 1;
      if (this.index < this.data.length - 1) {
      } else this.show = false;
    }, 1000);
  }
}
