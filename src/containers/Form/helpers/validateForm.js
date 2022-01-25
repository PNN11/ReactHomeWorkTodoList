export const validateFormRU = (todoName) => {
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

export const validateFormEN = (todoName) => {
  if (todoName.length === 0) {
    return "This field is required";
  }
  if (todoName.length < 4) {
    return "Minimum length of this field 4 characters";
  }
  if (todoName.length > 20) {
    return "Maximum length of this field 20 characters";
  }
  return "";
};

export const validateForm = { ru: validateFormRU, en: validateFormEN };

export const validateBeforeSubmit = (error, touched, cb) => {
  if (error && !touched) {
    cb(true);
    return false;
  }
  if (error) return false;
  return true;
};
