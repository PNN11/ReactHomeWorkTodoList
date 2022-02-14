export const ru = {
  header: {
    title: "Список задач",
    todoNumber: "Количество задач",
    changeTheme: "Изменить тему",
    changeLang: "Изменить язык",
    welcome: "Приветствую ",
    logout: "Выйти",
  },
  filter: {
    input: {
      placeholder: "Начни вводить",
      label: "Поиск по названию",
    },
    buttons: {
      all: "Все",
      completed: "Выполненные",
      deleted: "Удалённые",
    },
  },
  list: {
    important: "Важное",
    title: "Заданий нет",
    buttons: {
      done: "Выполнено",
      delete: "Удалить",
      edit: "Изменить",
    },
  },
  form: {
    input: {
      label: "Новое задание",
      placeholder: "Название",
    },
    inputDescription: {
      label: "Добавьте описание",
      placeholder: "Описание",
    },
    button: "Создать",
  },
  modal: {
    input: {
      label: "Изменить задание",
      placeholder: "Новое задание",
    },
    buttons: {
      edit: "Изменить",
      close: "Закрыть",
    },
  },
  login: {
    title: "Войдите",
    inputLogin: {
      label: "Логин",
      placeholder: "Введите имя пользователя",
    },
    inputPassword: {
      label: "Пароль",
      placeholder: "Введите пароль",
    },
    button: "Далее",
    reg: {
      text: "Нет аккаунта?",
      link: "Зарегистрируйтесь",
    },
    errors: {
      main: "Введите имя пользователя и пароль",
      login: "Пользователя с таким логином не существует",
      password: "Неверный пароль",
    },
  },
  register: {
    title: "Регистрация",
    inputLogin: {
      label: "Логин",
      placeholder: "Введите имя пользователя",
    },
    inputName: {
      label: "Имя",
      placeholder: "Введите своё имя",
    },
    inputLastName: {
      label: "Фамилия",
      placeholder: "Введите свою фамилию",
    },
    inputPassword: {
      label: "Пароль",
      placeholder: "Введите пароль",
    },
    button: "Зарегистрироваться",
    log: {
      text: "Уже есть аккаунт?",
      link: "Войдите",
    },
    errors: {
      login: "Поле Логин обязательно для заполнения",
      name: "Поле Имя обязательно для заполнения",
      lastName: "Поле Фамилия обязательно для заполнения",
      password: "Поле Пароль обязательно для заполнения",
      sameLogin: "Логин уже существует",
    },
  },
};

export const en = {
  header: {
    title: "Todolist",
    todoNumber: "Number of todos",
    changeTheme: "Change Theme",
    changeLang: "Change Lang",
    welcome: "Hello ",
    logout: "Logout",
  },
  filter: {
    input: {
      placeholder: "Start typing",
      label: "Search by name",
    },
    buttons: {
      all: "All",
      completed: "Completed",
      deleted: "Deleted",
    },
  },
  list: {
    important: "Important",
    title: "No tasks",
    buttons: {
      done: "Done",
      delete: "Delete",
      edit: "Edit",
    },
  },
  form: {
    input: {
      label: "New task",
      placeholder: "Task name",
    },
    inputDescription: {
      label: "Add description",
      placeholder: "Description",
    },
    button: "Create",
  },
  modal: {
    input: {
      label: "Edit task",
      placeholder: "New task",
    },
    buttons: {
      edit: "Edit",
      close: "Close",
    },
  },
  login: {
    title: "Login",
    inputLogin: {
      label: "Login",
      placeholder: "Enter your login",
    },
    inputPassword: {
      label: "Password",
      placeholder: "Enter your password",
    },
    button: "Go next",
    reg: {
      text: "Don`t have an account?",
      link: "Register",
    },
    errors: {
      main: "Enter login and password",
      login: "User with this login does not exist",
      password: "Invalid password",
    },
  },
  register: {
    title: "Register",
    inputLogin: {
      label: "Login",
      placeholder: "Enter your login",
    },
    inputName: {
      label: "Name",
      placeholder: "Enter your name",
    },
    inputLastName: {
      label: "Last Name",
      placeholder: "Enter your last Name",
    },
    inputPassword: {
      label: "Password",
      placeholder: "Enter your password",
    },
    button: "Register",
    log: {
      text: "Already have an account?",
      link: "Login",
    },
    errors: {
      login: "Login is a required field",
      name: "Name is a required field",
      lastName: "LastName is a required field",
      password: "Password is a required field",
      sameLogin: "Login already exists",
    },
  },
};

export const langs = { ru, en };
