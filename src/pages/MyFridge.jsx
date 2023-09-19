import IngredientButtonGaro from './../components/ingredient-button-garo';
// import { NavBar } from '@/components/navBar/NavBar';

function MyFridge () {



  return(
    <div className="w-screen h-screen bg-yellow-200">
      <div className="w-screen h-14 bg-red-500"></div>
      <div className="w-screen h-5/6 overflow-y-scroll">
        <IngredientButtonGaro></IngredientButtonGaro>
      </div>
      
      {/* <NavBar></NavBar> */}
    </div>
    
  )
}

export default MyFridge