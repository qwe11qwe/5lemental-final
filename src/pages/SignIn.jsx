import InputBox from '@/components/InputBox';

function SignIn() {
  return (
    <>
      <div>
        <h2>로그인</h2>

        <form>
          <InputBox type="text" name="이름" />
          <InputBox type="email" name="이름" />
          <button>하하</button>
        </form>

        <div className="flex justify-center mt-8 border-t border-slate-200 pt-8 dark:border-slate-200/30">
          {/* <Link
            to="/signup"
            className="dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            회원가입
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default SignIn;
