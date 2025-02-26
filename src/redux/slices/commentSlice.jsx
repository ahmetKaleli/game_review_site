import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments:[]
}

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        createComment: (state, action)=>{
            state.comments=[...state.comments, action.payload]
        }
    }
})

export const {createComment } = commentSlice.actions

export default commentSlice.reducer