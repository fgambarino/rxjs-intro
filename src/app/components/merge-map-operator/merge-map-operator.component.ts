import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss'],
})
export class MergeMapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(1400).pipe(
      take(3),
      map((i) => i.toString())
    );
    this.sourceObservable2$ = interval(1800).pipe(
      take(3),
      map((i) => 'ABC'[i])
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      mergeMap((outer) =>
        this.sourceObservable2$.pipe(map((inner) => inner + outer))
      )
    );
  }
}
