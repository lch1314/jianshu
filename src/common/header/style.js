import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom: 1px solid #f0f0f0;
    position:relative;
    z-index: 1;
`

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain
`

export const Nav = styled.div`
    width:100%;
    height:100%;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 100px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    display: inline-block;
    text-decoration:none
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
        i {
            font-size: 20px;
            margin-right: 5px;
        }
    }
    &.right {
        float: right;
        color: #969696;
        i {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
        }
    }
    &.reg, &.writting {
        line-height: 24px;
        font-size: 15px;
        border-radius: 20px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        padding: 6px 12px
        user-select: none;
        box-sizing: border-box;
    }
    &.reg {
        width: 80px;
        height: 38px
        color: #ea6f5a;
        margin: 9px 5px 0px 15px;
        background-color: transparent;  
        border: 1px solid rgba(236,97,73,.7);
    }
    &.writting {
        width: 100px;
        height: 40px;
        color: #fff;
        margin: 8px 15px 0;
        background-color: #ea6f5a;
        border: 1px solid transparent;
        font-weight: 400;
    }
    &.active {
        color: #ea6f5a;
    }
    @media (max-width: 1439px) and (min-width: 1081px) {
        i.menu-icon {
            display:none;
        }
    }
    @media (max-width: 1080px) and (min-width: 768px) {
       span.menu-text {
           display: none;
       }
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
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

export const SearchInfo = styled.div`
    position: absolute;
    left:20px;
    top: 56px;
    width: 200px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 4px;
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;

`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    user-select: none;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 3px;
        transition: all .2s ease-in;
        transform-origin: center center;    
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    padding: 0 5px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    text-decoration: none;
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
    &.slide-enter {
        transition: width .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: width .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`