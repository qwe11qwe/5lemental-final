// 원래 진짜 코드 ---------------------------------------------------------------------------------
// import router from './routes';
// import { RouterProvider } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <div className="App">
//         <RouterProvider router={router} />
//       </div>
//     </>
//   );
// }

// export default App;

// ---------------------- develop 푸시 할때 위에 코드로 바꿔야함 ----------------------------

// import LikeButtonList from './components/likeButton/Likebutton';
// import Likebutton from './components/likeButton/Likebutton';

// import router from './routes';
// import { RouterProvider } from 'react-router-dom';
import MenuImge from './components/MenuImge';

function App() {
  return (
    <>
      <div>
        <MenuImge />
        {/* <Likebutton /> */}
        {/* <LikeButtonList /> */}
        {/* <RouterProvider /> */}
        {/* <RouterProvider router={router} /> */}
        {/* <LikeButton> */}

        {/* <LikeButton count={11}></LikeButton>
      <LikeButton count={13}></LikeButton>
      <LikeButton count={15}></LikeButton>
      <LikeButton count={18}></LikeButton> */}
      </div>
    </>
  );
}

export default App;
