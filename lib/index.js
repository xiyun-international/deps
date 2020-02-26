"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "vue", {
  enumerable: true,
  get: function get() {
    return _vue.default;
  }
});
Object.defineProperty(exports, "g6", {
  enumerable: true,
  get: function get() {
    return _g.default;
  }
});
Object.defineProperty(exports, "ui", {
  enumerable: true,
  get: function get() {
    return _antDesignUi.default;
  }
});
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _utils.default;
  }
});
Object.defineProperty(exports, "qs", {
  enumerable: true,
  get: function get() {
    return _qs.default;
  }
});
Object.defineProperty(exports, "axios", {
  enumerable: true,
  get: function get() {
    return _axios.default;
  }
});
Object.defineProperty(exports, "copy", {
  enumerable: true,
  get: function get() {
    return _copyToClipboard.default;
  }
});
Object.defineProperty(exports, "lodash", {
  enumerable: true,
  get: function get() {
    return _lodash.default;
  }
});
Object.defineProperty(exports, "moment", {
  enumerable: true,
  get: function get() {
    return _moment.default;
  }
});
Object.defineProperty(exports, "vueRouterWebpackPlugin", {
  enumerable: true,
  get: function get() {
    return _vueRouteWebpackPlugin.default;
  }
});

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vuex = _interopRequireDefault(require("vuex"));

var _g = _interopRequireDefault(require("@antv/g6"));

var _antDesignUi = _interopRequireDefault(require("@xiyun/ant-design-ui"));

var _utils = _interopRequireDefault(require("@xiyun/utils"));

var _qs = _interopRequireDefault(require("qs"));

var _axios = _interopRequireDefault(require("axios"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _vueRouteWebpackPlugin = _interopRequireDefault(require("@xiyun/vue-route-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.use(_vueRouter.default);

_vue.default.use(_vuex.default);

_vue.default.use(_antDesignUi.default);