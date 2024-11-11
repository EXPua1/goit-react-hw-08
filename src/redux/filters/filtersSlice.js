import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Зміна значення фільтра
    },
  },
});

// Селектор для отримання значення фільтра

// Експорт редюсера, екшена і селектора
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
