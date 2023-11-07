import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`; //  if true == }? 값 {   if  false == : 값

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    // define when the form messages appears 실시간이 반응
  });

  //console.log(isValid);
  //output false / true === input in / no input
  //you can add some features to isValid to create some conditions
  //example the login button opacity
  //if true == opactity : 1
  //if false == opactity : 0.5
  //유효성 검사 후 boolean값으로 반환함
  //ref to button tag

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
            required: "PW 필수입니다.",
            minLength: {
              value: 8,
              message: "비밀번호를 8자리 이상 잒성해 주서요.",
            },
            pattern: {
              //비밀번호 특수문자 특수문자 대문자 포함해서 입력해주세요
              //regex정규표현식
              //https://hamait.tistory.com/342
              //비밀번호 정규표현식 패턴
              //https://www.wrapuppro.com/programing/view/MIw5kPB3ao2YJVx
              //ex
              // 최소 8 자, 하나 이상의 대문자, 하나의 소문자 및 하나의 숫자 정규식
              //"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              //jsx need to write between slash / /
              message:
                "최소 8 자, 하나 이상의 대문자, 하나의 소문자 및 하나의 숫자 가능",
            },
          })}
          type="password"
          placeholder="PW"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button $isActive={isValid}>Login</Button>
      </Form>
    </Wrap>
  );
};
