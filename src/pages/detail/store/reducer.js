// immutable中提供了一个fromJs的方法,它可以帮我们把一个js对象转化成一个immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    title: '',
    content: ''
});

const detailList = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    })
}


export default (state=defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return detailList(state, action)
        default: 
            return state;
    }
}