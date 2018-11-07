import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList 
})

const addHomeList = (list, nextPage) => ({
    type: constants.Add_ARTICLELIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    // 引入redux-thunk之后这里就可以不再返回一个对象了,也可以返回一个函数
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page+1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})