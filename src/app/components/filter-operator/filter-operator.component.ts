import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {
  sourceObservable$: Observable<any>;
  newObservable$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.sourceObservable$ = interval(2000);
    this.newObservable$ = this.sourceObservable$.pipe(filter(i => i % 2 > 0));
  }
}
