import InputBox from '@/components/InputBox';
import { Button } from '@/components/button/Button';
import S from './SignUp.module.css';
import { useState } from 'react';

function SignUp() {
  const [checkboxes, setCheckboxes] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
    agreeAll: false,
  });
  const handleCheck = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  return (
    <>
      <div className="wrapper m-auto mt-3">
        <form action="onSubmit">
          <div className="signUpWrapper -bg--fridge-secondary flex justify-center items-center flex-wrap flex-col w-screen pt-3 pb-1">
            <div className="signUpContainer w-full max-w-[820px] px-[20px]">
              <h2 className="font-dohyeon -text--fridge-black text-[15px] text-left mb-1">
                가입 정보
              </h2>
              <InputBox
                id="id"
                type="text"
                name="id"
                placeholder="아이디를 입력해주세요."
              />
              <p className={S.alert}>사용할 수 없는 아이디입니다.</p>
              <InputBox
                id="nickname"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력해주세요."
              />
              <p className={S.alert}>사용할 수 없는 닉네임입니다.</p>
              <InputBox
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <InputBox
                id="passwordCheck"
                type="text"
                name="passwordCheck"
                placeholder="비밀번호를 다시 입력해주세요."
              />
              <p className="ml-3 mb-[2px] -text--fridge-red font-nanum text-[8px]">
                비밀번호는 8자리 이상, 특수문자를 포함해야합니다.
              </p>
            </div>
          </div>
          <div className="agreementWrapper -bg--fridge-white w-full max-w-[820px] flex justify-center m-auto flex-wrap flex-col px-[20px] py-[10px]">
            <h2 className="font-dohyeon -text--fridge-black text-[15px] text-left mb-1">
              약관 동의
            </h2>
            <div className="agreementContainer w-full px-[10px]">
              <ul className="agreementList flex flex-col gap-1">
                <li className="agreement agree1 text-[13px] font-nanum -text--fridge-input-gray flex justify-between">
                  <span className="-text--fridge-red pr-[2px]">*</span>
                  <label
                    htmlFor="agree1"
                    className={
                      checkboxes.agree1 === true || checkboxes.agreeAll === true
                        ? S.agreed
                        : S.notAgreed
                    }
                  >
                    비우자냉장고 이용약관 동의 (필수)
                  </label>
                  <input
                    className={S.agreeBox}
                    checked={checkboxes.agree1}
                    onChange={handleCheck}
                    type="checkbox"
                    name="agree1"
                    id="agree1"
                  />
                </li>
                <li className="agreement agree2 text-[13px] font-nanum -text--fridge-input-gray flex justify-between">
                  <span className="-text--fridge-red pr-[2px]">*</span>
                  <label
                    htmlFor="agree2"
                    className={
                      checkboxes.agree2 === true || checkboxes.agreeAll === true
                        ? S.agreed
                        : S.notAgreed
                    }
                  >
                    개인정보 수집 이용 동의 (필수)
                  </label>
                  <input
                    className={S.agreeBox}
                    checked={checkboxes.agree2}
                    onChange={handleCheck}
                    type="checkbox"
                    name="agree2"
                    id="agree2"
                  />
                </li>
                <li className="agreement agree3 text-[13px] font-nanum -text--fridge-input-gray flex justify-between">
                  <label
                    htmlFor="agree3"
                    className={
                      checkboxes.agree3 === true || checkboxes.agreeAll === true
                        ? S.agreed
                        : S.notAgreed
                    }
                  >
                    이벤트 및 혜택 정보 제공 동의 (선택)
                  </label>
                  <input
                    className={S.agreeBox}
                    checked={checkboxes.agree3}
                    onChange={handleCheck}
                    type="checkbox"
                    name="agree3"
                    id="agree3"
                  />
                </li>
                <li className="agreement agreeAll text-[13px] font-nanum -text--fridge-black font-semibold flex justify-between">
                  <label
                    htmlFor="agreeAll"
                    className={
                      checkboxes.agreeAll === true ? S.agreed : S.notAgreed
                    }
                  >
                    [전체] 약관 동의하기
                  </label>
                  <input
                    className={S.agreeBox}
                    checked={checkboxes.agreeAll}
                    onChange={handleCheck}
                    type="checkbox"
                    name="agreeAll"
                    id="agreeAll"
                  />
                </li>
              </ul>
            </div>
            <div className="w-full h-3"></div>
            <Button type="submit">회원가입</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
