export const setItemToLocalStorage = (key, value) => {
  if (typeof value === "object") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getItemFromLocalStorage = (key) => {
  let res = localStorage.getItem(key);
  try {
    return JSON.parse(res ?? "null");
  } catch {
    return res ?? null;
  }
};

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
