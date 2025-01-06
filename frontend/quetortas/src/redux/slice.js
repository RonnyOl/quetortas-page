import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Lista de productos en el carrito
  totalQuantity: 0, // Cantidad total de productos
  totalPrice: 0, // Precio total del carrito
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      console.log("Adding item to cart:", newItem); // Añadir log para verificar el item añadido
      console.log("Current state before adding:", JSON.parse(JSON.stringify(state))); // Añadir log para verificar el estado actual antes de añadir

      const existingItem = state.items.find(item => item._id === newItem._id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.price;
      }

      console.log("Current state after adding:", JSON.parse(JSON.stringify(state.items))); // Añadir log para verificar el estado actual después de añadir
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item._id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item._id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
