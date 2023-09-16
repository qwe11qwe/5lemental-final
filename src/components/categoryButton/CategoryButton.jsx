import pb from '@/api/pocketbase';
import S from './CategoryButton.module.css';
import { useState } from 'react';

function CategoryButton() {
  const [selected, setSelected] = useState('');

  const handleSelect = (category) => {
    setSelected(category);
  };

  const handleCategory = async (menu) => {
    try {
      const response = await pb
        .collection('cooks')
        .getList(1, 10, { filter: `category = "${menu}"` });
      response.items.map((item) => console.log(item.name));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="wrapper max-w-[820px] m-auto flex justify-center items-center mt-[10px]">
        <div className="container flex justify-center items-center gap-2">
          <button
            onClick={() => {
              handleSelect('korean');
              handleCategory('한식');
            }}
            className={selected === 'korean' ? S.selected : S.notSelected}
          >
            한식
          </button>
          <button
            onClick={() => {
              handleSelect('japanese');
              handleCategory('일식');
            }}
            className={selected === 'japanese' ? S.selected : S.notSelected}
          >
            일식
          </button>
          <button
            onClick={() => {
              handleSelect('chinese');
              handleCategory('중식');
            }}
            className={selected === 'chinese' ? S.selected : S.notSelected}
          >
            중식
          </button>
          <button
            onClick={() => {
              handleSelect('western');
              handleCategory('양식');
            }}
            className={selected === 'western' ? S.selected : S.notSelected}
          >
            양식
          </button>
        </div>
      </div>
    </>
  );
}

export default CategoryButton;
