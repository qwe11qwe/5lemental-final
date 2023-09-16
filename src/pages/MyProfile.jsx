// import pb from '@/api/pocketbase';
import { Button } from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function MyProfile() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/myfridge');
  };

  return (
    <>
      <div className="wapper w-screen px-[26px] pt-[25px] -bg--fridge-white flex flex-nowrap flex-col">
        <div className="container max-w-[400px] mx-auto flex flex-nowrap flex-col">
          <div className="topFridge bg-[#F5F5F5] rounded-t-[15px] mb-[15px] min-h-[123px] px-[22px] py-4 flex flex-nowrap justify-center items-center gap-[25px]">
            <div className="profileImage">
              <img src="/" alt="프로필" className="profile" />
            </div>
            <div className="profileGreetings">
              <p className="font-nanum text-sm">
                <span className="font-bold mr-2">김감자</span>님,
              </p>
              <p className="text-xs">오늘도 즐거운 식사하세요!</p>
              <button
                onClick={handleNavigate}
                className="openFridge -bg--fridge-primary -text--fridge-white font-dohyeon rounded-[5px] text-[14px] pt-[7px] pb-[5px] px-[14px] mt-[13px]"
              >
                내 냉장고 열어보기
              </button>
            </div>
          </div>
          <div className="bottomFridge bg-[#F5F5F5] rounded-b-[15px] h-[268px] relative px-auto pt-[125px] pb-[55px]">
            <div className="FridgeHandle w-[14px] h-[75px] -bg--fridge-gray rounded-[15px] absolute top-[20px] right-[24px]"></div>
            <div className="buttonGroup flex flex-col items-center">
              <Button type="button" navigateTo="/recipeliked" small>
                좋아요 한 음식
              </Button>
              <Button type="button" small>
                랜덤메뉴
              </Button>
            </div>
          </div>
          <button className="logOut text-right text-[10px] font-nanum mt-1 mr-1 decoration-solid underline">
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
