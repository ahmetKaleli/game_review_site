import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

export const registerSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = registerSlice.actions

export default registerSlice.reducer