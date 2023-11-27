
import Button from "./Button";

const AlertMessage = ({hide,message,click,bgColor}) => {
 
  return (
    <>
    {
        hide && (
<div
      id="alert-5"
      className={`flex items-center p-4 rounded-lg ${bgColor} `}
      role="alert"
    >   
      <div className="ms-3 text-sm text-gray-900 font-bold ">
        {message}
      </div>
      <button   
        onClick={click}
        className={`ms-auto -mx-1.5 -my-1.5 ${bgColor} text-black font-bold rounded-lg p-1.5  inline-flex items-center justify-center h-8 w-8 `}
      >x</button>
    </div>
        )
    }

    
    </>
  );
};
export default AlertMessage