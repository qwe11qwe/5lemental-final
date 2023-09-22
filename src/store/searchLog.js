import { create } from 'zustand';

const initialSearchLogState = {
  searchLog: '',
};

const useSearchLogStore = create((set) => ({
  ...initialSearchLogState,

  setSearchLog: (searchItem) => {
    set((state) => ({
      ...state,
      searchLog: searchItem,
    }));
    return searchItem;
  },
}));

export default useSearchLogStore;
