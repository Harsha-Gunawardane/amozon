import axios from "../../api/axios";
import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/product";
const URL = "/products";

export const addToCart =
  (productId, quantity) => async (dispatch, getState) => {
    let selectedProduct = {};

    const response = await axios.get(`${URL}/${productId}`);
    selectedProduct = response.data;

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: selectedProduct.name,
        Image: selectedProduct.images[0],
        unitPrice: selectedProduct.price,
        stockCount: selectedProduct.stockCount,
        product: selectedProduct.id,
        description: selectedProduct.description,
        quantity,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: {
      id,
    },
  });
};
