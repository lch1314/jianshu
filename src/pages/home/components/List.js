import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem, ListInfo} from '../style';

class List extends Component {
    render() {
        const {articleList} = this.props;
        return (
            <div>
                {
                    articleList.map((item,index) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')} alt=""></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
})

export default connect(mapStateToProps, null)(List);