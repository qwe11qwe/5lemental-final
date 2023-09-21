import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils';
import Likebutton from './Likebutton';

// 데이터 요청 함수 (query function)
// 페이지 로드 또는 북마크 삭제 요청 시 리패칭 될 때 실행되는 함수입니다.
const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

// 로그인 사용자 (더미 데이터)
// 실제 로그인 후 `pocketbase.authStore.model`에서 정보를 가져올 수 있습니다.
const dummyLoginUserInfo = {
  id: 'ypejq0ceyg9dpza',
  username: 'hyeonjuu',
  email: 'janghyeonjuu@gmail.com',
};

export default function BookmarkList() {
  // 로그인 사용자 정보
  const user = pocketbase.authStore.model ?? dummyLoginUserInfo;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Likebutton">Likebutton</Link></li>
          </ul>
        </nav>

        {/* A Route switch that gets rendered when you're at '/' */}
        <Route path="/" exact component={HomePage} />
        
        {/* A Route switch that gets rendered when you're at '/Likebutton' */}
        <Route path="/Likebutton" component={LikebuttonPage} />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>Home Page</div> 
  );
}

function LikebuttonPage() {
  return (
    <div>Likebutton Page</div> 
  );
}

export default App;

// import { useState } from 'react';

// function LikeButtonButton({ count = 0 }) {
//   const [LikeButtons, setLikeButtons] = useState(count);

//   const isPressed = LikeButtons > count;
//   console.log(isPressed);

//   const incrementLikeButtons = () => {
//     setLikeButtons(LikeButtons + 1);
//   };

//   const decrementLikeButtons = () => {
//     setLikeButtons(LikeButtons - 1);
//   };

//   return (
//     <div>
//       <button
//         onClick={isPressed ? decrementLikeButtons : incrementLikeButtons}
//         className="h-40"
//       >
//         ❤️
//       </button>
//       <span>{LikeButtons}</span>
//     </div>
//   );
// }

// export default LikeButtonButton;
