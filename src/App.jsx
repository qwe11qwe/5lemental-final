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
      <LikeButton count={11}></LikeButton>
      <LikeButton count={13}></LikeButton>
      <LikeButton count={15}></LikeButton>
      <LikeButton count={18}></LikeButton>
    </div>
  );
}

export default App;

// import router from './routes';
// import { RouterProvider } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <sName="App">div clas
//         <RouterProvider router={router} />
//       </sName=>
//     </>
// >>>>>>> 656ad7e6ea43138dafef8e475acc901be643baa1
//   );
// }

// export default App;
