import React, { Component } from 'react';
// connect方法就是帮助我们让这个Header组件和store建立连接的一个方法
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
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


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
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
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={800}
                            classNames="slide"
                        >
                            <NavSearch 
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInpurBlur}
                                className={this.props.focused ? 'focused': ''}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }

    getListArea = () => {
        if(this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
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
        list: state.getIn(['header', 'list'])
    }
}

// 这个方法的意思是：这个组件和store做连接的时候，组件要改变store里面的内容，就要调用dispath方法分发出去，这个参数dispath就是指的store.dispath方法
const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus() {
            dispath(actionCreators.getList());
            dispath(actionCreators.searchFocus());
        },
        handleInpurBlur() {
            dispath(actionCreators.searchBlur());
        }
    }
}


// connect怎么做连接呢?可以通过mapStateToProps这个方法做映射
export default connect(mapStateToProps, mapDispathToProps)(Header);