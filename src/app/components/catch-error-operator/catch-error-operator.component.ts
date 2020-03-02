import { Component, OnInit } from '@angular/core';
import { Observable, interval, throwError, concat, EMPTY, of } from 'rxjs';
import { catchError, finalize, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error-operator',
  templateUrl: './catch-error-operator.component.html',
  styleUrls: ['./catch-error-operator.component.scss']
})
export class CatchErrorOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  output = [];

  ngOnInit() {
    this.sourceObservable$ = concat(
      interval(2000).pipe(take(3)),
      throwError(new Error('error thrown!'))
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      catchError(error => {
        return interval(2000).pipe(
          take(2),
          map(i => i + 10)
        );
      })
    );
  }
}
