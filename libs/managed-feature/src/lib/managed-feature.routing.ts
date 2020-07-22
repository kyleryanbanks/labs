import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagedFeatureComponent } from './managed-feature.component';

const routes: Routes = [
  {
    path: '',
    component: ManagedFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagedFeatureRoutingModule {}
