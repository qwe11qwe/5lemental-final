import CategoryButton from '@/components/categoryButton/CategoryButton';
import useCategoryStore from '@/store/category';
import { useState } from 'react';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';
import { Link } from 'react-router-dom';

function MenuList() {
  const { category, getMenu, setSelectedMenu } = useCategoryStore();

  const [menuNameList, setMenuNameList] = useState([]);
  const [fileNameList, setFileNameList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const keepMenuName = (name) => {
    setSelectedMenu(name);
  };

  useEffect(() => {
    getMenu(category).then((res) => {
      const names = res.map((item) => item.name);
      setMenuNameList(names);
    });
  }, [category]);

  useEffect(() => {
    getMenu(category).then((res) => {
      const fileNames = res.map((item) => item.photo);
      setFileNameList(fileNames);
    });
  }, [category]);

  useEffect(() => {
    getMenu(category).then((res) => {
      const images = res.map((item) =>
        pb.files.getUrl(item, item.photo, {
          thumb: '130x130',
        })
      );
      setImageList(images);
    });
  }, [category]);

  return (
    <>
      <CategoryButton />
      <div className="wrapper w-screen h-full px-[16px] pt-[20px] -bg--fridge-white flex ">
        <div className="container max-w-[820px] mx-auto mb-[70px] flex flex-wrap flex-row gap-[20px] justify-center items-start">
          {menuNameList.map((name, index) => (
            <Link
              to="/recipedetail"
              key={index}
              className="w-[130px] h-[157px]"
              onClick={() => keepMenuName(name)}
            >
              {imageList[index] && (
                <img
                  className="w-[130px] h-[130px] rounded-[10px]"
                  src={imageList[index]}
                  alt={name}
                ></img>
              )}
              <p className="inline-block rounded-[10px] mt-[5px] px-[10px] pt-[5px] pb-[4px] -bg--fridge-skyblue font-dohyeon text-[11px]">
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuList;
