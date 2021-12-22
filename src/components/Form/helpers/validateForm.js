export const validateForm = (todoName) => {
  if (todoName.length === 0) {
    return "Поле обязательно для заполнения";
  }
  if (todoName.length < 4) {
    return "Минимальная длинна 4 символа";
  }
  if (todoName.length > 20) {
    return "Максимальная длинна 20 символов";
  }
  return "";
};

export const validateBeforeSubmit = (error, touched, cb) => {
  if (error && !touched) {
    cb(true);
    return false;
  }
  if (error) return false;
  return true;
};
