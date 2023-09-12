import { arrowLeft } from '@/assets/icons/svg-icons.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Heading() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  useEffect(
    () => (pathname === '/signup' ? setTitle('회원가입') : undefined),
    [pathname]
  );

  useEffect(
    () => (pathname === '/home' ? setTitle('메뉴 찾기') : undefined),
    [pathname]
  );

  useEffect(
    () =>
      pathname === '/fridgemenu'
        ? setTitle('내 냉장고를 비워줄 메뉴')
        : undefined,
    [pathname]
  );

  useEffect(
    () => (pathname === '/myprofile' ? setTitle('프로필') : undefined),
    [pathname]
  );

  useEffect(
    () =>
      pathname === '/addingredients'
        ? setTitle('내 냉장고 재료 추가하기')
        : undefined,
    [pathname]
  );

  useEffect(
    () =>
      pathname === '/recipeliked' ? setTitle('좋아요 누른 레시피') : undefined,
    [pathname]
  );

  useEffect(
    () => (pathname === '/myfridge' ? setTitle('내 냉장고') : undefined),
    [pathname]
  );

  useEffect(
    () => (pathname === '/menulist' ? setTitle('오늘 뭐먹지?') : undefined),
    [pathname]
  );

  useEffect(
    () => (pathname === '/recipedetail' ? setTitle('마라샹궈') : undefined),
    [pathname]
  );

  useEffect(
    () => (pathname === '/search' ? setTitle('') : undefined),
    [pathname]
  );

  useEffect(
    () => (pathname === '/searchresult' ? setTitle('') : undefined),
    [pathname]
  );

  if (pathname === '/' || pathname === '/signin') {
    return null;
  }

  return (
    <>
      <div className="wrapper max-w-[820px] m-auto relative pt-[20px] flex justify-center items-center">
        <div className="container flex justify-center items-center">
          <button
            className="w-[20px] h-[20px] absolute left-[20px] top-[25px]"
            onClick={() => navigate(-1)}
          >
            <img className="w-full h-full" src={arrowLeft} alt="뒤로가기" />
          </button>
          <h1 className="font-dohyeon -text--fridge-black text-[20px]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Heading;
