import { FirstOperatorComponent } from './components/first-operator/first-operator.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { ForkJoinOperatorComponent } from './components/fork-join-operator/fork-join-operator.component';
import { ZipOperatorComponent } from './components/zip-operator/zip-operator.component';
import { CombineLatestOperatorComponent } from './components/combine-latest-operator/combine-latest-operator.component';
import { SwitchMapOperatorComponent } from './components/switch-map-operator/switch-map-operator.component';
import { DebounceTimeOperatorComponent } from './components/debounce-time-operator/debounce-time-operator.component';
import { DelayOperatorComponent } from './components/delay-operator/delay-operator.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CreateObservableComponent } from './components/create-observable/create-observable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableOperatorsComponent } from './components/observable-operators/observable-operators.component';
import { MergeMapOperatorComponent } from './components/merge-map-operator/merge-map-operator.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { SkipOperatorComponent } from './components/skip-operator/skip-operator.component';
import { RaceOperatorComponent } from './components/race-operator/race-operator.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-observables', pathMatch: 'full' },
  { path: 'create-observables', component: CreateObservableComponent },
  { path: 'subjects', component: SubjectsComponent },
  {
    path: 'observable-operators',
    component: ObservableOperatorsComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapOperatorComponent },
      { path: 'delay', component: DelayOperatorComponent },
      { path: 'debounce-time', component: DebounceTimeOperatorComponent },
      { path: 'switch-map', component: SwitchMapOperatorComponent },
      { path: 'merge-map', component: MergeMapOperatorComponent },
      { path: 'take-operator', component: TakeOperatorComponent },
      { path: 'skip-operator', component: SkipOperatorComponent },
      {
        path: 'combine-latest-operator',
        component: CombineLatestOperatorComponent
      },
      { path: 'zip-operator', component: ZipOperatorComponent },
      { path: 'race-operator', component: RaceOperatorComponent },
      { path: 'fork-join-operator', component: ForkJoinOperatorComponent },
      { path: 'filter-operator', component: FilterOperatorComponent },
      { path: 'first-operator', component: FirstOperatorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}