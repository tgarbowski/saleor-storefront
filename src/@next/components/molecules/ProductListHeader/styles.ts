import { styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
`;

export const Bar = styled.div`
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
  box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
  border-radius: 45px;

  @media (max-width: 520px) {
    height: 10rem;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    margin-top: 1rem;
    margin-bottom: 2.4rem;
    box-shadow: 0 8px 24px rgb(149 157 165 / 20%);
    border-radius: 45px;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 40px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 520px) {
    margin-bottom: 1.2rem;
  }
`;

export const RightSide = styled.div`
  height: 1.2rem;

  @media (max-width: 520px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const FiltersButton = styled.button`
  font-size: ${props => props.theme.typography.smallFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Clear = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  font-weight: 600;
  border-radius: 45px;
  margin-left: 1rem;
`;

export const Element = styled.span`
  padding-left: 2rem;

  @media (max-width: 520px) {
    padding-left: 0;
  }
`;

export const Filters = styled.span`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0.6rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.lightFont};
`;

export const Sort = styled.div`
  width: 12rem;
  display: inline-block;
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;

export const FiltersChipsHeading = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1.4rem;
  margin-top: 1rem;
  font-size: 1.25rem;
`;
