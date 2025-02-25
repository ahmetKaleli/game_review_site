import { configureStore } from '@reduxjs/toolkit'
import registerReducer from "./slices/registerSlice"
import loginReducer from "./slices/loginSlice"
import gameReducer from "./slices/gamesSlices"

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login : loginReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Serileştirilebilirlik kontrolünü devre dışı bırakıyoruz
    }),
})