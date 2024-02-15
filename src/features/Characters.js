import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../services/fetchData";

export const fetchCharacters = createAsyncThunk('characters/fetchCaracters', async () => {
    return await fetchData();
})

export const  characterSlicer = createSlice({
    name: "characters",
    initialState: {
        data: [],
        isLoading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            });
    }
});

export default characterSlicer.reducer;