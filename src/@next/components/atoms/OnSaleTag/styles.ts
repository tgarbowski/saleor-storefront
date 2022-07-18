import { styled } from "@styles";

export const Label = styled.section`
  color: rgb(255, 255, 255);
  background-color: #9c0000;
  display: inline-block;
  padding-left: 11px;
  padding-right: 11px;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 2.2rem;
  margin-top: 20px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;

  @media (max-width: 720px) {
    left: 0;
  }
`;
