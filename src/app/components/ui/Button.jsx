function Button({ buttonColor = "", buttonText = "" }) {

  return (
    <button className={`w-28 h-10 ${buttonColor} rounded-full text-light-yellow font-bold`}>{ buttonText }
    </button>
  );
}

export default Button;

