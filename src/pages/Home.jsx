import IngredientButtonSero from '@/components/IngredientButtonSero';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/button/Button';

function Home() {

  return(
    <>
    <SearchInput searchType='menu'></SearchInput>
      <h1 className='font-dohyeon'>내 재료</h1>
      <IngredientButtonSero></IngredientButtonSero>
      <Button type='button'>
        내 냉장고 속 재료로 요리하기
      </Button>
    </>
  )
}

export default Home;