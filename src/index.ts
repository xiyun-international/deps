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

import injectComponents from "./components";
import { message as AntdMessage } from "ant-design-vue";

injectComponents(Vue);
Vue.use(VueRouter);
Vue.use(Vuex);

export { Vue };
export { VueRouter };
export { Vuex };

export { utils };
export { axios };
export { copyToClipboard };
export { lodash };
export { qs };
export { G6 };
export { moment };
export { PhotoViewer };
export { AntdMessage };
