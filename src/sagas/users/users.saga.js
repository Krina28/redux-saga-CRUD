import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { config } from '../../utils/constants';

// get-users saga function for api call
function* getAllGithubUsers() {
    const users = yield fetch(config.GITHUB_API_URL + 'users')
        .then(response => response.json())
        .catch(function (error) {
            console.log('Request failed', error);
        });

    yield put({ type: "GET_ALL_USERS_REQUEST", users })
}

export function* callUsersAPI() {
    yield takeLatest('GET_ALL_USERS', getAllGithubUsers)
}

// add-user saga function for api call
export function* addUsers(data) {
    const addedUser = yield fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.data;
    }).catch(function (error) {
        console.log('Request failed', error);
    });

    yield put({ type: "ADD_USER_REQUEST", addedUser });
}

export function* addUsersApi() {
    return yield takeLatest('ADD_USER', addUsers);
}

// function* deleteUser(id) {
//     console.log('Before delete', id)
//     const deletedUser = yield fetch('')
//         .then(response => response.json())
//         .then((response) => {
//             return response;
//         }).catch(function (error) {
//             console.log('Request failed', error);
//         });

//     yield put({ type: "DELETE_USER_REQUEST", deletedUser });
// }

// export function* callDeleteUserAPI({ id }) {
//     return yield takeLatest('DELETE_USER', deleteUser(id));
// }
