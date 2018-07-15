import Vue from 'vue';
import iView from 'iview';
import '../../../asset/css/app.css';
import 'iview/dist/styles/iview.css';
import LazyRender from 'vue-lazy-render';

import Layout from '../../../component/layout/standard/index';

Vue.use(iView);
Vue.use(LazyRender);
Vue.component(Layout.name, Layout);
