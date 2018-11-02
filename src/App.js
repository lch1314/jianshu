import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style';
import { IconGlobalstyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';

// Provider是react-redux提供的一个核心API，它其实是个组件
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 全局样式 */}
        <Globalstyle/>
        {/* 字体图标样式 */}
        <IconGlobalstyle />
        {/* 头部区域 */}
        {/* Provider的意思是：这个提供器连接了store，那么这个Provider里面所有的组件都有能力获取到store里面的内容了 */}
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
