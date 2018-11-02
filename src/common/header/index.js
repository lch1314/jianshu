import React from 'react';
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
    SearchWrapper
} from './style'

// 现在Header就是一个无状态组件(性能会比较高)
const Header = (props) => {
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
                        in={props.focused}
                        timeout={800}
                        classNames="slide"
                    >
                        <NavSearch 
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInpurBlur}
                            className={props.focused ? 'focused': ''}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                </SearchWrapper>
            </Nav>
        </HeaderWrapper>
    )
}

// 这个方法的意思是:这个组件和store做连接的时候，store里面的数据如何映射到props上面，它会接受state参数,这个state指的就是store里面的数据,即reducer.js中返回的state数据
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

// 这个方法的意思是：这个组件和store做连接的时候，组件要改变store里面的内容，就要调用dispath方法分发出去，这个参数dispath就是指的store.dispath方法
const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus() {
            dispath(actionCreators.searchFocus());
        },
        handleInpurBlur() {
            dispath(actionCreators.searchBlur());
        }
    }
}


// connect怎么做连接呢?可以通过mapStateToProps这个方法做映射
export default connect(mapStateToProps, mapDispathToProps)(Header);