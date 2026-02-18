import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    // here we are adding data in the state from our shopping page.
    addToCard: (state, action) => {
      // we check if the item exist by comparing the id wth the payload id.
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // once we have checked it if it is true, we add quantity on that item. if false we just push the item
      // because then it is not on the list
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // here we are creating a counter of items. we check if it exists and if it is the same id as the payload.

    increaseQuantity: (state, action) => {
      const isTheItem = state.items.find((item) => (item.id = action.payload));

      // if true we can add then 1 to the quantity which is on that element already
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
