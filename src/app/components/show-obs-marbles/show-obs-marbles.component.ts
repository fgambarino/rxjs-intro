import { switchMap, tap, takeUntil, take } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  interval,
  concat,
  Subject,
  fromEvent
} from 'rxjs';

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

  completed$ = new Subject<boolean>();

  subscription: Subscription;
  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    if (!!this.observableInput) {
      this.subscription.add(
        this.observableInput.subscribe({
          complete: () => {
            console.log('completed');
            this.completed = true;
            this.completed$.next(true);
            this.completed$.complete();
          }
        })
      );
      this.subscription.add(
        interval(200)
          .pipe(
            takeUntil(this.observableInput),
            tap(() => this.events.push('.'))
          )
          .subscribe()
      );
      this.subscription.add(
        this.observableInput
          .pipe(
            switchMap((x: any) => {
              this.events.push(x);
              return interval(200).pipe(
                take(15),
                tap(() => this.events.push('.'))
              );
            })
          )
          .subscribe()
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.completed$.unsubscribe();
  }
}
