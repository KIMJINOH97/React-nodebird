webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form/Form */ "./node_modules/antd/lib/form/Form.js");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.Post;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });

    if (!commentFormOpened) {}
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt,
    cover: post.img && __jsx("img", {
      alt: "example",
      src: post.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 32
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "ellipsis",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }
      }, "\uC2E0\uACE0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        danger: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      }, "\uC0AD\uC81C")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }))],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 20
      }
    }, "\uD314\uB85C\uC6B0"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 32
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onSubmit: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "\uC090\uC57D")), __jsx(List, {
    header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comment || [],
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      }, __jsx(Comment, {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 45
          }
        }, item.User.nickname),
        content: item.content,
        datetime: item.createdAt,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  })));
};

_s(PostCard, "LOldxwJ3fQsXDKA25Ln51xFIu3s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context, legacyLocale) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        form = props.form,
        input = props.input,
        locale = props.locale,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
    var config = (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    var childNode = children; // Additional Form provider

    var validateMessages = {};

    if (locale && locale.Form && locale.Form.defaultValidateMessages) {
      validateMessages = locale.Form.defaultValidateMessages;
    }

    if (form && form.validateMessages) {
      validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
    }

    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
        validateMessages: validateMessages
      }, children);
    }

    return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
      value: config
    }, /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale || legacyLocale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode)));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return renderProvider(context, legacyLocale);
    });
  });
};

var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = /*#__PURE__*/React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
      }, restProps), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), des && /*#__PURE__*/React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/form/Form.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/form/Form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _rcFieldForm.List;
  }
});
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm3["default"];
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcFieldForm = _interopRequireWildcard(__webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/form/context.js");

var _useForm3 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useForm */ "./node_modules/antd/lib/form/hooks/useForm.js"));

var _SizeContext = _interopRequireWildcard(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalForm = function InternalForm(props, ref) {
  var _classNames;

  var contextSize = React.useContext(_SizeContext["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var name = props.name;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? contextSize : _props$size,
      form = props.form,
      colon = props.colon,
      labelAlign = props.labelAlign,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      hideRequiredMark = props.hideRequiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      scrollToFirstError = props.scrollToFirstError,
      onFinishFailed = props.onFinishFailed,
      restFormProps = __rest(props, ["prefixCls", "className", "size", "form", "colon", "labelAlign", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "onFinishFailed"]);

  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var formClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hide-required-mark"), hideRequiredMark), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);

  var _useForm = (0, _useForm3["default"])(form),
      _useForm2 = (0, _slicedToArray2["default"])(_useForm, 1),
      wrapForm = _useForm2[0];

  var __INTERNAL__ = wrapForm.__INTERNAL__;
  __INTERNAL__.name = name;
  var formContextValue = React.useMemo(function () {
    return {
      name: name,
      labelAlign: labelAlign,
      labelCol: labelCol,
      wrapperCol: wrapperCol,
      vertical: layout === 'vertical',
      colon: colon,
      itemRef: __INTERNAL__.itemRef
    };
  }, [name, labelAlign, labelCol, wrapperCol, layout, colon]);
  React.useImperativeHandle(ref, function () {
    return wrapForm;
  });

  var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
    if (onFinishFailed) {
      onFinishFailed(errorInfo);
    }

    if (scrollToFirstError && errorInfo.errorFields.length) {
      wrapForm.scrollToField(errorInfo.errorFields[0].name);
    }
  };

  return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
    size: size
  }, /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
    value: formContextValue
  }, /*#__PURE__*/React.createElement(_rcFieldForm["default"], (0, _extends2["default"])({
    id: name
  }, restFormProps, {
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    className: formClassName
  }))));
};

var Form = /*#__PURE__*/React.forwardRef(InternalForm);
var _default = Form;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/form/context.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/form/context.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormProvider = exports.FormItemContext = exports.FormContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var FormContext = /*#__PURE__*/React.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
exports.FormContext = FormContext;
var FormItemContext = /*#__PURE__*/React.createContext({
  updateItemErrors: function updateItemErrors() {}
});
exports.FormItemContext = FormItemContext;

var FormProvider = function FormProvider(props) {
  var providerProps = (0, _omit["default"])(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, providerProps);
};

exports.FormProvider = FormProvider;

/***/ }),

/***/ "./node_modules/antd/lib/form/hooks/useForm.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/form/hooks/useForm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForm;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/form/util.js");

function toNamePathStr(name) {
  var namePath = (0, _util.toArray)(name);
  return namePath.join('_');
}

