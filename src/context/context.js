import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import * as types from "./actionTypes";
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: types.DELETE_TRANSACTION, payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: types.ADD_TRANSACTION, payload: transaction });
  };

  console.log(transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
