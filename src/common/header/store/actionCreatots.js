import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const hotSearch = (data) => ({
    type: constants.HOT_SEARCH,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10 )
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = () => {
    // 引入redux-thunk之后这里就可以不再返回一个对象了,也可以返回一个函数
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(hotSearch(data.data));
        }).catch((err) => {
            console.error(err)
        })
    }
}