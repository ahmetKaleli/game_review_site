import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[]
}

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegister:(state,action)=>{
            state.users=action.payload
        }
    }
})

export const {setRegister} = registerSlice.actions
export default registerSlice.reducer