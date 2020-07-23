import { ContentEntity } from './content.models';
import * as ContentActions from './content.actions';
import { State, initialState, reducer } from './content.reducer';

describe('Content Reducer', () => {
  const createContentEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ContentEntity);

  beforeEach(() => {});

  describe('valid Content actions', () => {
    it('loadContentSuccess should return set the list of known Content', () => {
      const content = [
        createContentEntity('PRODUCT-AAA'),
        createContentEntity('PRODUCT-zzz'),
      ];
      const action = ContentActions.loadContentSuccess({ content });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
