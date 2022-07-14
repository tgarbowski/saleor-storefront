import ReactSVG from "react-svg";

import { media, styled } from "@styles";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  ${media.largeScreen`
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  `}

  ${media.smallScreen`
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  `}
`;

export const Loader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`;

export const WishlistButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 22px;
  font-size: 20px;
`;

export const AddToWishlistIcon = styled(ReactSVG)`
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

export const RemoveFromWishlistIcon = styled(ReactSVG)`
  margin-right: 20px;
  width: 30px;
  height: 30px;

  svg {
    width: 30px;
    height: 30px;
  }

  g {
    fill: red;
    transition: 0.3s all ease-in-out;
    &:hover {
      fill: black;
    }
  }
`;

export const WishlistIconLink = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 8px;
  right: 16px;
`;
