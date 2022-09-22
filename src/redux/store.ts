import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import dragon from "./slices/dragonSlice";

export const store = configureStore({
  reducer: {
    auth,
    dragon,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
