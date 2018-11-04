import * as constants from './constants';
// immutable中提供了一个fromJs的方法,它可以帮我们把一个js对象转化成一个immutable对象
import { fromJS } from 'immutable';


// 因为最外面包裹了一个fromJS，它会在创建的时候把内部的list从一个普通的数组也变成一个immutable类型的数组
// 然后再下面改变的时候又会把这个immutable类型的数组变成一个普通的js数组，所以我们需要在actionCreators中把传递过来的数组也变成immutable类型的数组，这样数据类型统一才不会有问题
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

// reducer导出的一定是一个纯函数(给定固定的输入，就一定会有固定的输出，且没有副作用)
// 第一个参数:指自己返回出去的数据   第二个参数：指组件通过dispath分发过来的数据
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.HOT_SEARCH:
            // return state.set('list', action.data).set('totalPage', action.totalPage)
            // merge可以同时改变多个数据内容
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default: 
            return state;
    }


    /* if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值,返回一个全新的对象
        return state.set('focused', true)
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if(action.type === constants.HOT_SEARCH) {
        return state.set('list', action.data);
    }
    return state; */
}