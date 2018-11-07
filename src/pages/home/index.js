import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

import {actionCreatots} from './store';

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4537/e4fc8843fabbf17e6f5660eea8ce0661b00b3089.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe60c;</i></BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    // 当这个组件销毁的时候,这个事件也要解绑
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapStateToDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreatots.getHomeInfo());
    },
    changeScrollTopShow(e) {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreatots.toggleTopShow(true))
        } else {
            dispatch(actionCreatots.toggleTopShow(false))
        }
    }
})



export default connect(mapStateToProps, mapStateToDispatch)(Home);