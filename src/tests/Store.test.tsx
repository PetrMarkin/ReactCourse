import { setSearchTerm } from '../store/searchSlice';
import { deselectItem, selectItem } from '../store/selectedItemsSlice';
import { AppDispatch, store } from '../store/store';
import { mockResults } from './mock';

describe('Redux store setup and functionality', () => {
  it('should handle search slice actions correctly', () => {
    const dispatch: AppDispatch = store.dispatch;

    const initialState = store.getState().search;
    expect(initialState.searchTerm).toBe('');

    dispatch(setSearchTerm('Luke'));

    const updatedState = store.getState().search;
    expect(updatedState.searchTerm).toBe('Luke');
  });

  it('should handle selected items slice actions correctly', () => {
    const dispatch: AppDispatch = store.dispatch;

    const initialState = store.getState().selectedItems;
    expect(initialState.selectedItems).toEqual([]);

    const mockItem = mockResults[0];
    dispatch(selectItem(mockItem));

    const updatedState = store.getState().selectedItems;
    expect(updatedState.selectedItems).toContain(mockItem);

    dispatch(deselectItem(mockItem.url));

    expect(updatedState.selectedItems[0]).not.toContainEqual(mockItem);
  });
});
