import { fork } from 'redux-saga/effects';

import { circuitSagaWatcher } from './sagas/Circuits';

function* rootSaga() {
    yield [fork(circuitSagaWatcher)];
}

export default rootSaga;
