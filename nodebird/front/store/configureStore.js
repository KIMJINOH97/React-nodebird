import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../saga';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';

const configureStore = (context) => {
    console.log(context);
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware]; // redux의 기능을 추가 하고싶을 때 씀
    const enhancer =
        process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares)) // 실제 production일 때
            : composeWithDevTools(applyMiddleware(...middlewares)); // 아닐 때는 redux-devtool 작동
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
