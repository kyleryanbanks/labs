import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagedFeatureRoutingModule } from './managed-feature.routing';
import { ManagedFeatureComponent } from './managed-feature.component';

@NgModule({
  declarations: [ManagedFeatureComponent],
  imports: [CommonModule, ManagedFeatureRoutingModule],
})
export class ManagedFeatureModule {}
