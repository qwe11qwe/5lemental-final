import pb from '@/api/pocketbase';
import { create } from 'zustand';

const initialMenuState = {
  category: '한식',
  categoryMenuList: [],
  selectedMenu: '',
  ingredientsKeys: [],
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

  getIngredientsKeys: async (selectedMenu) => {
    const ingredientsResponse = await pb
      .collection('cooks')
      .getFullList({ filter: `name = "${selectedMenu}"` });
    const ingredientsKeys = ingredientsResponse[0].ingredients_keys;

    set((state) => ({
      ...state,
      ingredientsKeys: ingredientsKeys,
    }));

    return ingredientsResponse.items;
  },
}));

export default useCategoryStore;
