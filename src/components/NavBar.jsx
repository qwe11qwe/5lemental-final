import { homeLine, plus, heartLine, userLine } from '@/assets/icons/svg-icons.js';

function NavBar () {

  return(
    <nav className="flex justify-around text-center fixed left-0 right-0 bottom-0">
      {/* <NavLink to='/'> */}
        <div className="w-1/4 h-16 flex items-center justify-center flex-col">
          <img src={homeLine} className='w-7 h-auto'/>
          <span className="text-sm">홈</span>
        </div>
      {/* </NavLink> */}
      {/* <NavLink to='/'> */}
        <div className="w-1/4 h-16 flex items-center justify-center flex-col">
          <img src={plus} className='w-7 h-auto'/>
          <span className="text-sm">재료추가</span>
        </div>
      {/* </NavLink> */}
      <div className="w-1/4 h-16 flex items-center justify-center flex-col">
        <img src={heartLine} className='w-7 h-auto'/>
        <span className="text-sm">좋아요</span>
      </div>
      <div className="w-1/4 h-16 flex items-center justify-center flex-col">
        <img src={userLine} className='w-7 h-auto'/>
        <span className="text-sm">프로필</span>
      </div>
    </nav>
  )
}

export default NavBar