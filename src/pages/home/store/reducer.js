// immutable中提供了一个fromJs的方法,它可以帮我们把一个js对象转化成一个immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';


// 因为最外面包裹了一个fromJS，它会在创建的时候把内部的list从一个普通的数组也变成一个immutable类型的数组
// 然后再下面改变的时候又会把这个immutable类型的数组变成一个普通的js数组，所以我们需要在actionCreators中把传递过来的数组也变成immutable类型的数组，这样数据类型统一才不会有问题
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

// reducer导出的一定是一个纯函数(给定固定的输入，就一定会有固定的输出，且没有副作用)
// 第一个参数:指自己返回出去的数据   第二个参数：指组件通过dispath分发过来的数据
export default (state=defaultState, action) => {
    const {topicList, articleList, recommendList} = action;
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(topicList),
                articleList: fromJS(articleList),
                recommendList: fromJS(recommendList)
            })
        default: 
            return state;
    }
}