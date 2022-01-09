const defaultState = {
  filterValue: "",
  filterStatus: "Все",
};

const SET_FILTER_VALUE = "SET_FILTER_VALUE";

const SET_FILTER_STATUS = "SET_FILTER_STATUS";

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.value };
    case SET_FILTER_STATUS:
      return { ...state, filterStatus: action.status };
    default:
      return state;
  }
};

export const changeFilterValue = (value) => ({ type: SET_FILTER_VALUE, value });

export const changeFilterStatus = (status) => ({
  type: SET_FILTER_STATUS,
  status,
});
