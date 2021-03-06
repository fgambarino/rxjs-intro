import { Component, OnInit } from '@angular/core';
import { Observable, interval, from } from 'rxjs';
import { switchMap, map, take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.scss'],
})
export class SwitchMapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(1400).pipe(
      take(4),
      map((i) => i.toString())
    );
    this.sourceObservable2$ = interval(600).pipe(
      take(5),
      map((i) => 'ABCDE'[i])
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      switchMap((outer) =>
        this.sourceObservable2$.pipe(map((inner) => outer + inner))
      )
    );
  }
}
