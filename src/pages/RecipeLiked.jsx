import MenuImge from '@/components/MenuImge';
import { useState, useRef } from 'react';
import Likebutton from '@/components/likeButton/Likebutton';

function RecipeLiked() {
  const Add = 'Add';
  const inputRef = useRef(null);
  console.log(inputRef);
  const [inputValue] = useState('');

  return (
    <div className="h-screen max-w-[820px] m-auto">
      <div className="flex mt-8 ml-[20px] "></div>
      <div className="w-screen  overflow-y-scroll max-w-[820px] m-auto min-w-[320px]">
        <MenuImge MenuImgeName={inputValue} print={Add}></MenuImge>
        <Likebutton />
      </div>
    </div>
  );
}

export default RecipeLiked;
