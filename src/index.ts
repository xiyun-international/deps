import vue from "vue";
import vueRouter from "vue-router";
import vuex from "vuex";

import g6 from "@antv/g6";

import ui from "@xiyun/ant-design-ui";
import utils from "@xiyun/utils";

import qs from "qs";
import axios from "axios";
import copy from "copy-to-clipboard";
import lodash from "lodash";
import moment from "moment";

import vueRouterWebpackPlugin from "@xiyun/vue-route-webpack-plugin";

vue.use(vueRouter);
vue.use(vuex);
vue.use(ui);

export { vue };
export { g6 };
export { ui };
export { utils };
export { axios };
export { copy };
export { lodash };
export { moment };
export { qs };
export { vueRouterWebpackPlugin };
