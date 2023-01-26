import { createContext, useReducer } from 'react';

export const Context = createContext();

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADDBASE':
      return { ...state, base: action.payload };
    case 'ADDTOPPING':
      return { ...state, toppings: action.payload };
    case 'RESET':
      return { base: '', toppings: [], showModal: false };
    case 'MODAL':
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
};

export function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(orderReducer, {
    base: '',
    toppings: [],
    showModal: false,
  });

  const addBase = (base) => {
    dispatch({ type: 'ADDBASE', payload: base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!state.toppings.includes(topping)) {
      newToppings = [...state.toppings, topping];
    } else {
      newToppings = state.toppings.filter((item) => item !== topping);
    }
    dispatch({ type: 'ADDTOPPING', payload: newToppings });
  };

  const resetCart = () => {
    dispatch({ type: 'RESET' });
  };

  const toggleModal = () => {
    dispatch({ type: 'MODAL' });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        addBase,
        addTopping,
        resetCart,
        toggleModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
