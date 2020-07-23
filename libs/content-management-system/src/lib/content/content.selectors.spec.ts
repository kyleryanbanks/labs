import { ContentEntity } from './content.models';
import { State, contentAdapter, initialState } from './content.reducer';
import * as ContentSelectors from './content.selectors';

describe('Content Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getContentId = (it) => it['id'];
  const createContentEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ContentEntity);

  let state;

  beforeEach(() => {
    state = {
      content: contentAdapter.addAll(
        [
          createContentEntity('PRODUCT-AAA'),
          createContentEntity('PRODUCT-BBB'),
          createContentEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Content Selectors', () => {
    it('getAllContent() should return the list of Content', () => {
      const results = ContentSelectors.getAllContent(state);
      const selId = getContentId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ContentSelectors.getSelected(state);
      const selId = getContentId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getContentLoaded() should return the current 'loaded' status", () => {
      const result = ContentSelectors.getContentLoaded(state);

      expect(result).toBe(true);
    });

    it("getContentError() should return the current 'error' state", () => {
      const result = ContentSelectors.getContentError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
