const InputBox = ({ type, name, placeholder}) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {name}
        </label>
        <div>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
            name={name}
            id="inline-full-name"
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};
export default InputBox;
