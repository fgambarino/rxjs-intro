import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap-observable',
  templateUrl: './concat-map-observable.component.html',
  styleUrls: ['./concat-map-observable.component.scss'],
})
export class ConcatmapObservableComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(1400).pipe(
      take(2),
      map((i) => i + 10)
    );
    this.sourceObservable2$ = interval(1800).pipe(
      take(3),
      map((i) => i + 1)
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      concatMap((outer) =>
        this.sourceObservable2$.pipe(map((inner) => inner * outer))
      )
    );
  }
}
