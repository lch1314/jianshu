// redux中提供combineReducers方法 可以将多个小的reducer文件合并成一个大的reducer文件，这样方便管理
import { combineReducers } from 'redux';

// 知识点1：我们在../common/header/store中定义了一个index.js文件，它里面将reducer导出，所以我们指向这个文件夹的时候，它会默认帮我们找到这个index.js文件
// 知识点2: as是ES6的语法，表示为导出的这个名字起一个别名
import {reducer as headerReducer } from '../common/header/store';

export default combineReducers({
    // 头部区域的reducer存储数据
    header: headerReducer
})