import { createAction, props } from '@ngrx/store';
import { ContentEntity } from './content.models';

export const loadEndpoints = createAction(
  '[Content] Load Endpoints',
  props<{ endpoints: string[] }>()
);

export const loadEndpointSuccess = createAction(
  '[Content] Load Endpoint Success',
  props<{ content: ContentEntity }>()
);

export const loadEndpointFailure = createAction(
  '[Content] Load Endpoint Failure',
  props<{ error: any }>()
);
