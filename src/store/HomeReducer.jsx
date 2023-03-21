import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: false,
    remoteData: [],
    bodyEvent: null,
   inputValueService: '',
   inputValueCity: '',
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setError: (state) => {
            state.error = true;
        },

        setLoading: (state) => {
            state.loading = true;
        },

        setremoteData: (state, action) => {
            state.loading = false;
            state.remoteData = action.payload;
        },

        setBodyEvent: (state, action) => {
            state.bodyEvent = action.payload;
        },

        setInputValueService: (state, action) => {
            state.inputValueService = action.payload;
        },

        setInputValueCity: (state, action) => {
            state.inputValueCity = action.payload;
        },
    }
});

export const {setLoading, setError, setremoteData, setBodyEvent, setInputValueService, setInputValueCity} = homeSlice.actions;

export default homeSlice.reducer

//fetcher
export function fetch() {
    return async (dispatch) => {
//do stuff

    }
}






