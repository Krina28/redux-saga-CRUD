import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/index';
import rootSaga from './sagas';
import { logger } from 'redux-logger';
import Routes from './routes';

const AppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger),
    );

    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default AppStore;
