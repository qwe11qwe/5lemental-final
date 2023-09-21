import { getPbImageURL } from '@/utils/getPbImageURL';
import { useState, useEffect } from 'react';
import useCategoryStore from '@/store/category';
// import pb from '@/api/pocketbase';

function IngredientItem() {
  const { selectedMenu, ingredientsKeys, getIngredientsKeys } =
    useCategoryStore();

  // 재료 전체 정보

  // 재료 키 불러오기
  useEffect(() => {
    getIngredientsKeys(selectedMenu);
  }, [selectedMenu]);

  useEffect(() => {
    console.log('i', ingredientsKeys);
  }, [ingredientsKeys]);

  // 재료 정보 불러오기

  return (
    <>
      <div className="flex gap-1 flex-wrap justify-center">
        {/* {ingredientKeys.map((ingredient) => (
          <div
            key={ingredient.id}
            className="w-[55px] h-[74px] flex flex-col items-center"
          >
            <img
              src={getPbImageURL(ingredient, 'photo')}
              alt={ingredient.name}
            />
            <div className="font-nanum max-w-[55px] h-4 mt-1 px-1 -bg--fridge-bg-gray rounded-md text-center text-xs truncate">
              {ingredient.name}
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default IngredientItem;
