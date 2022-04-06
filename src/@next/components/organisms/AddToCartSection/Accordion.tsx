import React, { useState } from "react";

import AccordionItem from "./AccordionItem";
import { AccordionList } from "./styles";
import { AccordionData } from "./types";

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx(currentValue => (currentValue !== idx ? idx : -1));
  };

  return (
    <AccordionList>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </AccordionList>
  );
}

export default Accordion;
