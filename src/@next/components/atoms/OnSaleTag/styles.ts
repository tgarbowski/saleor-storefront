import { styled } from "@styles";

export const Label = styled.section`
  font-size: 16px;
  color: #fff;
  background-color: red;
  padding: 0.5rem 0.5rem;
  text-align: center;
  display: block;
  width: 124px;
  margin-top: 42px;
  position: absolute;
  right: -20px;
  top: -30px;

  @media (max-width: 720px) {
    left: 0;
  }
`;
