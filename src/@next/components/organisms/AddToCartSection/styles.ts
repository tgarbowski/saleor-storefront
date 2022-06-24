import { styled } from "@styles";

export const AddToCartSelection = styled.div``;

export const ProductNameHeader = styled.h3`
  text-transform: uppercase;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const ProductPricing = styled.h4`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  margin-bottom: ${props => props.theme.spacing.spacer};
`;

export const UndiscountedPrice = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
  font-size: ${props => props.theme.typography.smallFontSize};
`;

export const VariantPicker = styled.div`
  display: grid;
  margin-top: 20px;

  .react-select-wrapper,
  .input {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

export const QuantityInput = styled.div`
  margin-top: 20px;
  padding-top: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
`;

export const CustomModalCloseButton = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  background: #65c947;
  border-radius: 7px;
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const CustomModalText = styled.p`
  padding: 30px 30px;
  word-break: break-word;
`;

export const CustomModalTitle = styled.div`
  padding: 20px 0 20px 0;
  font-size: 18px;
  color: black;
  text-align: center;
  box-shadow: 0 3px 6px #2222220d;
`;
export const AccordionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const AccordionSingleItem = styled.li`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;

  &:not(:first-of-type) {
    border-top: 0;
  }
  &:hover {
    cursor: pointer;
  }
  &:first-of-type {
    margin-top: 2.5rem;
  }
`;

export const AccordionTitle = styled.h2`
  width: 100%;
  margin: 0;
  padding: 1rem 2rem;
`;

export const AccordionItemContent = styled.div`
  border-top: 1px solid #cccccc;
`;

export const AccordionItemContainer = styled.div`
  transition: height 0.2s ease-in-out;
  overflow: hidden;
  width: 100%;
`;

export const AccordionItemBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  align-items: center;
  gap: 2rem;
`;

export const AccordionContent = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`;

export const AccordionListItem = styled.li`
  padding: 1rem 0;
`;

export const SocialSharingWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
