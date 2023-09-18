import SearchInput from '@/components/SearchInput';
import IngredientButtonGaro from './../components/ingredient-button-garo';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

function AddIngredients () {
  const [inputValue, setInputValue] = useState('');

  // 이미지를 클릭했을 때 호출될 함수
  const handleImageClick = (ingre, e) => {
    e.preventDefault();
    console.log(1);
    // 입력 값(inputValue)을 사용하거나 처리할 수 있습니다.
    setInputValue(ingre);
  };

  // 디바운싱 적용
  const handleInputChangeDebounced = debounce((value) => {
    setInputValue(value);
  }, 300); // 300ms 딜레이를 가지는 디바운싱

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    handleInputChangeDebounced(newValue); // 디바운싱 함수 호출
  };

  return (
    <div className="w-screen h-screen bg-yellow-200">
      <div className="w-screen h-14 bg-red-500"></div>
      {/* <SearchInput searchType={'cook'}></SearchInput> */}
      <form className="w-screen h-14 bg-orange-400 flex justify-center items-center">
        <input 
          type="text" 
          className='border-0 border-b-2 border-solid border-gray-500 h-6 w-3/4'
          value={inputValue}
          onChange={handleInputChange} // 디바운싱된 핸들러로 변경
          />
          {/* 디바운싱 처리해서 제일 마지막에 상태 변경되도록 하기 or 상태 변경은 버튼 누르면 되도록 하고 제일 마지막에 어디 저장소로 이동되게 하기?*/}
        <button>
          <img 
            src="./../assets/icons/search.svg" 
            alt="" 
            className='w-6 h-6' 
            onClick={() => handleImageClick(inputValue)} // 클릭 시 현재 입력값
          />
        </button>
        
      </form>
      <div className="w-screen h-3/5 overflow-y-scroll">
        <IngredientButtonGaro ingredientName={inputValue}></IngredientButtonGaro>
      </div>
      <div className="w-4/5 h-14 mx-auto bg-green-400 rounded-lg"></div>
      
      {/* <NavBar></NavBar> */}
    </div>
  )
}

export default AddIngredients