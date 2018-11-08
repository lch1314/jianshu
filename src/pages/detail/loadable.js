
// 实现异步加载,只有进入详情页才会加载这个组件
import React from 'react'; 
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent />
