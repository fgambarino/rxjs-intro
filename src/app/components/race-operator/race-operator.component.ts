import { Component, OnInit } from '@angular/core';
import { Observable, interval, race } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';

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
    this.sourceObservable$ = interval(2000).pipe(
      map(x => x),
      take(5)
    );
    this.sourceObservable2$ = interval(1000).pipe(
      delay(1500),
      map(x => 10 + x),
      take(5)
    );
    this.newObservable$ = race(this.sourceObservable$, this.sourceObservable2$);
  }
}
