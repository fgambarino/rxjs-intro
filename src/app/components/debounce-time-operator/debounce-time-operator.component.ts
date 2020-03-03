import { Component, OnInit } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import {
  debounceTime,
  take,
  delay,
  concatAll,
  map,
  exhaust
} from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time-operator',
  templateUrl: './debounce-time-operator.component.html',
  styleUrls: ['./debounce-time-operator.component.scss']
})
export class DebounceTimeOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(600).pipe(
      take(3),
      map(i => interval(i * 600).pipe(delay(i * 400), take(3))),
      concatAll()
    );
    this.newObservable$ = this.sourceObservable$.pipe(debounceTime(800));
  }
}
