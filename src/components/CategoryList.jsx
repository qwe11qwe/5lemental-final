import { useState, useEffect } from 'react';
import pb from '@/api/pocketbase';

function CategoryList({ menu = '' }) {
  console.log(menu);
  const [menuList, setMenuList] = useState([]);
  const [fileName, setFileName] = useState('');
  const [menuImage, setMenuImage] = useState('');

  useEffect(() => {
    const getMenuName = async () => {
      try {
        const nameResponse = await pb
          .collection('cooks')
          .getList(1, 10, { filter: `category = "${menu}"` });
        setMenuList(nameResponse.items);
      } catch (error) {
        console.error(error);
      }
    };
    getMenuName();

    const getMenuImage = async () => {
      try {
        const imageResponse = await pb
          .collection('cooks')
          .getList(1, 50, { filter: `name = "${menuList}"` });
        setFileName(imageResponse.items);
        setMenuImage(
          pb.files.getUrl(imageResponse.items, fileName, {
            thumb: '130x130',
          })
        );
        console.log(menuImage);
      } catch (error) {
        console.error(error);
      }
    };
    getMenuImage();
  }, [menu, fileName, menuImage, menuList]);

  return (
    <>
      <div className="wrapper w-screen h-full mt-[20px]">
        <div className="container h-full max-w-[820px] mx-auto flex flex-nowrap flex-col -bg--fridge-skyblue px-[20px] py-[20px]">
          <div className="imageContainer">
            {menuList.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList;
