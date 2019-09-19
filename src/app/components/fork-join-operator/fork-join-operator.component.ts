import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.scss']
})
export class ForkJoinOperatorComponent implements OnInit {
  subject1: Subject<any>;
  subject2: Subject<any>;
  newObservable$: Observable<any>;

  lastGeneratedValues = { 0: '', 1: '' };
  constructor() {}

  ngOnInit() {
    this.subject1 = new Subject();
    this.subject2 = new Subject();
    this.newObservable$ = forkJoin([this.subject1, this.subject2]);
  }

  nextOn(subject: Subject<any>, key: number) {
    const value = Math.trunc(Math.random() * 1000);
    this.lastGeneratedValues = { ...this.lastGeneratedValues, [key]: value };
    subject.next(value);
  }

  completeOn(subject: Subject<any>) {
    subject.complete();
  }
}
