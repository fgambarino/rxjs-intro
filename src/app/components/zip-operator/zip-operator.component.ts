import { Component, OnInit } from '@angular/core';
import { Observable, interval, combineLatest, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zip-operator',
  templateUrl: './zip-operator.component.html',
  styleUrls: ['./zip-operator.component.scss']
})
export class ZipOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  sourceObservable2$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000).pipe(map(x => `${x}a`));
    this.sourceObservable2$ = interval(3000).pipe(map(x => `${x}b`));
    this.newObservable$ = zip(this.sourceObservable$, this.sourceObservable2$);
  }
}
