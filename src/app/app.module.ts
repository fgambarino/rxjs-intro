import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowObservableComponent } from './components/show-observable/show-observable.component';
import { CreateObservableComponent } from './components/create-observable/create-observable.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ObservableOperatorsComponent } from './components/observable-operators/observable-operators.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { DelayOperatorComponent } from './components/delay-operator/delay-operator.component';
import { DebounceTimeOperatorComponent } from './components/debounce-time-operator/debounce-time-operator.component';
import { SwitchMapOperatorComponent } from './components/switch-map-operator/switch-map-operator.component';
import { MergeMapOperatorComponent } from './components/merge-map-operator/merge-map-operator.component';
import { FirstOperatorComponent } from './components/first-operator/first-operator.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { SkipOperatorComponent } from './components/skip-operator/skip-operator.component';
import { CombineLatestOperatorComponent } from './components/combine-latest-operator/combine-latest-operator.component';
import { ZipOperatorComponent } from './components/zip-operator/zip-operator.component';
import { RaceOperatorComponent } from './components/race-operator/race-operator.component';
import { ForkJoinOperatorComponent } from './components/fork-join-operator/fork-join-operator.component';
import { HomeComponent } from './components/home/home.component';
import { CatchErrorOperatorComponent } from './components/catch-error-operator/catch-error-operator.component';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';
import { ShowObsMarblesComponent } from './components/show-obs-marbles/show-obs-marbles.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowObservableComponent,
    CreateObservableComponent,
    SubjectsComponent,
    ObservableOperatorsComponent,
    MapOperatorComponent,
    DelayOperatorComponent,
    DebounceTimeOperatorComponent,
    SwitchMapOperatorComponent,
    MergeMapOperatorComponent,
    FirstOperatorComponent,
    TakeOperatorComponent,
    FilterOperatorComponent,
    SkipOperatorComponent,
    CombineLatestOperatorComponent,
    ZipOperatorComponent,
    RaceOperatorComponent,
    ForkJoinOperatorComponent,
    HomeComponent,
    CatchErrorOperatorComponent,
    TapOperatorComponent,
    ShowObsMarblesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
