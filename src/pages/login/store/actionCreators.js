import * as constants from './constants';
// import { fromJS } from 'immutable';
import axios from 'axios';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})

export const login = (act, psw) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + act + '&password=' + psw).then((res) => {
            console.log(res)
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
            } else {
                alert('登录失败')
            }
        })
    }
}