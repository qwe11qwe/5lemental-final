function InputBox({ type = 'text', name = null, id = null, ...restProps }) {
  return (
    <div>
      <input
        className="border-[1px] rounded-[15px] py-3 px-[20px] min-w-full font-nanum text-[13px] -text--fridge-black placeholder:-text--fridge-input-gray placeholder:font-normal -border--fridge-gray"
        type={type}
        name={name}
        id={id}
        {...restProps}
      />
    </div>
  );
}

export default InputBox;
