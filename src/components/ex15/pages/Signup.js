import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { data } from "../api";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 18vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  margin-top: 10px;
  padding: 0 15px;
  border-radius: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const Signup = () => {
  const { id } = useParams();

  return (
    <Wrap>
      <Form>
        <Title>
          <h3>{data[1].title}</h3>
        </Title>
        <Input></Input>
        <Input></Input>
        <Button>
          <h3>{data[1].button}</h3>
        </Button>
      </Form>
    </Wrap>
  );
};
