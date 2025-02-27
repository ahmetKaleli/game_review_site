import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    user: null,
    gameID: null,
};


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        createComment : (state, action) => {
            state.comments=[...state.comments,action.payload]
            state.gameID=action.payload.gameID

        }
    },
});

export const {setUser,createComment } = commentSlice.actions;

export default commentSlice.reducer;
