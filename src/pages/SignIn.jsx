import InputBox from '@/components/InputBox';
import { useState } from 'react';
import debounce from '@/utils/debounce';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/button/Button';
import useAuthStore from '@/store/auth';

function SignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });

  const { signIn } = useAuthStore();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { id, password } = formState;

    try {
      signIn(id, password).then(() => navigate('/home'));
    } catch (error) {
      console.error(error);
      setFormState({ id: '', password: '' });
    }
  };

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }, 400);

  return (
    <>
      <div className="loginContainer m-auto flex justify-center flex-wrap flex-col -bg--fridge-secondary w-screen">
        <div className="pt-[100px] pb-[15px] h-[188px]">
          <h1 className="text-[35px] -text--fridge-black font-dohyeon font-normal text-center">
            로그인
          </h1>
        </div>
      </div>
      <div className="formContainer w-full flex justify-center items-center flex-wrap flex-col">
        <div className="px-[20px] w-full max-w-[820px]">
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

        <Link
          to="/signup"
          className="w-full max-w-[820px] -text--fridge-black text-[10px] font-nanum decoration-solid flex items-end mt-2 px-[20px] underline justify-end"
        >
          아직 회원이 아니신가요?
        </Link>
      </div>
    </>
  );
}

export default SignIn;
