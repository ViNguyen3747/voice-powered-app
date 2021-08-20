import * as styles from "./actionTypes";
const contextReducer = (state, action) => {
  switch (action.type) {
    case styles.DELETE_TRANSACTION:
      return state.filter((t) => t.id !== action.payload);
    case styles.ADD_TRANSACTION:
      return [action.payload, ...state];
    default:
      return state;
  }
};
export default contextReducer;
