import { Component, OnInit } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss']
})
export class MergeMapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = of(1, 2, 3, 4, 5);
    this.sourceObservable2$ = interval(3000);
    this.newObservable$ = this.sourceObservable$.pipe(
      mergeMap(value =>
        this.sourceObservable2$.pipe(
          map(value2 => `${value}(obs) ${value2}(inner obs)`)
        )
      )
    );
  }
}
