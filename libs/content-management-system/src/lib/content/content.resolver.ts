import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { getAllEndpointsAreLoaded } from './content.selectors';
import { loadEndpoints } from './content.actions';

@Injectable({ providedIn: 'root' })
export class ContentResolver implements CanActivate {
  constructor(public store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const endpoints = route.data.endpoints;

    return this.store.pipe(
      select(getAllEndpointsAreLoaded(endpoints)),
      tap((allEndpointsLoaded) => {
        if (!allEndpointsLoaded) {
          this.store.dispatch(loadEndpoints({ endpoints }));
        }
      }),
      filter((allEndpointsLoaded) => allEndpointsLoaded)
    );
  }
}
