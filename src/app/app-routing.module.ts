import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationsFormComponent } from './components/operations-form/operations-form.component';
import { OperationsListComponent } from './components/operations-list/operations-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/operations-list',
    pathMatch: 'full',
  },
  { path: 'operations-list', component: OperationsListComponent },
  { path: 'operation/add', component: OperationsFormComponent },
  { path: 'operation/edit/:id', component: OperationsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
