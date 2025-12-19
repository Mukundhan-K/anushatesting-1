import React from 'react';

const ButtonArrow = ({color="a-royalsafforn",textclr="white", text="Submit", txthovclr="white", btnonclick}) => {
  return (<>
    <button href="#" onClick={btnonclick} className={`buttonArrow w-fit bg-${color} text-xl text-${textclr} group hover:bg-black hover:text-${txthovclr}`} >
        {text}
        <span className="buttonArrow__icon-wrapper">
            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg"
            width="15">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
            </svg>

            <svg viewBox="0 0 14 15" fill="none" width="15" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" ></path>
            </svg>
        </span>
    </button>

  </>); 
};

export default ButtonArrow;