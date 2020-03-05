// Vue
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

// 禧云
import * as utils from "@xiyun/utils";
import XyUI from "@xiyun/ant-design-ui";
import injectComponents from "./components";

// 类库
import qs from "qs";
import Nzh from "nzh/cn";
import G6 from "@antv/g6";
import axios from "axios";
import lodash from "lodash";
import moment from "moment";
import BigNumber from "bignumber.js";
import PhotoViewer from "photoviewer";
import { message } from "ant-design-vue";
import copyToClipboard from "copy-to-clipboard";

// 注入禧云所用的组件
injectComponents(Vue);

// Vue 相关
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(XyUI);

// Vue
export { Vue };
export { VueRouter };
export { Vuex };

// 禧云
export { utils };
export { message };

// 类库
export { qs };
export { G6 };
export { moment };
export { axios };
export { PhotoViewer };
export { copyToClipboard };
export { lodash };
export { BigNumber };
export { Nzh };
