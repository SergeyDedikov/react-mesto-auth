import PageWithAuthForm from "./PageWithAuthForm";

function Register(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PageWithAuthForm
      onSubmit={handleSubmit}
      name={"register"}
      title={"Регистрация"}
      textButtonSubmit={"Зарегистрироваться"}
    >
      <p className="authentication__question">Уже зарегистрированы? Войти</p>
    </PageWithAuthForm>
  );
}

export default Register;
