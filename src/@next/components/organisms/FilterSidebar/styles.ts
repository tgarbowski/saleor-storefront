import { styled } from "@styles";

export const Wrapper = styled.div`
  overflow: scroll;
  width: 410px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  box-shadow: 6px 0px 30px rgba(0, 0, 0, 0.15);
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding: 0;

  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h3FontSize};
  position: sticky;
  top: 0;
  flex-direction: column;
  background: #fff;
  z-index: 1;
  padding-bottom: 32px;
  padding-top: 32px;
  box-shadow: 0 3px 6px #2222220d;
`;

export const HeaderName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const SearchWrapper = styled.div`
  width: 80%;
`;

export const Search = styled.input`
  width: 100%;
  padding: 10px 12px;
`;