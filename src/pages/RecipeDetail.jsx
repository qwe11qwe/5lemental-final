import IngredientItem from '@/components/IngredientItem';
import useCategoryStore from '@/store/category';
import pb from '@/api/pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';

function RecipeDetail() {
  const selectedMenu = useCategoryStore((state) => state.selectedMenu);
  const [fileName, setFileName] = useState('');
  const [menuImage, setMenuImage] = useState('');

  useEffect(() => {
    const handleProfile = async () => {
      try {
        // PocketBase 에서 메뉴 이미지 가져오기
        const imageResponse = await pb
          .collection('cooks')
          .getList(1, 10, { filter: `name = "${selectedMenu}"` });
        setFileName(imageResponse.items[0].photo);
        setMenuImage(
          pb.files.getUrl(imageResponse.items[0], fileName, {
            thumb: '80x80',
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    handleProfile();
  }, [fileName]);

  return (
    <>
      <div className="wrapper w-screen h-full px-[16px] pt-[20px] -bg--fridge-white flex ">
        <div className="container max-w-[820px] mx-auto mb-[70px] flex flex-wrap flex-col justify-center items-start">
          <div className="imageContainer w-full">
            <img
              className="w-[285px] h-[195px] rounded-[10px] flex justify-center items-center"
              src={menuImage}
              alt={selectedMenu}
            />
          </div>
          <IngredientItem />
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
