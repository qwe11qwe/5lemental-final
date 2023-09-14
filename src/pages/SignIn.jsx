import InputBox from '@/components/InputBox';
import { useState } from 'react';
import debounce from '@/utils/debounce';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/button/Button';
import useAuthStore from '@/store/auth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });

  const { isValid, signIn } = useAuthStore();

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }, 400);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { id, password } = formState;

    try {
      await signIn(id, password);
    } catch (error) {
      toast.error('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  useEffect(() => {
    if (isValid) {
      navigate('/home');
      // setFormState({ id: '', password: '' });
    }
  }, [isValid, navigate]);

  return (
    <>
      <div className="loginContainer m-auto flex justify-center flex-wrap flex-col -bg--fridge-secondary w-screen">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
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
          className="w-full max-w-[820px] -text--fridge-black text-xs font-nanum decoration-solid flex items-end mt-2 px-[20px] underline justify-end"
        >
          아직 회원이 아니신가요?
        </Link>
      </div>
    </>
  );
}

export default SignIn;
