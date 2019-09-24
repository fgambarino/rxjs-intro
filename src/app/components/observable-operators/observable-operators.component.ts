import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  styleUrls: ['./observable-operators.component.scss']
})
export class ObservableOperatorsComponent implements OnInit {
  operatorPages = [
    { url: 'tap-operator', name: 'Tap operator' },
    { url: 'map-operator', name: 'Map operator' },
    { url: 'delay-operator', name: 'Delay operator' },
    { url: 'take-operator', name: 'Take operator' },
    { url: 'skip-operator', name: 'Skip operator' },
    { url: 'debounce-time-operator', name: 'DebounceTime operator️' },
    { url: 'filter-operator', name: 'Filter operator' },
    { url: 'first-operator', name: 'First operator️' },
    { url: 'switch-map-operator', name: 'SwitchMap operator' },
    { url: 'merge-map-operator', name: 'MergeMap operator' },
    { url: 'combine-latest-operator', name: 'CombineLatest operator' },
    { url: 'zip-operator', name: 'Zip operator' },
    { url: 'race-operator', name: 'Race operator' },
    { url: 'fork-join-operator', name: 'ForkJoin operator' },
    { url: 'catch-error-operator', name: 'CatchError operator' }
  ];

  constructor() {}

  ngOnInit() {}
}
