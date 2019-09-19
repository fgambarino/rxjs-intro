import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'RxJs Intro';

  routes = [
    { name: 'Create Observables', url: 'create-observables' },
    { name: 'Subjects', url: 'subjects' },
    { name: 'Observable Operators', url: 'observable-operators' }
  ];

  constructor(private router: Router) {}
}
