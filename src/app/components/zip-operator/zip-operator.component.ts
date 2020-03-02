import { Component, OnInit } from '@angular/core';
import { Observable, interval, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-operator',
  templateUrl: './zip-operator.component.html',
  styleUrls: ['./zip-operator.component.scss']
})
export class ZipOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  showMarbleDiagram = true;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(
      map(x => x),
      take(5)
    );
    this.sourceObservable2$ = interval(3000).pipe(
      map(x => 10 + x),
      take(4)
    );
    this.newObservable$ = zip(this.sourceObservable$, this.sourceObservable2$);
  }
}
