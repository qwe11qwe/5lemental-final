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

  useEffect(() => {
    getIngredientsKeys(selectedMenu)
      .then((keys) => {
        return Promise.all(keys.map((key) => getIngredientsName(key)));
      })
      .then((namesArray) => {
        setIngredientsName(namesArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMenu]);

  // 재료 파일 URL을 불러와 배열에 저장
  useEffect(() => {
    getIngredientsKeys(selectedMenu)
      .then((keys) => {
        return Promise.all(keys.map((key) => getIngredientsImage(key)));
      })
      .then((imagesArray) => {
        setIngredientsImage(imagesArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMenu]);

  return (
    <>
      <div className="flex gap-1 flex-wrap justify-center max-w-[500px]">
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
