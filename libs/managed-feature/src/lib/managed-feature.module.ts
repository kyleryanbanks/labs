import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementSystemModule } from '@labs/content-management-system';

import { ManagedFeatureRoutingModule } from './managed-feature.routing';
import { ManagedFeatureComponent } from './managed-feature.component';

@NgModule({
  declarations: [ManagedFeatureComponent],
  imports: [
    CommonModule,
    ManagedFeatureRoutingModule,
    ContentManagementSystemModule,
  ],
})
export class ManagedFeatureModule {}
