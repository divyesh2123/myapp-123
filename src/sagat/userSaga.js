import { call, put, takeEvery } from "redux-saga/effects";
import { UserError, UserRequest, UserSuc } from "../slice/userSlice";
import { getUserData } from "../apiUser";


function* asycSagaInfo()
{
    try

    {
    const d= yield call(getUserData);

    yield put(UserSuc(d))

    }
    catch(err)
    {
        yield put(UserError(err))
    }



}

export function* watchUser()
{
    yield takeEvery(UserRequest().type,asycSagaInfo)

}