import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user.interface";
import { getUsersFromLS } from "../../utils/getDataFromLS";

interface IInitialState {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = getUsersFromLS();

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers(builder) {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
