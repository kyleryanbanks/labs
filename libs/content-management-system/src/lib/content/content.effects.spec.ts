import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ContentEffects } from './content.effects';
import * as ContentActions from './content.actions';

describe('ContentEffects', () => {
  let actions: Observable<any>;
  let effects: ContentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ContentEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ContentEffects);
  });

  describe('loadEndpoints$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: ContentActions.loadEndpoints({
          endpoints: { foo: 'bar' } as Endpoints,
        }),
      });

      const expected = hot('-a-|', {
        a: ContentActions.loadEndpointSuccess({
          name: 'foo',
          content: [],
        }),
      });

      expect(effects.loadEndpoints$).toBeObservable(expected);
    });
  });
});
