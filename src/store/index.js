import { createStore, compose, applyMiddleware  } from 'redux';
// 引入redux-thunk这个中间件
import thunk from 'redux-thunk';
import reducer from './reducer';

// 这段代码对项目无实质影响，只是为了在浏览器能打开redux这个插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;