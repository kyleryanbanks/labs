import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { ContentService } from './content.service';
import * as ContentActions from './content.actions';

@Injectable()
export class ContentEffects {
  loadEndpoints$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContentActions.loadEndpoints),
      map((action) => action.endpoints),
      switchMap((endpoints) => {
        return from(endpoints).pipe(
          mergeMap((endpoint) =>
            this.service.getContent(endpoint).pipe(
              map((content) =>
                ContentActions.loadEndpointSuccess({
                  content: { id: endpoint, content },
                })
              ),
              catchError((error) =>
                of(ContentActions.loadEndpointFailure({ error }))
              )
            )
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, public service: ContentService) {}
}
