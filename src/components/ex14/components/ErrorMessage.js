import styled from "styled-components";

const Message = styled.div`
  color: red;
  font-weight: 500;
  padding-top: 15px;
`;

export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};
