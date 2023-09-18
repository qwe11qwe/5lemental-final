import pb from '@/api/pocketbase';
import IngredientButtonSero from '@/components/IngredientButtonSero';
import Button from '@/components/button/Button'

function Home() {
  console.log(pb.authStore.token);

  return(
    <>
    <IngredientButtonSero></IngredientButtonSero>
    <Button type='button' navigateTo='/fridgemenu'>
      내 냉장고 속 재료로 요리하기
    </Button>
    </>
  )
}

export default Home;
