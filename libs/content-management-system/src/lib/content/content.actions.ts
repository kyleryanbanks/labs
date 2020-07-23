import { createAction, props } from '@ngrx/store';
import { ContentEntity } from './content.models';

export const loadContent = createAction('[Content] Load Content');

export const loadContentSuccess = createAction(
  '[Content] Load Content Success',
  props<{ content: ContentEntity[] }>()
);

export const loadContentFailure = createAction(
  '[Content] Load Content Failure',
  props<{ error: any }>()
);
