const { all } = require("redux-saga/effects");
const { watchINC } = require("./counterSaga");

export function* rootSaga()
{

    yield all([watchINC()])
}