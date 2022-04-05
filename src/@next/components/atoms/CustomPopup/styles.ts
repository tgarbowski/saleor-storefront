import { styled } from "@styles";

export const CustomModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 7px;
`;

export const CustomModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 50%;
  text-align: center;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;
