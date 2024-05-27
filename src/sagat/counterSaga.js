import { Incre } from "../action/counteraction";

import { takeLatest, delay, put } from 'redux-saga/effects'
import { inc } from "../slice/counterslice";


function* asycINC()
{
    yield delay(2000);
    yield put(inc());
}

export function* watchINC()
{
    yield takeLatest('INC_ASYC',asycINC)
}