import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* circuitSagaWatcher() {
    yield takeLatest('GET_CIRCUITS_REQUEST', workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchCircuits() {
    return axios({
        method: 'get',
        url: 'https://ergast.com/api/f1/2018.json',
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchCircuits);
        const circuits = response.data.MRData;

        // dispatch a success action to the store with the new circuits
        yield put({ type: 'GET_CIRCUITS_SUCCESS', circuits });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: 'GET_CIRCUITS_FAILURE', error });
    }
}
