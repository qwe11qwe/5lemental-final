import IngredientButtonSero from '@/components/IngredientButtonSero';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/button/Button';

function Home() {

  return(
    <>
    <div className='px-5 w-full max-w-[820px] m-auto'>
      <SearchInput searchType='menu'></SearchInput>
      <span className='font-dohyeon'>내 재료</span>
      <IngredientButtonSero></IngredientButtonSero>
      <Button type='button'>
        내 냉장고 속 재료로 요리하기
      </Button>
      </div>
    </>
  )
}

export default Home;