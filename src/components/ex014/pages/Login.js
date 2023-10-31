import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";

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
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2ps;
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
  cursor: pointer;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //console.log(errors && errors.username && errors.username.message);
  //console.log(errors?.username?.message);
  //=>&&연산자로 객체에 접근하는 것보다 optional chaining을 이용하여
  //객체 안에 있는 객체를 쉽게 접근할 수 있음

  const loginHandler = (data) => {
    //event함수 매개변수의 첫번째 자리는
    //유저 입력한 내용을 객체형테로 반환함
    //console.log(data);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>

        <Input
          {...register("username", {
            required: "아이디 필수",
          })}
          type="text"
          placeholder="ID"
        />
        {/* <span>{errors?.username?.message}</span> */}
        <ErrorMessage message={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "비밀번호 필수",
          })}
          type="password"
          placeholder="PW"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button>Login</Button>
      </Form>
    </Wrap>
  );
};