function useForm(form) {
  var _useRcForm = (0, _rcFieldForm.useForm)(),
      _useRcForm2 = (0, _slicedToArray2["default"])(_useRcForm, 1),
      rcForm = _useRcForm2[0];

  var itemsRef = (0, _react.useRef)({});
  var wrapForm = (0, _react.useMemo)(function () {
    return form || (0, _extends2["default"])((0, _extends2["default"])({}, rcForm), {
      __INTERNAL__: {
        itemRef: function itemRef(name) {
          return function (node) {
            var namePathStr = toNamePathStr(name);

            if (node) {
              itemsRef.current[namePathStr] = node;
            } else {
              delete itemsRef.current[namePathStr];
            }
          };
        }
      },
      scrollToField: function scrollToField(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var namePath = (0, _util.toArray)(name);
        var fieldId = (0, _util.getFieldId)(namePath, wrapForm.__INTERNAL__.name);
        var node = fieldId ? document.getElementById(fieldId) : null;

        if (node) {
          (0, _scrollIntoViewIfNeeded["default"])(node, (0, _extends2["default"])({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      },
      getFieldInstance: function getFieldInstance(name) {
        var namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      }
    });
  }, [form, rcForm]);
  return [wrapForm];
}

/***/ }),

/***/ "./node_modules/antd/lib/form/util.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/form/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;
exports.getFieldId = getFieldId;

function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');
  return formName ? "".concat(formName, "_").concat(mergedId) : mergedId;
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click sort by descend',
    triggerAsc: 'Click sort by ascend',
    cancelSort: 'Click to cancel sort'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    defaultValidateMessages: {
      "default": 'Field validation error ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} at least ${min} characters',
        max: '${label} up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} minimum value is ${min}',
        max: '${label} maximum value is ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/message/hooks/useMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseMessage;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _ = __webpack_require__(/*! .. */ "./node_modules/antd/lib/message/index.js");

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var target = args.key || (0, _.getKeyThenIncreaseKey)();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          prefixCls: mergedPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return (0, _.attachTypeApi)(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
exports.attachTypeApi = attachTypeApi;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _useMessage = _interopRequireDefault(__webpack_require__(/*! ./hooks/useMessage */ "./node_modules/antd/lib/message/hooks/useMessage.js"));

var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var prefixCls = args.prefixCls || localPrefixCls;

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      instance: messageInstance
    });
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;
    callback({
      prefixCls: prefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose
  };
}

function notice(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};

function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/antd/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          closable = _this$props.closable,
          closeIcon = _this$props.closeIcon,
          style = _this$props.style,
          onClick = _this$props.onClick,
          children = _this$props.children,
          holder = _this$props.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});

      var node = _react.default.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), _react.default.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? _react.default.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || _react.default.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(_react.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5,
  style: {
    right: '50%'
  }
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/createClass.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/createClass.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/inherits.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/inherits.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/typeof.js":
/*!************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/typeof.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/rc-notification/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/rc-notification/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL2Rldldhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYWxlbmRhci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9yZW5kZXJFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2VtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL2hvb2tzL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZXNzYWdlL2hvb2tzL3VzZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvbG9jYWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbm90aWZpY2F0aW9uL2hvb2tzL3VzZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL25vdGlmaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VUy5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIlBvc3QiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblRvZ2dsZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJjcmVhdGVkQXQiLCJpbWciLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Iiwib25TdWJtaXRDb21tZW50Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiQ29tbWVudCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQyxLQUFELENBRC9CO0FBQUEsTUFDcEJDLGlCQURvQjtBQUFBLE1BQ0RDLG9CQURDOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUVwQkcsV0FGb0I7QUFBQSxNQUVQQyxjQUZPOztBQUFBLHFCQUdaQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhDO0FBQUEsTUFHbkJDLEVBSG1CLGdCQUduQkEsRUFIbUI7O0FBSTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q1Ysd0JBQW9CLENBQUMsVUFBQ1csSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBcEI7O0FBQ0EsUUFBSSxDQUFDWixpQkFBTCxFQUF3QixDQUN2QjtBQUNKLEdBSmtDLENBQW5DO0FBTUEsU0FDSSxNQUFDLHlDQUFEO0FBQ0ksT0FBRyxFQUFFLENBQUNGLElBQUksQ0FBQ2UsU0FEZjtBQUVJLFNBQUssRUFBRWYsSUFBSSxDQUFDZ0IsR0FBTCxJQUFZO0FBQUssU0FBRyxFQUFDLFNBQVQ7QUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmYzliNmZmZjI3MDc2NzFjYjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIEF2YXRhciwgUG9wb3ZlciwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUmV0d2VldE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdhbnRkL2xpYi9mb3JtL0Zvcm0nO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIGlmICghY29tbWVudEZvcm1PcGVuZWQpIHtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGtleT17K3Bvc3QuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICBjb3Zlcj17cG9zdC5pbWcgJiYgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtwb3N0LmltZ30gLz59XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQgLz4sXHJcbiAgICAgICAgICAgICAgICA8SGVhcnRUd29Ub25lIC8+LFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJlbGxpcHNpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGFuZ2VyPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGV4dHJhPXs8QnV0dG9uPu2MlOuhnOyasDwvQnV0dG9uPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGEgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fSB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfSBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fT48L0NhcmQuTWV0YT5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcm93cz17NH0gdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDB9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50IHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH0pLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXNldFdhcm5lZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2FybmluZy5yZXNldFdhcm5lZDtcbiAgfVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXV0aWwvbGliL3dhcm5pbmdcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCh2YWxpZCwgY29tcG9uZW50LCBtZXNzYWdlKSB7XG4gICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKHZhbGlkLCBcIlthbnRkOiBcIi5jb25jYXQoY29tcG9uZW50LCBcIl0gXCIpLmNvbmNhdChtZXNzYWdlKSk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2VuX1VTW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFNpemVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxudmFyIFNpemVDb250ZXh0UHJvdmlkZXIgPSBmdW5jdGlvbiBTaXplQ29udGV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHNpemUgPSBfcmVmLnNpemU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKG9yaWdpblNpemUpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBzaXplIHx8IG9yaWdpblNpemVcbiAgICB9LCBjaGlsZHJlbik7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5TaXplQ29udGV4dFByb3ZpZGVyID0gU2l6ZUNvbnRleHRQcm92aWRlcjtcbnZhciBfZGVmYXVsdCA9IFNpemVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhDb25maWdDb25zdW1lciA9IHdpdGhDb25maWdDb25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBleHBvcnRzLkNvbmZpZ0NvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlbmRlckVtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZW5kZXJFbXB0eVwiKSk7XG5cbnZhciBDb25maWdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAvLyBXZSBwcm92aWRlIGEgZGVmYXVsdCBmdW5jdGlvbiBmb3IgQ29udGV4dCB3aXRob3V0IHByb3ZpZGVyXG4gIGdldFByZWZpeENsczogZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgICByZXR1cm4gc3VmZml4Q2xzID8gXCJhbnQtXCIuY29uY2F0KHN1ZmZpeENscykgOiAnYW50JztcbiAgfSxcbiAgcmVuZGVyRW1wdHk6IF9yZW5kZXJFbXB0eVtcImRlZmF1bHRcIl1cbn0pO1xuZXhwb3J0cy5Db25maWdDb250ZXh0ID0gQ29uZmlnQ29udGV4dDtcbnZhciBDb25maWdDb25zdW1lciA9IENvbmZpZ0NvbnRleHQuQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29uc3VtZXI7XG5cbmZ1bmN0aW9uIHdpdGhDb25maWdDb25zdW1lcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdpdGhDb25maWdDb25zdW1lckZ1bmMoQ29tcG9uZW50KSB7XG4gICAgLy8gV3JhcCB3aXRoIENvbmZpZ0NvbnN1bWVyLiBTaW5jZSB3ZSBuZWVkIGNvbXBhdGlibGUgd2l0aCByZWFjdCAxNSwgYmUgY2FyZSB3aGVuIHVzaW5nIHJlZiBtZXRob2RzXG4gICAgdmFyIFNGQyA9IGZ1bmN0aW9uIFNGQyhwcm9wcykge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29uZmlnUHJvcHMpIHtcbiAgICAgICAgdmFyIGJhc2ljUHJlZml4Q2xzID0gY29uZmlnLnByZWZpeENscztcbiAgICAgICAgdmFyIGdldFByZWZpeENscyA9IGNvbmZpZ1Byb3BzLmdldFByZWZpeENscztcbiAgICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscyhiYXNpY1ByZWZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBjb25maWdQcm9wcywgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnMgPSBDb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgdmFyIG5hbWUgPSBjb25zICYmIGNvbnMuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgU0ZDLmRpc3BsYXlOYW1lID0gXCJ3aXRoQ29uZmlnQ29uc3VtZXIoXCIuY29uY2F0KG5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gU0ZDO1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbmZpZ0NvbnN1bWVyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LkNvbmZpZ0NvbnN1bWVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbmZpZ0NvbnRleHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29udGV4dDtcbiAgfVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuY29uZmlnQ29uc3VtZXJQcm9wcyA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNGaWVsZEZvcm0gPSByZXF1aXJlKFwicmMtZmllbGQtZm9ybVwiKTtcblxudmFyIF9sb2NhbGVQcm92aWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXJcIikpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIF9TaXplQ29udGV4dCA9IHJlcXVpcmUoXCIuL1NpemVDb250ZXh0XCIpO1xuXG52YXIgX21lc3NhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9tZXNzYWdlXCIpKTtcblxudmFyIF9ub3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9ub3RpZmljYXRpb25cIikpO1xuXG4vLyBUT0RPOiByZW1vdmUgdGhpcyBsaW50XG4vLyBTRkMgaGFzIHNwZWNpZmllZCBhIGRpc3BsYXlOYW1lLCBidXQgbm90IHdvcmtlZC5cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGlzcGxheS1uYW1lICovXG52YXIgY29uZmlnQ29uc3VtZXJQcm9wcyA9IFsnZ2V0VGFyZ2V0Q29udGFpbmVyJywgJ2dldFBvcHVwQ29udGFpbmVyJywgJ3Jvb3RQcmVmaXhDbHMnLCAnZ2V0UHJlZml4Q2xzJywgJ3JlbmRlckVtcHR5JywgJ2NzcCcsICdhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbicsICdsb2NhbGUnLCAncGFnZUhlYWRlciddO1xuZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gY29uZmlnQ29uc3VtZXJQcm9wcztcblxudmFyIENvbmZpZ1Byb3ZpZGVyID0gZnVuY3Rpb24gQ29uZmlnUHJvdmlkZXIocHJvcHMpIHtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvcHMuZGlyZWN0aW9uKSB7XG4gICAgICBfbWVzc2FnZVtcImRlZmF1bHRcIl0uY29uZmlnKHtcbiAgICAgICAgcnRsOiBwcm9wcy5kaXJlY3Rpb24gPT09ICdydGwnXG4gICAgICB9KTtcblxuICAgICAgX25vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0uY29uZmlnKHtcbiAgICAgICAgcnRsOiBwcm9wcy5kaXJlY3Rpb24gPT09ICdydGwnXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5kaXJlY3Rpb25dKTtcblxuICB2YXIgZ2V0UHJlZml4Q2xzV3JhcHBlciA9IGZ1bmN0aW9uIGdldFByZWZpeENsc1dyYXBwZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IHByZWZpeENscyB8fCBjb250ZXh0LmdldFByZWZpeENscygnJyk7XG4gICAgICByZXR1cm4gc3VmZml4Q2xzID8gXCJcIi5jb25jYXQobWVyZ2VkUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHN1ZmZpeENscykgOiBtZXJnZWRQcmVmaXhDbHM7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgcmVuZGVyUHJvdmlkZXIgPSBmdW5jdGlvbiByZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZ2V0VGFyZ2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0VGFyZ2V0Q29udGFpbmVyLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZW5kZXJFbXB0eSA9IHByb3BzLnJlbmRlckVtcHR5LFxuICAgICAgICBjc3AgPSBwcm9wcy5jc3AsXG4gICAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uID0gcHJvcHMuYXV0b0luc2VydFNwYWNlSW5CdXR0b24sXG4gICAgICAgIGZvcm0gPSBwcm9wcy5mb3JtLFxuICAgICAgICBpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICAgIHBhZ2VIZWFkZXIgPSBwcm9wcy5wYWdlSGVhZGVyLFxuICAgICAgICBjb21wb25lbnRTaXplID0gcHJvcHMuY29tcG9uZW50U2l6ZSxcbiAgICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBzcGFjZSA9IHByb3BzLnNwYWNlLFxuICAgICAgICB2aXJ0dWFsID0gcHJvcHMudmlydHVhbCxcbiAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gcHJvcHMuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoO1xuICAgIHZhciBjb25maWcgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBjb250ZXh0KSwge1xuICAgICAgZ2V0UHJlZml4Q2xzOiBnZXRQcmVmaXhDbHNXcmFwcGVyKGNvbnRleHQpLFxuICAgICAgY3NwOiBjc3AsXG4gICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbjogYXV0b0luc2VydFNwYWNlSW5CdXR0b24sXG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgIHNwYWNlOiBzcGFjZSxcbiAgICAgIHZpcnR1YWw6IHZpcnR1YWwsXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFxuICAgIH0pO1xuXG4gICAgaWYgKGdldFRhcmdldENvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmdldFRhcmdldENvbnRhaW5lciA9IGdldFRhcmdldENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBpZiAoZ2V0UG9wdXBDb250YWluZXIpIHtcbiAgICAgIGNvbmZpZy5nZXRQb3B1cENvbnRhaW5lciA9IGdldFBvcHVwQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChyZW5kZXJFbXB0eSkge1xuICAgICAgY29uZmlnLnJlbmRlckVtcHR5ID0gcmVuZGVyRW1wdHk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2VIZWFkZXIpIHtcbiAgICAgIGNvbmZpZy5wYWdlSGVhZGVyID0gcGFnZUhlYWRlcjtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGNvbmZpZy5pbnB1dCA9IGlucHV0O1xuICAgIH1cblxuICAgIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjsgLy8gQWRkaXRpb25hbCBGb3JtIHByb3ZpZGVyXG5cbiAgICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IHt9O1xuXG4gICAgaWYgKGxvY2FsZSAmJiBsb2NhbGUuRm9ybSAmJiBsb2NhbGUuRm9ybS5kZWZhdWx0VmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgdmFsaWRhdGVNZXNzYWdlcyA9IGxvY2FsZS5Gb3JtLmRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzO1xuICAgIH1cblxuICAgIGlmIChmb3JtICYmIGZvcm0udmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgdmFsaWRhdGVNZXNzYWdlcyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHZhbGlkYXRlTWVzc2FnZXMpLCBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGF0ZU1lc3NhZ2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNGaWVsZEZvcm0uRm9ybVByb3ZpZGVyLCB7XG4gICAgICAgIHZhbGlkYXRlTWVzc2FnZXM6IHZhbGlkYXRlTWVzc2FnZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0LlNpemVDb250ZXh0UHJvdmlkZXIsIHtcbiAgICAgIHNpemU6IGNvbXBvbmVudFNpemVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29uZmlnXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2xvY2FsZVByb3ZpZGVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgX0FOVF9NQVJLX186IF9sb2NhbGVQcm92aWRlci5BTlRfTUFSS1xuICAgIH0sIGNoaWxkTm9kZSkpKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwgbnVsbCwgZnVuY3Rpb24gKF8sIF9fLCBsZWdhY3lMb2NhbGUpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVuZGVyUHJvdmlkZXIoY29udGV4dCwgbGVnYWN5TG9jYWxlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9lbXB0eVwiKSk7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF8uQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXhDbHMoJ2VtcHR5Jyk7XG5cbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ1RhYmxlJzpcbiAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ1NlbGVjdCc6XG4gICAgICBjYXNlICdUcmVlU2VsZWN0JzpcbiAgICAgIGNhc2UgJ0Nhc2NhZGVyJzpcbiAgICAgIGNhc2UgJ1RyYW5zZmVyJzpcbiAgICAgIGNhc2UgJ01lbnRpb25zJzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXJFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHllYXJQbGFjZWhvbGRlcjogJ1NlbGVjdCB5ZWFyJyxcbiAgICBxdWFydGVyUGxhY2Vob2xkZXI6ICdTZWxlY3QgcXVhcnRlcicsXG4gICAgbW9udGhQbGFjZWhvbGRlcjogJ1NlbGVjdCBtb250aCcsXG4gICAgd2Vla1BsYWNlaG9sZGVyOiAnU2VsZWN0IHdlZWsnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddLFxuICAgIHJhbmdlWWVhclBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHllYXInLCAnRW5kIHllYXInXSxcbiAgICByYW5nZU1vbnRoUGxhY2Vob2xkZXI6IFsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10sXG4gICAgcmFuZ2VXZWVrUGxhY2Vob2xkZXI6IFsnU3RhcnQgd2VlaycsICdFbmQgd2VlayddXG4gIH0sIF9lbl9VU1tcImRlZmF1bHRcIl0pLFxuICB0aW1lUGlja2VyTG9jYWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9lbl9VUzJbXCJkZWZhdWx0XCJdKVxufTsgLy8gQWxsIHNldHRpbmdzIGF0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9ibG9iL21hc3Rlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xvY2FsZS9leGFtcGxlLmpzb25cblxudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtcHR5XCIpKTtcblxudmFyIF9zaW1wbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGVmYXVsdEVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgX3Byb3BzJGltYWdlID0gcHJvcHMuaW1hZ2UsXG4gICAgICAgIGltYWdlID0gX3Byb3BzJGltYWdlID09PSB2b2lkIDAgPyBkZWZhdWx0RW1wdHlJbWcgOiBfcHJvcHMkaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGltYWdlU3R5bGUgPSBwcm9wcy5pbWFnZVN0eWxlLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImltYWdlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjaGlsZHJlblwiLCBcImltYWdlU3R5bGVcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNvbXBvbmVudE5hbWU6IFwiRW1wdHlcIlxuICAgIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlcyA9IHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBkZXNjcmlwdGlvbiA6IGxvY2FsZS5kZXNjcmlwdGlvbjtcbiAgICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgIGFsdDogYWx0LFxuICAgICAgICAgIHNyYzogaW1hZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZU5vZGUgPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpXG4gICAgICB9LCByZXN0UHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgICAgc3R5bGU6IGltYWdlU3R5bGVcbiAgICAgIH0sIGltYWdlTm9kZSksIGRlcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICAgIH0sIGRlcyksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICAgICAgfSwgY2hpbGRyZW4pKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxpc3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JjRmllbGRGb3JtLkxpc3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlRm9ybVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXNlRm9ybTNbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjRmllbGRGb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLWZpZWxkLWZvcm1cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIF91c2VGb3JtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlRm9ybVwiKSk7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBJbnRlcm5hbEZvcm0gPSBmdW5jdGlvbiBJbnRlcm5hbEZvcm0ocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNvbnRleHRTaXplID0gUmVhY3QudXNlQ29udGV4dChfU2l6ZUNvbnRleHRbXCJkZWZhdWx0XCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgbmFtZSA9IHByb3BzLm5hbWU7XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/IGNvbnRleHRTaXplIDogX3Byb3BzJHNpemUsXG4gICAgICBmb3JtID0gcHJvcHMuZm9ybSxcbiAgICAgIGNvbG9uID0gcHJvcHMuY29sb24sXG4gICAgICBsYWJlbEFsaWduID0gcHJvcHMubGFiZWxBbGlnbixcbiAgICAgIGxhYmVsQ29sID0gcHJvcHMubGFiZWxDb2wsXG4gICAgICB3cmFwcGVyQ29sID0gcHJvcHMud3JhcHBlckNvbCxcbiAgICAgIGhpZGVSZXF1aXJlZE1hcmsgPSBwcm9wcy5oaWRlUmVxdWlyZWRNYXJrLFxuICAgICAgX3Byb3BzJGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICAgIGxheW91dCA9IF9wcm9wcyRsYXlvdXQgPT09IHZvaWQgMCA/ICdob3Jpem9udGFsJyA6IF9wcm9wcyRsYXlvdXQsXG4gICAgICBzY3JvbGxUb0ZpcnN0RXJyb3IgPSBwcm9wcy5zY3JvbGxUb0ZpcnN0RXJyb3IsXG4gICAgICBvbkZpbmlzaEZhaWxlZCA9IHByb3BzLm9uRmluaXNoRmFpbGVkLFxuICAgICAgcmVzdEZvcm1Qcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcImZvcm1cIiwgXCJjb2xvblwiLCBcImxhYmVsQWxpZ25cIiwgXCJsYWJlbENvbFwiLCBcIndyYXBwZXJDb2xcIiwgXCJoaWRlUmVxdWlyZWRNYXJrXCIsIFwibGF5b3V0XCIsIFwic2Nyb2xsVG9GaXJzdEVycm9yXCIsIFwib25GaW5pc2hGYWlsZWRcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2Zvcm0nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZm9ybUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChsYXlvdXQpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRlLXJlcXVpcmVkLW1hcmtcIiksIGhpZGVSZXF1aXJlZE1hcmspLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplKSwgc2l6ZSksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcblxuICB2YXIgX3VzZUZvcm0gPSAoMCwgX3VzZUZvcm0zW1wiZGVmYXVsdFwiXSkoZm9ybSksXG4gICAgICBfdXNlRm9ybTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZUZvcm0sIDEpLFxuICAgICAgd3JhcEZvcm0gPSBfdXNlRm9ybTJbMF07XG5cbiAgdmFyIF9fSU5URVJOQUxfXyA9IHdyYXBGb3JtLl9fSU5URVJOQUxfXztcbiAgX19JTlRFUk5BTF9fLm5hbWUgPSBuYW1lO1xuICB2YXIgZm9ybUNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgbGFiZWxBbGlnbjogbGFiZWxBbGlnbixcbiAgICAgIGxhYmVsQ29sOiBsYWJlbENvbCxcbiAgICAgIHdyYXBwZXJDb2w6IHdyYXBwZXJDb2wsXG4gICAgICB2ZXJ0aWNhbDogbGF5b3V0ID09PSAndmVydGljYWwnLFxuICAgICAgY29sb246IGNvbG9uLFxuICAgICAgaXRlbVJlZjogX19JTlRFUk5BTF9fLml0ZW1SZWZcbiAgICB9O1xuICB9LCBbbmFtZSwgbGFiZWxBbGlnbiwgbGFiZWxDb2wsIHdyYXBwZXJDb2wsIGxheW91dCwgY29sb25dKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd3JhcEZvcm07XG4gIH0pO1xuXG4gIHZhciBvbkludGVybmFsRmluaXNoRmFpbGVkID0gZnVuY3Rpb24gb25JbnRlcm5hbEZpbmlzaEZhaWxlZChlcnJvckluZm8pIHtcbiAgICBpZiAob25GaW5pc2hGYWlsZWQpIHtcbiAgICAgIG9uRmluaXNoRmFpbGVkKGVycm9ySW5mbyk7XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvRmlyc3RFcnJvciAmJiBlcnJvckluZm8uZXJyb3JGaWVsZHMubGVuZ3RoKSB7XG4gICAgICB3cmFwRm9ybS5zY3JvbGxUb0ZpZWxkKGVycm9ySW5mby5lcnJvckZpZWxkc1swXS5uYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaXplQ29udGV4dC5TaXplQ29udGV4dFByb3ZpZGVyLCB7XG4gICAgc2l6ZTogc2l6ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Gb3JtQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBmb3JtQ29udGV4dFZhbHVlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybVtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgaWQ6IG5hbWVcbiAgfSwgcmVzdEZvcm1Qcm9wcywge1xuICAgIG9uRmluaXNoRmFpbGVkOiBvbkludGVybmFsRmluaXNoRmFpbGVkLFxuICAgIGZvcm06IHdyYXBGb3JtLFxuICAgIGNsYXNzTmFtZTogZm9ybUNsYXNzTmFtZVxuICB9KSkpKTtcbn07XG5cbnZhciBGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxGb3JtKTtcbnZhciBfZGVmYXVsdCA9IEZvcm07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9ybVByb3ZpZGVyID0gZXhwb3J0cy5Gb3JtSXRlbUNvbnRleHQgPSBleHBvcnRzLkZvcm1Db250ZXh0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgRm9ybUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGxhYmVsQWxpZ246ICdyaWdodCcsXG4gIHZlcnRpY2FsOiBmYWxzZSxcbiAgaXRlbVJlZjogZnVuY3Rpb24gaXRlbVJlZigpIHt9XG59KTtcbmV4cG9ydHMuRm9ybUNvbnRleHQgPSBGb3JtQ29udGV4dDtcbnZhciBGb3JtSXRlbUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHVwZGF0ZUl0ZW1FcnJvcnM6IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1FcnJvcnMoKSB7fVxufSk7XG5leHBvcnRzLkZvcm1JdGVtQ29udGV4dCA9IEZvcm1JdGVtQ29udGV4dDtcblxudmFyIEZvcm1Qcm92aWRlciA9IGZ1bmN0aW9uIEZvcm1Qcm92aWRlcihwcm9wcykge1xuICB2YXIgcHJvdmlkZXJQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHByb3BzLCBbJ3ByZWZpeENscyddKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHByb3ZpZGVyUHJvcHMpO1xufTtcblxuZXhwb3J0cy5Gb3JtUHJvdmlkZXIgPSBGb3JtUHJvdmlkZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB1c2VGb3JtO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmNGaWVsZEZvcm0gPSByZXF1aXJlKFwicmMtZmllbGQtZm9ybVwiKTtcblxudmFyIF9zY3JvbGxJbnRvVmlld0lmTmVlZGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWRcIikpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gdG9OYW1lUGF0aFN0cihuYW1lKSB7XG4gIHZhciBuYW1lUGF0aCA9ICgwLCBfdXRpbC50b0FycmF5KShuYW1lKTtcbiAgcmV0dXJuIG5hbWVQYXRoLmpvaW4oJ18nKTtcbn1cblxuZnVuY3Rpb24gdXNlRm9ybShmb3JtKSB7XG4gIHZhciBfdXNlUmNGb3JtID0gKDAsIF9yY0ZpZWxkRm9ybS51c2VGb3JtKSgpLFxuICAgICAgX3VzZVJjRm9ybTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJjRm9ybSwgMSksXG4gICAgICByY0Zvcm0gPSBfdXNlUmNGb3JtMlswXTtcblxuICB2YXIgaXRlbXNSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoe30pO1xuICB2YXIgd3JhcEZvcm0gPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm9ybSB8fCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByY0Zvcm0pLCB7XG4gICAgICBfX0lOVEVSTkFMX186IHtcbiAgICAgICAgaXRlbVJlZjogZnVuY3Rpb24gaXRlbVJlZihuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbmFtZVBhdGhTdHIgPSB0b05hbWVQYXRoU3RyKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICBpdGVtc1JlZi5jdXJyZW50W25hbWVQYXRoU3RyXSA9IG5vZGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWxldGUgaXRlbXNSZWYuY3VycmVudFtuYW1lUGF0aFN0cl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjcm9sbFRvRmllbGQ6IGZ1bmN0aW9uIHNjcm9sbFRvRmllbGQobmFtZSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHZhciBuYW1lUGF0aCA9ICgwLCBfdXRpbC50b0FycmF5KShuYW1lKTtcbiAgICAgICAgdmFyIGZpZWxkSWQgPSAoMCwgX3V0aWwuZ2V0RmllbGRJZCkobmFtZVBhdGgsIHdyYXBGb3JtLl9fSU5URVJOQUxfXy5uYW1lKTtcbiAgICAgICAgdmFyIG5vZGUgPSBmaWVsZElkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCkgOiBudWxsO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgKDAsIF9zY3JvbGxJbnRvVmlld0lmTmVlZGVkW1wiZGVmYXVsdFwiXSkobm9kZSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICAgIHNjcm9sbE1vZGU6ICdpZi1uZWVkZWQnLFxuICAgICAgICAgICAgYmxvY2s6ICduZWFyZXN0J1xuICAgICAgICAgIH0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEZpZWxkSW5zdGFuY2U6IGZ1bmN0aW9uIGdldEZpZWxkSW5zdGFuY2UobmFtZSkge1xuICAgICAgICB2YXIgbmFtZVBhdGhTdHIgPSB0b05hbWVQYXRoU3RyKG5hbWUpO1xuICAgICAgICByZXR1cm4gaXRlbXNSZWYuY3VycmVudFtuYW1lUGF0aFN0cl07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtmb3JtLCByY0Zvcm1dKTtcbiAgcmV0dXJuIFt3cmFwRm9ybV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZXhwb3J0cy5nZXRGaWVsZElkID0gZ2V0RmllbGRJZDtcblxuZnVuY3Rpb24gdG9BcnJheShjYW5kaWRhdGUpIHtcbiAgaWYgKGNhbmRpZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbmRpZGF0ZSA9PT0gZmFsc2UpIHJldHVybiBbXTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlKSA/IGNhbmRpZGF0ZSA6IFtjYW5kaWRhdGVdO1xufVxuXG5mdW5jdGlvbiBnZXRGaWVsZElkKG5hbWVQYXRoLCBmb3JtTmFtZSkge1xuICBpZiAoIW5hbWVQYXRoLmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIG1lcmdlZElkID0gbmFtZVBhdGguam9pbignXycpO1xuICByZXR1cm4gZm9ybU5hbWUgPyBcIlwiLmNvbmNhdChmb3JtTmFtZSwgXCJfXCIpLmNvbmNhdChtZXJnZWRJZCkgOiBtZXJnZWRJZDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdFwiKSk7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBMb2NhbGVSZWNlaXZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUmVjZWl2ZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBMb2NhbGVSZWNlaXZlcik7XG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlciwgW3tcbiAgICBrZXk6IFwiZ2V0TG9jYWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29tcG9uZW50TmFtZSA9IF90aGlzJHByb3BzLmNvbXBvbmVudE5hbWUsXG4gICAgICAgICAgZGVmYXVsdExvY2FsZSA9IF90aGlzJHByb3BzLmRlZmF1bHRMb2NhbGU7XG4gICAgICB2YXIgbG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCBfZGVmYXVsdFtcImRlZmF1bHRcIl1bY29tcG9uZW50TmFtZSB8fCAnZ2xvYmFsJ107XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUZyb21Db250ZXh0ID0gY29tcG9uZW50TmFtZSAmJiBhbnRMb2NhbGUgPyBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0gOiB7fTtcbiAgICAgIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlKCkgOiBsb2NhbGUpLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvY2FsZUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlQ29kZSgpIHtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQ7XG4gICAgICB2YXIgbG9jYWxlQ29kZSA9IGFudExvY2FsZSAmJiBhbnRMb2NhbGUubG9jYWxlOyAvLyBIYWQgdXNlIExvY2FsZVByb3ZpZGUgYnV0IGRpZG4ndCBzZXQgbG9jYWxlXG5cbiAgICAgIGlmIChhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmV4aXN0ICYmICFsb2NhbGVDb2RlKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdFtcImRlZmF1bHRcIl0ubG9jYWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlQ29kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuZ2V0TG9jYWxlKCksIHRoaXMuZ2V0TG9jYWxlQ29kZSgpLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlUmVjZWl2ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUmVjZWl2ZXI7XG5Mb2NhbGVSZWNlaXZlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudE5hbWU6ICdnbG9iYWwnXG59O1xuTG9jYWxlUmVjZWl2ZXIuY29udGV4dFR5cGUgPSBfY29udGV4dFtcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIExvY2FsZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh1bmRlZmluZWQpO1xudmFyIF9kZWZhdWx0ID0gTG9jYWxlQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9kZWZhdWx0MltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5BTlRfTUFSSyA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoXCIuLi9tb2RhbC9sb2NhbGVcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBBTlRfTUFSSyA9ICdpbnRlcm5hbE1hcmsnO1xuZXhwb3J0cy5BTlRfTUFSSyA9IEFOVF9NQVJLO1xuXG52YXIgTG9jYWxlUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBMb2NhbGVQcm92aWRlcik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkocHJvcHMubG9jYWxlICYmIHByb3BzLmxvY2FsZS5Nb2RhbCk7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMuX0FOVF9NQVJLX18gPT09IEFOVF9NQVJLLCAnTG9jYWxlUHJvdmlkZXInLCAnYExvY2FsZVByb3ZpZGVyYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBsb2NhbGVgIHdpdGggYENvbmZpZ1Byb3ZpZGVyYCBpbnN0ZWFkOiBodHRwOi8vdS5hbnQuZGVzaWduL2xvY2FsZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubG9jYWxlICE9PSBsb2NhbGUpIHtcbiAgICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkobG9jYWxlICYmIGxvY2FsZS5Nb2RhbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMubG9jYWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsb2NhbGUpLCB7XG4gICAgICAgICAgZXhpc3Q6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVByb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVByb3ZpZGVyO1xuTG9jYWxlUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBsb2NhbGU6IHt9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2FsZW5kYXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG52YXIgdHlwZVRlbXBsYXRlID0gJyR7bGFiZWx9IGlzIG5vdCBhIHZhbGlkICR7dHlwZX0nO1xudmFyIGxvY2FsZVZhbHVlcyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBfZW5fVVNbXCJkZWZhdWx0XCJdLFxuICBEYXRlUGlja2VyOiBfZW5fVVMyW1wiZGVmYXVsdFwiXSxcbiAgVGltZVBpY2tlcjogX2VuX1VTM1tcImRlZmF1bHRcIl0sXG4gIENhbGVuZGFyOiBfZW5fVVM0W1wiZGVmYXVsdFwiXSxcbiAgZ2xvYmFsOiB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0J1xuICB9LFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgZmlsdGVyRW1wdHlUZXh0OiAnTm8gZmlsdGVycycsXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0aW9uQWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICBzb3J0VGl0bGU6ICdTb3J0JyxcbiAgICBleHBhbmQ6ICdFeHBhbmQgcm93JyxcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlIHJvdycsXG4gICAgdHJpZ2dlckRlc2M6ICdDbGljayBzb3J0IGJ5IGRlc2NlbmQnLFxuICAgIHRyaWdnZXJBc2M6ICdDbGljayBzb3J0IGJ5IGFzY2VuZCcsXG4gICAgY2FuY2VsU29ydDogJ0NsaWNrIHRvIGNhbmNlbCBzb3J0J1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBqdXN0T2tUZXh0OiAnT0snXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICB0aXRsZXM6IFsnJywgJyddLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUnLFxuICAgIGl0ZW1Vbml0OiAnaXRlbScsXG4gICAgaXRlbXNVbml0OiAnaXRlbXMnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgc2VsZWN0Q3VycmVudDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHJlbW92ZUN1cnJlbnQ6ICdSZW1vdmUgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHJlbW92ZUFsbDogJ1JlbW92ZSBhbGwgZGF0YScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZSdcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgIHVwbG9hZEVycm9yOiAnVXBsb2FkIGVycm9yJyxcbiAgICBwcmV2aWV3RmlsZTogJ1ByZXZpZXcgZmlsZScsXG4gICAgZG93bmxvYWRGaWxlOiAnRG93bmxvYWQgZmlsZSdcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ05vIERhdGEnXG4gIH0sXG4gIEljb246IHtcbiAgICBpY29uOiAnaWNvbidcbiAgfSxcbiAgVGV4dDoge1xuICAgIGVkaXQ6ICdFZGl0JyxcbiAgICBjb3B5OiAnQ29weScsXG4gICAgY29waWVkOiAnQ29waWVkJyxcbiAgICBleHBhbmQ6ICdFeHBhbmQnXG4gIH0sXG4gIFBhZ2VIZWFkZXI6IHtcbiAgICBiYWNrOiAnQmFjaydcbiAgfSxcbiAgRm9ybToge1xuICAgIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzOiB7XG4gICAgICBcImRlZmF1bHRcIjogJ0ZpZWxkIHZhbGlkYXRpb24gZXJyb3IgJHtsYWJlbH0nLFxuICAgICAgcmVxdWlyZWQ6ICdQbGVhc2UgZW50ZXIgJHtsYWJlbH0nLFxuICAgICAgXCJlbnVtXCI6ICcke2xhYmVsfSBtdXN0IGJlIG9uZSBvZiBbJHtlbnVtfV0nLFxuICAgICAgd2hpdGVzcGFjZTogJyR7bGFiZWx9IGNhbm5vdCBiZSBhIGJsYW5rIGNoYXJhY3RlcicsXG4gICAgICBkYXRlOiB7XG4gICAgICAgIGZvcm1hdDogJyR7bGFiZWx9IGRhdGUgZm9ybWF0IGlzIGludmFsaWQnLFxuICAgICAgICBwYXJzZTogJyR7bGFiZWx9IGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gYSBkYXRlJyxcbiAgICAgICAgaW52YWxpZDogJyR7bGFiZWx9IGlzIGFuIGludmFsaWQgZGF0ZSdcbiAgICAgIH0sXG4gICAgICB0eXBlczoge1xuICAgICAgICBzdHJpbmc6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbWV0aG9kOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGFycmF5OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG9iamVjdDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBudW1iZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgZGF0ZTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBcImJvb2xlYW5cIjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBpbnRlZ2VyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIFwiZmxvYXRcIjogdHlwZVRlbXBsYXRlLFxuICAgICAgICByZWdleHA6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgZW1haWw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgdXJsOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGhleDogdHlwZVRlbXBsYXRlXG4gICAgICB9LFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgJHtsZW59IGNoYXJhY3RlcnMnLFxuICAgICAgICBtaW46ICcke2xhYmVsfSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IHVwIHRvICR7bWF4fSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSBjaGFyYWN0ZXJzJ1xuICAgICAgfSxcbiAgICAgIG51bWJlcjoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlIGVxdWFsIHRvICR7bGVufScsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG1pbmltdW0gdmFsdWUgaXMgJHttaW59JyxcbiAgICAgICAgbWF4OiAnJHtsYWJlbH0gbWF4aW11bSB2YWx1ZSBpcyAke21heH0nLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIGFycmF5OiB7XG4gICAgICAgIGxlbjogJ011c3QgYmUgJHtsZW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWluOiAnQXQgbGVhc3QgJHttaW59ICR7bGFiZWx9JyxcbiAgICAgICAgbWF4OiAnQXQgbW9zdCAke21heH0gJHtsYWJlbH0nLFxuICAgICAgICByYW5nZTogJ1RoZSBhbW91bnQgb2YgJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgcGF0dGVybjoge1xuICAgICAgICBtaXNtYXRjaDogJyR7bGFiZWx9IGRvZXMgbm90IG1hdGNoIHRoZSBwYXR0ZXJuICR7cGF0dGVybn0nXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlVmFsdWVzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU1lc3NhZ2U7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTWVzc2FnZShnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VNZXNzYWdlID0gZnVuY3Rpb24gdXNlTWVzc2FnZSgpIHtcbiAgICAvLyBXZSBjYW4gb25seSBnZXQgY29udGVudCBieSByZW5kZXJcbiAgICB2YXIgZ2V0UHJlZml4Q2xzOyAvLyBXZSBjcmVhdGUgYSBwcm94eSB0byBoYW5kbGUgZGVsYXkgY3JlYXRlZCBpbnN0YW5jZVxuXG4gICAgdmFyIGlubmVySW5zdGFuY2UgPSBudWxsO1xuICAgIHZhciBwcm94eSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjaykge1xuICAgICAgICBpbm5lckluc3RhbmNlID09PSBudWxsIHx8IGlubmVySW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlubmVySW5zdGFuY2UuY29tcG9uZW50LmFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX3VzZVJDTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShwcm94eSksXG4gICAgICAgIF91c2VSQ05vdGlmaWNhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJDTm90aWZpY2F0aW9uLCAyKSxcbiAgICAgICAgaG9va05vdGlmeSA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMF0sXG4gICAgICAgIGhvbGRlciA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMV07XG5cbiAgICBmdW5jdGlvbiBub3RpZnkoYXJncykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IGdldFByZWZpeENscygnbWVzc2FnZScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYXJncy5rZXkgfHwgKDAsIF8uZ2V0S2V5VGhlbkluY3JlYXNlS2V5KSgpO1xuICAgICAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJncy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBnZXRSY05vdGlmaWNhdGlvbkluc3RhbmNlKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAgIGhvb2tOb3RpZnkoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgICAgICBvbkNsb3NlOiBjYWxsYmFja1xuICAgICAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICAgICAgaWYgKGlubmVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbm5lckluc3RhbmNlLnJlbW92ZU5vdGljZSh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQudGhlbiA9IGZ1bmN0aW9uIChmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgICAgIH07XG5cbiAgICAgIHJlc3VsdC5wcm9taXNlID0gY2xvc2VQcm9taXNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICByZXR1cm4gKDAsIF8uYXR0YWNoVHlwZUFwaSkoaG9va0FwaVJlZi5jdXJyZW50LCB0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTWVzc2FnZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEtleVRoZW5JbmNyZWFzZUtleSA9IGdldEtleVRoZW5JbmNyZWFzZUtleTtcbmV4cG9ydHMuYXR0YWNoVHlwZUFwaSA9IGF0dGFjaFR5cGVBcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0luZm9DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9JbmZvQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF91c2VNZXNzYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VNZXNzYWdlXCIpKTtcblxudmFyIG1lc3NhZ2VJbnN0YW5jZTtcbnZhciBkZWZhdWx0RHVyYXRpb24gPSAzO1xudmFyIGRlZmF1bHRUb3A7XG52YXIga2V5ID0gMTtcbnZhciBsb2NhbFByZWZpeENscyA9ICdhbnQtbWVzc2FnZSc7XG52YXIgdHJhbnNpdGlvbk5hbWUgPSAnbW92ZS11cCc7XG52YXIgZ2V0Q29udGFpbmVyO1xudmFyIG1heENvdW50O1xudmFyIHJ0bCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBnZXRLZXlUaGVuSW5jcmVhc2VLZXkoKSB7XG4gIHJldHVybiBrZXkrKztcbn1cblxuZnVuY3Rpb24gc2V0TWVzc2FnZUNvbmZpZyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFRvcCA9IG9wdGlvbnMudG9wO1xuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyBkZWZhdWx0VG9wXG4gIH1cblxuICBpZiAob3B0aW9ucy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdER1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnByZWZpeENscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbG9jYWxQcmVmaXhDbHMgPSBvcHRpb25zLnByZWZpeENscztcbiAgfVxuXG4gIGlmIChvcHRpb25zLmdldENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2V0Q29udGFpbmVyID0gb3B0aW9ucy5nZXRDb250YWluZXI7XG4gIH1cblxuICBpZiAob3B0aW9ucy50cmFuc2l0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJhbnNpdGlvbk5hbWUgPSBvcHRpb25zLnRyYW5zaXRpb25OYW1lO1xuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyB0cmFuc2l0aW9uTmFtZVxuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF4Q291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgIG1heENvdW50ID0gb3B0aW9ucy5tYXhDb3VudDtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQpIHtcbiAgICBydGwgPSBvcHRpb25zLnJ0bDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSQ05vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscyB8fCBsb2NhbFByZWZpeENscztcblxuICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpbnN0YW5jZTogbWVzc2FnZUluc3RhbmNlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX3JjTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5uZXdJbnN0YW5jZSh7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHN0eWxlOiB7XG4gICAgICB0b3A6IGRlZmF1bHRUb3BcbiAgICB9LFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgIG1heENvdW50OiBtYXhDb3VudFxuICB9LCBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZTogbWVzc2FnZUluc3RhbmNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICBjYWxsYmFjayh7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHR5cGVUb0ljb24gPSB7XG4gIGluZm86IF9JbmZvQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgc3VjY2VzczogX0NoZWNrQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgZXJyb3I6IF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIHdhcm5pbmc6IF9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIGxvYWRpbmc6IF9Mb2FkaW5nT3V0bGluZWRbXCJkZWZhdWx0XCJdXG59O1xuXG5mdW5jdGlvbiBnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGR1cmF0aW9uID0gYXJncy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gYXJncy5kdXJhdGlvbiA6IGRlZmF1bHREdXJhdGlvbjtcbiAgdmFyIEljb25Db21wb25lbnQgPSB0eXBlVG9JY29uW2FyZ3MudHlwZV07XG4gIHZhciBtZXNzYWdlQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWN1c3RvbS1jb250ZW50XCIpLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFyZ3MudHlwZSksIGFyZ3MudHlwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBydGwgPT09IHRydWUpLCBfY2xhc3NOYW1lcykpO1xuICByZXR1cm4ge1xuICAgIGtleTogYXJncy5rZXksXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHN0eWxlOiBhcmdzLnN0eWxlIHx8IHt9LFxuICAgIGNsYXNzTmFtZTogYXJncy5jbGFzc05hbWUsXG4gICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBtZXNzYWdlQ2xhc3NcbiAgICB9LCBhcmdzLmljb24gfHwgSWNvbkNvbXBvbmVudCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQ29tcG9uZW50LCBudWxsKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGFyZ3MuY29udGVudCkpLFxuICAgIG9uQ2xvc2U6IGFyZ3Mub25DbG9zZVxuICB9O1xufVxuXG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICB2YXIgdGFyZ2V0ID0gYXJncy5rZXkgfHwga2V5Kys7XG4gIHZhciBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy5vbkNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgIH07XG5cbiAgICBnZXRSQ05vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgaW5zdGFuY2Uubm90aWNlKGdldFJDTm90aWNlUHJvcHMoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgIG9uQ2xvc2U6IGNhbGxiYWNrXG4gICAgICB9KSwgcHJlZml4Q2xzKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgbWVzc2FnZUluc3RhbmNlLnJlbW92ZU5vdGljZSh0YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICByZXN1bHQudGhlbiA9IGZ1bmN0aW9uIChmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIGNsb3NlUHJvbWlzZS50aGVuKGZpbGxlZCwgcmVqZWN0ZWQpO1xuICB9O1xuXG4gIHJlc3VsdC5wcm9taXNlID0gY2xvc2VQcm9taXNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0FyZ3NQcm9wcyhjb250ZW50KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29udGVudCkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICEhY29udGVudC5jb250ZW50O1xufVxuXG52YXIgYXBpID0ge1xuICBvcGVuOiBub3RpY2UsXG4gIGNvbmZpZzogc2V0TWVzc2FnZUNvbmZpZyxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBtZXNzYWdlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGF0dGFjaFR5cGVBcGkob3JpZ2luYWxBcGksIHR5cGUpIHtcbiAgb3JpZ2luYWxBcGlbdHlwZV0gPSBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcbiAgICBpZiAoaXNBcmdzUHJvcHMoY29udGVudCkpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRlbnQpLCB7XG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNsb3NlID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZ2luYWxBcGkub3Blbih7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG9uQ2xvc2U6IG9uQ2xvc2VcbiAgICB9KTtcbiAgfTtcbn1cblxuWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdsb2FkaW5nJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gYXR0YWNoVHlwZUFwaShhcGksIHR5cGUpO1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuYXBpLnVzZU1lc3NhZ2UgPSAoMCwgX3VzZU1lc3NhZ2VbXCJkZWZhdWx0XCJdKShnZXRSQ05vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKTtcbnZhciBfZGVmYXVsdCA9IGFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGFuZ2VDb25maXJtTG9jYWxlID0gY2hhbmdlQ29uZmlybUxvY2FsZTtcbmV4cG9ydHMuZ2V0Q29uZmlybUxvY2FsZSA9IGdldENvbmZpcm1Mb2NhbGU7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb25maXJtTG9jYWxlKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB7XG4gICAgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJ1bnRpbWVMb2NhbGUpLCBuZXdMb2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVVc2VOb3RpZmljYXRpb247XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VOb3RpZmljYXRpb24oZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpIHtcbiAgdmFyIHVzZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIHVzZU5vdGlmaWNhdGlvbigpIHtcbiAgICAvLyBXZSBjYW4gb25seSBnZXQgY29udGVudCBieSByZW5kZXJcbiAgICB2YXIgZ2V0UHJlZml4Q2xzOyAvLyBXZSBjcmVhdGUgYSBwcm94eSB0byBoYW5kbGUgZGVsYXkgY3JlYXRlZCBpbnN0YW5jZVxuXG4gICAgdmFyIGlubmVySW5zdGFuY2UgPSBudWxsO1xuICAgIHZhciBwcm94eSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjaykge1xuICAgICAgICBpbm5lckluc3RhbmNlID09PSBudWxsIHx8IGlubmVySW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlubmVySW5zdGFuY2UuY29tcG9uZW50LmFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX3VzZVJDTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShwcm94eSksXG4gICAgICAgIF91c2VSQ05vdGlmaWNhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJDTm90aWZpY2F0aW9uLCAyKSxcbiAgICAgICAgaG9va05vdGlmeSA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMF0sXG4gICAgICAgIGhvbGRlciA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMV07XG5cbiAgICBmdW5jdGlvbiBub3RpZnkoYXJncykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IGdldFByZWZpeENscygnbm90aWZpY2F0aW9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgIHByZWZpeENsczogbWVyZ2VkUHJlZml4Q2xzXG4gICAgICB9KSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgICBpbm5lckluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIGhvb2tOb3RpZnkoZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gRmlsbCBmdW5jdGlvbnNcblxuXG4gICAgdmFyIGhvb2tBcGlSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICAgIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuID0gbm90aWZ5O1xuICAgIFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBob29rQXBpUmVmLmN1cnJlbnRbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIFtob29rQXBpUmVmLmN1cnJlbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwge1xuICAgICAga2V5OiBcImhvbGRlclwiXG4gICAgfSwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGdldFByZWZpeENscyA9IGNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIGhvbGRlcjtcbiAgICB9KV07XG4gIH07XG5cbiAgcmV0dXJuIHVzZU5vdGlmaWNhdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBub3RpZmljYXRpb25JbnN0YW5jZSA9IHt9O1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDQuNTtcbnZhciBkZWZhdWx0VG9wID0gMjQ7XG52YXIgZGVmYXVsdEJvdHRvbSA9IDI0O1xudmFyIGRlZmF1bHRQcmVmaXhDbHMgPSAnYW50LW5vdGlmaWNhdGlvbic7XG52YXIgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BSaWdodCc7XG52YXIgZGVmYXVsdEdldENvbnRhaW5lcjtcbnZhciBkZWZhdWx0Q2xvc2VJY29uO1xudmFyIHJ0bCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXROb3RpZmljYXRpb25Db25maWcob3B0aW9ucykge1xuICB2YXIgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgcGxhY2VtZW50ID0gb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3R0b20gPSBvcHRpb25zLmJvdHRvbSxcbiAgICAgIHRvcCA9IG9wdGlvbnMudG9wLFxuICAgICAgZ2V0Q29udGFpbmVyID0gb3B0aW9ucy5nZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb24gPSBvcHRpb25zLmNsb3NlSWNvbixcbiAgICAgIHByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuXG4gIGlmIChwcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQcmVmaXhDbHMgPSBwcmVmaXhDbHM7XG4gIH1cblxuICBpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IGR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKHBsYWNlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJ0bCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wTGVmdCc7XG4gIH1cblxuICBpZiAoYm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Qm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFRvcCA9IHRvcDtcbiAgfVxuXG4gIGlmIChnZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRHZXRDb250YWluZXIgPSBnZXRDb250YWluZXI7XG4gIH1cblxuICBpZiAoY2xvc2VJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0Q2xvc2VJY29uID0gY2xvc2VJY29uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQpIHtcbiAgICBydGwgPSBvcHRpb25zLnJ0bDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQpIHtcbiAgdmFyIHRvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdFRvcDtcbiAgdmFyIGJvdHRvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdEJvdHRvbTtcbiAgdmFyIHN0eWxlO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIF9hcmdzJHBsYWNlbWVudCA9IGFyZ3MucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX2FyZ3MkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBkZWZhdWx0UGxhY2VtZW50IDogX2FyZ3MkcGxhY2VtZW50LFxuICAgICAgdG9wID0gYXJncy50b3AsXG4gICAgICBib3R0b20gPSBhcmdzLmJvdHRvbSxcbiAgICAgIF9hcmdzJGdldENvbnRhaW5lciA9IGFyZ3MuZ2V0Q29udGFpbmVyLFxuICAgICAgZ2V0Q29udGFpbmVyID0gX2FyZ3MkZ2V0Q29udGFpbmVyID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0Q29udGFpbmVyIDogX2FyZ3MkZ2V0Q29udGFpbmVyLFxuICAgICAgX2FyZ3MkY2xvc2VJY29uID0gYXJncy5jbG9zZUljb24sXG4gICAgICBjbG9zZUljb24gPSBfYXJncyRjbG9zZUljb24gPT09IHZvaWQgMCA/IGRlZmF1bHRDbG9zZUljb24gOiBfYXJncyRjbG9zZUljb247XG4gIHZhciBvdXRlclByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGRlZmF1bHRQcmVmaXhDbHM7XG4gIHZhciBwcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItbm90aWNlXCIpO1xuICB2YXIgY2FjaGVLZXkgPSBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpO1xuICB2YXIgY2FjaGVJbnN0YW5jZSA9IG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XTtcblxuICBpZiAoY2FjaGVJbnN0YW5jZSkge1xuICAgIFByb21pc2UucmVzb2x2ZShjYWNoZUluc3RhbmNlKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2xvc2VJY29uVG9SZW5kZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgfSwgY2xvc2VJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLWNsb3NlLWljb25cIilcbiAgfSkpO1xuICB2YXIgbm90aWZpY2F0aW9uQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItXCIpLmNvbmNhdChwbGFjZW1lbnQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItcnRsXCIpLCBydGwgPT09IHRydWUpKTtcbiAgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICAgIHByZWZpeENsczogb3V0ZXJQcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWU6IG5vdGlmaWNhdGlvbkNsYXNzLFxuICAgICAgc3R5bGU6IGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCwgdG9wLCBib3R0b20pLFxuICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgICBjbG9zZUljb246IGNsb3NlSWNvblRvUmVuZGVyXG4gICAgfSwgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmVzb2x2ZShub3RpZmljYXRpb24pO1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG5vdGlmaWNhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgc3VjY2VzczogX0NoZWNrQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBpbmZvOiBfSW5mb0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgZXJyb3I6IF9DbG9zZUNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdXG59O1xuXG5mdW5jdGlvbiBnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykge1xuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RHVyYXRpb24gOiBhcmdzLmR1cmF0aW9uO1xuICB2YXIgaWNvbk5vZGUgPSBudWxsO1xuXG4gIGlmIChhcmdzLmljb24pIHtcbiAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgIH0sIGFyZ3MuaWNvbik7XG4gIH0gZWxzZSBpZiAoYXJncy50eXBlKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlVG9JY29uW2FyZ3MudHlwZV0gfHwgbnVsbCwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24gXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tXCIpLmNvbmNhdChhcmdzLnR5cGUpXG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXV0b01hcmdpblRhZyA9ICFhcmdzLmRlc2NyaXB0aW9uICYmIGljb25Ob2RlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVzc2FnZS1zaW5nbGUtbGluZS1hdXRvLW1hcmdpblwiKVxuICB9KSA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBpY29uTm9kZSA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1pY29uXCIpIDogJycsXG4gICAgICByb2xlOiBcImFsZXJ0XCJcbiAgICB9LCBpY29uTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2VcIilcbiAgICB9LCBhdXRvTWFyZ2luVGFnLCBhcmdzLm1lc3NhZ2UpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBhcmdzLmRlc2NyaXB0aW9uKSwgYXJncy5idG4gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJ0blwiKVxuICAgIH0sIGFyZ3MuYnRuKSA6IG51bGwpLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2UsXG4gICAgb25DbGljazogYXJncy5vbkNsaWNrLFxuICAgIGtleTogYXJncy5rZXksXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZVxuICB9O1xufVxuXG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICBnZXROb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIGluc3RhbmNlLm5vdGljZShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICB9KTtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2Uoa2V5KSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UucmVtb3ZlTm90aWNlKGtleSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgY29uZmlnOiBzZXROb3RpZmljYXRpb25Db25maWcsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgT2JqZWN0LmtleXMobm90aWZpY2F0aW9uSW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07IC8vIGxndG1banMvbWlzc2luZy1hd2FpdF1cbiAgICB9KTtcbiAgfVxufTtcblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIGFwaVt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcmV0dXJuIGFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkpO1xuICB9O1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuYXBpLnVzZU5vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkoZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xudmFyIF9kZWZhdWx0ID0gYXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZScsXG4gIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgdGltZScsICdFbmQgdGltZSddXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIuZGVmYXVsdCkodGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbnZhciBOb3RpY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czIuZGVmYXVsdCkoTm90aWNlLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vdGljZSk7XG5cbiAgZnVuY3Rpb24gTm90aWNlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syLmRlZmF1bHQpKHRoaXMsIE5vdGljZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcblxuICAgIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuXG4gICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhcnRDbG9zZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmR1cmF0aW9uKSB7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJDbG9zZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNsb3NlVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczIuZGVmYXVsdCkoTm90aWNlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gcHJldlByb3BzLmR1cmF0aW9uIHx8IHRoaXMucHJvcHMudXBkYXRlKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0YXJ0Q2xvc2VUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0YXJ0Q2xvc2VUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9zYWJsZSA9IF90aGlzJHByb3BzLmNsb3NhYmxlLFxuICAgICAgICAgIGNsb3NlSWNvbiA9IF90aGlzJHByb3BzLmNsb3NlSWNvbixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaG9sZGVyID0gX3RoaXMkcHJvcHMuaG9sZGVyO1xuICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gICAgICB2YXIgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkuc3Vic3RyKDAsIDUpID09PSAnYXJpYS0nIHx8IGtleSA9PT0gJ3JvbGUnKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBfdGhpczIucHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY29tcG9uZW50Q2xhc3MsIGNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoe30sIFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zYWJsZVwiKSwgY2xvc2FibGUpKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuY2xlYXJDbG9zZVRpbWVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuc3RhcnRDbG9zZVRpbWVyLFxuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICB9LCBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMpLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY29udGVudFwiKVxuICAgICAgfSwgY2hpbGRyZW4pLCBjbG9zYWJsZSA/IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuY2xvc2UsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NlXCIpXG4gICAgICB9LCBjbG9zZUljb24gfHwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZS14XCIpXG4gICAgICB9KSkgOiBudWxsKTtcblxuICAgICAgaWYgKGhvbGRlcikge1xuICAgICAgICByZXR1cm4gX3JlYWN0RG9tLmRlZmF1bHQuY3JlYXRlUG9ydGFsKG5vZGUsIGhvbGRlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm90aWNlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWNlO1xuTm90aWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBkdXJhdGlvbjogMS41LFxuICBzdHlsZToge1xuICAgIHJpZ2h0OiAnNTAlJ1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTm90aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob3RpY2VcIikpO1xuXG5mdW5jdGlvbiB1c2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSW5zdGFuY2UpIHtcbiAgdmFyIGNyZWF0ZWRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShub3RpY2VQcm9wcykge1xuICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlLmFkZChub3RpY2VQcm9wcywgZnVuY3Rpb24gKGRpdiwgcHJvcHMpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wcy5rZXk7XG5cbiAgICAgIGlmIChkaXYgJiYgIWNyZWF0ZWRSZWYuY3VycmVudFtrZXldKSB7XG4gICAgICAgIHZhciBub3RpY2VFbGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Ob3RpY2UuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBob2xkZXI6IGRpdlxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZWRSZWYuY3VycmVudFtrZXldID0gbm90aWNlRWxlO1xuICAgICAgICBzZXRFbGVtZW50cyhmdW5jdGlvbiAob3JpZ2luRWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG9yaWdpbkVsZW1lbnRzKSwgW25vdGljZUVsZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbbm90aWZ5LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBlbGVtZW50cyldO1xufSIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIC8vIE9wdGlvbnMuanN4XG4gIGl0ZW1zX3Blcl9wYWdlOiAnLyBwYWdlJyxcbiAganVtcF90bzogJ0dvIHRvJyxcbiAganVtcF90b19jb25maXJtOiAnY29uZmlybScsXG4gIHBhZ2U6ICcnLFxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICdQcmV2aW91cyBQYWdlJyxcbiAgbmV4dF9wYWdlOiAnTmV4dCBQYWdlJyxcbiAgcHJldl81OiAnUHJldmlvdXMgNSBQYWdlcycsXG4gIG5leHRfNTogJ05leHQgNSBQYWdlcycsXG4gIHByZXZfMzogJ1ByZXZpb3VzIDMgUGFnZXMnLFxuICBuZXh0XzM6ICdOZXh0IDMgUGFnZXMnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgbG9jYWxlID0ge1xuICBsb2NhbGU6ICdlbl9VUycsXG4gIHRvZGF5OiAnVG9kYXknLFxuICBub3c6ICdOb3cnLFxuICBiYWNrVG9Ub2RheTogJ0JhY2sgdG8gdG9kYXknLFxuICBvazogJ09rJyxcbiAgY2xlYXI6ICdDbGVhcicsXG4gIG1vbnRoOiAnTW9udGgnLFxuICB5ZWFyOiAnWWVhcicsXG4gIHRpbWVTZWxlY3Q6ICdzZWxlY3QgdGltZScsXG4gIGRhdGVTZWxlY3Q6ICdzZWxlY3QgZGF0ZScsXG4gIHdlZWtTZWxlY3Q6ICdDaG9vc2UgYSB3ZWVrJyxcbiAgbW9udGhTZWxlY3Q6ICdDaG9vc2UgYSBtb250aCcsXG4gIHllYXJTZWxlY3Q6ICdDaG9vc2UgYSB5ZWFyJyxcbiAgZGVjYWRlU2VsZWN0OiAnQ2hvb3NlIGEgZGVjYWRlJyxcbiAgeWVhckZvcm1hdDogJ1lZWVknLFxuICBkYXRlRm9ybWF0OiAnTS9EL1lZWVknLFxuICBkYXlGb3JtYXQ6ICdEJyxcbiAgZGF0ZVRpbWVGb3JtYXQ6ICdNL0QvWVlZWSBISDptbTpzcycsXG4gIG1vbnRoQmVmb3JlWWVhcjogdHJ1ZSxcbiAgcHJldmlvdXNNb250aDogJ1ByZXZpb3VzIG1vbnRoIChQYWdlVXApJyxcbiAgbmV4dE1vbnRoOiAnTmV4dCBtb250aCAoUGFnZURvd24pJyxcbiAgcHJldmlvdXNZZWFyOiAnTGFzdCB5ZWFyIChDb250cm9sICsgbGVmdCknLFxuICBuZXh0WWVhcjogJ05leHQgeWVhciAoQ29udHJvbCArIHJpZ2h0KScsXG4gIHByZXZpb3VzRGVjYWRlOiAnTGFzdCBkZWNhZGUnLFxuICBuZXh0RGVjYWRlOiAnTmV4dCBkZWNhZGUnLFxuICBwcmV2aW91c0NlbnR1cnk6ICdMYXN0IGNlbnR1cnknLFxuICBuZXh0Q2VudHVyeTogJ05leHQgY2VudHVyeSdcbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9