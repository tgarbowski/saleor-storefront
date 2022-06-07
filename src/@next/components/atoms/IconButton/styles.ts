import { styled } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 15px;
  cursor: pointer;

  width: ${props => `${props.theme.iconButton.size}px`};
  height: ${props => `${props.theme.iconButton.size}px`};
  background-color: ${props => props.theme.iconButton.backgroundColor};

  border-radius: 50%;
  border-width: 0;

  transition: 0.3s;

  svg {
    display: block;
    path {
      transition: 0.3s;
    }
  }

  :hover {
    background-color: ${props => props.theme.iconButton.hoverBackgroundColor};
    svg {
      path {
        fill: ${props => props.theme.iconButton.hoverForegroundColor};
      }
    }
  }
`;
