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
