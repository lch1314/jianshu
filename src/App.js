import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { IconGlobalstyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle/>
        <IconGlobalstyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
