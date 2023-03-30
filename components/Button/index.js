import styled from "styled-components";
export default function Button({ children}) {
  const Button = styled.button`
    width: 10rem;
    height: 2rem;
    background-color: #0a0a23;
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
    margin-top:20px;
    
  `;

  return <Button type="button">{children}</Button>;
}
