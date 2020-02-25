import { switchMap, tap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-show-obs-marbles',
  templateUrl: './show-obs-marbles.component.html',
  styleUrls: ['./show-obs-marbles.component.scss']
})
export class ShowObsMarblesComponent implements OnInit {
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
        this.observableInput
          .pipe(
            switchMap((x: any) => {
              this.events.push(x);
              return interval(200).pipe(tap(() => this.events.push('.')));
            })
          )
          .subscribe(
            x => {},
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
