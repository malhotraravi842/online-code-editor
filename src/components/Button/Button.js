import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => (props.height ? props.height : "44px")};
  text-decoration: none;
  outline: none;
  padding: 0 40px;
  background-color: rgba(68, 72, 87);
  border-radius: 6px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export default Button;
