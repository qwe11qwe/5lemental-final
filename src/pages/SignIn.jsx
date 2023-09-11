import pb from '@/api/pocketbase';
import InputBox from '@/components/InputBox';
import { useState } from 'react';
import debounce from '@/utils/debounce';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/button/Button';

function SignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { id, password } = formState;

    try {
      const response = await pb
        .collection('users')
        .authWithPassword(id, password);

      console.log(response);
      console.log('성공');
      navigate('/home');
      // console.log(pb.authStore.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(setFormState);
  }, 400);

  return (
    <>
      <div className="wrapper m-auto flex justify-center flex-wrap">
        <div className="loginContainer -bg--fridge-secondary w-screen">
          <div className="pt-[100px] pb-[15px] h-[188px]">
            <h1 className="text-[35px] -text--fridge-black font-dohyeon font-normal text-center">
              로그인
            </h1>
          </div>
        </div>
        <div className="formContainer px-[20px] w-full">
          <form onSubmit={handleSignIn}>
            <label
              htmlFor="id"
              className="text-[15px] -text--fridge-black font-dohyeon mt-[53px] mb-1 block"
            >
              아이디
              <InputBox
                id="id"
                type="text"
                name="id"
                placeholder="아이디를 입력해주세요."
                onChange={handleInput}
              />
            </label>
            <label
              htmlFor="password"
              className="text-[15px] -text--fridge-black font-dohyeon mt-3 mb-1 block"
            >
              비밀번호
              <InputBox
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={handleInput}
              />
            </label>
            <Button type="submit">로그인</Button>
          </form>
        </div>
      </div>
      <Link
        to="/signup"
        className="-text--fridge-black text-[10px] font-nanum decoration-solid grid justify-items-end mt-2 px-[20px] underline"
      >
        아직 회원이 아니신가요?
      </Link>
    </>
  );
}

export default SignIn;
