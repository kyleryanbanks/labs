import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromContent from './content.reducer';
import * as ContentActions from './content.actions';

@Injectable()
export class ContentEffects {
  loadContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContentActions.loadContent),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ContentActions.loadContentSuccess({ content: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ContentActions.loadContentFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
