import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends PureComponent {
    render() {
        const { title, content }  = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                {/* 不让标签转义 */}
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    // 第一种获取路由参数的形式：this.props.match.params.id
    // 第二种获取路由参数的形式： this.props.location.search  但是这种得到的是?id=1  需要自己去解析这个参数  有点麻烦
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapStateToDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.geDetailInfo(id))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Detail);