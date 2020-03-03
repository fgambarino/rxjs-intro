import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  currentValue = '';

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(
      take(5),
      tap(i => (this.currentValue = i))
    );
  }
}
