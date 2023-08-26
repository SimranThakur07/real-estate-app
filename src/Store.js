import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer";

const store = configureStore({
    reducer: {
        root: rootReducer,
       add: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    },


   
})

export default store