import IngredientButtonGaro from '../components/IngredientButtonGaro';
// import { NavBar } from '@/components/navBar/NavBar';

function MyFridge() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-14"></div>
      <div className="w-screen h-5/6 overflow-y-scroll">
        <IngredientButtonGaro 
        ingredientName={'1'}
        print={'Fridge'}
      ></IngredientButtonGaro>
      </div>

      {/* <NavBar></NavBar> */}
    </div>
  );
}

export default MyFridge;
