import IngredientButtonGaro from './../components/ingredient-button-garo';
import { useEffect, useState } from 'react';

function AddIngredients () {
  const [inputValue, setInputValue] = useState('');

  // 이미지를 클릭했을 때 호출될 함수
  const handleImageClick = () => {
    // 입력 값(inputValue)을 사용하거나 처리할 수 있습니다.
    console.log('입력 값:', inputValue);
  };



  return (
    <div className="w-screen h-screen bg-yellow-200">
      <div className="w-screen h-14 bg-red-500"></div>
      <form className="w-screen h-14 bg-orange-400 flex justify-center items-center">
        <input 
          type="text" 
          className='border-0 border-b-2 border-solid border-gray-500 h-6 w-3/4'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
        <img 
          src="./../assets/icons/search.svg" 
          alt="" 
          className='w-6 h-6' 
          onClick={handleImageClick}/>
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