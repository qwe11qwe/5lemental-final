import LikeButton from './components/Button/likebutton';
import FoodlistButton from './components/LikeFood';

// import router from './routes';
// import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <RouterProvider /> */}
      <FoodlistButton />
      <LikeButton></LikeButton>
      {/* <LikeButton count={11}></LikeButton>
      <LikeButton count={13}></LikeButton>
      <LikeButton count={15}></LikeButton>
      <LikeButton count={18}></LikeButton> */}
    </div>
  );
}

export default App;
