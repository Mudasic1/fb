// components/HorizontalLineWithText.js
const HorizontalLineWithText = ({ "text": text = "or" }) => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-black"></div>
        <span className="mx-2 text-black font-semibold">{text}</span>
        <div className="flex-grow border-t border-black"></div>
      </div>
    );
  };
  
  export default HorizontalLineWithText;
  