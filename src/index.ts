import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import utils from "@xiyun/utils";
import G6 from "@antv/g6";

import qs from "qs";
import axios from "axios";
import copyToClipboard from "copy-to-clipboard";
import lodash from "lodash";
import moment from "moment";
import PhotoViewer from "photoviewer";
import BigNumber from "bignumber.js";
import nzh from 'nzh';


import injectComponents from "./components";
import { message as AntdMessage } from "ant-design-vue";

const Nzh = nzh.ch;

injectComponents(Vue);
Vue.use(VueRouter);
Vue.use(Vuex);

// Vue
export { Vue };
export { VueRouter };
export { Vuex };

// 禧云
export { utils };
export { AntdMessage };

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


