import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { IconGlobalstyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 全局样式 */}
        <Globalstyle/>
        {/* 字体图标样式 */}
        <IconGlobalstyle />
        {/* 头部区域 */}
        <Header />
      </Fragment>
    );
  }
}

export default App;
