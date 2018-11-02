import * as constants from './constants';
// immutable中提供了一个fromJs的方法,它可以帮我们把一个js对象转化成一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

// reducer导出的一定是一个纯函数(给定固定的输入，就一定会有固定的输出，且没有副作用)
// 第一个参数:指自己返回出去的数据   第二个参数：指组件通过dispath分发过来的数据
export default (state=defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值,返回一个全新的对象
        return state.set('focused', true)
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}