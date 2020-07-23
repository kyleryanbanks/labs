import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CONTENT_FEATURE_KEY,
  State,
  ContentPartialState,
  contentAdapter,
} from './content.reducer';

// Lookup the 'Content' feature state managed by NgRx
export const getContentState = createFeatureSelector<
  ContentPartialState,
  State
>(CONTENT_FEATURE_KEY);

const { selectAll, selectEntities } = contentAdapter.getSelectors();

export const getContentLoaded = createSelector(
  getContentState,
  (state: State) => state.loaded
);

export const getContentError = createSelector(
  getContentState,
  (state: State) => state.error
);

export const getAllContent = createSelector(getContentState, (state: State) =>
  selectAll(state)
);

export const getContentEntities = createSelector(
  getContentState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getContentState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getContentEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
