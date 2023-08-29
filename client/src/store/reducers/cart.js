import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
} from "../constants/product";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_DELETE_ITEM:
      const { id } = action.payload;

      const exItem = state.cartItems.find((x) => x.product === id);

      if (exItem) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.product !== id),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
