import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { heartLine, heartFill } from '@/assets/icons/svg-icons.js';
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

  return (
    <div>
      <button type="button" onClick={() => setIsLiked(!isLiked)}>
        <img src={isLiked ? heartLine : heartFill} />
      </button>
    </div>
  );
}

export default Likebutton;
