import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apisAccount } from "../apis/apisAccount";
import { apisRegister } from "../apis/apisAuth";

const store = configureStore({
  reducer: {
    apisAccount: apisAccount.reducer,
    apisRegister: apisRegister.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      apisAccount.middleware,
      apisRegister.middleware,
    )
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;