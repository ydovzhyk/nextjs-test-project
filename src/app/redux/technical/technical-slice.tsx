import { createSlice } from '@reduxjs/toolkit';
import { ITechnicalState } from '../../types/store/store-technical';

const initialState: ITechnicalState = {
    error: '',
    message: '',
    hideHeaderFooter: false,
    screenType: 'isDesctop',
};

const technical = createSlice({
    name: 'technical',
    initialState,
    reducers: {
        clearTechnicalError: store => {
            store.error = '';
        },
        clearTechnicalMessage: store => {
            store.message = '';
        },
        setScreenType: (store, action) => {
            store.screenType= action.payload;
        },
    },

    extraReducers: (builder) => {
    }
});

export default technical.reducer;

export const {
  clearTechnicalError,
    clearTechnicalMessage,
  setScreenType,
} = technical.actions;