import {configureStore} from "@reduxjs/toolkit";
import counterslice from "../slice/counterslice";
import rocketSlice from "../slice/rocketSlice";



const d = configureStore( {
    reducer: {

        counter: counterslice,
        rocket: rocketSlice
    }
});

export default d;