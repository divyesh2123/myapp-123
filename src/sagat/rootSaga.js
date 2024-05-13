import { all } from "redux-saga/effects";
import { watchUser } from "./userSaga";

function* rootSaga()
{
    yield all([watchUser()]);
}
export default rootSaga;