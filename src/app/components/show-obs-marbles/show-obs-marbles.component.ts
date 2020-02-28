import { switchMap, tap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, EMPTY } from 'rxjs';

@Component({
  selector: 'app-show-obs-marbles',
  templateUrl: './show-obs-marbles.component.html',
  styleUrls: ['./show-obs-marbles.component.scss']
})
export class ShowObsMarblesComponent implements OnInit, OnDestroy {
  events: any[] = [];
  completed: boolean;
  @Input() title: string;
  @Input() observableInput: Observable<any>;
  @Input() color: string;

  subscription: Subscription;
  waitingContent = '-';
  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    if (!!this.observableInput) {
      this.subscription.add(
        this.observableInput.subscribe({
          complete: () => {
            this.completed = true;
          }
        })
      );
      this.subscription.add(
        interval(200)
          .pipe(
            takeUntil(this.observableInput),
            tap(() => this.events.push(this.waitingContent))
          )
          .subscribe()
      );
      this.subscription.add(
        this.observableInput
          .pipe(
            switchMap((x: any) => {
              this.events.push(x);
              return this.completed
                ? EMPTY
                : interval(200).pipe(
                    tap(() => this.events.push(this.waitingContent))
                  );
            })
          )
          .subscribe()
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
