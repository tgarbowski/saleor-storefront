import * as React from "react";

import "./scss/index.scss";

interface FooterUspItemProps {
  title: string | undefined;
  text: string | undefined;
  image: string | undefined;
}

export const FooterUspItem: React.FC<FooterUspItemProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <div className="footer-usp-item">
      <img src={image} className="footer-usp-item--image" alt="footer" />
      <h3 className="footer-usp-item--heading">{title}</h3>
      <p className="footer-usp-item--text">{text}</p>
    </div>
  );
};
