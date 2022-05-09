import { getCookie, setCookies } from 'cookies-next';
import React, { useEffect, useRef } from 'react';

import './scss/index.scss';

const CookiesBar = () => {
  const cookieContainer = useRef(null);
  const cookieButton = useRef(null);

  const handleClose = () => {
    cookieContainer.current.classList.remove("active");
    setCookies("cookieBannerDisplayed", "true");
  };

  useEffect(() => {
    cookieButton.current.addEventListener("click", () => {
      cookieContainer.current.classList.remove("active");
      setCookies("cookieBannerDisplayed", "true");
    });
    setTimeout(() => {
      if (!getCookie("cookieBannerDisplayed")) {
        cookieContainer.current.classList.add("active");
      }
    }, 3000);
    return cookieButton.current.removeEventListener("click", handleClose);
  }, []);

  return (
    <div className="cookies-box" ref={cookieContainer}>
      <p>
        Ta strona używa plików cookie, aby zapewnić Ci jak najlepsze z
        korzystanie z jej funkcjonalności. Aby dowiedzieć się więcej, zapoznaj
        się z naszą polityką prywatności i plikami cookie.
      </p>

      <button className="cookie-btn" ref={cookieButton}>
        Zrozumiałem
      </button>
    </div>
  );
};
export default CookiesBar;
