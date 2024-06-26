import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/reducer";
import {logger} from 'redux-logger'

const appStore = configureStore({
    reducer:{appReducer},
    middleware:():any=>{
        return [logger]
    }
})

export default appStore;