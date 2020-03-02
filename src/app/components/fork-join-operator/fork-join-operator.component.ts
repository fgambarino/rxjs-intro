import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, Observable, interval, race } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.scss']
})
export class ForkJoinOperatorComponent implements OnInit {
  newObservable$: Observable<any>;
  sourceObservable$: any;
  sourceObservable2$: any;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(
      map(x => x),
      take(3)
    );
    this.sourceObservable2$ = interval(1000).pipe(
      map(x => 10 + x),
      take(3)
    );

    this.newObservable$ = forkJoin([
      this.sourceObservable$,
      this.sourceObservable2$
    ]);
  }
}
