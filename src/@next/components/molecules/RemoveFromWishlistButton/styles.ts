import ReactSVG from "react-svg";

import { styled } from "@styles";

export const RemoveFromWishlistBtn = styled.button`
  width: 390px;
  border: 2px solid #000;
  padding: 0.7rem 1.7rem;
  transition: 0.3s;
  outline: none;
  cursor: pointer;
  border-radius: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.25rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 762px) {
    padding: 0.9rem 0;
    width: 100%;
  }

  &:hover {
    background-color: #000;
    color: #fff;

    svg > g {
      fill: #fff;
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
`;
