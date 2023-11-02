import { useForm, useFormState } from "react-hook-form";
import { Login } from "../pages/Login";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Form,
  Title,
  Input,
  BottomInfo,
  Separ,
} from "../components/loginStyles";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const loginHandler = (data) => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>SIGN UP</Title>
        <Input
          {...register("username", {
            required: "you need to enter your ID.",
          })}
          type="text"
          placeholder="ID"
        />

        <ErrorMessage text={errors?.username?.message} />

        <Input {...register("email", {})} type="text" placeholder="Email" />

        <Input
          {...register("name", {
            required: "you need to enter your name.",
            minLength: {
              value: 8,
              message: "비밀번호 8 자리 이상 입니다",
            },
          })}
          type="text"
          placeholder="Name"
        />
        <ErrorMessage text={errors?.name?.message} />

        <Input
          {...register("password", {
            required: "you need to enter your Password.",
            minLength: {
              value: 8,
              message: "비밀번호 8 자리 이상 입니다",
            },
          })}
          type="password"
          placeholder="Password"
        />
        <ErrorMessage text={errors?.password?.message} />

        <ButtonUi active={isValid} text={"Sign up"} />

        <Separ>
          <span></span>
          <b>OR</b>
          <span></span>
        </Separ>

        <BottomInfo>
          Do you have an account?
          <Link to="/login">Login &rarr;</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};
