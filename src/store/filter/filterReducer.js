import { SET_FILTER_VALUE, SET_FILTER_STATUS } from "./";
const defaultState = {
  filterValue: "",
  filterStatus: "Все",
};

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.payload };
    case SET_FILTER_STATUS:
      return { ...state, filterStatus: action.payload };
    default:
      return state;
  }
};
