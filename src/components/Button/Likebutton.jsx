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

import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LikeButton from './LikeButton';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage addToFavorites={addToFavorites} />
        </Route>
        <Route path="/bookmarks">
          <LikeButton
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
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
      <Link to="/bookmarks">Go to Bookmarks</Link>
    </div>
  );
}

export default App;
