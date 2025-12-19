import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Popup from '../common/Popup';
import { getImageSvg } from '../../utility/getImage';

const BackToTopButton = ({openPop, setOpenPop}) => {

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

   const handleButtonClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=7695950724&text=Hi!%20Can%20I%20get%20more%20information%20on%20Construction'; // Redirect to an external URL
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
    <button id="whatsBtn" className={`fixed! ${(window.scrollY > 300) ? 'bottom-48 md:bottom-56' : 'bottom-28 md:bottom-32'} right-5`}
              onClick={handleButtonClick}
    >
        <div className="sign">
            <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
            <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
            ></path>
            </svg>
        </div>

        <div className="text">Whatsapp</div>
    </button>

    <button id="whatsBtn" className={`bg-a-royalsafforn! fixed! ${(window.scrollY > 300) ? 'bottom-32 md:bottom-36' : 'bottom-10'} right-5 hover:w-[200px]!`}
        onClick={() => setOpenPop(true)}
        style={{boxShadow : "0px 0px 0px 4px rgba(230, 137, 0, 0.53)"}}
    >
        <div className="sign">
          <img src={getImageSvg("builder_worker")} className='size-7 md:size-10'  loading='lazy' alt={`worker icon`} title={`icon of worker`}  />
        </div>

        <div className="text text-xs! md:text-base!">Start Construction</div>
    </button>

      {isVisible && (
        <button
          onClick={scrollToTop}
          id='backtotop'
          className={`fixed! bottom-16 right-5 text-xl`}
          aria-label='back to top button'
        >
            <svg className="svgIcon" viewBox="0 0 384 512">
                <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
            </svg>

            <div className="hidden">Whatsapp</div>
        </button>
      )}

      {isVisible && (
        <div className='w-full bg-a-royalsafforn fixed! bottom-0 left-0 right-0 z-50' onClick={() => setOpenPop(true)}>
          <Link className='w-full px-10 py-2! inline-block text-white font-outfit! text-2xl text-center font-medium'>
            Start Construction
          </Link>
        </div>
      )}

    </>
  );
};

export default BackToTopButton;