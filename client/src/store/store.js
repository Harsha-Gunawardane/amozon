import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { productDetailsReducer, productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import { userSignInReducer, userSignUpReducer } from "./reducers/user";

const initialState = {
  user: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userSignInReducer,
  newUser: userSignUpReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
