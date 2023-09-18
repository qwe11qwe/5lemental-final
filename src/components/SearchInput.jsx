import pb from '@/api/pocketbase';
import { useState, useEffect, useRef } from 'react';

// 다른 컴포넌트에서 가져올 때 아래의 { } 안에 쓰는 것이다. 저장된 정보를 MenuBox 컴포넌트에 
function SearchInput () {

// 검색 필드 요소 참조
const inputRef = useRef('');
// 검색 요소 집합 ( 서버에서 데이터 가져오기 )
const [cooks, setCooks] = useState([]);
// 검색된 결과 집합 ( 사용자 검색 요청 시 처리 )
const [searchResult, setSearchResult] = useState([]);
// 검색 여부
const [isSearched, setIsSearched] = useState(false);

useEffect(() => {
  async function fetchCookList() {
    try {
      const cookList = await pb.collection('cooks').getFullList();
      setCooks(cookList.map((cook) => cook.name));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchCookList();
}, []);

const toggleInputSearch = () => {
  const searchTerm = inputRef.current.value.trim();

  if (searchTerm) {
    setSearchResult(cooks.filter((cook) => cook.includes(searchTerm)));
    setIsSearched(true);
    inputRef.current.value='';
  } else {
    setSearchResult([]);
  }
}

// 규민 : 리액트 쿼리를 써서 캐싱을 하는게 좋지 않을까.. 캐싱 안하면 검색이 바뀔때마다 다시 렌더링 된다. 데이터를 한 번만 불러와서 렌더링하지 않고 사용자가 필요할 때마다 꺼내 쓸 수 있다. useRef 를 사용해

  return(
  <>
    <div className='w-full max-w-[820px] m-auto'>
      <div className='flex mt-10 ml-[20px] relative'>
        <input
          type='text'
          role='searchbox'
          placeholder='메뉴를 검색해주세요.'
          className="w-11/12 h-7 pl-1 placeholder:-text--fridge-input-gray font-nanum border-b-2 -border--fridge-gray focus:outline-none"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { toggleInputSearch(); }
          }}
        />
        <button
          type='button'
          className='w-5 h-5 bg-search-icon my-auto ml-2 absolute right-[9%]'
          onClick={toggleInputSearch}
          aria-label='검색'
          >
        </button>
      </div>
      <div className='mt-4'>
        {searchResult.length > 0 ? (
          searchResult.sort().map((cook, index) => 
            (
              <ul key={index} className='ml-5 text-sm'>
                <li>{cook}</li>
              </ul>
            )
          )
        ) : (
            isSearched && <div className='text-center mt-9'>검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  </>
  )
}

export default SearchInput;