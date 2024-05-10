import {configureStore} from "@reduxjs/toolkit";
import counterslice from "../slice/counterslice";



const d = configureStore( {
    reducer: {

        counter: counterslice
    }
});

export default d;