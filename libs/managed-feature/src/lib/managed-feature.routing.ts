import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentResolver } from '@labs/content-management-system';

import { ManagedFeatureComponent } from './managed-feature.component';

const routes: Routes = [
  {
    path: '',
    component: ManagedFeatureComponent,
    canActivate: [ContentResolver],
    data: {
      endpoints: [
        'navigation?type=public-footer-nav',
        'navigation?type=public-header-nav',
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagedFeatureRoutingModule {}
