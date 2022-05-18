import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiesBar = () => {
  return (
    <CookieConsent
      buttonText="Zrozumiałem"
      expires={150}
      disableStyles
      location="bottom"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: "1000",
        background: "#fff",
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        padding: "30px",
        borderRadius: "5px",
        maxWidth: "686px",
        wordBreak: " break-word",
        display: "block",
        color: "black",
      }}
      cookieName="cookieBannerDisplayed"
      buttonStyle={{
        padding: "7px 14px",
        background: "#65c947",
        color: "#fff",
        marginTop: "2rem",
      }}
      sameSite="strict"
    >
      Ta strona używa plików cookie, aby zapewnić Ci jak najlepsze z korzystanie
      z jej funkcjonalności. Aby dowiedzieć się więcej, zapoznaj się z naszą
      polityką prywatności i plikami cookie.
    </CookieConsent>
  );
};
export default CookiesBar;
