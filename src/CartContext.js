import { createContext } from 'react';

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'added': {
      const product = cart.find((p) => p.id === action.id);
      if (product) {
        return cart.map((p) =>
          p.id === product.id ? { id: product.id, count: product.count + 1 } : p
        );
      }
      return [...cart, { id: action.id, count: 1 }];
    }
    case 'removed':
      {
        const product = cart.find((p) => p.id === action.id);
        if (product) {
          if (product.count <= 1) {
            return cart.filter((p) => p.id !== product.id);
          }
          return cart.map((p) =>
            p.id === product.id ? { id: product.id, count: product.count - 1 } : p
          );
        }
      }
      break;
    default:
      throw Error('Unknown action: ' + action.type);
  }
};
