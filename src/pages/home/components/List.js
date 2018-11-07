import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {actionCreatots} from '../store';
import {
    ListItem, 
    ListInfo,
    LoadMore
} from '../style';

// 不要用a标签做页面的跳转，应该用react-router-dom中的Link标签
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const {articleList, getMoreList, page} = this.props;
        return (
            <div>
                {
                    articleList.map((item,index) => {
                        return (
                            /* 第一种形式 */
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            {/* 第二种形式 */}
                            {/* <Link key={index} to={'/detail?id=' + item.get('id')}> */}
                                <ListItem>
                                    <img className="pic" src={item.get('imgUrl')} alt=""></img>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapStateToDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreatots.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(List);