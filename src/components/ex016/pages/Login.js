import { useForm, useFormState } from "react-hook-form";
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
import { Signup } from "../pages/Signup";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {};

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "you need to enter your ID.",
          })}
          type="text"
          placeholder="ID"
        />

        <ErrorMessage text={errors?.username?.message} />

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

        <ButtonUi active={isValid} text={"LOGIN"} />

        <Separ>
          <span></span>
          <b>OR</b>
          <span></span>
        </Separ>

        <BottomInfo>
          You don't have an account?
          <Link to="/signup">Sign Up &rarr;</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};
