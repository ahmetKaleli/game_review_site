import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../services/Firebase"

const initialState = {
    comments: {},
    user: null,
    loading: false,
    error: null
};

export const addComment = createAsyncThunk("comment/addComment", async ({ gameID, userEmail, text }) => {
    const newComment = {
        gameID,
        userEmail,
        text,
        createdAt: new Date().toISOString(),
    };
    await addDoc(collection(db, 'comments'), newComment);
    return newComment;
})

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async (gameID) => {
        const q = query(collection(db, 'comments'), where('gameID', '==', gameID));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
);

export const deleteComment = createAsyncThunk("comment/deleteComment",
    async ({ commentID, gameID }) => {
        await deleteDoc(doc(db, 'comments', commentID));
        return { commentID, gameID };
    }
)


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                const gameID = action.meta.arg;
                state.comments[gameID] = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                const { gameID } = action.payload;
                if (state.comments[gameID]) {
                    state.comments[gameID].push(action.payload);
                } else {
                    state.comments[gameID] = [action.payload];
                }
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                const { gameID, commentID } = action.payload;
                state.comments[gameID] = state.comments[gameID].filter(comment => comment.id !== commentID);
            });
        ;
    }
});

export const { setUser } = commentSlice.actions;

export default commentSlice.reducer;
