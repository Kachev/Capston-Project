import styled from "styled-components";
const StyledButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #73ca8e;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  margin-left: 27%;
  `;
export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
