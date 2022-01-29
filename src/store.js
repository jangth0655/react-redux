import { configureStore, createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducer: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const store = configureStore({
  reducer: toDoSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const { add, remove } = toDoSlice.actions;

console.log(toDoSlice.actions);
