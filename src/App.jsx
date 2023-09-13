import LikeButton from './components/Button/likebutton';
import FoodlistButton from './components/LikeFood';

function App() {
  return (
    <div>
      <FoodlistButton />
      <LikeButton></LikeButton>
      <LikeButton count={11}></LikeButton>
      <LikeButton count={13}></LikeButton>
      <LikeButton count={15}></LikeButton>
      <LikeButton count={18}></LikeButton>
    </div>
  );
}

export default App;
