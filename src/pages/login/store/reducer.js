// immutable中提供了一个fromJs的方法,它可以帮我们把一个js对象转化成一个immutable对象
import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    login: false
});


export default (state=defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.CHANGE_LOGOUT:
            return state.set('login', action.value);
        default: 
            return state;
    }
}