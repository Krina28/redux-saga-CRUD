import { all } from 'redux-saga/effects';
import { callUsersAPI, addUsersApi } from './users/users.saga';

export default function* rootSaga() {
    yield all([
        callUsersAPI(),
        addUsersApi(),
        // callDeleteUserAPI()
    ]);
}

