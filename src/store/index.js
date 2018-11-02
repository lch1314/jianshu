import { createStore, compose  } from 'redux';
import reducer from './reducer';

// 这段代码对项目无实质影响，只是为了在浏览器能打开redux这个插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store
const store = createStore(reducer, composeEnhancers());

export default store;