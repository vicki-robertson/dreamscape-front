function Button({ buttonColor = "", buttonText = "", onClick, type="submit" }) {

  return (
    <button className={`w-28 h-10 ${buttonColor} rounded-full text-light-yellow font-bold`}
    type={type}
    onClick={onClick}
    >{ buttonText }
    </button>
  );
}

export default Button;

