import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-delay-operator',
  templateUrl: './delay-operator.component.html',
  styleUrls: ['./delay-operator.component.scss']
})
export class DelayOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;
  showMarbleDiagram = false;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(take(6));
    this.newObservable$ = this.sourceObservable$.pipe(delay(1000));
  }

  changeView() {
    this.showMarbleDiagram = !this.showMarbleDiagram;
  }
}
