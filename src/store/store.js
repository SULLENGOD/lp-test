import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from '../features/Characters'

export const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
})