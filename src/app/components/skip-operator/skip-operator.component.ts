import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

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
    this.sourceObservable$ = interval(2000).pipe(take(5));
    this.newObservable$ = this.sourceObservable$.pipe(skip(2));
  }
}
