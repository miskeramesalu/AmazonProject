import { useReducer } from "react";
import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      return {
        ...state,
        basket: existingItem
          ? state.basket.map((item) =>
              item.id === action.item.id
                ? { ...item, amount: item.amount + 1 }
                : item
            )
          : [...state.basket, { ...action.item, amount: 1 }],
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.reduce((acc, item) => {
          if (item.id === action.id) {
            item.amount > 1
              ? acc.push({ ...item, amount: item.amount - 1 })
              : null;
          } else {
            acc.push(item);
          }
          return acc;
        }, []),
      };
    }

    case Type.EMPTY_BASKET:
      return { ...state, basket: [] };

    case Type.SET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};