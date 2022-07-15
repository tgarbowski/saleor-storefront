import ReactSVG from "react-svg";
import { css } from "styled-components";

import { media, styled } from "@styles";

const textProps = css`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  text-align: left;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  background: whitesmoke;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  height: 31rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  :hover {
    background-color: ${props => props.theme.colors.hoverLightBackground};
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
  word-break: break-word;
`;

export const Price = styled.p`
  ${textProps}
`;

export const UndiscountedPrice = styled.p`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  text-align: left;
  text-decoration: line-through;
  color: ${props => props.theme.colors.baseFontColorSemiTransparent};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Image = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;

  > img {
    flex-grow: 1;
    object-fit: contain;
  }
`;

export const WishlistIcon = styled(ReactSVG)`
  margin-right: 20px;
  width: 30px;
  height: 30px;

  svg {
    width: 30px;
    height: 30px;
  }

  g {
    transition: 0.3s all ease-in-out;
    &:hover {
      fill: red;
    }
  }
`;

export const WishlistIconLink = styled.button`
  position: relative;
  margin-left: auto;
`;
