import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const isTheItem = state.items.find((item) => (item.id = action.payload));
      if (isTheItem) {
        isTheItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const isTheItem = state.items.find((item) => item.id === action.payload);
      if (isTheItem.quantity > 1) {
        isTheItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCard, increaseQuantity, decreaseQuantity } =
  cardSlice.actions;
export default cardSlice.reducer;
