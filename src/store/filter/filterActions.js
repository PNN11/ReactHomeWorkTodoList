export const SET_FILTER_VALUE = "SET_FILTER_VALUE";

export const SET_FILTER_STATUS = "SET_FILTER_STATUS";

export const changeFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: value,
});

export const changeFilterStatus = (status) => ({
  type: SET_FILTER_STATUS,
  payload: status,
});
