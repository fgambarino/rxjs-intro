import { Component, OnInit } from '@angular/core';
import { Observable, interval, throwError, concat, EMPTY, of } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';

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
    this.sourceObservable$ = interval(2000);
    this.newObservable$ = concat(
      this.sourceObservable$.pipe(take(3)),
      throwError(new Error('error thrown!'))
    ).pipe(
      catchError(error => {
        this.output.push(`catched: ${error.message}`);
        return EMPTY;
      }),
      finalize(() => this.output.push('finalize: I run no matter what'))
    );
  }
}
