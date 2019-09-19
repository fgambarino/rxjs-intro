import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.scss']
})
export class SkipOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000);
    this.newObservable$ = this.sourceObservable$.pipe(skip(5));
  }
}
