// import { useState } from 'react';

// function LikeButton({ count = 0 }) {
//   const [likes, setLikes] = useState(count);

//   const isPressed = likes > count;
//   console.log(isPressed);

//   const incrementLikes = () => {
//     setLikes(likes + 1);
//   };

//   const decrementLikes = () => {
//     setLikes(likes - 1);
//   };

//   return (
//     <div>
//       <button
//         onClick={isPressed ? decrementLikes : incrementLikes}
//         className="h-40"
//       >
//         ❤️
//       </button>
//       <span>{likes}</span>
//     </div>
//   );
// }

// export default LikeButton;

// ------------------------------------------------------------------------------------------------

// import { useState } from 'react';
// import pb from '@/api/pocketbase';
// import { getPocketHostImageURL } from '@/utils';
// import Likebutton from '../Likebutton';

// // 데이터 요청 함수 (query function)
// // 페이지 로드 또는 북마크 삭제 요청 시 리패칭 될 때 실행되는 함수입니다.
// const getRecommends = async (userId) => {
//   return await pb.collection('recommends').getFullList({
//     filter: `(userEmail?~'${userId}')`,
//     fields: 'collectionId,id,image',
//   });
// };

// // 로그인 사용자 (더미 데이터)
// // 실제 로그인 후 `pb.authStore.model`에서 정보를 가져올 수 있습니다.
// const dummyLoginUserInfo = {
//   id: 'ypejq0ceyg9dpza',
//   username: 'hyeonjuu',
//   email: 'janghyeonjuu@gmail.com',
// };

// export default function Likebuttonlist() {
//   // 로그인 사용자 정보

//   const user = pb.authStore.model ?? dummyLoginUserInfo;

//   return (
//     <Router>
//       <div>
//         <Route exact path="/">
//           <HomePage addToFavorites={addToFavorites} />
//         </Route>
//         <Route path="/Likebutton">
//           <LikeButton
//             favorites={favorites}
//             removeFromFavorites={removeFromFavorites}
//           />
//         </Route>
//       </div>
//     </Router>
//   );
// }

// function HomePage({ addToFavorites }) {
//   // 이 부분에 실제 데이터를 불러오는 로직이 들어갈 수 있습니다.
//   const items = ['Item1', 'Item2', 'Item3'];

//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item}>
//           {item}
//           <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
//         </div>
//       ))}

//       {/* 이동 링크 */}
//       <Link to="/Likebutton">❤️</Link>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------------------

import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage addToFavorites={addToFavorites} />
        </Route>
        <Route path="/favorites">
          <FavoritePage favorites={favorites} />
        </Route>
      </div>
    </Router>
  );
}

function HomePage({ addToFavorites }) {
  // 이 부분에 실제 데이터를 불러오는 로직이 들어갈 수 있습니다.
  const items = ['Item1', 'Item2', 'Item3'];

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item}
          <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
        </div>
      ))}
      {/* 이동 링크 */}
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

function FavoritePage({ favorites }) {
  return (
    <>
      {/* 즐겨찾기 목록 출력 */}
      {favorites.map((favorite) => (
        <p key={favorite}>{favorite}</p>
      ))}

      {/* 홈페이지로 돌아가는 링크 */}
      <Link to="/">Go back Home</Link>
    </>
  );
}

export default App;
