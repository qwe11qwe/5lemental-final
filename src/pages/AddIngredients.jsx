import IngredientButtonGaro from '@/components/IngredientButtonGaro';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import {search} from '@/assets/icons/svg-icons.js';
import  Button  from '@/components/button/Button';
// import Search from './Search';

function AddIngredients() {
  const navigate = useNavigate();
  const Add = 'Add';
  const inputRef = useRef(null);
  console.log(inputRef);
  const [inputValue, setInputValue] = useState('');


  return (
    <div className="w-screen h-screen ">
      {/* <form
        className="w-screen h-14 flex justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(inputRef.current.value);
        }}
      > */}
      <div className='flex mt-10 ml-[20px] relative'>
        <input
          type='text'
          role='searchbox'
          placeholder={'재료를 검색해주세요.'}
          className="w-11/12 h-7 pl-1 placeholder:-text--fridge-input-gray font-nanum border-b-2 -border--fridge-gray focus:outline-none"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { setInputValue(inputRef.current.value) }
            // 
          }}
        />
        <button
          type='button'
          className='w-5 h-5 bg-search-icon my-auto ml-2 absolute right-[9%]'
          onClick={(e) => {
            e.preventDefault();
            setInputValue(inputRef.current.value);
          }}
          aria-label='검색'
          >
        </button>
      </div>


      {/*   <input
          type="text"
          className="border-0 border-b-2 border-solid border-gray-500 h-6 w-3/4"
          ref={inputRef}
        />
        <button>
          
          <img
            
            alt=""
            className="w-6 h-6 bg-search-icon border-x-0"
            // 클릭 시 현재 입력값
          />
        </button>
      </form> */}


      <div className="w-screen h-3/5 overflow-y-scroll">
        <IngredientButtonGaro
          ingredientName={inputValue}
          print={Add}
        ></IngredientButtonGaro>
        {/* 여기서 page전달 -> button에서 Add면 전체 출력, Fridge면 보유한 것만 출력하도록 -> item에서 Add면 누르게, Fridge면 못누르게 */}
      </div>
      <div className='items-center flex flex-row'>
        {/* <Button></Button> */}
        <Button type="button" navigateTo="-1">재료 추가</Button>
        {/* <button 
          className="w-4/5 h-14 -bg--fridge-primary rounded-lg mx-auto text-white text-xl font-dohyeon"
          onClick={()=>navigate(-1)}
        >재료 추가</button> */}
      </div>
      

      {/* <NavBar></NavBar> */}
    </div>
  );
}

export default AddIngredients;
