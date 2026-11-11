import { Controller, useForm } from "react-hook-form";
import styles from "@/assets/styles/Login.module.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

function LoginPage() {
  const toast = useRef();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      toast.current.show({
        severity: "success",
        summary: "Created booking",
        life: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    },
    onError: (error) => {
      toast.current.show({
        severity: "error",
        summary: "Login failed.",
        sticky: true,
      });
    },
  });

  function onSubmit(credentials) {
    console.log("Login successfull!");
  }

  function loginUser() {
    console.log("Success!");
  }

  return (
    <div className={styles.loginContainer}>
      <Toast ref={toast} />
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className={styles.loginTitle}>Login</h1>

        <div className={styles.loginFields}>
          <div className={styles.loginField}>
            <label className={styles.loginLabel} htmlFor="email">
              E-mail
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Enter your e-mail address.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address.",
                },
              }}
              render={({ field }) => (
                <InputText
                  className={styles.loginInput}
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                />
              )}
            />
            {errors.email && <Message text={errors.email.message} />}
          </div>

          <div className={styles.loginField}>
            <label className={styles.loginLabel} htmlFor="password">
              Hasło
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Enter your password." }}
              render={({ field }) => (
                <Password
                  className={styles.loginPassword}
                  inputClassName={styles.loginInput}
                  inputId="password"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  feedback={false}
                  toggleMask
                />
              )}
            />
            {errors.password && <Message text={errors.password.message} />}
          </div>
        </div>

        <Button className={styles.submitButton} type="submit">
          Zaloguj się
        </Button>
      </form>
      <div className={styles.test}></div>
    </div>
  );
}

export default LoginPage;
