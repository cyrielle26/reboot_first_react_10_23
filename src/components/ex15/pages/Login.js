import { useForm } from "react-hook-form";
import styled from "styled-components";
import { data } from "../api";
import { ErrorMessage } from "../components/ErrorMessage";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #777;
`;
const Form = styled.form`
  background-color: #444;
  max-width: 450px;
  width: 100%;
  height: 550px;
  border: 1px solid #dbdbdb;
  margin-top: 15vh;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;
const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
  color: honeydew;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  margin-top: 10px;
  padding: 0 25px;
  border-radius: 30px;
  background-color: #222;
  color: #ffff;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: hotpink;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const Con = styled.div`
  margin: 20px auto;
  a {
    font-size: 16px;
    color: #dfdfdf;
  }
`;

const SeperateLine = styled.div`
  width: 80%;
  height: 2px;
  background-color: #dbdbdb;
  margin: 40px;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const loginHandler = (data) => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>
          <h3>{data[0].title}</h3>
        </Title>
        <Input
          {...register("username", {
            required: "please enter your ID",
            miniLength: {
              value: 6,
              message: "Your ID should contain at least 6 characters",
            },
          })}
          type="text"
          placeholder="ID"
        />
        <ErrorMessage {...errors?.username?.message} />
        <Input
          {...register("password", { required: "please enter your password" })}
          type="password"
          placeholder="PASSWORD"
        />
        <Button $isActive={isValid}>
          <h3>{data[0].button}</h3>
        </Button>
        <SeperateLine></SeperateLine>
        <Con>
          <Link to="/resetPassword">Forgot your password?</Link>
        </Con>

        <Con>
          <Link to="/Signup" element={<Signup />}>
            Sign up
          </Link>
        </Con>
      </Form>
    </Wrap>
  );
};
