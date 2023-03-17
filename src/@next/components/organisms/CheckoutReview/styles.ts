import { media, styled } from "@styles";

export const Wrapper = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  ${media.smallScreen`
    grid-template-columns: repeat(1, 1fr);
  `}
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin: 0 0 20px 0;
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0 1.6rem 0;
`;

export const SubTitle = styled.h4`
  padding: 0.6rem 0 1.4rem 0;
  font-size: ${props => props.theme.typography.baseFontSize};
  color: rgba(50, 50, 50, 0.6);
`;

export const TextSummary = styled.p`
  line-height: 1.6;
  font-size: ${props => props.theme.typography.h4FontSize};
  word-break: break-word;
`;

export const ErrorMessages = styled.div`
  margin-top: 30px;
`;

export const CustomerNoteContainer = styled.section`
  grid-column: 1 / -1;
`;

export const TermsSection = styled.div`
  margin-top: 2rem;
`;

export const CheckboxInput = styled.input.attrs(props => ({
  type: "checkbox",
  "data-test": "acceptTermsCheckbox",
  name: "accept-terms-checkbox",
  checked: props.checked,
}))`
  /* Styles for the checkbox */
  appearance: none;
  width: 24px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  outline: none;
  margin-right: 8px;
  position: relative;

  /* Styles for the checked state */
  &:checked {
    background-color: #007bff;
    border-color: #007bff;

    /* Styles for the checkmark */
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
`;

export const TermsSectionInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;
