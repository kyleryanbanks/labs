import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromContent from './content/content.reducer';
import { ContentEffects } from './content/content.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromContent.CONTENT_FEATURE_KEY,
      fromContent.reducer
    ),
    EffectsModule.forFeature([ContentEffects]),
  ],
})
export class ContentManagementSystemModule {}
