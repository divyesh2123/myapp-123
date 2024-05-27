import { all } from "redux-saga/effects";
import { watchUser } from "./userSaga";
import { watchINC } from "./counterSaga";

function* rootSaga1()
{
    yield all([watchUser(),watchINC()]);
}
export default rootSaga1;