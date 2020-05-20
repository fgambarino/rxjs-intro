import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.scss'],
})
export class ExhaustMapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(1400).pipe(
      take(5),
      map((i) => i.toString())
    );
    this.sourceObservable2$ = interval(1800).pipe(
      take(3),
      map((i) => 'ABC'[i])
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      exhaustMap((outer) =>
        this.sourceObservable2$.pipe(map((inner) => inner + outer))
      )
    );
  }
}
