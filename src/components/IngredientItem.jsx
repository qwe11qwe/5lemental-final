import { useState, useEffect } from 'react';
import useCategoryStore from '@/store/category';

function IngredientItem() {
  const {
    selectedMenu,
    getIngredientsKeys,
    getIngredientsName,
    getIngredientsImage,
  } = useCategoryStore();

  const [ingredientsName, setIngredientsName] = useState([]);
  const [ingredientsImage, setIngredientsImage] = useState([]);

  // 재료 이름을 불러와 배열에 저장
  useEffect(() => {
    getIngredientsKeys(selectedMenu)
      .then((result) => {
        result.map((item) => {
          getIngredientsName(item).then((result) => {
            setIngredientsName((ingredients) => [...ingredients, result]);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMenu]);

  // 재료 파일 URL을 불러와 배열에 저장
  useEffect(() => {
    getIngredientsKeys(selectedMenu)
      .then((result) => {
        result.map((item) => {
          getIngredientsImage(item).then((result) => {
            setIngredientsImage((ingredients) => [...ingredients, result]);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMenu]);

  return (
    <>
      <div className="flex gap-1 flex-wrap justify-center">
        {ingredientsName.map((ingredient, index) => (
          <div
            key={index}
            className="w-[55px] h-[74px] flex flex-col items-center"
          >
            {ingredientsImage[index] && (
              <img src={ingredientsImage[index]} alt={ingredient} />
            )}

            <div className="font-nanum max-w-[55px] h-4 mt-1 px-1 -bg--fridge-bg-gray rounded-md text-center text-xs truncate">
              {ingredient}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default IngredientItem;
