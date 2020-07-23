import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ContentActions from './content.actions';
import { ContentEntity } from './content.models';

export const CONTENT_FEATURE_KEY = 'content';

export interface State extends EntityState<ContentEntity> {
  loaded: boolean; // has the Content list been loaded
  error?: string | null; // last known error (if any)
}

export interface ContentPartialState {
  readonly [CONTENT_FEATURE_KEY]: State;
}

export const contentAdapter: EntityAdapter<ContentEntity> = createEntityAdapter<
  ContentEntity
>();

export const initialState: State = contentAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const contentReducer = createReducer(
  initialState,
  on(ContentActions.loadEndpointSuccess, (state, { content }) =>
    contentAdapter.addOne(content, {
      ...state,
      loaded: true,
    })
  ),
  on(ContentActions.loadEndpointFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return contentReducer(state, action);
}
