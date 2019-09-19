import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-show-observable',
  templateUrl: './show-observable.component.html',
  styleUrls: ['./show-observable.component.scss']
})
export class ShowObservableComponent implements OnInit, OnDestroy {
  events: any[] = [];
  completed: boolean;
  @Input() title: string;
  @Input() observableInput: Observable<any>;
  @Input() color: string;

  subscription: Subscription;
  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    if (!!this.observableInput) {
      this.subscription.add(
        this.observableInput.subscribe(
          x => this.events.push(x),
          err => console.log(err),
          () => (this.completed = true)
        )
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
