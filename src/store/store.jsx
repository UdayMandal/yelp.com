import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer";
export default configureStore({
    reducer: {
        home: HomeReducer,

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});