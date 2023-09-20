import pb from '@/api/pocketbase';
import { create } from 'zustand';

const initialMenuState = {
  category: '한식',
  categoryMenuList: [],
  selectedMenu: '',
};

const useCategoryStore = create((set) => ({
  ...initialMenuState,

  setCategory: (category) => {
    set((state) => ({
      ...state,
      category,
    }));
    return category;
  },

  setSelectedMenu: (selectedMenu) => {
    set((state) => ({
      ...state,
      selectedMenu,
    }));
    return selectedMenu;
  },

  getMenu: async (category) => {
    const nameResponse = await pb
      .collection('cooks')
      .getList(1, 10, { filter: `category = "${category}"` });

    set((state) => ({
      ...state,
      categoryMenuList: nameResponse.items,
    }));

    return nameResponse.items;
  },
}));

export default useCategoryStore;
