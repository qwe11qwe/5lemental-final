function InputBox({ type = 'text', name = null, ...restProps }) {
  console.log(type);
  console.log(name);
  return (
    <div>
      <input className="" type={type} name={name} {...restProps} />
    </div>
  );
}

export default InputBox;
