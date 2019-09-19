import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss']
})
export class CombineLatestOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(map(x => `${x}a`));
    this.sourceObservable2$ = interval(3000).pipe(map(x => `${x}b`));
    this.newObservable$ = combineLatest(
      this.sourceObservable$,
      this.sourceObservable2$
    );
  }
}
