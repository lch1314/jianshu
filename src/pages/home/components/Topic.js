import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicItem 
} from '../style';

class Topic extends PureComponent {
    render() {
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item,index) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img 
                                    className="topic-img"
                                    src={item.get('imgUrl')} alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);