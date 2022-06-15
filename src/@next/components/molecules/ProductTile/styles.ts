import { css } from "styled-components";

import { media, styled } from "@styles";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background: whitesmoke;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  height: 29rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  text-align: center;

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

export const Image = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;

  > img {
    flex-grow: 1;
    object-fit: contain;
  }
`;
