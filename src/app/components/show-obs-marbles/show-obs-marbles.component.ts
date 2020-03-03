import { switchMap, tap, takeUntil, catchError } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-show-obs-marbles',
  templateUrl: './show-obs-marbles.component.html',
  styleUrls: ['./show-obs-marbles.component.scss']
})
export class ShowObsMarblesComponent implements OnInit, OnDestroy {
  events: any[] = [];
  completed: boolean;
  error: boolean;
  @Input() title: string;
  @Input() observableInput: Observable<any>;
  @Input() color: string;

  subscription: Subscription;
  waitingContent = '-';
  completeSubject: Subject<void> = new Subject();
  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    if (!!this.observableInput) {
      this.subscription.add(
        this.observableInput.subscribe({
          complete: () => {
            this.completed = true;
            this.completeSubject.next();
          }
        })
      );
      this.subscription.add(
        interval(200)
          .pipe(
            takeUntil(this.completeSubject),
            tap(() => this.events.push(this.waitingContent))
          )
          .subscribe()
      );
      this.subscription.add(
        this.observableInput
          .pipe(
            tap((x: any) => this.events.push(x)),
            catchError(() => {
              this.error = true;
              this.completeSubject.next();
              return EMPTY;
            })
          )
          .subscribe()
      );
    }
  }

  IsArray(obj: any) {
    return Array.isArray(obj);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.completeSubject.complete();
  }
}
