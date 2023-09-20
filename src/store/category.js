import pb from '@/api/pocketbase';
import { create } from 'zustand';

const initialCategoryState = {
  category: '한식',
  categoryMenuList: [],
  categoryFileNameList: [],
  categoryImageList: [],
};

const useCategoryStore = create((set) => ({
  ...initialCategoryState,

  setCategory: (category) => {
    set((state) => ({
      ...state,
      category,
    }));
    return category;
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
