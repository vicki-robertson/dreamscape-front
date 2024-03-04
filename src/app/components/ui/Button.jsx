function Button({ buttonColor = "", buttonText = "", onClick }) {

  return (
    <button className={`w-28 h-10 ${buttonColor} rounded-full text-light-yellow font-bold`}
    onClick={onClick}
    >{ buttonText }
    </button>
  );
}

export default Button;

