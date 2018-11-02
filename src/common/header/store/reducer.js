import * as constants from './constants';

const defaultState = {
    focused: false
};

// reducer导出的一定是一个纯函数(给定固定的输入，就一定会有固定的输出，且没有副作用)
// 第一个参数:指自己返回出去的数据   第二个参数：指组件通过dispath分发过来的数据
export default (state=defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if(action.type === constants.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state;
}