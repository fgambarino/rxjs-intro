import { Component, OnInit } from '@angular/core';
import { Observable, interval, race } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-race-operator',
  templateUrl: './race-operator.component.html',
  styleUrls: ['./race-operator.component.scss']
})
export class RaceOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(map(x => `${x}a`));
    this.sourceObservable2$ = interval(3000).pipe(map(x => `${x}b`));
    this.newObservable$ = race(this.sourceObservable$, this.sourceObservable2$);
  }
}