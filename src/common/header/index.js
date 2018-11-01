import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
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
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
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
                    <Addition>
                        <Button as="a" href="/" className="reg">注册</Button>
                        <Button as="a" href="/" className="writting">
                            <i className="iconfont">&#xe60b;</i>写文章
                        </Button>
                    </Addition>
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