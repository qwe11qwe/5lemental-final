import S from './Button.module.css';

export function Button({ small = false, type = 'button', ...restProps }) {
  return (
    <button
      type={type}
      className={small ? S.small : S.large}
      {...restProps}
    ></button>
  );
}
