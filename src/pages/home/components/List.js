import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreatots} from '../store';
import {
    ListItem, 
    ListInfo,
    LoadMore
} from '../style';

class List extends Component {
    render() {
        const {articleList, getMoreList, page} = this.props;
        return (
            <div>
                {
                    articleList.map((item,index) => {
                        return (
                            <ListItem key={index}>
                                <img className="pic" src={item.get('imgUrl')} alt=""></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
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