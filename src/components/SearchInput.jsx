function SearchInput ({ onChange, onClick }) {
  return(
    <div className='flex mt-5 justify-center'>
      <input
        type="search"
        placeholder="메뉴를 검색해주세요."
        className="w-4/5 h-7 -text--fridge-input-gray font-nanum border-b-2 -border--fridge-gray focus:outline-none"
        onChange={onChange}
      />
      <button
        type="button"
        className='w-5 h-5 bg-search-icon my-auto'
        onClick={onClick} >
      </button>
    </div>
  )
}

export default SearchInput;