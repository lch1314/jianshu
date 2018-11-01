import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom: 1px solid #f0f0f0;
    position:relative;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    i {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        transition: width .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        transition: width .2s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff; 
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    font-size: 14px;
    border: 1px solid #eee;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width:240px; 
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

`

export const Button = styled.div`
    float: left;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    text-decoration:none
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`