import { IDragon } from "./../../interfaces/dragon.interface";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  dragon: IDragon | null;
  dragons: IDragon[] | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = {
  dragon: null,
  dragons: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const dragonSlice = createSlice({
  name: "dragon",
  initialState,
  reducers: {},
});

export const {} = dragonSlice.actions;

export default dragonSlice.reducer;
