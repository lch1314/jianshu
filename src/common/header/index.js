import React, { Component } from 'react';
// connect方法就是帮助我们让这个Header组件和store建立连接的一个方法
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        const {focused, list, handleInputFocus, handleInpurBlur, login, logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">
                        <i className="iconfont menu-icon">&#xe600;</i>
                        <span className="menu-text">首页</span>
                    </NavItem>
                    <NavItem className="left">
                        <i className="iconfont menu-icon">&#xe663;</i>
                        <span className="menu-text">下载App</span>
                    </NavItem>
                    <NavItem className="right writting">
                        <i className="iconfont">&#xe60b;</i>写文章
                    </NavItem>  
                    <NavItem className="right reg">注册</NavItem>
                    {
                        login? 
                        <Link to="/login"><NavItem onClick={logout} className="right">退出</NavItem></Link>:
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={800}
                            classNames="slide"
                        >
                            <NavSearch 
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInpurBlur}
                                className={focused ? 'focused': ''}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }

    getListArea = () => {
        const {focused, list, page, totalPage, mouseIn, handleMouseIn, handleMouseLeave, handleChangePage} = this.props;
        // 将immutable数组转为普通的js数组
        const newList = list.toJS();
        const pageList = [];
        // 当page = 1时, i取值为0-9 正好时10条数据
        // 当page = 2时, i取值为10-19 正好也是10条数据
        // ....
        if(newList.length) {
            for(let i = (page-1) * 10; i < page*10; i++) {
                if(newList[i]) {
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

// 现在Header就是一个无状态组件(性能会比较高)
// 因为我们后面要在props中加一些逻辑，如果继续用无状态组件就不合适了，所以重新换回有状态组件
/* const Header = (props) => {
} */

// 这个方法的意思是:这个组件和store做连接的时候，store里面的数据如何映射到props上面，它会接受state参数,这个state指的就是store里面的数据,即reducer.js中返回的state数据
const mapStateToProps = (state) => {
    // console.log(state);
    // 现在state返回的header对象其实是一个immutable对象了
    // 但是现在这里state.header语法还是普通对象的写法，为了让数据类型统一，我们在../../store/reducer.js中从redux-immutable中导出combineReducers,那么这里获取到的state就是一个immutable对象了,所以需要通过get方法获取到header对象了
    return {
        // focused: state.header.get('focused')
        // focused: state.get('header').get('focused')
        // 还可以有另一种写法
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

// 这个方法的意思是：这个组件和store做连接的时候，组件要改变store里面的内容，就要调用dispath方法分发出去，这个参数dispath就是指的store.dispath方法
const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus(list) {
            // 在这里通过size的数值进行判断可以避免第二次获取焦点时也请求数据,节省性能
            if(list.size === 0) {
                dispath(actionCreators.getList());
            }
            dispath(actionCreators.searchFocus());
        },
        handleInpurBlur() {
            dispath(actionCreators.searchBlur());
        },
        handleMouseIn() {
            dispath(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispath(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spinIcon) {
            // 把transform属性中的只要不是数字的字符全部替换成空字符串
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate('+ (originAngle+360) +'deg)';
            if(page < totalPage) {
                dispath(actionCreators.changePage(page+1)); 
            } else {
                dispath(actionCreators.changePage(1));
            }
        },
        logout() {
            dispath(loginActionCreators.logout())
        }
    }
}


// connect怎么做连接呢?可以通过mapStateToProps这个方法做映射
export default connect(mapStateToProps, mapDispathToProps)(Header);