# Практическая работа №12: Место

- Описание
- Особенности

---

**Описание**

Практическая работа №12 курса "Веб-разработчик" Яндекс.Практикума — продолжаем изучать **React**. Расширяется функциональность предыдущей практической работы.

---

**Особенности**

Подключили **React Router** для возможности навигации по проекту.

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

Теперь можно переходить по нужному пути:

```javascript
<Route path="/sign-up">
  <Register />
</Route>
<Route path="/sign-in">
  <Login />
</Route>
```

Используются соответствующие ссылки:

```javascript
<Link to="/sign-in">
  Войти
</Link>
<Link to="/sign-up">
  Регистрация
</Link>
```

Функциональность проекта доступна только зарегистрированным и авторизованным пользователям — проверяется токен, который сохраняется в локальном хранилище:

```javascript
function onLogin(data) {
  api
    .login(data)
    .then((res) => {
      localStorage.setItem("token", res.token);
      handleTokenCheck();
    })
...
api
  .checkToken(localStorage.getItem("token"))
  .then((res) => {
    if (res) {
      // меняем переменные состояния авторизации
      setLoggedIn(true);
      setCurrentUserEmail(res.data.email);
      // переходим на главную страницу
      history.push("/");
    }
```
Для этого применяется защищённый роут, использующий переменную авторизации **loggedIn**:

```javascript
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path}>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  );
};
```
Проработали UI: при успешной регистрации отображается информационный попап о том, что всё хорошо, при неудачной — тоже отображается, но сообщает о неудаче.

```javascript
function onRegister(data) {
    api
      .register(data)
      .then((res) => {
        if (res.statusCode !== 400) {
          changeMessage("Вы успешно зарегистрировались!");
          // -- показать попап Хорошо
          showInfoTooltip(true);
          setTimeout(() => {
            history.push("/sign-in");
          }, 2000);
        }
      })
      .catch((err) => {
        showInfoTooltip(false);
        if (err === "400") {
          changeMessage("Некорректно заполнено одно из полей. Попробуйте ещё раз.");
        }
      });
  }
```

Добавлено адаптивное меню для мобильных экранов.

---