import { Component, OnInit } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

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
    this.sourceObservable$ = fromEvent(document, 'click').pipe(
      map(() => 'click!')
    );
    this.newObservable$ = this.sourceObservable$.pipe(
      debounceTime(500),
      map(() => 'click debounced!')
    );
  }
}
