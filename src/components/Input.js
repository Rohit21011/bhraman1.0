const InputBox = ({ type, name,value, placeholder,onchange ,customClass, lable}) => {
  return (
    <>
      
        {lable && (
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={name}
          >
            {name}
          </label>
        )}
       
          <input
            className={customClass ? customClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"}
            name={name}
            value={value}
            id="inline-full-name"
            type={type}
            onChange={onchange}
            placeholder={placeholder}
          />
        
      
    </>
  );
};
export default InputBox;
