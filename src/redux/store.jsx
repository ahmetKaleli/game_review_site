import { configureStore } from '@reduxjs/toolkit'
import registerReducer from "./slices/registerSlice"
import loginReducer from "./slices/loginSlice"
import gameReducer from "./slices/gamesSlices"
import commentReducer from "./slices/commentSlice.jsx"

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login : loginReducer,
    game: gameReducer,
    comment: commentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Serileştirilebilirlik kontrolünü devre dışı bırakıyoruz
    }),
})