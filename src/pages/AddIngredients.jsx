import SearchInput from '@/components/SearchInput';
import IngredientButtonGaro from './../components/ingredient-button-garo';
import { useEffect, useState, useRef } from 'react';
import debounce from 'lodash.debounce';

function AddIngredients() {
  const inputRef = useRef(null);
  console.log(inputRef);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="w-screen h-screen bg-yellow-200">
      <div className="w-screen h-14 bg-red-500"></div>
      <form
        className="w-screen h-14 bg-orange-400 flex justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(inputRef.current.value);
        }}
      >
        <input
          type="text"
          className="border-0 border-b-2 border-solid border-gray-500 h-6 w-3/4"
          ref={inputRef}
        />
        <button>
          <img
            src="./../assets/icons/search.svg"
            alt=""
            className="w-6 h-6"
            // 클릭 시 현재 입력값
          />
        </button>
      </form>
      <div className="w-screen h-3/5 overflow-y-scroll">
        <IngredientButtonGaro
          ingredientName={inputValue}
        ></IngredientButtonGaro>
        {/* 여기서 page전달 -> button에서 Add면 전체 출력, Fridge면 보유한 것만 출력하도록 -> item에서 Add면 누르게, Fridge면 못누르게 */}
      </div>
      <div className="w-4/5 h-14 mx-auto bg-green-400 rounded-lg"></div>

      {/* <NavBar></NavBar> */}
    </div>
  );
}

export default AddIngredients;