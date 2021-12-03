# Практическая работа №11: Место

- Описание
- Особенности

---

**Описание**

Практическая работа №11 курса "Веб-разработчик" Яндекс.Практикума — продолжаем изучать **React**.

---

**Особенности**

Применили в проекте контекст — все данные о пользователе, полученные от сервера, сохраняем в одну переменную **currentUser**:

```javascript
function App() {
  // -- Переменная состояния профиля
  const [currentUser, setCurrentUser] = useState(defaultUser);
  ...
  // -- Запрос данных с сервера
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardList()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
```

Подписываемся на контекст и используем его в других компонентах:

```javascript
return (
    <CurentUserContext.Provider value={currentUser}>
      <Header />
      <Main />
      ...)

function Main(props) {
  // -- Подписываемся на контекст
  const currentUser = useContext(CurentUserContext);
...
  return (
    <main className="main">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-box">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
...
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
```

Реализовали редактирование и отправку всех форм:

```javascript
const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Получаем данные пользователя для полей формы
    if (currentUser && props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
...
 useEffect(() => {
    if (props.isSubmitted) {
      avatarRef.current.value = "";
    }
  }, [props.isSubmitted]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"edit-avatar"}
      title={"Обновить аватар"}
      textButtonSubmit={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
```

---
Дальнейше расширение функционала данного проекта — в следующей практической работе.