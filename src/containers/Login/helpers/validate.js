export const validateBeforeLogin = (users, loginData, trans) => {
  const res = { login: null, error: null };
  if (users) {
    const user = users.find((user) => user.login === loginData.login);
    if (user) {
      if (user.password === loginData.password) {
        res.login = user.login;
      } else {
        res.error = `${trans.login.errors.password}`;
      }
    } else {
      res.error = `${trans.login.errors.login}`;
    }
  } else {
    res.error = `${trans.login.errors.login}`;
  }
  return res;
};
