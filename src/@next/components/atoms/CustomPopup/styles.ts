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

export const CustomModalCloseButton = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  background: #65c947;
  border-radius: 7px;
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const CustomModalText = styled.p`
  padding: 30px 30px;
  word-break: break-word;
`;

export const CustomModalTitle = styled.div`
  padding: 20px 0 20px 0;
  font-size: 18px;
  color: black;
  text-align: center;
  box-shadow: 0 3px 6px #2222220d;
`;
