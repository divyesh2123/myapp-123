import {configureStore} from "@reduxjs/toolkit";
import counterslice from "../slice/counterslice";
import rocketSlice from "../slice/rocketSlice";
import userSlice from "../slice/userSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga/rootSaga";
import rootSaga1 from "../sagat/rootSaga";


const sagaMiddleware = createSagaMiddleware();
const d = configureStore( {
    reducer: {

        counter1: counterslice,
        rocket: rocketSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga1);

export default d;