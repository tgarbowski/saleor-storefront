import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin: 30px 0;
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0 1.6rem 0;
`;

export const DiscountField = styled.div`
  background-color: ${props => props.theme.colors.light};
  padding: 30px;

  ${media.smallScreen`
    padding: 30px 20px;
  `}
`;

export const Tile = styled.label<{ checked: boolean }>`
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  font-size: ${props => props.theme.typography.smallFontSize};
  cursor: pointer;
`;

export const CustomerNote = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 100%;
`;

export const InputCustomerNote = styled.textarea`
  margin-top: 24px;
  resize: none;
  height: 150px;
  max-height: 100%;
  overflow-y: auto;
  padding: 4px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: #65c947;
    border: 6px solid rgba(0, 0, 0, 0.2);
  }
`;
