import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent, interval, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-observable',
  templateUrl: './create-observable.component.html',
  styleUrls: ['./create-observable.component.scss'],
})
export class CreateObservableComponent implements OnInit {
  ofObservable$: Observable<any>;
  clickObservable$: Observable<any>;
  httpObservable$: Observable<any>;
  intervalObservable$: Observable<any>;
  timerObservable$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.ofObservable$ = of(
      1,
      2,
      3,
      4,
      [1, 2, 3],
      `Hey mom, look I'm on TV`
    ).pipe(delay(2000));

    this.clickObservable$ = fromEvent(document, 'click').pipe(
      map((click) => JSON.stringify(click))
    );

    this.httpObservable$ = this.http
      .get('assets/http-response.json')
      .pipe(map((response) => JSON.stringify(response).split(',').join(', ')));

    this.intervalObservable$ = interval(3000);

    this.timerObservable$ = timer(1000, 4000);
  }
}
