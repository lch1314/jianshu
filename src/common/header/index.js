import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper
} from './style'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInpurBlur = this.handleInpurBlur.bind(this);
    }
    render () {
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
                            in={this.state.focused}
                            timeout={800}
                            classNames="slide"
                        >
                            <NavSearch 
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInpurBlur}
                                className={this.state.focused ? 'focused': ''}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                    </SearchWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInpurBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;