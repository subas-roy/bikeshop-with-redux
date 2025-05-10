// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  brand: string;
  imageUrl: string;

}

interface CartState {
  items: CartItem[];
  totalQuantity : number;
  totalPrice : number;
}



const savedCart = localStorage.getItem("cartItems");

const initialState: CartState = {
  items: savedCart ? JSON.parse(savedCart) : [],
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.productId === action.payload.productId);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.items));

    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find(item => item.productId === action.payload);
        if (item) {
          item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
      decreaseQuantity: (state, action: PayloadAction<string>) => {
        const item = state.items.find(item => item.productId === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
        // localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, increaseQuantity, clearCart , decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
