import { Component, OnInit } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  Observable
} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subject: Subject<any>;
  behaviorSubject: BehaviorSubject<any>;
  replaySubject: ReplaySubject<any>;
  asyncSubject: AsyncSubject<any>;

  lastGeneratedValues = { 0: '', 1: '', 2: '', 3: '' };

  newSubscription = { 0: false, 1: false, 2: false, 3: false };

  constructor() {}

  ngOnInit() {
    this.subject = new Subject();
    this.behaviorSubject = new BehaviorSubject('FIRST VALUE');
    this.replaySubject = new ReplaySubject(3);
    this.asyncSubject = new AsyncSubject();
  }

  nextOn(
    subject:
      | Subject<any>
      | BehaviorSubject<any>
      | ReplaySubject<any>
      | AsyncSubject<any>,
    key: number
  ) {
    const value = Math.trunc(Math.random() * 1000);
    this.lastGeneratedValues = { ...this.lastGeneratedValues, [key]: value };
    subject.next(value);
  }

  completeOn(
    subject:
      | Subject<any>
      | BehaviorSubject<any>
      | ReplaySubject<any>
      | AsyncSubject<any>
  ) {
    subject.complete();
  }

  createNewSubscription(key: number) {
    this.newSubscription = { ...this.newSubscription, [key]: true };
  }
}
