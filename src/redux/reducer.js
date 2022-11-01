import { UPDATE_CART_COUNT } from "./action";

const initialState = {
  cartCount: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };

    default:
      return state;
  }
}

export default reducer;
