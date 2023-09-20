import pb from '@/api/pocketbase';
import IngredientButtonSero from '@/components/IngredientButtonSero ';
import Button from '@/components/button/Button';

function Home() {

  return(
    <>
      <IngredientButtonSero></IngredientButtonSero>
      <Button type='button'>
        내 냉장고 속 재료로 요리하기
      </Button>
    </>
  )
}

export default Home;