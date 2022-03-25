import React, { useEffect, useRef, useState } from "react";

import { getRefValue } from "./lib/hooks";
import {
  AccordionItemContainer,
  AccordionItemContent,
  AccordionSingleItem,
  AccordionTitle,
} from "./styles";
import { AccordionData } from "./types";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <AccordionSingleItem className={isOpen ? "active" : ""}>
      <AccordionTitle onClick={btnOnClick}>{data.title}</AccordionTitle>
      <AccordionItemContainer>
        <AccordionItemContent ref={contentRef} style={{ height }}>
          {data.content}
        </AccordionItemContent>
      </AccordionItemContainer>
    </AccordionSingleItem>
  );
}

export default AccordionItem;
