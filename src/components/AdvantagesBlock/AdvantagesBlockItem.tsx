import * as React from "react";

import "./scss/index.scss";

interface AdvantagesBlockItemProps {
  title: string | undefined;
  text: string | undefined;
  image: string | undefined;
}

export const AdvantagesBlockItem: React.FC<AdvantagesBlockItemProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <div className="advantages-block-item">
      <img src={image} className="advantages-block-item--image" alt="" />
      <h3 className="advantages-block-item--heading">{title}</h3>
      <p className="advantages-block-item--text">{text}</p>
    </div>
  );
};
