import { heartFillPri, heartLinePri } from '@/assets/icons/svg-icons.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import pb from '@/api/pocketbase';

console.log(heartLinePri);
// import S from './LikeButton.module.css';
// import pb from '@/api/pocketbase';

function Likebutton() {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/home') {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [location]);
  // 유저 데이터를 불러옴 ↓
  const handleClick = async () => {
    try {
      // 좋아요 상태 변경 API 호출
      const response = await pb.post('/api/like', { useState });

      if (response.status === 200) {
        setIsLiked(!isLiked); // API 호출 성공 시 상태 업데이트
      }
    } catch (error) {
      console.error(error); // 에러 처리
    }
  };

  return (
    <div>
      <button
        className="float-right mr-4 mt-1"
        type="button"
        onClick={() => setIsLiked(!handleClick)}
      >
        <img
          src={isLiked ? heartFillPri : heartLinePri}
          alt=""
          className="h-4 w-4 "
        />
      </button>
    </div>
  );
}

export default Likebutton;

// -----------------------------------------------------------------------------------------------------

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { heartLine, heartFill } from '@/assets/icons/svg-icons.js';
// // import S from './LikeButton.module.css';
// // import pb from '@/api/pocketbase';

// function Likebutton() {
//   const [isLiked, setIsLiked] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === '/home') {
//       setIsLiked(true);
//     } else {
//       setIsLiked(false);
//     }
//   }, [location]);

//   return (
//     <div>
//       <button type="button" onClick={() => setIsLiked(!isLiked)}>
//         <img src={isLiked ? heartLine : heartFill} />
//       </button>
//     </div>
//   );
// }

// export default Likebutton;
