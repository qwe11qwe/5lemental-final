import { useState } from 'react';
import S from './CategoryButton.module.css';

function CategoryButton() {
  const [selected, setSelected] = useState('');

  const handleSelect = (category) => {
    setSelected(category);
  };

  return (
    <>
      <div className="wrapper max-w-[820px] m-auto flex justify-center items-center mt-[10px]">
        <div className="container flex justify-center items-center gap-2">
          <button
            onClick={() => {
              handleSelect('korean');
            }}
            className={selected === 'korean' ? S.selected : S.notSelected}
          >
            한식
          </button>
          <button
            onClick={() => {
              handleSelect('japanese');
            }}
            className={selected === 'japanese' ? S.selected : S.notSelected}
          >
            일식
          </button>
          <button
            onClick={() => {
              handleSelect('chinese');
            }}
            className={selected === 'chinese' ? S.selected : S.notSelected}
          >
            중식
          </button>
          <button
            onClick={() => {
              handleSelect('western');
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
