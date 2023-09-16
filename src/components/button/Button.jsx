import { useNavigate } from 'react-router-dom';
import S from './Button.module.css';

export function Button({
  small = false,
  type = 'button',
  navigateTo = '/',
  ...restProps
}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(navigateTo);
    console.log(navigateTo);
    console.log('haha');
  };
  return (
    <button
      type={type}
      className={small ? S.small : S.large}
      {...restProps}
      onClick={handleNavigate}
    ></button>
  );
}
