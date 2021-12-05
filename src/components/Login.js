import PageWithAuthForm from "./PageWithAuthForm";

function Login(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PageWithAuthForm
      onSubmit={handleSubmit}
      name={"login"}
      title={"Вход"}
      textButtonSubmit={"Войти"}
    />
  );
}

export default Login;
