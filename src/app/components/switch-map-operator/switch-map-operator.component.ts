import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.scss']
})
export class SwitchMapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(8000).pipe(map(x => `${x}(observable)`));
    this.sourceObservable2$ = interval(2000).pipe(
      map(x => `${x}(inner observable)`)
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      switchMap(_ => this.sourceObservable2$)
    );
  }
}
