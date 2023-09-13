import pb from '@/api/pocketbase';
import { useState, useEffect, useRef } from 'react';

// 다른 컴포넌트에서 가져올 때 아래의 { } 안에 쓰는 것이다. 저장된 정보를 MenuBox 컴포넌트에 
function SearchInput () {

const [search, setSearch] = useState([]);
const inputRef = useRef('');
const [searchResult, setSearchResult] = useState([]);

useEffect(() => {
  async function fetchCookList() {
    try {
      const cookList = await pb.collection('cooks').getFullList();
      setSearch(cookList);

      let menuList = [];
      for(let i = 0 ; i < cookList.length ; i++){
        menuList.push(cookList[i].name);
      }
      setSearch(menuList)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchCookList();
}, []);
console.log(search)
console.log(inputRef.current.value)

const toggleInputSearch = () => {
  if ( inputRef.current.value) {
    setSearchResult(search.filter((cook) => search.includes(inputRef.current.value)));
  } else {
    setSearchResult([]);
  }
}

console.log(searchResult)

function searchMenu (e) {
  e.preventDefault();
  console.log('click');
  toggleInputSearch();
}

// 규민 : 리액트 쿼리를 써서 캐싱을 하는게 좋지 않을까.. 캐싱 안하면 검색이 바뀔때마다 다시 렌더링 된다. 데이터를 한 번만 불러와서 렌더링하지 않고 사용자가 필요할 때마다 꺼내 쓸 수 있다. useRef 를 사용해 

  return(
    <>
    <div className='flex mt-5 justify-center'>
      <input
        type="text"
        placeholder="메뉴를 검색해주세요."
        className="w-4/5 h-7 pl-1 placeholder:-text--fridge-input-gray font-nanum border-b-2 -border--fridge-gray focus:outline-none"
        ref={inputRef}
      />
      <button
        type="button"
        className='w-5 h-5 bg-search-icon my-auto ml-2'
        onClick={searchMenu}
        >
      </button>
    </div>
    <div className='mt-4'>
      {searchResult.toSorted().map(
        (cook, index) => 
          (
            <li key={index} className='ml-5 text-xl'>
              <span>{cook}</span>
            </li>
          )
      )}
    </div>
    </>
  )
}

export default SearchInput;