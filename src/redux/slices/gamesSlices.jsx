import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../services/Firebase'


const initialState = {
    games: [],
}

export const getGames = createAsyncThunk("fullgames", async () => {
    try {
        const gameCollection = collection(db, "games")
        const gameDocs = await getDocs(gameCollection)

        const games = gameDocs.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            image: doc.data().image
        }))
  
        return games

    } catch (error) {
        console.error("Error getting documents: ", error)
        throw error
    }
})



export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        getGameDetail: (state, action) => {
            const game = state.games.find((game) => game.id === action.payload.id)
            if (game) {
                state.selecedGame = gameDetail
            } else {
                state.selecedGame = null
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.fulfilled, (state, action) => {
            state.games = action.payload

        })
    }
})
export const { getGameDetail } = gameSlice.actions

export default gameSlice.reducer