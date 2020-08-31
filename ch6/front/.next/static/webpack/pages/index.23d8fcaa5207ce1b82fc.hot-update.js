webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/time-picker */ "./node_modules/antd/lib/time-picker/index.js");
/* harmony import */ var antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [
//         {
//             User: {
//                 id: 1,
//                 nickname: '제로초',
//             },
//             content: '첫 번째 게시글',
//             img: '',
//         },
//     ],
// };

var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePath = _useSelector.imagePath,
      isAddingPost = _useSelector.isAddingPost,
      postAdded = _useSelector.postAdded;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setText('');
  }, [postAdded === true]); // 포스트 업로드 되면 text안 값 비워줌.

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault; // 페이지 안 넘어가게끔 해줌

    if (!text || !text.trim()) {
      // 공백 검사도 같이 해준다.
      alert('게시글을 작성하세요');
    }

    console.log('post 요청했어!!');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: {
        content: text,
        user: me
      }
    });
  }, [text]); // userCallback은 기억력이 강력해서 [] 안에 넣어줘야 변동사항이 저장됨.

  return (// 이미지 업로드 해야하기 때문에 encType은 multipart임
    // style넣을 때는 객체 형식으로 {{ 넣어야함 }}
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      encType: "multipart/form-data",
      style: {
        margin: '10px 0px 20px'
      },
      onFinish: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694",
      value: text,
      onChange: onChangeText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      style: {
        "float": 'right'
      },
      htmlType: "submit",
      loading: isAddingPost,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9\uCA31")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, imagePath.map(function (v, i) {
      // 반복문
      return __jsx("div", {
        key: v,
        style: {
          display: 'inline-block'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "http://localhost:3000/ ".concat(v),
        style: {
          width: '200px'
        },
        alt: v,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 33
        }
      }, "\uC81C\uAC70")));
    })))
  );
};

_s(PostForm, "Q77Ph6J0I1nfJWOOR5/6I+lBpKI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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

/***/ "./node_modules/@ant-design/css-animation/lib/Event.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/lib/Event.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/colors.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/colors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetColorTypes = exports.PresetStatusColorTypes = void 0;

var _type = __webpack_require__(/*! ./type */ "./node_modules/antd/lib/_util/type.js");

var PresetStatusColorTypes = (0, _type.tuple)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

exports.PresetStatusColorTypes = PresetStatusColorTypes;
var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
exports.PresetColorTypes = PresetColorTypes;

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

/***/ "./node_modules/antd/lib/_util/raf.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/raf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ "./node_modules/antd/lib/_util/reactNode.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/reactNode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceElement = replaceElement;
exports.cloneElement = cloneElement;
exports.isValidElement = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var isValidElement = React.isValidElement;
exports.isValidElement = isValidElement;

function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props() : props);
}

function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;

/***/ }),

/***/ "./node_modules/antd/lib/_util/unreachableException.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/lib/_util/unreachableException.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var UnreachableException = function UnreachableException(value) {
  (0, _classCallCheck2["default"])(this, UnreachableException);
  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

exports["default"] = UnreachableException;

/***/ }),

/***/ "./node_modules/antd/lib/_util/wave.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/wave.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/antd/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Event = _interopRequireDefault(__webpack_require__(/*! @ant-design/css-animation/lib/Event */ "./node_modules/@ant-design/css-animation/lib/Event.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ./raf */ "./node_modules/antd/lib/_util/raf.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Wave, _React$Component);

  var _super = (0, _createSuper2["default"])(Wave);

  function Wave() {
    var _this;

    (0, _classCallCheck2["default"])(this, Wave);
    _this = _super.apply(this, arguments);
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2["default"])(_this));

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  (0, _createClass2["default"])(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);
  return Wave;
}(React.Component);

exports["default"] = Wave;
Wave.contextType = _configProvider.ConfigContext;

/***/ }),

/***/ "./node_modules/antd/lib/button/LoadingIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/LoadingIcon.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingIcon;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcMotion = _interopRequireDefault(__webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null));
  }

  return /*#__PURE__*/React.createElement(_rcMotion["default"], {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      className: (0, _classnames["default"])(className)
    }));
  });
}

/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
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

var _unreachableException = _interopRequireDefault(__webpack_require__(/*! ../_util/unreachableException */ "./node_modules/antd/lib/_util/unreachableException.js"));

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

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new _unreachableException["default"](size));
    }

    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertLegacyProps = convertLegacyProps;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/antd/node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _LoadingIcon = _interopRequireDefault(__webpack_require__(/*! ./LoadingIcon */ "./node_modules/antd/lib/button/LoadingIcon.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

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
/* eslint-disable react/button-has-type */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0, _reactNode.cloneElement)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return /*#__PURE__*/React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = (0, _typeof2["default"])(child);
    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var loading = props.loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      ghost = props.ghost,
      block = props.block,
      rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block"]);

  var size = React.useContext(_SizeContext["default"]);

  var _React$useState = React.useState(!!loading),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var delayTimeoutRef = React.useRef();

  var isNeedInserted = function isNeedInserted() {
    return React.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if ((0, _typeof2["default"])(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  React.useEffect(function () {
    fixTwoCNChar();
  }, [buttonRef]);

  var handleClick = function handleClick(e) {
    var onClick = props.onClick;

    if (innerLoading) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  (0, _devWarning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  (0, _devWarning["default"])(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    default:
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && iconType), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/React.createElement(_LoadingIcon["default"], {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType', 'loading']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


  var _a = rest,
      htmlType = _a.htmlType,
      otherProps = __rest(_a, ["htmlType"]);

  var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, (0, _omit["default"])(otherProps, ['loading']), {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/React.createElement(_wave["default"], null, buttonNode);
};

var Button = /*#__PURE__*/React.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.Group = _buttonGroup["default"];
Button.__ANT_BUTTON = true;
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _default = _button["default"];
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

/***/ "./node_modules/antd/lib/date-picker/PickerButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/PickerButton.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PickerButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

function PickerButton(props) {
  return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
    size: "small",
    type: "primary"
  }, props));
}

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/PickerTag.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/PickerTag.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PickerTag;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _tag = _interopRequireDefault(__webpack_require__(/*! ../tag */ "./node_modules/antd/lib/tag/index.js"));

function PickerTag(props) {
  return /*#__PURE__*/React.createElement(_tag["default"], (0, _extends2["default"])({
    color: "blue"
  }, props));
}

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/generatePicker/generateRangePicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/generatePicker/generateRangePicker.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateRangePicker;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CalendarOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CalendarOutlined */ "./node_modules/@ant-design/icons/CalendarOutlined.js"));

var _ClockCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ClockCircleOutlined */ "./node_modules/@ant-design/icons/ClockCircleOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _SwapRightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SwapRightOutlined */ "./node_modules/@ant-design/icons/SwapRightOutlined.js"));

var _rcPicker = __webpack_require__(/*! rc-picker */ "./node_modules/rc-picker/es/index.js");

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/date-picker/util.js");

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/date-picker/generatePicker/index.js");

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

function generateRangePicker(generateConfig) {
  var RangePicker = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(RangePicker, _React$Component);

    var _super = (0, _createSuper2["default"])(RangePicker);

    function RangePicker() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangePicker);
      _this = _super.apply(this, arguments);
      _this.pickerRef = /*#__PURE__*/React.createRef();

      _this.focus = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.focus();
        }
      };

      _this.blur = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.blur();
        }
      };

      _this.getDefaultLocale = function () {
        var locale = _this.props.locale;
        var result = (0, _extends2["default"])((0, _extends2["default"])({}, _en_US["default"]), locale);
        result.lang = (0, _extends2["default"])((0, _extends2["default"])({}, result.lang), (locale || {}).lang);
        return result;
      };

      _this.renderPicker = function (locale) {
        var _this$context = _this.context,
            getPrefixCls = _this$context.getPrefixCls,
            direction = _this$context.direction,
            getPopupContainer = _this$context.getPopupContainer;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            customGetPopupContainer = _a.getPopupContainer,
            className = _a.className,
            customizeSize = _a.size,
            _a$bordered = _a.bordered,
            bordered = _a$bordered === void 0 ? true : _a$bordered,
            placeholder = _a.placeholder,
            restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

        var _this$props = _this.props,
            format = _this$props.format,
            showTime = _this$props.showTime,
            picker = _this$props.picker;
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var additionalOverrideProps = {};
        additionalOverrideProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, additionalOverrideProps), showTime ? (0, _.getTimeProps)((0, _extends2["default"])({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? (0, _.getTimeProps)((0, _extends2["default"])((0, _extends2["default"])({
          format: format
        }, _this.props), {
          picker: picker
        })) : {});
        return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
          var _classNames;

          var mergedSize = customizeSize || size;
          return /*#__PURE__*/React.createElement(_rcPicker.RangePicker, (0, _extends2["default"])({
            separator: /*#__PURE__*/React.createElement("span", {
              "aria-label": "to",
              className: "".concat(prefixCls, "-separator")
            }, /*#__PURE__*/React.createElement(_SwapRightOutlined["default"], null)),
            ref: _this.pickerRef,
            placeholder: (0, _util.getRangePlaceholder)(picker, locale, placeholder),
            suffixIcon: picker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined["default"], null) : /*#__PURE__*/React.createElement(_CalendarOutlined["default"], null),
            clearIcon: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
            allowClear: true,
            transitionName: "slide-up"
          }, restProps, additionalOverrideProps, {
            className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames)),
            locale: locale.lang,
            prefixCls: prefixCls,
            getPopupContainer: customGetPopupContainer || getPopupContainer,
            generateConfig: generateConfig,
            prevIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-prev-icon")
            }),
            nextIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-next-icon")
            }),
            superPrevIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-super-prev-icon")
            }),
            superNextIcon: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-super-next-icon")
            }),
            components: _.Components,
            direction: direction
          }));
        });
      };

      return _this;
    }

    (0, _createClass2["default"])(RangePicker, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
          componentName: "DatePicker",
          defaultLocale: this.getDefaultLocale
        }, this.renderPicker);
      }
    }]);
    return RangePicker;
  }(React.Component);

  RangePicker.contextType = _configProvider.ConfigContext;
  return RangePicker;
}

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/generatePicker/generateSinglePicker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/generatePicker/generateSinglePicker.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generatePicker;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/antd/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/antd/node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/antd/node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CalendarOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CalendarOutlined */ "./node_modules/@ant-design/icons/CalendarOutlined.js"));

var _ClockCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ClockCircleOutlined */ "./node_modules/@ant-design/icons/ClockCircleOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _rcPicker = _interopRequireDefault(__webpack_require__(/*! rc-picker */ "./node_modules/rc-picker/es/index.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/antd/lib/date-picker/util.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/date-picker/generatePicker/index.js");

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

function generatePicker(generateConfig) {
  function getPicker(picker, displayName) {
    var Picker = /*#__PURE__*/function (_React$Component) {
      (0, _inherits2["default"])(Picker, _React$Component);

      var _super = (0, _createSuper2["default"])(Picker);

      function Picker(props) {
        var _this;

        (0, _classCallCheck2["default"])(this, Picker);
        _this = _super.call(this, props);
        _this.pickerRef = /*#__PURE__*/React.createRef();

        _this.focus = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.focus();
          }
        };

        _this.blur = function () {
          if (_this.pickerRef.current) {
            _this.pickerRef.current.blur();
          }
        };

        _this.getDefaultLocale = function () {
          var locale = _this.props.locale;
          var result = (0, _extends2["default"])((0, _extends2["default"])({}, _en_US["default"]), locale);
          result.lang = (0, _extends2["default"])((0, _extends2["default"])({}, result.lang), (locale || {}).lang);
          return result;
        };

        _this.renderPicker = function (locale) {
          var _this$context = _this.context,
              getPrefixCls = _this$context.getPrefixCls,
              direction = _this$context.direction,
              getPopupContainer = _this$context.getPopupContainer;

          var _a = _this.props,
              customizePrefixCls = _a.prefixCls,
              customizeGetPopupContainer = _a.getPopupContainer,
              className = _a.className,
              customizeSize = _a.size,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? true : _a$bordered,
              placeholder = _a.placeholder,
              restProps = __rest(_a, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placeholder"]);

          var _this$props = _this.props,
              format = _this$props.format,
              showTime = _this$props.showTime;
          var prefixCls = getPrefixCls('picker', customizePrefixCls);
          var additionalProps = {
            showToday: true
          };
          var additionalOverrideProps = {};

          if (picker) {
            additionalOverrideProps.picker = picker;
          }

          var mergedPicker = picker || _this.props.picker;
          additionalOverrideProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, additionalOverrideProps), showTime ? (0, _.getTimeProps)((0, _extends2["default"])({
            format: format,
            picker: mergedPicker
          }, showTime)) : {}), mergedPicker === 'time' ? (0, _.getTimeProps)((0, _extends2["default"])((0, _extends2["default"])({
            format: format
          }, _this.props), {
            picker: mergedPicker
          })) : {});
          return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
            var _classNames;

            var mergedSize = customizeSize || size;
            return /*#__PURE__*/React.createElement(_rcPicker["default"], (0, _extends2["default"])({
              ref: _this.pickerRef,
              placeholder: (0, _util.getPlaceholder)(mergedPicker, locale, placeholder),
              suffixIcon: mergedPicker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined["default"], null) : /*#__PURE__*/React.createElement(_CalendarOutlined["default"], null),
              clearIcon: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
              allowClear: true,
              transitionName: "slide-up"
            }, additionalProps, restProps, additionalOverrideProps, {
              locale: locale.lang,
              className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames)),
              prefixCls: prefixCls,
              getPopupContainer: customizeGetPopupContainer || getPopupContainer,
              generateConfig: generateConfig,
              prevIcon: /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-prev-icon")
              }),
              nextIcon: /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-next-icon")
              }),
              superPrevIcon: /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-super-prev-icon")
              }),
              superNextIcon: /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-super-next-icon")
              }),
              components: _.Components,
              direction: direction
            }));
          });
        };

        (0, _devWarning["default"])(picker !== 'quarter', displayName, "DatePicker.".concat(displayName, " is legacy usage. Please use DatePicker[picker='").concat(picker, "'] directly."));
        return _this;
      }

      (0, _createClass2["default"])(Picker, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "DatePicker",
            defaultLocale: this.getDefaultLocale
          }, this.renderPicker);
        }
      }]);
      return Picker;
    }(React.Component);

    Picker.contextType = _configProvider.ConfigContext;

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker;
  }

  var DatePicker = getPicker();
  var WeekPicker = getPicker('week', 'WeekPicker');
  var MonthPicker = getPicker('month', 'MonthPicker');
  var YearPicker = getPicker('year', 'YearPicker');
  var TimePicker = getPicker('time', 'TimePicker');
  var QuarterPicker = getPicker('quarter', 'QuarterPicker');
  return {
    DatePicker: DatePicker,
    WeekPicker: WeekPicker,
    MonthPicker: MonthPicker,
    YearPicker: YearPicker,
    TimePicker: TimePicker,
    QuarterPicker: QuarterPicker
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/generatePicker/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/generatePicker/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeProps = getTimeProps;
exports["default"] = exports.Components = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _PickerButton = _interopRequireDefault(__webpack_require__(/*! ../PickerButton */ "./node_modules/antd/lib/date-picker/PickerButton.js"));

var _PickerTag = _interopRequireDefault(__webpack_require__(/*! ../PickerTag */ "./node_modules/antd/lib/date-picker/PickerTag.js"));

var _generateSinglePicker2 = _interopRequireDefault(__webpack_require__(/*! ./generateSinglePicker */ "./node_modules/antd/lib/date-picker/generatePicker/generateSinglePicker.js"));

var _generateRangePicker = _interopRequireDefault(__webpack_require__(/*! ./generateRangePicker */ "./node_modules/antd/lib/date-picker/generatePicker/generateRangePicker.js"));

var Components = {
  button: _PickerButton["default"],
  rangeItem: _PickerTag["default"]
};
exports.Components = Components;

function toArray(list) {
  if (!list) {
    return [];
  }

  return Array.isArray(list) ? list : [list];
}

function getTimeProps(props) {
  var format = props.format,
      picker = props.picker,
      showHour = props.showHour,
      showMinute = props.showMinute,
      showSecond = props.showSecond,
      use12Hours = props.use12Hours;
  var firstFormat = toArray(format)[0];
  var showTimeObj = (0, _extends2["default"])({}, props);

  if (firstFormat) {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }

    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }

    if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
      showTimeObj.showHour = false;
    }

    if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  return {
    showTime: showTimeObj
  };
}

function generatePicker(generateConfig) {
  // =========================== Picker ===========================
  var _generateSinglePicker = (0, _generateSinglePicker2["default"])(generateConfig),
      DatePicker = _generateSinglePicker.DatePicker,
      WeekPicker = _generateSinglePicker.WeekPicker,
      MonthPicker = _generateSinglePicker.MonthPicker,
      YearPicker = _generateSinglePicker.YearPicker,
      TimePicker = _generateSinglePicker.TimePicker,
      QuarterPicker = _generateSinglePicker.QuarterPicker; // ======================== Range Picker ========================


  var RangePicker = (0, _generateRangePicker["default"])(generateConfig);
  var MergedDatePicker = DatePicker;
  MergedDatePicker.WeekPicker = WeekPicker;
  MergedDatePicker.MonthPicker = MonthPicker;
  MergedDatePicker.YearPicker = YearPicker;
  MergedDatePicker.RangePicker = RangePicker;
  MergedDatePicker.TimePicker = TimePicker;
  MergedDatePicker.QuarterPicker = QuarterPicker;
  return MergedDatePicker;
}

var _default = generatePicker;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/generate/moment */ "./node_modules/rc-picker/lib/generate/moment.js"));

var _generatePicker = _interopRequireDefault(__webpack_require__(/*! ./generatePicker */ "./node_modules/antd/lib/date-picker/generatePicker/index.js"));

var DatePicker = (0, _generatePicker["default"])(_moment["default"]);
var _default = DatePicker;
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

/***/ "./node_modules/antd/lib/date-picker/util.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaceholder = getPlaceholder;
exports.getRangePlaceholder = getRangePlaceholder;

function getPlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.yearPlaceholder;
  }

  if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
    return locale.lang.quarterPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.monthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.weekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.placeholder;
  }

  return locale.lang.placeholder;
}

function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }

  return locale.lang.rangePlaceholder;
}

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

/***/ "./node_modules/antd/lib/tag/CheckableTag.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/tag/CheckableTag.js ***!
  \***************************************************/
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

var CheckableTag = function CheckableTag(props) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    var checked = props.checked,
        onChange = props.onChange,
        onClick = props.onClick;

    if (onChange) {
      onChange(!checked);
    }

    if (onClick) {
      onClick(e);
    }
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      checked = props.checked,
      restProps = __rest(props, ["prefixCls", "className", "checked"]);

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-checkable"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  delete restProps.onChange; // TypeScript cannot check delete now.

  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

var _default = CheckableTag;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tag/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/tag/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/antd/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/antd/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/antd/node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/antd/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CheckableTag = _interopRequireDefault(__webpack_require__(/*! ./CheckableTag */ "./node_modules/antd/lib/tag/CheckableTag.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _colors = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/lib/_util/colors.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

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

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(true),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = (0, _extends2["default"])({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);
  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hidden"), !visible), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();

    if (onClose) {
      onClose(e);
    }

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = (0, _omit["default"])(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/React.createElement(_wave["default"], null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/React.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = _CheckableTag["default"];
var _default = Tag;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/index.js ***!
  \****************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _datePicker = _interopRequireDefault(__webpack_require__(/*! ../date-picker */ "./node_modules/antd/lib/date-picker/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

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

var InternalTimePicker = _datePicker["default"].TimePicker,
    InternalRangePicker = _datePicker["default"].RangePicker;
var RangePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(InternalRangePicker, (0, _extends2["default"])({}, props, {
    picker: "time",
    mode: undefined,
    ref: ref
  }));
});
var TimePicker = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var addon = _a.addon,
      renderExtraFooter = _a.renderExtraFooter,
      popupClassName = _a.popupClassName,
      restProps = __rest(_a, ["addon", "renderExtraFooter", "popupClassName"]);

  var internalRenderExtraFooter = React.useMemo(function () {
    if (renderExtraFooter) {
      return renderExtraFooter;
    }

    if (addon) {
      (0, _devWarning["default"])(false, 'TimePicker', '`addon` is deprecated. Please use `renderExtraFooter` instead.');
      return addon;
    }

    return undefined;
  }, [addon, renderExtraFooter]);
  return /*#__PURE__*/React.createElement(InternalTimePicker, (0, _extends2["default"])({}, restProps, {
    dropdownClassName: popupClassName,
    mode: undefined,
    ref: ref,
    renderExtraFooter: internalRenderExtraFooter
  }));
});
TimePicker.displayName = 'TimePicker';
TimePicker.RangePicker = RangePicker;
var _default = TimePicker;
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

/***/ "./node_modules/rc-picker/lib/generate/moment.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-picker/lib/generate/moment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/rc-picker/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var _warning = __webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js");

var generateConfig = {
  // get
  getNow: function getNow() {
    return (0, _moment.default)();
  },
  getWeekDay: function getWeekDay(date) {
    var clone = date.clone().locale('en_US');
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: function getYear(date) {
    return date.year();
  },
  getMonth: function getMonth(date) {
    return date.month();
  },
  getDate: function getDate(date) {
    return date.date();
  },
  getHour: function getHour(date) {
    return date.hour();
  },
  getMinute: function getMinute(date) {
    return date.minute();
  },
  getSecond: function getSecond(date) {
    return date.second();
  },
  // set
  addYear: function addYear(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'year');
  },
  addMonth: function addMonth(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'month');
  },
  addDate: function addDate(date, diff) {
    var clone = date.clone();
    return clone.add(diff, 'day');
  },
  setYear: function setYear(date, year) {
    var clone = date.clone();
    return clone.year(year);
  },
  setMonth: function setMonth(date, month) {
    var clone = date.clone();
    return clone.month(month);
  },
  setDate: function setDate(date, num) {
    var clone = date.clone();
    return clone.date(num);
  },
  setHour: function setHour(date, hour) {
    var clone = date.clone();
    return clone.hour(hour);
  },
  setMinute: function setMinute(date, minute) {
    var clone = date.clone();
    return clone.minute(minute);
  },
  setSecond: function setSecond(date, second) {
    var clone = date.clone();
    return clone.second(second);
  },
  // Compare
  isAfter: function isAfter(date1, date2) {
    return date1.isAfter(date2);
  },
  isValidate: function isValidate(date) {
    return date.isValid();
  },
  locale: {
    getWeekFirstDay: function getWeekFirstDay(locale) {
      var date = (0, _moment.default)().locale(locale);
      return date.localeData().firstDayOfWeek();
    },
    getWeek: function getWeek(locale, date) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.week();
    },
    getShortWeekDays: function getShortWeekDays(locale) {
      var date = (0, _moment.default)().locale(locale);
      return date.localeData().weekdaysMin();
    },
    getShortMonths: function getShortMonths(locale) {
      var date = (0, _moment.default)().locale(locale);
      return date.localeData().monthsShort();
    },
    format: function format(locale, date, _format) {
      var clone = date.clone();
      var result = clone.locale(locale);
      return result.format(_format);
    },
    parse: function parse(locale, text, formats) {
      var fallbackFormatList = [];

      for (var i = 0; i < formats.length; i += 1) {
        var format = formats[i];
        var formatText = text;

        if (format.includes('wo') || format.includes('Wo')) {
          format = format.replace(/wo/g, 'w').replace(/Wo/g, 'W');
          var matchFormat = format.match(/[-YyMmDdHhSsWwGg]+/g);
          var matchText = formatText.match(/[-\d]+/g);

          if (matchFormat && matchText) {
            format = matchFormat.join('');
            formatText = matchText.join('');
          } else {
            fallbackFormatList.push(format.replace(/o/g, ''));
          }
        }

        var date = (0, _moment.default)(formatText, format, locale, true);

        if (date.isValid()) {
          return date;
        }
      } // Fallback to fuzzy matching, this should always not reach match or need fire a issue


      for (var _i = 0; _i < fallbackFormatList.length; _i += 1) {
        var _date = (0, _moment.default)(text, fallbackFormatList[_i], locale, false);
        /* istanbul ignore next */


        if (_date.isValid()) {
          (0, _warning.noteOnce)(false, 'Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this.');
          return _date;
        }
      }

      return null;
    }
  }
};
var _default = generateConfig;
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

/***/ }),

/***/ "./node_modules/rc-picker/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/rc-picker/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzcy1hbmltYXRpb24vbGliL0V2ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvY29sb3JzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JhZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JlYWN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC91bnJlYWNoYWJsZUV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3dhdmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vTG9hZGluZ0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvUGlja2VyQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvUGlja2VyVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvZ2VuZXJhdGVQaWNrZXIvZ2VuZXJhdGVSYW5nZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL2dlbmVyYXRlUGlja2VyL2dlbmVyYXRlU2luZ2xlUGlja2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvZ2VuZXJhdGVQaWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9kYXRlLXBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9lbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvc2ltcGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS9kZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVzc2FnZS9ob29rcy91c2VNZXNzYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL25vdGlmaWNhdGlvbi9ob29rcy91c2VOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90YWcvQ2hlY2thYmxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGFnL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGltZS1waWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9saWIvTm90aWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2xpYi9nZW5lcmF0ZS9tb21lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImltYWdlUGF0aCIsImlzQWRkaW5nUG9zdCIsInBvc3RBZGRlZCIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2VUZXh0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDNEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRHZDO0FBQUEsTUFDWEMsU0FEVyxnQkFDWEEsU0FEVztBQUFBLE1BQ0FDLFlBREEsZ0JBQ0FBLFlBREE7QUFBQSxNQUNjQyxTQURkLGdC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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1Asc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDdkphOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yM2Q4ZmNhYTUyMDdjZTFiODJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnYW50ZC9saWIvdGltZS1waWNrZXInO1xyXG5cclxuLy8gY29uc3QgZHVtbXkgPSB7XHJcbi8vICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4vLyAgICAgaW1hZ2VQYXRoczogW10sXHJcbi8vICAgICBtYWluUG9zdHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxyXG4vLyAgICAgICAgICAgICBpbWc6ICcnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aCwgaXNBZGRpbmdQb3N0LCBwb3N0QWRkZWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9LCBbcG9zdEFkZGVkID09PSB0cnVlXSk7IC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg65CY66m0IHRleHTslYgg6rCSIOu5hOybjOykjC5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7IC8vIO2OmOydtOyngCDslYgg64SY7Ja06rCA6rKM64GUIO2VtOykjFxyXG4gICAgICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDqs7XrsLEg6rKA7IKs64+EIOqwmeydtCDtlbTspIDri6QuXHJcbiAgICAgICAgICAgICAgICBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0IOyalOyyre2WiOyWtCEhJyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBtZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RleHRdXHJcbiAgICApOyAvLyB1c2VyQ2FsbGJhY2vsnYAg6riw7Ja166Cl7J20IOqwleugpe2VtOyEnCBbXSDslYjsl5Ag64Sj7Ja07KSY7JW8IOuzgOuPmeyCrO2VreydtCDsoIDsnqXrkKguXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyDsnbTrr7jsp4Ag7JeF66Gc65OcIO2VtOyVvO2VmOq4sCDrlYzrrLjsl5AgZW5jVHlwZeydgCBtdWx0aXBhcnTsnoRcclxuICAgICAgICAvLyBzdHlsZeuEo+ydhCDrlYzripQg6rCd7LK0IO2YleyLneycvOuhnCB7eyDrhKPslrTslbztlaggfX1cclxuICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMHB4IDIwcHgnIH19IG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUXCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nUG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgICAg7Ke57Ke57KixXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRoLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOuwmOuzteusuFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwLyAke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVEFSVF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbnN0YXJ0OiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25zdGFydCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25TdGFydCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25TdGFydCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvblN0YXJ0JyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25TdGFydCdcbiAgfSxcblxuICBhbmltYXRpb25zdGFydDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uU3RhcnQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uU3RhcnQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25TdGFydCdcbiAgfVxufTtcblxudmFyIEVORF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIHN0YXJ0RXZlbnRzID0gW107XG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25zdGFydC50cmFuc2l0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhFVkVOVF9OQU1FX01BUCwgZXZlbnRzKSB7XG4gICAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgICAgaWYgKEVWRU5UX05BTUVfTUFQLmhhc093blByb3BlcnR5KGJhc2VFdmVudE5hbWUpKSB7XG4gICAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MoU1RBUlRfRVZFTlRfTkFNRV9NQVAsIHN0YXJ0RXZlbnRzKTtcbiAgcHJvY2VzcyhFTkRfRVZFTlRfTkFNRV9NQVAsIGVuZEV2ZW50cyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIC8vIFN0YXJ0IGV2ZW50c1xuICBzdGFydEV2ZW50czogc3RhcnRFdmVudHMsXG5cbiAgYWRkU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG5cbiAgLy8gRW5kIGV2ZW50c1xuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25FdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUHJlc2V0Q29sb3JUeXBlcyA9IGV4cG9ydHMuUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9IHZvaWQgMDtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4vdHlwZVwiKTtcblxudmFyIFByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWNjZXNzJywgJ3Byb2Nlc3NpbmcnLCAnZXJyb3InLCAnZGVmYXVsdCcsICd3YXJuaW5nJyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5cbmV4cG9ydHMuUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9IFByZXNldFN0YXR1c0NvbG9yVHlwZXM7XG52YXIgUHJlc2V0Q29sb3JUeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ3BpbmsnLCAncmVkJywgJ3llbGxvdycsICdvcmFuZ2UnLCAnY3lhbicsICdncmVlbicsICdibHVlJywgJ3B1cnBsZScsICdnZWVrYmx1ZScsICdtYWdlbnRhJywgJ3ZvbGNhbm8nLCAnZ29sZCcsICdsaW1lJyk7XG5leHBvcnRzLlByZXNldENvbG9yVHlwZXMgPSBQcmVzZXRDb2xvclR5cGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVzZXRXYXJuZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dhcm5pbmcucmVzZXRXYXJuZWQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWQsIGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSh2YWxpZCwgXCJbYW50ZDogXCIuY29uY2F0KGNvbXBvbmVudCwgXCJdIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHdyYXBwZXJSYWY7XG5cbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmFmXCIpKTtcblxudmFyIGlkID0gMDtcbnZhciBpZHMgPSB7fTsgLy8gU3VwcG9ydCBjYWxsIHJhZiB3aXRoIGRlbGF5IHNwZWNpZmllZCBmcmFtZVxuXG5mdW5jdGlvbiB3cmFwcGVyUmFmKGNhbGxiYWNrKSB7XG4gIHZhciBkZWxheUZyYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIG15SWQgPSBpZCsrO1xuICB2YXIgcmVzdEZyYW1lcyA9IGRlbGF5RnJhbWVzO1xuXG4gIGZ1bmN0aW9uIGludGVybmFsQ2FsbGJhY2soKSB7XG4gICAgcmVzdEZyYW1lcyAtPSAxO1xuXG4gICAgaWYgKHJlc3RGcmFtZXMgPD0gMCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBpZHNbbXlJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkc1tteUlkXSA9ICgwLCBfcmFmW1wiZGVmYXVsdFwiXSkoaW50ZXJuYWxDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgcmV0dXJuIG15SWQ7XG59XG5cbndyYXBwZXJSYWYuY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKHBpZCkge1xuICBpZiAocGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoaWRzW3BpZF0pO1xuXG4gIGRlbGV0ZSBpZHNbcGlkXTtcbn07XG5cbndyYXBwZXJSYWYuaWRzID0gaWRzOyAvLyBleHBvcnQgdGhpcyBmb3IgdGVzdCB1c2FnZSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXBsYWNlRWxlbWVudCA9IHJlcGxhY2VFbGVtZW50O1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQ7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgaXNWYWxpZEVsZW1lbnQgPSBSZWFjdC5pc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbWVudCwgcmVwbGFjZW1lbnQsIHByb3BzKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHJldHVybiByZXBsYWNlbWVudDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgdHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nID8gcHJvcHMoKSA6IHByb3BzKTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiByZXBsYWNlRWxlbWVudChlbGVtZW50LCBlbGVtZW50LCBwcm9wcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnR1cGxlTnVtID0gZXhwb3J0cy50dXBsZSA9IHZvaWQgMDtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDYxNzYxNjUvd2F5cy10by1nZXQtc3RyaW5nLWxpdGVyYWwtdHlwZS1vZi1hcnJheS12YWx1ZXMtd2l0aG91dC1lbnVtLW92ZXJoZWFkXG52YXIgdHVwbGUgPSBmdW5jdGlvbiB0dXBsZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBhcmdzO1xufTtcblxuZXhwb3J0cy50dXBsZSA9IHR1cGxlO1xuXG52YXIgdHVwbGVOdW0gPSBmdW5jdGlvbiB0dXBsZU51bSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlTnVtID0gdHVwbGVOdW07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBVbnJlYWNoYWJsZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIFVucmVhY2hhYmxlRXhjZXB0aW9uKHZhbHVlKSB7XG4gICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgVW5yZWFjaGFibGVFeGNlcHRpb24pO1xuICByZXR1cm4gbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY2FzZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVbnJlYWNoYWJsZUV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2Nzcy1hbmltYXRpb24vbGliL0V2ZW50XCIpKTtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JhZlwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgc3R5bGVGb3JQZXN1ZG87IC8vIFdoZXJlIGVsIGlzIHRoZSBET00gZWxlbWVudCB5b3UnZCBsaWtlIHRvIHRlc3QgZm9yIHZpc2liaWxpdHlcblxuZnVuY3Rpb24gaXNIaWRkZW4oZWxlbWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhZWxlbWVudCB8fCBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNOb3RHcmV5KGNvbG9yKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB2YXIgbWF0Y2ggPSAoY29sb3IgfHwgJycpLm1hdGNoKC9yZ2JhP1xcKChcXGQqKSwgKFxcZCopLCAoXFxkKikoLCBbXFxkLl0qKT9cXCkvKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbM10pIHtcbiAgICByZXR1cm4gIShtYXRjaFsxXSA9PT0gbWF0Y2hbMl0gJiYgbWF0Y2hbMl0gPT09IG1hdGNoWzNdKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgV2F2ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKFdhdmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKFdhdmUpO1xuXG4gIGZ1bmN0aW9uIFdhdmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBXYXZlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0ID0gZmFsc2U7XG4gICAgX3RoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIHdhdmVDb2xvcikge1xuICAgICAgaWYgKCFub2RlIHx8IGlzSGlkZGVuKG5vZGUpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJy1sZWF2ZScpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gX3RoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgX3RoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksXG4gICAgICAgICAgZXh0cmFOb2RlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLmV4dHJhTm9kZTtcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF90aGlzLmNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgZXh0cmFOb2RlLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGdldFByZWZpeENscygnJyksIFwiLWNsaWNrLWFuaW1hdGluZy1ub2RlXCIpO1xuXG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IF90aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ3RydWUnKTsgLy8gTm90IHdoaXRlIG9yIHRyYW5zcGFybnQgb3IgZ3JleVxuXG4gICAgICBzdHlsZUZvclBlc3VkbyA9IHN0eWxlRm9yUGVzdWRvIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh3YXZlQ29sb3IgJiYgd2F2ZUNvbG9yICE9PSAnI2ZmZmZmZicgJiYgd2F2ZUNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJyAmJiBpc05vdEdyZXkod2F2ZUNvbG9yKSAmJiAhL3JnYmFcXCgoPzpcXGQqLCApezN9MFxcKS8udGVzdCh3YXZlQ29sb3IpICYmIC8vIGFueSB0cmFuc3BhcmVudCByZ2JhIGNvbG9yXG4gICAgICB3YXZlQ29sb3IgIT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgLy8gQWRkIG5vbmNlIGlmIENTUCBleGlzdFxuICAgICAgICBpZiAoX3RoaXMuY3NwICYmIF90aGlzLmNzcC5ub25jZSkge1xuICAgICAgICAgIHN0eWxlRm9yUGVzdWRvLm5vbmNlID0gX3RoaXMuY3NwLm5vbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZXh0cmFOb2RlLnN0eWxlLmJvcmRlckNvbG9yID0gd2F2ZUNvbG9yO1xuICAgICAgICBzdHlsZUZvclBlc3Vkby5pbm5lckhUTUwgPSBcIlxcbiAgICAgIFtcIi5jb25jYXQoZ2V0UHJlZml4Q2xzKCcnKSwgXCItY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZT0ndHJ1ZSddOjphZnRlciwgLlwiKS5jb25jYXQoZ2V0UHJlZml4Q2xzKCcnKSwgXCItY2xpY2stYW5pbWF0aW5nLW5vZGUge1xcbiAgICAgICAgLS1hbnRkLXdhdmUtc2hhZG93LWNvbG9yOiBcIikuY29uY2F0KHdhdmVDb2xvciwgXCI7XFxuICAgICAgfVwiKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3R5bGVGb3JQZXN1ZG8pKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZUZvclBlc3Vkbyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluc2VydEV4dHJhTm9kZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGV4dHJhTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIF9FdmVudFtcImRlZmF1bHRcIl0uYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKCgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSk7XG5cbiAgICAgIGlmICghZSB8fCBlLnRhcmdldCAhPT0gbm9kZSB8fCBfdGhpcy5hbmltYXRpb25TdGFydCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnJlc2V0RWZmZWN0KG5vZGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFlIHx8IGUuYW5pbWF0aW9uTmFtZSAhPT0gJ2ZhZGVFZmZlY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucmVzZXRFZmZlY3QoZS50YXJnZXQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmdldEF0dHJpYnV0ZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fCBub2RlLmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlZCcpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAvLyBGaXggcmFkaW8gYnV0dG9uIGNsaWNrIHR3aWNlXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGlzSGlkZGVuKGUudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnJlc2V0RWZmZWN0KG5vZGUpOyAvLyBHZXQgd2F2ZSBjb2xvciBmcm9tIHRhcmdldFxuXG5cbiAgICAgICAgdmFyIHdhdmVDb2xvciA9IGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8IGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgICBfdGhpcy5jbGlja1dhdmVUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9uQ2xpY2sobm9kZSwgd2F2ZUNvbG9yKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgX3JhZltcImRlZmF1bHRcIl0uY2FuY2VsKF90aGlzLmFuaW1hdGlvblN0YXJ0SWQpO1xuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0ID0gdHJ1ZTsgLy8gUmVuZGVyIHRvIHRyaWdnZXIgdHJhbnNpdGlvbiBldmVudCBjb3N0IDMgZnJhbWVzLiBMZXQncyBkZWxheSAxMCBmcmFtZXMgdG8gcmVzZXQgdGhpcy5cblxuICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydElkID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfTtcblxuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2ssIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2ssIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJXYXZlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjc3AgPSBfcmVmLmNzcDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgX3RoaXMuY3NwID0gY3NwO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKFdhdmUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcblxuICAgICAgaWYgKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnQobm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tXYXZlVGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0cmlidXRlTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOYW1lKCkge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IHRoaXMuY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICByZXR1cm4gaW5zZXJ0RXh0cmFOb2RlID8gXCJcIi5jb25jYXQoZ2V0UHJlZml4Q2xzKCcnKSwgXCItY2xpY2stYW5pbWF0aW5nXCIpIDogXCJcIi5jb25jYXQoZ2V0UHJlZml4Q2xzKCcnKSwgXCItY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRFZmZlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRFZmZlY3Qobm9kZSkge1xuICAgICAgaWYgKCFub2RlIHx8IG5vZGUgPT09IHRoaXMuZXh0cmFOb2RlIHx8ICEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc2VydEV4dHJhTm9kZSA9IHRoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsICdmYWxzZScpOyAvLyBlZGdlIGhhcyBidWcgb24gYHJlbW92ZUF0dHJpYnV0ZWAgIzE0NDY2XG5cbiAgICAgIGlmIChzdHlsZUZvclBlc3Vkbykge1xuICAgICAgICBzdHlsZUZvclBlc3Vkby5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKGluc2VydEV4dHJhTm9kZSAmJiB0aGlzLmV4dHJhTm9kZSAmJiBub2RlLmNvbnRhaW5zKHRoaXMuZXh0cmFOb2RlKSkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKHRoaXMuZXh0cmFOb2RlKTtcbiAgICAgIH1cblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5yZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5vblRyYW5zaXRpb25TdGFydCk7XG5cbiAgICAgIF9FdmVudFtcImRlZmF1bHRcIl0ucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlcldhdmUpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2F2ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBXYXZlO1xuV2F2ZS5jb250ZXh0VHlwZSA9IF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9hZGluZ0ljb247XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjTW90aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbW90aW9uXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgZ2V0Q29sbGFwc2VkV2lkdGggPSBmdW5jdGlvbiBnZXRDb2xsYXBzZWRXaWR0aCgpIHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9O1xufTtcblxudmFyIGdldFJlYWxXaWR0aCA9IGZ1bmN0aW9uIGdldFJlYWxXaWR0aChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IG5vZGUuc2Nyb2xsV2lkdGgsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIExvYWRpbmdJY29uKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgbG9hZGluZyA9IF9yZWYubG9hZGluZyxcbiAgICAgIGV4aXN0SWNvbiA9IF9yZWYuZXhpc3RJY29uO1xuICB2YXIgdmlzaWJsZSA9ICEhbG9hZGluZztcblxuICBpZiAoZXhpc3RJY29uKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uXCIpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNb3Rpb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdmlzaWJsZTogdmlzaWJsZSAvLyBXZSBkbyBub3QgcmVhbGx5IHVzZSB0aGlzIG1vdGlvbk5hbWVcbiAgICAsXG4gICAgbW90aW9uTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nLWljb24tbW90aW9uXCIpLFxuICAgIHJlbW92ZU9uTGVhdmU6IHRydWUsXG4gICAgb25BcHBlYXJTdGFydDogZ2V0Q29sbGFwc2VkV2lkdGgsXG4gICAgb25BcHBlYXJBY3RpdmU6IGdldFJlYWxXaWR0aCxcbiAgICBvbkVudGVyU3RhcnQ6IGdldENvbGxhcHNlZFdpZHRoLFxuICAgIG9uRW50ZXJBY3RpdmU6IGdldFJlYWxXaWR0aCxcbiAgICBvbkxlYXZlU3RhcnQ6IGdldFJlYWxXaWR0aCxcbiAgICBvbkxlYXZlQWN0aXZlOiBnZXRDb2xsYXBzZWRXaWR0aFxuICB9LCBmdW5jdGlvbiAoX3JlZjIsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICAgIHN0eWxlID0gX3JlZjIuc3R5bGU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uXCIpLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUpXG4gICAgfSkpO1xuICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF91bnJlYWNoYWJsZUV4Y2VwdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3VucmVhY2hhYmxlRXhjZXB0aW9uXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBCdXR0b25Hcm91cCA9IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdidG4tZ3JvdXAnLCBjdXN0b21pemVQcmVmaXhDbHMpOyAvLyBsYXJnZSA9PiBsZ1xuICAgIC8vIHNtYWxsID0+IHNtXG5cbiAgICB2YXIgc2l6ZUNscyA9ICcnO1xuXG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihuZXcgX3VucmVhY2hhYmxlRXhjZXB0aW9uW1wiZGVmYXVsdFwiXShzaXplKSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZUNscyksIHNpemVDbHMpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBCdXR0b25Hcm91cDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHJvcHMgPSBjb252ZXJ0TGVnYWN5UHJvcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9idXR0b25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYnV0dG9uLWdyb3VwXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhdmVcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG52YXIgX0xvYWRpbmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Mb2FkaW5nSWNvblwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9idXR0b24taGFzLXR5cGUgKi9cblxuXG52YXIgcnhUd29DTkNoYXIgPSAvXltcXHU0ZTAwLVxcdTlmYTVdezJ9JC87XG52YXIgaXNUd29DTkNoYXIgPSByeFR3b0NOQ2hhci50ZXN0LmJpbmQocnhUd29DTkNoYXIpO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICd0ZXh0JyB8fCB0eXBlID09PSAnbGluayc7XG59IC8vIEluc2VydCBvbmUgc3BhY2UgYmV0d2VlbiB0d28gY2hpbmVzZSBjaGFyYWN0ZXJzIGF1dG9tYXRpY2FsbHkuXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3BhY2UoY2hpbGQsIG5lZWRJbnNlcnRlZCkge1xuICAvLyBDaGVjayB0aGUgY2hpbGQgaWYgaXMgdW5kZWZpbmVkIG9yIG51bGwuXG4gIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIFNQQUNFID0gbmVlZEluc2VydGVkID8gJyAnIDogJyc7IC8vIHN0cmljdE51bGxDaGVja3Mgb29wcy5cblxuICBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2hpbGQgIT09ICdudW1iZXInICYmIGlzU3RyaW5nKGNoaWxkLnR5cGUpICYmIGlzVHdvQ05DaGFyKGNoaWxkLnByb3BzLmNoaWxkcmVuKSkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBjaGlsZHJlbjogY2hpbGQucHJvcHMuY2hpbGRyZW4uc3BsaXQoJycpLmpvaW4oU1BBQ0UpXG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc1R3b0NOQ2hhcihjaGlsZCkpIHtcbiAgICAgIGNoaWxkID0gY2hpbGQuc3BsaXQoJycpLmpvaW4oU1BBQ0UpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG5mdW5jdGlvbiBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgdmFyIGlzUHJldkNoaWxkUHVyZSA9IGZhbHNlO1xuICB2YXIgY2hpbGRMaXN0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciB0eXBlID0gKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY2hpbGQpO1xuICAgIHZhciBpc0N1cnJlbnRDaGlsZFB1cmUgPSB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcblxuICAgIGlmIChpc1ByZXZDaGlsZFB1cmUgJiYgaXNDdXJyZW50Q2hpbGRQdXJlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gY2hpbGRMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbGFzdENoaWxkID0gY2hpbGRMaXN0W2xhc3RJbmRleF07XG4gICAgICBjaGlsZExpc3RbbGFzdEluZGV4XSA9IFwiXCIuY29uY2F0KGxhc3RDaGlsZCkuY29uY2F0KGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGlzUHJldkNoaWxkUHVyZSA9IGlzQ3VycmVudENoaWxkUHVyZTtcbiAgfSk7IC8vIFBhc3MgdG8gUmVhY3QuQ2hpbGRyZW4ubWFwIHRvIGF1dG8gZmlsbCBrZXlcblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkTGlzdCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGluc2VydFNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpO1xuICB9KTtcbn1cblxudmFyIEJ1dHRvblR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2dob3N0JywgJ2Rhc2hlZCcsICdsaW5rJywgJ3RleHQnKTtcbnZhciBCdXR0b25TaGFwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdjaXJjbGUnLCAnY2lyY2xlLW91dGxpbmUnLCAncm91bmQnKTtcbnZhciBCdXR0b25IVE1MVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0Jyk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQcm9wcyh0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnZGFuZ2VyJykge1xuICAgIHJldHVybiB7XG4gICAgICBkYW5nZXI6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlXG4gIH07XG59XG5cbnZhciBJbnRlcm5hbEJ1dHRvbiA9IGZ1bmN0aW9uIEludGVybmFsQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBsb2FkaW5nID0gcHJvcHMubG9hZGluZyxcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgZGFuZ2VyID0gcHJvcHMuZGFuZ2VyLFxuICAgICAgc2hhcGUgPSBwcm9wcy5zaGFwZSxcbiAgICAgIGN1c3RvbWl6ZVNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgZ2hvc3QgPSBwcm9wcy5naG9zdCxcbiAgICAgIGJsb2NrID0gcHJvcHMuYmxvY2ssXG4gICAgICByZXN0ID0gX19yZXN0KHByb3BzLCBbXCJsb2FkaW5nXCIsIFwicHJlZml4Q2xzXCIsIFwidHlwZVwiLCBcImRhbmdlclwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaWNvblwiLCBcImdob3N0XCIsIFwiYmxvY2tcIl0pO1xuXG4gIHZhciBzaXplID0gUmVhY3QudXNlQ29udGV4dChfU2l6ZUNvbnRleHRbXCJkZWZhdWx0XCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoISFsb2FkaW5nKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGlubmVyTG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRMb2FkaW5nID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgICBoYXNUd29DTkNoYXIgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0SGFzVHdvQ05DaGFyID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uID0gX1JlYWN0JHVzZUNvbnRleHQuYXV0b0luc2VydFNwYWNlSW5CdXR0b24sXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIGJ1dHRvblJlZiA9IHJlZiB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHZhciBkZWxheVRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICB2YXIgaXNOZWVkSW5zZXJ0ZWQgPSBmdW5jdGlvbiBpc05lZWRJbnNlcnRlZCgpIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmICFpY29uICYmICFpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpO1xuICB9O1xuXG4gIHZhciBmaXhUd29DTkNoYXIgPSBmdW5jdGlvbiBmaXhUd29DTkNoYXIoKSB7XG4gICAgLy8gRml4IGZvciBIT0MgdXNhZ2UgbGlrZSA8Rm9ybWF0TWVzc2FnZSAvPlxuICAgIGlmICghYnV0dG9uUmVmIHx8ICFidXR0b25SZWYuY3VycmVudCB8fCBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYnV0dG9uVGV4dCA9IGJ1dHRvblJlZi5jdXJyZW50LnRleHRDb250ZW50O1xuXG4gICAgaWYgKGlzTmVlZEluc2VydGVkKCkgJiYgaXNUd29DTkNoYXIoYnV0dG9uVGV4dCkpIHtcbiAgICAgIGlmICghaGFzVHdvQ05DaGFyKSB7XG4gICAgICAgIHNldEhhc1R3b0NOQ2hhcih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhc1R3b0NOQ2hhcikge1xuICAgICAgc2V0SGFzVHdvQ05DaGFyKGZhbHNlKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PSBVcGRhdGUgTG9hZGluZyA9PT09PT09PT09PT09PT1cblxuXG4gIHZhciBsb2FkaW5nT3JEZWxheTtcblxuICBpZiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkobG9hZGluZykgPT09ICdvYmplY3QnICYmIGxvYWRpbmcuZGVsYXkpIHtcbiAgICBsb2FkaW5nT3JEZWxheSA9IGxvYWRpbmcuZGVsYXkgfHwgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkaW5nT3JEZWxheSA9ICEhbG9hZGluZztcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGRlbGF5VGltZW91dFJlZi5jdXJyZW50KTtcblxuICAgIGlmICh0eXBlb2YgbG9hZGluZ09yRGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBkZWxheVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0TG9hZGluZyhsb2FkaW5nT3JEZWxheSk7XG4gICAgICB9LCBsb2FkaW5nT3JEZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvYWRpbmcobG9hZGluZ09yRGVsYXkpO1xuICAgIH1cbiAgfSwgW2xvYWRpbmdPckRlbGF5XSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZml4VHdvQ05DaGFyKCk7XG4gIH0sIFtidXR0b25SZWZdKTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgdmFyIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrO1xuXG4gICAgaWYgKGlubmVyTG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKHR5cGVvZiBpY29uID09PSAnc3RyaW5nJyAmJiBpY29uLmxlbmd0aCA+IDIpLCAnQnV0dG9uJywgXCJgaWNvbmAgaXMgdXNpbmcgUmVhY3ROb2RlIGluc3RlYWQgb2Ygc3RyaW5nIG5hbWluZyBpbiB2NC4gUGxlYXNlIGNoZWNrIGBcIi5jb25jYXQoaWNvbiwgXCJgIGF0IGh0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb25cIikpO1xuICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKGdob3N0ICYmIGlzVW5ib3JkZXJlZEJ1dHRvblR5cGUodHlwZSkpLCAnQnV0dG9uJywgXCJgbGlua2Agb3IgYHRleHRgIGJ1dHRvbiBjYW4ndCBiZSBhIGBnaG9zdGAgYnV0dG9uLlwiKTtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnYnRuJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGF1dG9JbnNlcnRTcGFjZSA9IGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uICE9PSBmYWxzZTsgLy8gbGFyZ2UgPT4gbGdcbiAgLy8gc21hbGwgPT4gc21cblxuICB2YXIgc2l6ZUNscyA9ICcnO1xuXG4gIHN3aXRjaCAoY3VzdG9taXplU2l6ZSB8fCBzaXplKSB7XG4gICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgc2l6ZUNscyA9ICdsZyc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIHNpemVDbHMgPSAnc20nO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgaWNvblR5cGUgPSBpbm5lckxvYWRpbmcgPyAnbG9hZGluZycgOiBpY29uO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUpLCB0eXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNoYXBlKSwgc2hhcGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZUNscyksIHNpemVDbHMpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tb25seVwiKSwgIWNoaWxkcmVuICYmIGNoaWxkcmVuICE9PSAwICYmIGljb25UeXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iYWNrZ3JvdW5kLWdob3N0XCIpLCBnaG9zdCAmJiAhaXNVbmJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgaW5uZXJMb2FkaW5nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10d28tY2hpbmVzZS1jaGFyc1wiKSwgaGFzVHdvQ05DaGFyICYmIGF1dG9JbnNlcnRTcGFjZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmxvY2tcIiksIGJsb2NrKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kYW5nZXJvdXNcIiksICEhZGFuZ2VyKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcykpO1xuICB2YXIgaWNvbk5vZGUgPSBpY29uICYmICFpbm5lckxvYWRpbmcgPyBpY29uIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdJY29uW1wiZGVmYXVsdFwiXSwge1xuICAgIGV4aXN0SWNvbjogISFpY29uLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGxvYWRpbmc6ICEhaW5uZXJMb2FkaW5nXG4gIH0pO1xuICB2YXIga2lkcyA9IGNoaWxkcmVuIHx8IGNoaWxkcmVuID09PSAwID8gc3BhY2VDaGlsZHJlbihjaGlsZHJlbiwgaXNOZWVkSW5zZXJ0ZWQoKSAmJiBhdXRvSW5zZXJ0U3BhY2UpIDogbnVsbDtcbiAgdmFyIGxpbmtCdXR0b25SZXN0UHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0LCBbJ2h0bWxUeXBlJywgJ2xvYWRpbmcnXSk7XG5cbiAgaWYgKGxpbmtCdXR0b25SZXN0UHJvcHMuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGxpbmtCdXR0b25SZXN0UHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiBidXR0b25SZWZcbiAgICB9KSwgaWNvbk5vZGUsIGtpZHMpO1xuICB9IC8vIFJlYWN0IGRvZXMgbm90IHJlY29nbml6ZSB0aGUgYGh0bWxUeXBlYCBwcm9wIG9uIGEgRE9NIGVsZW1lbnQuIEhlcmUgd2UgcGljayBpdCBvdXQgb2YgYHJlc3RgLlxuXG5cbiAgdmFyIF9hID0gcmVzdCxcbiAgICAgIGh0bWxUeXBlID0gX2EuaHRtbFR5cGUsXG4gICAgICBvdGhlclByb3BzID0gX19yZXN0KF9hLCBbXCJodG1sVHlwZVwiXSk7XG5cbiAgdmFyIGJ1dHRvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKG90aGVyUHJvcHMsIFsnbG9hZGluZyddKSwge1xuICAgIHR5cGU6IGh0bWxUeXBlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICByZWY6IGJ1dHRvblJlZlxuICB9KSwgaWNvbk5vZGUsIGtpZHMpO1xuXG4gIGlmIChpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpKSB7XG4gICAgcmV0dXJuIGJ1dHRvbk5vZGU7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3dhdmVbXCJkZWZhdWx0XCJdLCBudWxsLCBidXR0b25Ob2RlKTtcbn07XG5cbnZhciBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbEJ1dHRvbik7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBnaG9zdDogZmFsc2UsXG4gIGJsb2NrOiBmYWxzZSxcbiAgaHRtbFR5cGU6ICdidXR0b24nXG59O1xuQnV0dG9uLkdyb3VwID0gX2J1dHRvbkdyb3VwW1wiZGVmYXVsdFwiXTtcbkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xudmFyIF9kZWZhdWx0ID0gQnV0dG9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2J1dHRvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9idXR0b25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9lbl9VU1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbnZhciBTaXplQ29udGV4dFByb3ZpZGVyID0gZnVuY3Rpb24gU2l6ZUNvbnRleHRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChvcmlnaW5TaXplKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogc2l6ZSB8fCBvcmlnaW5TaXplXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IFNpemVDb250ZXh0UHJvdmlkZXI7XG52YXIgX2RlZmF1bHQgPSBTaXplQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoQ29uZmlnQ29uc3VtZXIgPSB3aXRoQ29uZmlnQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5Db25maWdDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG52YXIgQ29uZmlnQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgLy8gV2UgcHJvdmlkZSBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIENvbnRleHQgd2l0aG91dCBwcm92aWRlclxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscyhzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiYW50LVwiLmNvbmNhdChzdWZmaXhDbHMpIDogJ2FudCc7XG4gIH0sXG4gIHJlbmRlckVtcHR5OiBfcmVuZGVyRW1wdHlbXCJkZWZhdWx0XCJdXG59KTtcbmV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IENvbmZpZ0NvbnRleHQ7XG52YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuZXhwb3J0cy5Db25maWdDb25zdW1lciA9IENvbmZpZ0NvbnN1bWVyO1xuXG5mdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXJGdW5jKENvbXBvbmVudCkge1xuICAgIC8vIFdyYXAgd2l0aCBDb25maWdDb25zdW1lci4gU2luY2Ugd2UgbmVlZCBjb21wYXRpYmxlIHdpdGggcmVhY3QgMTUsIGJlIGNhcmUgd2hlbiB1c2luZyByZWYgbWV0aG9kc1xuICAgIHZhciBTRkMgPSBmdW5jdGlvbiBTRkMocHJvcHMpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbmZpZ1Byb3BzKSB7XG4gICAgICAgIHZhciBiYXNpY1ByZWZpeENscyA9IGNvbmZpZy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBjb25maWdQcm9wcy5nZXRQcmVmaXhDbHM7XG4gICAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoYmFzaWNQcmVmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29uZmlnUHJvcHMsIHByb3BzLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHNcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBjb25zID0gQ29tcG9uZW50LmNvbnN0cnVjdG9yO1xuICAgIHZhciBuYW1lID0gY29ucyAmJiBjb25zLmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIFNGQy5kaXNwbGF5TmFtZSA9IFwid2l0aENvbmZpZ0NvbnN1bWVyKFwiLmNvbmNhdChuYW1lLCBcIilcIik7XG4gICAgcmV0dXJuIFNGQztcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb25maWdDb25zdW1lclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb25zdW1lcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb25maWdDb250ZXh0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LkNvbmZpZ0NvbnRleHQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjRmllbGRGb3JtID0gcmVxdWlyZShcInJjLWZpZWxkLWZvcm1cIik7XG5cbnZhciBfbG9jYWxlUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyXCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSByZXF1aXJlKFwiLi9TaXplQ29udGV4dFwiKTtcblxudmFyIF9tZXNzYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWVzc2FnZVwiKSk7XG5cbnZhciBfbm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbm90aWZpY2F0aW9uXCIpKTtcblxuLy8gVE9ETzogcmVtb3ZlIHRoaXMgbGludFxuLy8gU0ZDIGhhcyBzcGVjaWZpZWQgYSBkaXNwbGF5TmFtZSwgYnV0IG5vdCB3b3JrZWQuXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xudmFyIGNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBbJ2dldFRhcmdldENvbnRhaW5lcicsICdnZXRQb3B1cENvbnRhaW5lcicsICdyb290UHJlZml4Q2xzJywgJ2dldFByZWZpeENscycsICdyZW5kZXJFbXB0eScsICdjc3AnLCAnYXV0b0luc2VydFNwYWNlSW5CdXR0b24nLCAnbG9jYWxlJywgJ3BhZ2VIZWFkZXInXTtcbmV4cG9ydHMuY29uZmlnQ29uc3VtZXJQcm9wcyA9IGNvbmZpZ0NvbnN1bWVyUHJvcHM7XG5cbnZhciBDb25maWdQcm92aWRlciA9IGZ1bmN0aW9uIENvbmZpZ1Byb3ZpZGVyKHByb3BzKSB7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmRpcmVjdGlvbikge1xuICAgICAgX21lc3NhZ2VbXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG5cbiAgICAgIF9ub3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLmNvbmZpZyh7XG4gICAgICAgIHJ0bDogcHJvcHMuZGlyZWN0aW9uID09PSAncnRsJ1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMuZGlyZWN0aW9uXSk7XG5cbiAgdmFyIGdldFByZWZpeENsc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRQcmVmaXhDbHNXcmFwcGVyKGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgaWYgKGN1c3RvbWl6ZVByZWZpeENscykgcmV0dXJuIGN1c3RvbWl6ZVByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBwcmVmaXhDbHMgfHwgY29udGV4dC5nZXRQcmVmaXhDbHMoJycpO1xuICAgICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiXCIuY29uY2F0KG1lcmdlZFByZWZpeENscywgXCItXCIpLmNvbmNhdChzdWZmaXhDbHMpIDogbWVyZ2VkUHJlZml4Q2xzO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHJlbmRlclByb3ZpZGVyID0gZnVuY3Rpb24gcmVuZGVyUHJvdmlkZXIoY29udGV4dCwgbGVnYWN5TG9jYWxlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGdldFRhcmdldENvbnRhaW5lciA9IHByb3BzLmdldFRhcmdldENvbnRhaW5lcixcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgcmVuZGVyRW1wdHkgPSBwcm9wcy5yZW5kZXJFbXB0eSxcbiAgICAgICAgY3NwID0gcHJvcHMuY3NwLFxuICAgICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IHByb3BzLmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgICBmb3JtID0gcHJvcHMuZm9ybSxcbiAgICAgICAgaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgICBwYWdlSGVhZGVyID0gcHJvcHMucGFnZUhlYWRlcixcbiAgICAgICAgY29tcG9uZW50U2l6ZSA9IHByb3BzLmNvbXBvbmVudFNpemUsXG4gICAgICAgIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgc3BhY2UgPSBwcm9wcy5zcGFjZSxcbiAgICAgICAgdmlydHVhbCA9IHByb3BzLnZpcnR1YWwsXG4gICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHByb3BzLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcbiAgICB2YXIgY29uZmlnID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGV4dCksIHtcbiAgICAgIGdldFByZWZpeENsczogZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSxcbiAgICAgIGNzcDogY3NwLFxuICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b246IGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBzcGFjZTogc3BhY2UsXG4gICAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcbiAgICB9KTtcblxuICAgIGlmIChnZXRUYXJnZXRDb250YWluZXIpIHtcbiAgICAgIGNvbmZpZy5nZXRUYXJnZXRDb250YWluZXIgPSBnZXRUYXJnZXRDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKGdldFBvcHVwQ29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0UG9wdXBDb250YWluZXIgPSBnZXRQb3B1cENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyRW1wdHkpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJFbXB0eSA9IHJlbmRlckVtcHR5O1xuICAgIH1cblxuICAgIGlmIChwYWdlSGVhZGVyKSB7XG4gICAgICBjb25maWcucGFnZUhlYWRlciA9IHBhZ2VIZWFkZXI7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBjb25maWcuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47IC8vIEFkZGl0aW9uYWwgRm9ybSBwcm92aWRlclxuXG4gICAgdmFyIHZhbGlkYXRlTWVzc2FnZXMgPSB7fTtcblxuICAgIGlmIChsb2NhbGUgJiYgbG9jYWxlLkZvcm0gJiYgbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSBsb2NhbGUuRm9ybS5kZWZhdWx0VmFsaWRhdGVNZXNzYWdlcztcbiAgICB9XG5cbiAgICBpZiAoZm9ybSAmJiBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB2YWxpZGF0ZU1lc3NhZ2VzKSwgZm9ybS52YWxpZGF0ZU1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGVNZXNzYWdlcykubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjRmllbGRGb3JtLkZvcm1Qcm92aWRlciwge1xuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0ZU1lc3NhZ2VzXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaXplQ29udGV4dC5TaXplQ29udGV4dFByb3ZpZGVyLCB7XG4gICAgICBzaXplOiBjb21wb25lbnRTaXplXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbmZpZ1xuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9sb2NhbGVQcm92aWRlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgIF9BTlRfTUFSS19fOiBfbG9jYWxlUHJvdmlkZXIuQU5UX01BUktcbiAgICB9LCBjaGlsZE5vZGUpKSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIG51bGwsIGZ1bmN0aW9uIChfLCBfXywgbGVnYWN5TG9jYWxlKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gQ29uZmlnUHJvdmlkZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZW1wdHlcIikpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuXCIpO1xuXG52YXIgcmVuZGVyRW1wdHkgPSBmdW5jdGlvbiByZW5kZXJFbXB0eShjb21wb25lbnROYW1lKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICB2YXIgcHJlZml4ID0gZ2V0UHJlZml4Q2xzKCdlbXB0eScpO1xuXG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICBjYXNlICdMaXN0JzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdTZWxlY3QnOlxuICAgICAgY2FzZSAnVHJlZVNlbGVjdCc6XG4gICAgICBjYXNlICdDYXNjYWRlcic6XG4gICAgICBjYXNlICdUcmFuc2Zlcic6XG4gICAgICBjYXNlICdNZW50aW9ucyc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeCwgXCItc21hbGxcIilcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcmVuZGVyRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGlja2VyQnV0dG9uO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG5mdW5jdGlvbiBQaWNrZXJCdXR0b24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0eXBlOiBcInByaW1hcnlcIlxuICB9LCBwcm9wcykpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGlja2VyVGFnO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF90YWcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90YWdcIikpO1xuXG5mdW5jdGlvbiBQaWNrZXJUYWcocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF90YWdbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIGNvbG9yOiBcImJsdWVcIlxuICB9LCBwcm9wcykpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2VuZXJhdGVSYW5nZVBpY2tlcjtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0NhbGVuZGFyT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DYWxlbmRhck91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9ja0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvY2tDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfU3dhcFJpZ2h0T3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Td2FwUmlnaHRPdXRsaW5lZFwiKSk7XG5cbnZhciBfcmNQaWNrZXIgPSByZXF1aXJlKFwicmMtcGlja2VyXCIpO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmdlUGlja2VyKGdlbmVyYXRlQ29uZmlnKSB7XG4gIHZhciBSYW5nZVBpY2tlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoUmFuZ2VQaWNrZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoUmFuZ2VQaWNrZXIpO1xuXG4gICAgZnVuY3Rpb24gUmFuZ2VQaWNrZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgUmFuZ2VQaWNrZXIpO1xuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIF90aGlzLnBpY2tlclJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5waWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0RGVmYXVsdExvY2FsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvY2FsZSA9IF90aGlzLnByb3BzLmxvY2FsZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9lbl9VU1tcImRlZmF1bHRcIl0pLCBsb2NhbGUpO1xuICAgICAgICByZXN1bHQubGFuZyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJlc3VsdC5sYW5nKSwgKGxvY2FsZSB8fCB7fSkubGFuZyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZW5kZXJQaWNrZXIgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgIHZhciBfdGhpcyRjb250ZXh0ID0gX3RoaXMuY29udGV4dCxcbiAgICAgICAgICAgIGdldFByZWZpeENscyA9IF90aGlzJGNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkY29udGV4dC5kaXJlY3Rpb24sXG4gICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF90aGlzJGNvbnRleHQuZ2V0UG9wdXBDb250YWluZXI7XG5cbiAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICBjdXN0b21HZXRQb3B1cENvbnRhaW5lciA9IF9hLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY3VzdG9taXplU2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICBfYSRib3JkZXJlZCA9IF9hLmJvcmRlcmVkLFxuICAgICAgICAgICAgYm9yZGVyZWQgPSBfYSRib3JkZXJlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hJGJvcmRlcmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwiYm9yZGVyZWRcIiwgXCJwbGFjZWhvbGRlclwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBmb3JtYXQgPSBfdGhpcyRwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgICBzaG93VGltZSA9IF90aGlzJHByb3BzLnNob3dUaW1lLFxuICAgICAgICAgICAgcGlja2VyID0gX3RoaXMkcHJvcHMucGlja2VyO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwaWNrZXInLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICB2YXIgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMgPSB7fTtcbiAgICAgICAgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMpLCBzaG93VGltZSA/ICgwLCBfLmdldFRpbWVQcm9wcykoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgICBwaWNrZXI6IHBpY2tlclxuICAgICAgICB9LCBzaG93VGltZSkpIDoge30pLCBwaWNrZXIgPT09ICd0aW1lJyA/ICgwLCBfLmdldFRpbWVQcm9wcykoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICAgICAgfSwgX3RoaXMucHJvcHMpLCB7XG4gICAgICAgICAgcGlja2VyOiBwaWNrZXJcbiAgICAgICAgfSkpIDoge30pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICB2YXIgbWVyZ2VkU2l6ZSA9IGN1c3RvbWl6ZVNpemUgfHwgc2l6ZTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjUGlja2VyLlJhbmdlUGlja2VyLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICAgICAgc2VwYXJhdG9yOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJ0b1wiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VwYXJhdG9yXCIpXG4gICAgICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU3dhcFJpZ2h0T3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSksXG4gICAgICAgICAgICByZWY6IF90aGlzLnBpY2tlclJlZixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAoMCwgX3V0aWwuZ2V0UmFuZ2VQbGFjZWhvbGRlcikocGlja2VyLCBsb2NhbGUsIHBsYWNlaG9sZGVyKSxcbiAgICAgICAgICAgIHN1ZmZpeEljb246IHBpY2tlciA9PT0gJ3RpbWUnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb2NrQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DYWxlbmRhck91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCksXG4gICAgICAgICAgICBjbGVhckljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpLFxuICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBcInNsaWRlLXVwXCJcbiAgICAgICAgICB9LCByZXN0UHJvcHMsIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWRTaXplKSwgbWVyZ2VkU2l6ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYm9yZGVybGVzc1wiKSwgIWJvcmRlcmVkKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlLmxhbmcsXG4gICAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBjdXN0b21HZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICAgICAgICAgIHByZXZJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHJldi1pY29uXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5leHRJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmV4dC1pY29uXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1cGVyUHJldkljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1wcmV2LWljb25cIilcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VwZXJOZXh0SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1cGVyLW5leHQtaWNvblwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb21wb25lbnRzOiBfLkNvbXBvbmVudHMsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShSYW5nZVBpY2tlciwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgY29tcG9uZW50TmFtZTogXCJEYXRlUGlja2VyXCIsXG4gICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5nZXREZWZhdWx0TG9jYWxlXG4gICAgICAgIH0sIHRoaXMucmVuZGVyUGlja2VyKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFJhbmdlUGlja2VyO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgUmFuZ2VQaWNrZXIuY29udGV4dFR5cGUgPSBfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dDtcbiAgcmV0dXJuIFJhbmdlUGlja2VyO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2VuZXJhdGVQaWNrZXI7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9DYWxlbmRhck91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2FsZW5kYXJPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvY2tDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb2NrQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3JjUGlja2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyXCIpKTtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLlwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGlja2VyKGdlbmVyYXRlQ29uZmlnKSB7XG4gIGZ1bmN0aW9uIGdldFBpY2tlcihwaWNrZXIsIGRpc3BsYXlOYW1lKSB7XG4gICAgdmFyIFBpY2tlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShQaWNrZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShQaWNrZXIpO1xuXG4gICAgICBmdW5jdGlvbiBQaWNrZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgUGlja2VyKTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIF90aGlzLnBpY2tlclJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICBfdGhpcy5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucGlja2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLnBpY2tlclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLmJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnBpY2tlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBfdGhpcy5waWNrZXJSZWYuY3VycmVudC5ibHVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLmdldERlZmF1bHRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxvY2FsZSA9IF90aGlzLnByb3BzLmxvY2FsZTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2VuX1VTW1wiZGVmYXVsdFwiXSksIGxvY2FsZSk7XG4gICAgICAgICAgcmVzdWx0LmxhbmcgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN1bHQubGFuZyksIChsb2NhbGUgfHwge30pLmxhbmcpO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMucmVuZGVyUGlja2VyID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgIHZhciBfdGhpcyRjb250ZXh0ID0gX3RoaXMuY29udGV4dCxcbiAgICAgICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3RoaXMkY29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJGNvbnRleHQuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF90aGlzJGNvbnRleHQuZ2V0UG9wdXBDb250YWluZXI7XG5cbiAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICBjdXN0b21pemVHZXRQb3B1cENvbnRhaW5lciA9IF9hLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGN1c3RvbWl6ZVNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICBfYSRib3JkZXJlZCA9IF9hLmJvcmRlcmVkLFxuICAgICAgICAgICAgICBib3JkZXJlZCA9IF9hJGJvcmRlcmVkID09PSB2b2lkIDAgPyB0cnVlIDogX2EkYm9yZGVyZWQsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gX2EucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwiYm9yZGVyZWRcIiwgXCJwbGFjZWhvbGRlclwiXSk7XG5cbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMuZm9ybWF0LFxuICAgICAgICAgICAgICBzaG93VGltZSA9IF90aGlzJHByb3BzLnNob3dUaW1lO1xuICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3BpY2tlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICAgICAgdmFyIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICAgIHNob3dUb2RheTogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGFkZGl0aW9uYWxPdmVycmlkZVByb3BzID0ge307XG5cbiAgICAgICAgICBpZiAocGlja2VyKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsT3ZlcnJpZGVQcm9wcy5waWNrZXIgPSBwaWNrZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1lcmdlZFBpY2tlciA9IHBpY2tlciB8fCBfdGhpcy5wcm9wcy5waWNrZXI7XG4gICAgICAgICAgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMpLCBzaG93VGltZSA/ICgwLCBfLmdldFRpbWVQcm9wcykoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgcGlja2VyOiBtZXJnZWRQaWNrZXJcbiAgICAgICAgICB9LCBzaG93VGltZSkpIDoge30pLCBtZXJnZWRQaWNrZXIgPT09ICd0aW1lJyA/ICgwLCBfLmdldFRpbWVQcm9wcykoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFxuICAgICAgICAgIH0sIF90aGlzLnByb3BzKSwge1xuICAgICAgICAgICAgcGlja2VyOiBtZXJnZWRQaWNrZXJcbiAgICAgICAgICB9KSkgOiB7fSk7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBtZXJnZWRTaXplID0gY3VzdG9taXplU2l6ZSB8fCBzaXplO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1BpY2tlcltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgICAgIHJlZjogX3RoaXMucGlja2VyUmVmLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogKDAsIF91dGlsLmdldFBsYWNlaG9sZGVyKShtZXJnZWRQaWNrZXIsIGxvY2FsZSwgcGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgICBzdWZmaXhJY29uOiBtZXJnZWRQaWNrZXIgPT09ICd0aW1lJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9ja0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2FsZW5kYXJPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpLFxuICAgICAgICAgICAgICBjbGVhckljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpLFxuICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogXCJzbGlkZS11cFwiXG4gICAgICAgICAgICB9LCBhZGRpdGlvbmFsUHJvcHMsIHJlc3RQcm9wcywgYWRkaXRpb25hbE92ZXJyaWRlUHJvcHMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGUubGFuZyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQobWVyZ2VkU2l6ZSksIG1lcmdlZFNpemUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJvcmRlcmxlc3NcIiksICFib3JkZXJlZCksIF9jbGFzc05hbWVzKSksXG4gICAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogY3VzdG9taXplR2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICAgIGdlbmVyYXRlQ29uZmlnOiBnZW5lcmF0ZUNvbmZpZyxcbiAgICAgICAgICAgICAgcHJldkljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByZXYtaWNvblwiKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV4dEljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5leHQtaWNvblwiKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgc3VwZXJQcmV2SWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VwZXItcHJldi1pY29uXCIpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBzdXBlck5leHRJY29uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdXBlci1uZXh0LWljb25cIilcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNvbXBvbmVudHM6IF8uQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKShwaWNrZXIgIT09ICdxdWFydGVyJywgZGlzcGxheU5hbWUsIFwiRGF0ZVBpY2tlci5cIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiIGlzIGxlZ2FjeSB1c2FnZS4gUGxlYXNlIHVzZSBEYXRlUGlja2VyW3BpY2tlcj0nXCIpLmNvbmNhdChwaWNrZXIsIFwiJ10gZGlyZWN0bHkuXCIpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKFBpY2tlciwgW3tcbiAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiBcIkRhdGVQaWNrZXJcIixcbiAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZ2V0RGVmYXVsdExvY2FsZVxuICAgICAgICAgIH0sIHRoaXMucmVuZGVyUGlja2VyKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuICAgICAgcmV0dXJuIFBpY2tlcjtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICBQaWNrZXIuY29udGV4dFR5cGUgPSBfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dDtcblxuICAgIGlmIChkaXNwbGF5TmFtZSkge1xuICAgICAgUGlja2VyLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFBpY2tlcjtcbiAgfVxuXG4gIHZhciBEYXRlUGlja2VyID0gZ2V0UGlja2VyKCk7XG4gIHZhciBXZWVrUGlja2VyID0gZ2V0UGlja2VyKCd3ZWVrJywgJ1dlZWtQaWNrZXInKTtcbiAgdmFyIE1vbnRoUGlja2VyID0gZ2V0UGlja2VyKCdtb250aCcsICdNb250aFBpY2tlcicpO1xuICB2YXIgWWVhclBpY2tlciA9IGdldFBpY2tlcigneWVhcicsICdZZWFyUGlja2VyJyk7XG4gIHZhciBUaW1lUGlja2VyID0gZ2V0UGlja2VyKCd0aW1lJywgJ1RpbWVQaWNrZXInKTtcbiAgdmFyIFF1YXJ0ZXJQaWNrZXIgPSBnZXRQaWNrZXIoJ3F1YXJ0ZXInLCAnUXVhcnRlclBpY2tlcicpO1xuICByZXR1cm4ge1xuICAgIERhdGVQaWNrZXI6IERhdGVQaWNrZXIsXG4gICAgV2Vla1BpY2tlcjogV2Vla1BpY2tlcixcbiAgICBNb250aFBpY2tlcjogTW9udGhQaWNrZXIsXG4gICAgWWVhclBpY2tlcjogWWVhclBpY2tlcixcbiAgICBUaW1lUGlja2VyOiBUaW1lUGlja2VyLFxuICAgIFF1YXJ0ZXJQaWNrZXI6IFF1YXJ0ZXJQaWNrZXJcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRpbWVQcm9wcyA9IGdldFRpbWVQcm9wcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5Db21wb25lbnRzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9QaWNrZXJCdXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9QaWNrZXJCdXR0b25cIikpO1xuXG52YXIgX1BpY2tlclRhZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL1BpY2tlclRhZ1wiKSk7XG5cbnZhciBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZW5lcmF0ZVNpbmdsZVBpY2tlclwiKSk7XG5cbnZhciBfZ2VuZXJhdGVSYW5nZVBpY2tlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2VuZXJhdGVSYW5nZVBpY2tlclwiKSk7XG5cbnZhciBDb21wb25lbnRzID0ge1xuICBidXR0b246IF9QaWNrZXJCdXR0b25bXCJkZWZhdWx0XCJdLFxuICByYW5nZUl0ZW06IF9QaWNrZXJUYWdbXCJkZWZhdWx0XCJdXG59O1xuZXhwb3J0cy5Db21wb25lbnRzID0gQ29tcG9uZW50cztcblxuZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG4gIGlmICghbGlzdCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFtsaXN0XTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZVByb3BzKHByb3BzKSB7XG4gIHZhciBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICBwaWNrZXIgPSBwcm9wcy5waWNrZXIsXG4gICAgICBzaG93SG91ciA9IHByb3BzLnNob3dIb3VyLFxuICAgICAgc2hvd01pbnV0ZSA9IHByb3BzLnNob3dNaW51dGUsXG4gICAgICBzaG93U2Vjb25kID0gcHJvcHMuc2hvd1NlY29uZCxcbiAgICAgIHVzZTEySG91cnMgPSBwcm9wcy51c2UxMkhvdXJzO1xuICB2YXIgZmlyc3RGb3JtYXQgPSB0b0FycmF5KGZvcm1hdClbMF07XG4gIHZhciBzaG93VGltZU9iaiA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcHJvcHMpO1xuXG4gIGlmIChmaXJzdEZvcm1hdCkge1xuICAgIGlmICghZmlyc3RGb3JtYXQuaW5jbHVkZXMoJ3MnKSAmJiBzaG93U2Vjb25kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNob3dUaW1lT2JqLnNob3dTZWNvbmQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpcnN0Rm9ybWF0LmluY2x1ZGVzKCdtJykgJiYgc2hvd01pbnV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzaG93VGltZU9iai5zaG93TWludXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaXJzdEZvcm1hdC5pbmNsdWRlcygnSCcpICYmICFmaXJzdEZvcm1hdC5pbmNsdWRlcygnaCcpICYmIHNob3dIb3VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNob3dUaW1lT2JqLnNob3dIb3VyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKChmaXJzdEZvcm1hdC5pbmNsdWRlcygnYScpIHx8IGZpcnN0Rm9ybWF0LmluY2x1ZGVzKCdBJykpICYmIHVzZTEySG91cnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2hvd1RpbWVPYmoudXNlMTJIb3VycyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ3RpbWUnKSB7XG4gICAgcmV0dXJuIHNob3dUaW1lT2JqO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93VGltZTogc2hvd1RpbWVPYmpcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQaWNrZXIoZ2VuZXJhdGVDb25maWcpIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IFBpY2tlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF9nZW5lcmF0ZVNpbmdsZVBpY2tlciA9ICgwLCBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIyW1wiZGVmYXVsdFwiXSkoZ2VuZXJhdGVDb25maWcpLFxuICAgICAgRGF0ZVBpY2tlciA9IF9nZW5lcmF0ZVNpbmdsZVBpY2tlci5EYXRlUGlja2VyLFxuICAgICAgV2Vla1BpY2tlciA9IF9nZW5lcmF0ZVNpbmdsZVBpY2tlci5XZWVrUGlja2VyLFxuICAgICAgTW9udGhQaWNrZXIgPSBfZ2VuZXJhdGVTaW5nbGVQaWNrZXIuTW9udGhQaWNrZXIsXG4gICAgICBZZWFyUGlja2VyID0gX2dlbmVyYXRlU2luZ2xlUGlja2VyLlllYXJQaWNrZXIsXG4gICAgICBUaW1lUGlja2VyID0gX2dlbmVyYXRlU2luZ2xlUGlja2VyLlRpbWVQaWNrZXIsXG4gICAgICBRdWFydGVyUGlja2VyID0gX2dlbmVyYXRlU2luZ2xlUGlja2VyLlF1YXJ0ZXJQaWNrZXI7IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBSYW5nZSBQaWNrZXIgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgUmFuZ2VQaWNrZXIgPSAoMCwgX2dlbmVyYXRlUmFuZ2VQaWNrZXJbXCJkZWZhdWx0XCJdKShnZW5lcmF0ZUNvbmZpZyk7XG4gIHZhciBNZXJnZWREYXRlUGlja2VyID0gRGF0ZVBpY2tlcjtcbiAgTWVyZ2VkRGF0ZVBpY2tlci5XZWVrUGlja2VyID0gV2Vla1BpY2tlcjtcbiAgTWVyZ2VkRGF0ZVBpY2tlci5Nb250aFBpY2tlciA9IE1vbnRoUGlja2VyO1xuICBNZXJnZWREYXRlUGlja2VyLlllYXJQaWNrZXIgPSBZZWFyUGlja2VyO1xuICBNZXJnZWREYXRlUGlja2VyLlJhbmdlUGlja2VyID0gUmFuZ2VQaWNrZXI7XG4gIE1lcmdlZERhdGVQaWNrZXIuVGltZVBpY2tlciA9IFRpbWVQaWNrZXI7XG4gIE1lcmdlZERhdGVQaWNrZXIuUXVhcnRlclBpY2tlciA9IFF1YXJ0ZXJQaWNrZXI7XG4gIHJldHVybiBNZXJnZWREYXRlUGlja2VyO1xufVxuXG52YXIgX2RlZmF1bHQgPSBnZW5lcmF0ZVBpY2tlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfbW9tZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyL2xpYi9nZW5lcmF0ZS9tb21lbnRcIikpO1xuXG52YXIgX2dlbmVyYXRlUGlja2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZW5lcmF0ZVBpY2tlclwiKSk7XG5cbnZhciBEYXRlUGlja2VyID0gKDAsIF9nZW5lcmF0ZVBpY2tlcltcImRlZmF1bHRcIl0pKF9tb21lbnRbXCJkZWZhdWx0XCJdKTtcbnZhciBfZGVmYXVsdCA9IERhdGVQaWNrZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXBpY2tlci9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG4vLyBNZXJnZSBpbnRvIGEgbG9jYWxlIG9iamVjdFxudmFyIGxvY2FsZSA9IHtcbiAgbGFuZzogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkYXRlJyxcbiAgICB5ZWFyUGxhY2Vob2xkZXI6ICdTZWxlY3QgeWVhcicsXG4gICAgcXVhcnRlclBsYWNlaG9sZGVyOiAnU2VsZWN0IHF1YXJ0ZXInLFxuICAgIG1vbnRoUGxhY2Vob2xkZXI6ICdTZWxlY3QgbW9udGgnLFxuICAgIHdlZWtQbGFjZWhvbGRlcjogJ1NlbGVjdCB3ZWVrJyxcbiAgICByYW5nZVBsYWNlaG9sZGVyOiBbJ1N0YXJ0IGRhdGUnLCAnRW5kIGRhdGUnXSxcbiAgICByYW5nZVllYXJQbGFjZWhvbGRlcjogWydTdGFydCB5ZWFyJywgJ0VuZCB5ZWFyJ10sXG4gICAgcmFuZ2VNb250aFBsYWNlaG9sZGVyOiBbJ1N0YXJ0IG1vbnRoJywgJ0VuZCBtb250aCddLFxuICAgIHJhbmdlV2Vla1BsYWNlaG9sZGVyOiBbJ1N0YXJ0IHdlZWsnLCAnRW5kIHdlZWsnXVxuICB9LCBfZW5fVVNbXCJkZWZhdWx0XCJdKSxcbiAgdGltZVBpY2tlckxvY2FsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZW5fVVMyW1wiZGVmYXVsdFwiXSlcbn07IC8vIEFsbCBzZXR0aW5ncyBhdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXG5cbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXI7XG5leHBvcnRzLmdldFJhbmdlUGxhY2Vob2xkZXIgPSBnZXRSYW5nZVBsYWNlaG9sZGVyO1xuXG5mdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihwaWNrZXIsIGxvY2FsZSwgY3VzdG9taXplUGxhY2Vob2xkZXIpIHtcbiAgaWYgKGN1c3RvbWl6ZVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3VzdG9taXplUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAneWVhcicgJiYgbG9jYWxlLmxhbmcueWVhclBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnllYXJQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChwaWNrZXIgPT09ICdxdWFydGVyJyAmJiBsb2NhbGUubGFuZy5xdWFydGVyUGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLmxhbmcucXVhcnRlclBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ21vbnRoJyAmJiBsb2NhbGUubGFuZy5tb250aFBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLm1vbnRoUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAnd2VlaycgJiYgbG9jYWxlLmxhbmcud2Vla1BsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLndlZWtQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChwaWNrZXIgPT09ICd0aW1lJyAmJiBsb2NhbGUudGltZVBpY2tlckxvY2FsZS5wbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBsb2NhbGUudGltZVBpY2tlckxvY2FsZS5wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGUubGFuZy5wbGFjZWhvbGRlcjtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZ2VQbGFjZWhvbGRlcihwaWNrZXIsIGxvY2FsZSwgY3VzdG9taXplUGxhY2Vob2xkZXIpIHtcbiAgaWYgKGN1c3RvbWl6ZVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3VzdG9taXplUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAneWVhcicgJiYgbG9jYWxlLmxhbmcueWVhclBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnJhbmdlWWVhclBsYWNlaG9sZGVyO1xuICB9XG5cbiAgaWYgKHBpY2tlciA9PT0gJ21vbnRoJyAmJiBsb2NhbGUubGFuZy5tb250aFBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5sYW5nLnJhbmdlTW9udGhQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChwaWNrZXIgPT09ICd3ZWVrJyAmJiBsb2NhbGUubGFuZy53ZWVrUGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLmxhbmcucmFuZ2VXZWVrUGxhY2Vob2xkZXI7XG4gIH1cblxuICBpZiAocGlja2VyID09PSAndGltZScgJiYgbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gbG9jYWxlLnRpbWVQaWNrZXJMb2NhbGUucmFuZ2VQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLWRlZmF1bHQnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeENscyxcbiAgICB3aWR0aDogXCIxODRcIixcbiAgICBoZWlnaHQ6IFwiMTUyXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTg0IDE1MlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDI0IDMxLjY3KVwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiNjcuNzk3XCIsXG4gICAgY3k6IFwiMTA2Ljg5XCIsXG4gICAgcng6IFwiNjcuNzk3XCIsXG4gICAgcnk6IFwiMTIuNjY4XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtMVwiKSxcbiAgICBkOiBcIk0xMjIuMDM0IDY5LjY3NEw5OC4xMDkgNDAuMjI5Yy0xLjE0OC0xLjM4Ni0yLjgyNi0yLjIyNS00LjU5My0yLjIyNWgtNTEuNDRjLTEuNzY2IDAtMy40NDQuODM5LTQuNTkyIDIuMjI1TDEzLjU2IDY5LjY3NHYxNS4zODNoMTA4LjQ3NVY2OS42NzR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtMlwiKSxcbiAgICBkOiBcIk0xMDEuNTM3IDg2LjIxNEw4MC42MyA2MS4xMDJjLTEuMDAxLTEuMjA3LTIuNTA3LTEuODY3LTQuMDQ4LTEuODY3SDMxLjcyNGMtMS41NCAwLTMuMDQ3LjY2LTQuMDQ4IDEuODY3TDYuNzY5IDg2LjIxNHYxMy43OTJoOTQuNzY4Vjg2LjIxNHpcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEzLjU2KVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTNcIiksXG4gICAgZDogXCJNMzMuODMgMGg2Ny45MzNhNCA0IDAgMCAxIDQgNHY5My4zNDRhNCA0IDAgMCAxLTQgNEgzMy44M2E0IDQgMCAwIDEtNC00VjRhNCA0IDAgMCAxIDQtNHpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC00XCIpLFxuICAgIGQ6IFwiTTQyLjY3OCA5Ljk1M2g1MC4yMzdhMiAyIDAgMCAxIDIgMlYzNi45MWEyIDIgMCAwIDEtMiAySDQyLjY3OGEyIDIgMCAwIDEtMi0yVjExLjk1M2EyIDIgMCAwIDEgMi0yek00Mi45NCA0OS43NjdoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjRINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNHpNNDIuOTQgNjEuNTNoNDkuNzEzYTIuMjYyIDIuMjYyIDAgMSAxIDAgNC41MjVINDIuOTRhMi4yNjIgMi4yNjIgMCAwIDEgMC00LjUyNXpNMTIxLjgxMyAxMDUuMDMyYy0uNzc1IDMuMDcxLTMuNDk3IDUuMzYtNi43MzUgNS4zNkgyMC41MTVjLTMuMjM4IDAtNS45Ni0yLjI5LTYuNzM0LTUuMzZhNy4zMDkgNy4zMDkgMCAwIDEtLjIyMi0xLjc5VjY5LjY3NWgyNi4zMThjMi45MDcgMCA1LjI1IDIuNDQ4IDUuMjUgNS40MnYuMDRjMCAyLjk3MSAyLjM3IDUuMzcgNS4yNzcgNS4zN2gzNC43ODVjMi45MDcgMCA1LjI3Ny0yLjQyMSA1LjI3Ny01LjM5M1Y3NS4xYzAtMi45NzIgMi4zNDMtNS40MjYgNS4yNS01LjQyNmgyNi4zMTh2MzMuNTY5YzAgLjYxNy0uMDc3IDEuMjE2LS4yMjEgMS43ODl6XCJcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTVcIiksXG4gICAgZDogXCJNMTQ5LjEyMSAzMy4yOTJsLTYuODMgMi42NWExIDEgMCAwIDEtMS4zMTctMS4yM2wxLjkzNy02LjIwN2MtMi41ODktMi45NDQtNC4xMDktNi41MzQtNC4xMDktMTAuNDA4QzEzOC44MDIgOC4xMDIgMTQ4LjkyIDAgMTYxLjQwMiAwIDE3My44ODEgMCAxODQgOC4xMDIgMTg0IDE4LjA5N2MwIDkuOTk1LTEwLjExOCAxOC4wOTctMjIuNTk5IDE4LjA5Ny00LjUyOCAwLTguNzQ0LTEuMDY2LTEyLjI4LTIuOTAyelwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTQ5LjY1IDE1LjM4MylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGN4OiBcIjIwLjY1NFwiLFxuICAgIGN5OiBcIjMuMTY3XCIsXG4gICAgcng6IFwiMi44NDlcIixcbiAgICByeTogXCIyLjgxNVwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuNjk4IDUuNjNIMEwyLjg5OC43MDR6TTkuMjU5LjcwNGg0Ljk4NVY1LjYzSDkuMjU5elwiXG4gIH0pKSkpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9lbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1wdHlcIikpO1xuXG52YXIgX3NpbXBsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2ltcGxlXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBkZWZhdWx0RW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCBudWxsKTtcbnZhciBzaW1wbGVFbXB0eUltZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9zaW1wbGVbXCJkZWZhdWx0XCJdLCBudWxsKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkaW1hZ2UgPSBwcm9wcy5pbWFnZSxcbiAgICAgICAgaW1hZ2UgPSBfcHJvcHMkaW1hZ2UgPT09IHZvaWQgMCA/IGRlZmF1bHRFbXB0eUltZyA6IF9wcm9wcyRpbWFnZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW1hZ2VTdHlsZSA9IHByb3BzLmltYWdlU3R5bGUsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW1hZ2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNoaWxkcmVuXCIsIFwiaW1hZ2VTdHlsZVwiXSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgY29tcG9uZW50TmFtZTogXCJFbXB0eVwiXG4gICAgfSwgZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgZGVzID0gdHlwZW9mIGRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJyA/IGRlc2NyaXB0aW9uIDogbG9jYWxlLmRlc2NyaXB0aW9uO1xuICAgICAgdmFyIGFsdCA9IHR5cGVvZiBkZXMgPT09ICdzdHJpbmcnID8gZGVzIDogJ2VtcHR5JztcbiAgICAgIHZhciBpbWFnZU5vZGUgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpbWFnZU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgICAgYWx0OiBhbHQsXG4gICAgICAgICAgc3JjOiBpbWFnZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlTm9kZSA9IGltYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vcm1hbFwiKSwgaW1hZ2UgPT09IHNpbXBsZUVtcHR5SW1nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSlcbiAgICAgIH0sIHJlc3RQcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWltYWdlXCIpLFxuICAgICAgICBzdHlsZTogaW1hZ2VTdHlsZVxuICAgICAgfSwgaW1hZ2VOb2RlKSwgZGVzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgICAgfSwgZGVzKSwgY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgICB9LCBjaGlsZHJlbikpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9ERUZBVUxUID0gZGVmYXVsdEVtcHR5SW1nO1xuRW1wdHkuUFJFU0VOVEVEX0lNQUdFX1NJTVBMRSA9IHNpbXBsZUVtcHR5SW1nO1xudmFyIF9kZWZhdWx0ID0gRW1wdHk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgU2ltcGxlID0gZnVuY3Rpb24gU2ltcGxlKCkge1xuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eS1pbWctc2ltcGxlJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiNjRcIixcbiAgICBoZWlnaHQ6IFwiNDFcIixcbiAgICB2aWV3Qm94OiBcIjAgMCA2NCA0MVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAgMSlcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWxsaXBzZVwiKSxcbiAgICBjeDogXCIzMlwiLFxuICAgIGN5OiBcIjMzXCIsXG4gICAgcng6IFwiMzJcIixcbiAgICByeTogXCI3XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdcIiksXG4gICAgZmlsbFJ1bGU6IFwibm9uemVyb1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDEuNjEzIDE1LjkzMWMwLTEuNjA1Ljk5NC0yLjkzIDIuMjI3LTIuOTMxSDU1djE4LjEzN0M1NSAzMy4yNiA1My42OCAzNSA1Mi4wNSAzNWgtNDAuMUMxMC4zMiAzNSA5IDMzLjI1OSA5IDMxLjEzN1YxM2gxMS4xNmMxLjIzMyAwIDIuMjI3IDEuMzIzIDIuMjI3IDIuOTI4di4wMjJjMCAxLjYwNSAxLjAwNSAyLjkwMSAyLjIzNyAyLjkwMWgxNC43NTJjMS4yMzIgMCAyLjIzNy0xLjMwOCAyLjIzNy0yLjkxM3YtLjAwN3pcIixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aFwiKVxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFNpbXBsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRcIikpO1xuXG52YXIgX2NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xuXG52YXIgTG9jYWxlUmVjZWl2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVSZWNlaXZlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVJlY2VpdmVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTG9jYWxlUmVjZWl2ZXIpO1xuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIFt7XG4gICAga2V5OiBcImdldExvY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVGcm9tQ29udGV4dCA9IGNvbXBvbmVudE5hbWUgJiYgYW50TG9jYWxlID8gYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdIDoge307XG4gICAgICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb2NhbGVDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZUNvZGUoKSB7XG4gICAgICB2YXIgYW50TG9jYWxlID0gdGhpcy5jb250ZXh0O1xuICAgICAgdmFyIGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTsgLy8gSGFkIHVzZSBMb2NhbGVQcm92aWRlIGJ1dCBkaWRuJ3Qgc2V0IGxvY2FsZVxuXG4gICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmxvY2FsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZUNvZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmdldExvY2FsZSgpLCB0aGlzLmdldExvY2FsZUNvZGUoKSwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVJlY2VpdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVJlY2VpdmVyO1xuTG9jYWxlUmVjZWl2ZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnROYW1lOiAnZ2xvYmFsJ1xufTtcbkxvY2FsZVJlY2VpdmVyLmNvbnRleHRUeXBlID0gX2NvbnRleHRbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBMb2NhbGVDb250ZXh0ID0gLyojX19QVVJFX18qLygwLCBfcmVhY3QuY3JlYXRlQ29udGV4dCkodW5kZWZpbmVkKTtcbnZhciBfZGVmYXVsdCA9IExvY2FsZUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuQU5UX01BUksgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9sb2NhbGUgPSByZXF1aXJlKFwiLi4vbW9kYWwvbG9jYWxlXCIpO1xuXG52YXIgX2NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRleHRcIikpO1xuXG52YXIgQU5UX01BUksgPSAnaW50ZXJuYWxNYXJrJztcbmV4cG9ydHMuQU5UX01BUksgPSBBTlRfTUFSSztcblxudmFyIExvY2FsZVByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBMb2NhbGVQcm92aWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTG9jYWxlUHJvdmlkZXIpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKHByb3BzLmxvY2FsZSAmJiBwcm9wcy5sb2NhbGUuTW9kYWwpO1xuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKHByb3BzLl9BTlRfTUFSS19fID09PSBBTlRfTUFSSywgJ0xvY2FsZVByb3ZpZGVyJywgJ2BMb2NhbGVQcm92aWRlcmAgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgbG9jYWxlYCB3aXRoIGBDb25maWdQcm92aWRlcmAgaW5zdGVhZDogaHR0cDovL3UuYW50LmRlc2lnbi9sb2NhbGUnKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIGxvY2FsZSA9IHRoaXMucHJvcHMubG9jYWxlO1xuXG4gICAgICBpZiAocHJldlByb3BzLmxvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKGxvY2FsZSAmJiBsb2NhbGUuTW9kYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICgwLCBfbG9jYWxlLmNoYW5nZUNvbmZpcm1Mb2NhbGUpKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGxvY2FsZSA9IF90aGlzJHByb3BzLmxvY2FsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0W1wiZGVmYXVsdFwiXS5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgbG9jYWxlKSwge1xuICAgICAgICAgIGV4aXN0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGVQcm92aWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVQcm92aWRlcjtcbkxvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9jYWxlOiB7fVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NhbGVuZGFyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xudmFyIHR5cGVUZW1wbGF0ZSA9ICcke2xhYmVsfSBpcyBub3QgYSB2YWxpZCAke3R5cGV9JztcbnZhciBsb2NhbGVWYWx1ZXMgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgUGFnaW5hdGlvbjogX2VuX1VTW1wiZGVmYXVsdFwiXSxcbiAgRGF0ZVBpY2tlcjogX2VuX1VTMltcImRlZmF1bHRcIl0sXG4gIFRpbWVQaWNrZXI6IF9lbl9VUzNbXCJkZWZhdWx0XCJdLFxuICBDYWxlbmRhcjogX2VuX1VTNFtcImRlZmF1bHRcIl0sXG4gIGdsb2JhbDoge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCdcbiAgfSxcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlciBtZW51JyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnUmVzZXQnLFxuICAgIGZpbHRlckVtcHR5VGV4dDogJ05vIGZpbHRlcnMnLFxuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdGlvbkFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgc29ydFRpdGxlOiAnU29ydCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kIHJvdycsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZSByb3cnLFxuICAgIHRyaWdnZXJEZXNjOiAnQ2xpY2sgc29ydCBieSBkZXNjZW5kJyxcbiAgICB0cmlnZ2VyQXNjOiAnQ2xpY2sgc29ydCBieSBhc2NlbmQnLFxuICAgIGNhbmNlbFNvcnQ6ICdDbGljayB0byBjYW5jZWwgc29ydCdcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgICByZW1vdmU6ICdSZW1vdmUnLFxuICAgIHNlbGVjdEN1cnJlbnQ6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICByZW1vdmVDdXJyZW50OiAnUmVtb3ZlIGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICByZW1vdmVBbGw6ICdSZW1vdmUgYWxsIGRhdGEnLFxuICAgIHNlbGVjdEludmVydDogJ0ludmVydCBjdXJyZW50IHBhZ2UnXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ1VwbG9hZGluZy4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ1JlbW92ZSBmaWxlJyxcbiAgICB1cGxvYWRFcnJvcjogJ1VwbG9hZCBlcnJvcicsXG4gICAgcHJldmlld0ZpbGU6ICdQcmV2aWV3IGZpbGUnLFxuICAgIGRvd25sb2FkRmlsZTogJ0Rvd25sb2FkIGZpbGUnXG4gIH0sXG4gIEVtcHR5OiB7XG4gICAgZGVzY3JpcHRpb246ICdObyBEYXRhJ1xuICB9LFxuICBJY29uOiB7XG4gICAgaWNvbjogJ2ljb24nXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBlZGl0OiAnRWRpdCcsXG4gICAgY29weTogJ0NvcHknLFxuICAgIGNvcGllZDogJ0NvcGllZCcsXG4gICAgZXhwYW5kOiAnRXhwYW5kJ1xuICB9LFxuICBQYWdlSGVhZGVyOiB7XG4gICAgYmFjazogJ0JhY2snXG4gIH0sXG4gIEZvcm06IHtcbiAgICBkZWZhdWx0VmFsaWRhdGVNZXNzYWdlczoge1xuICAgICAgXCJkZWZhdWx0XCI6ICdGaWVsZCB2YWxpZGF0aW9uIGVycm9yICR7bGFiZWx9JyxcbiAgICAgIHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyICR7bGFiZWx9JyxcbiAgICAgIFwiZW51bVwiOiAnJHtsYWJlbH0gbXVzdCBiZSBvbmUgb2YgWyR7ZW51bX1dJyxcbiAgICAgIHdoaXRlc3BhY2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgYSBibGFuayBjaGFyYWN0ZXInLFxuICAgICAgZGF0ZToge1xuICAgICAgICBmb3JtYXQ6ICcke2xhYmVsfSBkYXRlIGZvcm1hdCBpcyBpbnZhbGlkJyxcbiAgICAgICAgcGFyc2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgZGF0ZScsXG4gICAgICAgIGludmFsaWQ6ICcke2xhYmVsfSBpcyBhbiBpbnZhbGlkIGRhdGUnXG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG1ldGhvZDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbnVtYmVyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJib29sZWFuXCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaW50ZWdlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBcImZsb2F0XCI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgcmVnZXhwOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGVtYWlsOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHVybDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBoZXg6IHR5cGVUZW1wbGF0ZVxuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlICR7bGVufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMnLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSB1cCB0byAke21heH0gY2hhcmFjdGVycycsXG4gICAgICAgIHJhbmdlOiAnJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0gY2hhcmFjdGVycydcbiAgICAgIH0sXG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSBlcXVhbCB0byAke2xlbn0nLFxuICAgICAgICBtaW46ICcke2xhYmVsfSBtaW5pbXVtIHZhbHVlIGlzICR7bWlufScsXG4gICAgICAgIG1heDogJyR7bGFiZWx9IG1heGltdW0gdmFsdWUgaXMgJHttYXh9JyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBhcnJheToge1xuICAgICAgICBsZW46ICdNdXN0IGJlICR7bGVufSAke2xhYmVsfScsXG4gICAgICAgIG1pbjogJ0F0IGxlYXN0ICR7bWlufSAke2xhYmVsfScsXG4gICAgICAgIG1heDogJ0F0IG1vc3QgJHttYXh9ICR7bGFiZWx9JyxcbiAgICAgICAgcmFuZ2U6ICdUaGUgYW1vdW50IG9mICR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgbWlzbWF0Y2g6ICcke2xhYmVsfSBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVybiAke3BhdHRlcm59J1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZVZhbHVlcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVVc2VNZXNzYWdlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU1lc3NhZ2UoZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTWVzc2FnZSA9IGZ1bmN0aW9uIHVzZU1lc3NhZ2UoKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ21lc3NhZ2UnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHRhcmdldCA9IGFyZ3Mua2V5IHx8ICgwLCBfLmdldEtleVRoZW5JbmNyZWFzZUtleSkoKTtcbiAgICAgIHZhciBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJncy5vbkNsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHByZWZpeENsczogbWVyZ2VkUHJlZml4Q2xzXG4gICAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgICAgICB9KSwgcHJlZml4Q2xzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgICAgIGlmIChpbm5lckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdsb2FkaW5nJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuICgwLCBfLmF0dGFjaFR5cGVBcGkpKGhvb2tBcGlSZWYuY3VycmVudCwgdHlwZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtob29rQXBpUmVmLmN1cnJlbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwge1xuICAgICAga2V5OiBcImhvbGRlclwiXG4gICAgfSwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGdldFByZWZpeENscyA9IGNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIGhvbGRlcjtcbiAgICB9KV07XG4gIH07XG5cbiAgcmV0dXJuIHVzZU1lc3NhZ2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRLZXlUaGVuSW5jcmVhc2VLZXkgPSBnZXRLZXlUaGVuSW5jcmVhc2VLZXk7XG5leHBvcnRzLmF0dGFjaFR5cGVBcGkgPSBhdHRhY2hUeXBlQXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY05vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfdXNlTWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlTWVzc2FnZVwiKSk7XG5cbnZhciBtZXNzYWdlSW5zdGFuY2U7XG52YXIgZGVmYXVsdER1cmF0aW9uID0gMztcbnZhciBkZWZhdWx0VG9wO1xudmFyIGtleSA9IDE7XG52YXIgbG9jYWxQcmVmaXhDbHMgPSAnYW50LW1lc3NhZ2UnO1xudmFyIHRyYW5zaXRpb25OYW1lID0gJ21vdmUtdXAnO1xudmFyIGdldENvbnRhaW5lcjtcbnZhciBtYXhDb3VudDtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0S2V5VGhlbkluY3JlYXNlS2V5KCkge1xuICByZXR1cm4ga2V5Kys7XG59XG5cbmZ1bmN0aW9uIHNldE1lc3NhZ2VDb25maWcob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy50b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSBvcHRpb25zLnRvcDtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgZGVmYXVsdFRvcFxuICB9XG5cbiAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHREdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIH1cblxuICBpZiAob3B0aW9ucy5wcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsUHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG4gIH1cblxuICBpZiAob3B0aW9ucy5nZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYW5zaXRpb25OYW1lID0gb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsOyAvLyBkZWxldGUgbWVzc2FnZUluc3RhbmNlIGZvciBuZXcgdHJhbnNpdGlvbk5hbWVcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heENvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhDb3VudCA9IG9wdGlvbnMubWF4Q291bnQ7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBjYWxsYmFjaykge1xuICB2YXIgcHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgbG9jYWxQcmVmaXhDbHM7XG5cbiAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgdG9wOiBkZWZhdWx0VG9wXG4gICAgfSxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBtYXhDb3VudDogbWF4Q291bnRcbiAgfSwgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaW5zdGFuY2U6IG1lc3NhZ2VJbnN0YW5jZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZUluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgY2FsbGJhY2soe1xuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB0eXBlVG9JY29uID0ge1xuICBpbmZvOiBfSW5mb0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBsb2FkaW5nOiBfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBkdXJhdGlvbiA9IGFyZ3MuZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGFyZ3MuZHVyYXRpb24gOiBkZWZhdWx0RHVyYXRpb247XG4gIHZhciBJY29uQ29tcG9uZW50ID0gdHlwZVRvSWNvblthcmdzLnR5cGVdO1xuICB2YXIgbWVzc2FnZUNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jdXN0b20tY29udGVudFwiKSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhcmdzLnR5cGUpLCBhcmdzLnR5cGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSwgX2NsYXNzTmFtZXMpKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lLFxuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWVzc2FnZUNsYXNzXG4gICAgfSwgYXJncy5pY29uIHx8IEljb25Db21wb25lbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBhcmdzLmNvbnRlbnQpKSxcbiAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm90aWNlKGFyZ3MpIHtcbiAgdmFyIHRhcmdldCA9IGFyZ3Mua2V5IHx8IGtleSsrO1xuICB2YXIgY2xvc2VQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJncy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3Mub25DbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIGluc3RhbmNlLm5vdGljZShnZXRSQ05vdGljZVByb3BzKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICBvbkNsb3NlOiBjYWxsYmFja1xuICAgICAgfSksIHByZWZpeENscykpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgfTtcblxuICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNBcmdzUHJvcHMoY29udGVudCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbnRlbnQpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiAhIWNvbnRlbnQuY29udGVudDtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjb25maWc6IHNldE1lc3NhZ2VDb25maWcsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgbWVzc2FnZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBhdHRhY2hUeXBlQXBpKG9yaWdpbmFsQXBpLCB0eXBlKSB7XG4gIG9yaWdpbmFsQXBpW3R5cGVdID0gZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uLCBvbkNsb3NlKSB7XG4gICAgaWYgKGlzQXJnc1Byb3BzKGNvbnRlbnQpKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxBcGkub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBjb250ZW50KSwge1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DbG9zZSA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdpbmFsQXBpLm9wZW4oe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgfSk7XG4gIH07XG59XG5cblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnbG9hZGluZyddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIGF0dGFjaFR5cGVBcGkoYXBpLCB0eXBlKTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmFwaS51c2VNZXNzYWdlID0gKDAsIF91c2VNZXNzYWdlW1wiZGVmYXVsdFwiXSkoZ2V0UkNOb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcyk7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hhbmdlQ29uZmlybUxvY2FsZSA9IGNoYW5nZUNvbmZpcm1Mb2NhbGU7XG5leHBvcnRzLmdldENvbmZpcm1Mb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBydW50aW1lTG9jYWxlKSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gIHJldHVybiBydW50aW1lTG9jYWxlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlVXNlTm90aWZpY2F0aW9uO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTm90aWZpY2F0aW9uKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VOb3RpZmljYXRpb24gPSBmdW5jdGlvbiB1c2VOb3RpZmljYXRpb24oKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ25vdGlmaWNhdGlvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICBnZXROb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBwcmVmaXhDbHM6IG1lcmdlZFByZWZpeENsc1xuICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSk7XG4gICAgICB9KTtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgaG9va0FwaVJlZi5jdXJyZW50W3R5cGVdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBbaG9va0FwaVJlZi5jdXJyZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIHtcbiAgICAgIGtleTogXCJob2xkZXJcIlxuICAgIH0sIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICBnZXRQcmVmaXhDbHMgPSBjb250ZXh0LmdldFByZWZpeENscztcbiAgICAgIHJldHVybiBob2xkZXI7XG4gICAgfSldO1xuICB9O1xuXG4gIHJldHVybiB1c2VOb3RpZmljYXRpb247XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9DbG9zZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VPdXRsaW5lZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0luZm9DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgbm90aWZpY2F0aW9uSW5zdGFuY2UgPSB7fTtcbnZhciBkZWZhdWx0RHVyYXRpb24gPSA0LjU7XG52YXIgZGVmYXVsdFRvcCA9IDI0O1xudmFyIGRlZmF1bHRCb3R0b20gPSAyNDtcbnZhciBkZWZhdWx0UHJlZml4Q2xzID0gJ2FudC1ub3RpZmljYXRpb24nO1xudmFyIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wUmlnaHQnO1xudmFyIGRlZmF1bHRHZXRDb250YWluZXI7XG52YXIgZGVmYXVsdENsb3NlSWNvbjtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0Tm90aWZpY2F0aW9uQ29uZmlnKG9wdGlvbnMpIHtcbiAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIHBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm90dG9tID0gb3B0aW9ucy5ib3R0b20sXG4gICAgICB0b3AgPSBvcHRpb25zLnRvcCxcbiAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uID0gb3B0aW9ucy5jbG9zZUljb24sXG4gICAgICBwcmVmaXhDbHMgPSBvcHRpb25zLnByZWZpeENscztcblxuICBpZiAocHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0UHJlZml4Q2xzID0gcHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIGlmIChwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5ydGwpIHtcbiAgICBkZWZhdWx0UGxhY2VtZW50ID0gJ3RvcExlZnQnO1xuICB9XG5cbiAgaWYgKGJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdEJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGlmICh0b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSB0b3A7XG4gIH1cblxuICBpZiAoZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0R2V0Q29udGFpbmVyID0gZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKGNsb3NlSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdENsb3NlSWNvbiA9IGNsb3NlSWNvbjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50KSB7XG4gIHZhciB0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRUb3A7XG4gIHZhciBib3R0b20gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGRlZmF1bHRCb3R0b207XG4gIHZhciBzdHlsZTtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGNhbGxiYWNrKSB7XG4gIHZhciBfYXJncyRwbGFjZW1lbnQgPSBhcmdzLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9hcmdzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gZGVmYXVsdFBsYWNlbWVudCA6IF9hcmdzJHBsYWNlbWVudCxcbiAgICAgIHRvcCA9IGFyZ3MudG9wLFxuICAgICAgYm90dG9tID0gYXJncy5ib3R0b20sXG4gICAgICBfYXJncyRnZXRDb250YWluZXIgPSBhcmdzLmdldENvbnRhaW5lcixcbiAgICAgIGdldENvbnRhaW5lciA9IF9hcmdzJGdldENvbnRhaW5lciA9PT0gdm9pZCAwID8gZGVmYXVsdEdldENvbnRhaW5lciA6IF9hcmdzJGdldENvbnRhaW5lcixcbiAgICAgIF9hcmdzJGNsb3NlSWNvbiA9IGFyZ3MuY2xvc2VJY29uLFxuICAgICAgY2xvc2VJY29uID0gX2FyZ3MkY2xvc2VJY29uID09PSB2b2lkIDAgPyBkZWZhdWx0Q2xvc2VJY29uIDogX2FyZ3MkY2xvc2VJY29uO1xuICB2YXIgb3V0ZXJQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscyB8fCBkZWZhdWx0UHJlZml4Q2xzO1xuICB2YXIgcHJlZml4Q2xzID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLW5vdGljZVwiKTtcbiAgdmFyIGNhY2hlS2V5ID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KTtcbiAgdmFyIGNhY2hlSW5zdGFuY2UgPSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07XG5cbiAgaWYgKGNhY2hlSW5zdGFuY2UpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoY2FjaGVJbnN0YW5jZSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNsb3NlSWNvblRvUmVuZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS14XCIpXG4gIH0sIGNsb3NlSWNvbiB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpXG4gIH0pKTtcbiAgdmFyIG5vdGlmaWNhdGlvbkNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSk7XG4gIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgX3JjTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5uZXdJbnN0YW5jZSh7XG4gICAgICBwcmVmaXhDbHM6IG91dGVyUHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lOiBub3RpZmljYXRpb25DbGFzcyxcbiAgICAgIHN0eWxlOiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQsIHRvcCwgYm90dG9tKSxcbiAgICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25Ub1JlbmRlclxuICAgIH0sIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgIHJlc29sdmUobm90aWZpY2F0aW9uKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBub3RpZmljYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHR5cGVUb0ljb24gPSB7XG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgaW5mbzogX0luZm9DaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIHdhcm5pbmc6IF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJncy5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdER1cmF0aW9uIDogYXJncy5kdXJhdGlvbjtcbiAgdmFyIGljb25Ob2RlID0gbnVsbDtcblxuICBpZiAoYXJncy5pY29uKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICB9LCBhcmdzLmljb24pO1xuICB9IGVsc2UgaWYgKGFyZ3MudHlwZSkge1xuICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZVRvSWNvblthcmdzLnR5cGVdIHx8IG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uLVwiKS5jb25jYXQoYXJncy50eXBlKVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGF1dG9NYXJnaW5UYWcgPSAhYXJncy5kZXNjcmlwdGlvbiAmJiBpY29uTm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2Utc2luZ2xlLWxpbmUtYXV0by1tYXJnaW5cIilcbiAgfSkgOiBudWxsO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaWNvbk5vZGUgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdpdGgtaWNvblwiKSA6ICcnLFxuICAgICAgcm9sZTogXCJhbGVydFwiXG4gICAgfSwgaWNvbk5vZGUsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXNzYWdlXCIpXG4gICAgfSwgYXV0b01hcmdpblRhZywgYXJncy5tZXNzYWdlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRlc2NyaXB0aW9uXCIpXG4gICAgfSwgYXJncy5kZXNjcmlwdGlvbiksIGFyZ3MuYnRuID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idG5cIilcbiAgICB9LCBhcmdzLmJ0bikgOiBudWxsKSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlLFxuICAgIG9uQ2xpY2s6IGFyZ3Mub25DbGljayxcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIHN0eWxlOiBhcmdzLnN0eWxlIHx8IHt9LFxuICAgIGNsYXNzTmFtZTogYXJncy5jbGFzc05hbWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm90aWNlKGFyZ3MpIHtcbiAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpKTtcbiAgfSk7XG59XG5cbnZhciBhcGkgPSB7XG4gIG9wZW46IG5vdGljZSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGtleSkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLnJlbW92ZU5vdGljZShrZXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNvbmZpZzogc2V0Tm90aWZpY2F0aW9uQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBkZWxldGUgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldOyAvLyBsZ3RtW2pzL21pc3NpbmctYXdhaXRdXG4gICAgfSk7XG4gIH1cbn07XG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBhcGlbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBhcGkub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmFwaS51c2VOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKTtcbnZhciBfZGVmYXVsdCA9IGFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQ2hlY2thYmxlVGFnID0gZnVuY3Rpb24gQ2hlY2thYmxlVGFnKHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgdmFyIGNoZWNrZWQgPSBwcm9wcy5jaGVja2VkLFxuICAgICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljaztcblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoIWNoZWNrZWQpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoZWNrZWRcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3RhZycsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrYWJsZVwiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2hlY2thYmxlLWNoZWNrZWRcIiksIGNoZWNrZWQpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIGRlbGV0ZSByZXN0UHJvcHMub25DaGFuZ2U7IC8vIFR5cGVTY3JpcHQgY2Fubm90IGNoZWNrIGRlbGV0ZSBub3cuXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJlc3RQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrXG4gIH0pKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IENoZWNrYWJsZVRhZztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9DaGVja2FibGVUYWcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NoZWNrYWJsZVRhZ1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoXCIuLi9fdXRpbC9jb2xvcnNcIik7XG5cbnZhciBfd2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhdmVcIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFByZXNldENvbG9yUmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQoX2NvbG9ycy5QcmVzZXRDb2xvclR5cGVzLmpvaW4oJ3wnKSwgXCIpKC1pbnZlcnNlKT8kXCIpKTtcbnZhciBQcmVzZXRTdGF0dXNDb2xvclJlZ2V4ID0gbmV3IFJlZ0V4cChcIl4oXCIuY29uY2F0KF9jb2xvcnMuUHJlc2V0U3RhdHVzQ29sb3JUeXBlcy5qb2luKCd8JyksIFwiKSRcIikpO1xuXG52YXIgSW50ZXJuYWxUYWcgPSBmdW5jdGlvbiBJbnRlcm5hbFRhZyhfYSwgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICBpY29uID0gX2EuaWNvbixcbiAgICAgIGNvbG9yID0gX2EuY29sb3IsXG4gICAgICBvbkNsb3NlID0gX2Eub25DbG9zZSxcbiAgICAgIGNsb3NlSWNvbiA9IF9hLmNsb3NlSWNvbixcbiAgICAgIF9hJGNsb3NhYmxlID0gX2EuY2xvc2FibGUsXG4gICAgICBjbG9zYWJsZSA9IF9hJGNsb3NhYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hJGNsb3NhYmxlLFxuICAgICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpY29uXCIsIFwiY29sb3JcIiwgXCJvbkNsb3NlXCIsIFwiY2xvc2VJY29uXCIsIFwiY2xvc2FibGVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh0cnVlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHZpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ3Zpc2libGUnIGluIHByb3BzKSB7XG4gICAgICBzZXRWaXNpYmxlKHByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnZpc2libGVdKTtcblxuICB2YXIgaXNQcmVzZXRDb2xvciA9IGZ1bmN0aW9uIGlzUHJlc2V0Q29sb3IoKSB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBQcmVzZXRDb2xvclJlZ2V4LnRlc3QoY29sb3IpIHx8IFByZXNldFN0YXR1c0NvbG9yUmVnZXgudGVzdChjb2xvcik7XG4gIH07XG5cbiAgdmFyIHRhZ1N0eWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yICYmICFpc1ByZXNldENvbG9yKCkgPyBjb2xvciA6IHVuZGVmaW5lZFxuICB9LCBzdHlsZSk7XG4gIHZhciBwcmVzZXRDb2xvciA9IGlzUHJlc2V0Q29sb3IoKTtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndGFnJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIHRhZ0NsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChjb2xvciksIHByZXNldENvbG9yKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYXMtY29sb3JcIiksIGNvbG9yICYmICFwcmVzZXRDb2xvciksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGlkZGVuXCIpLCAhdmlzaWJsZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuXG4gIHZhciBoYW5kbGVDbG9zZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2VDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cblxuICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpKSB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlbmRlckNsb3NlSWNvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlSWNvbigpIHtcbiAgICBpZiAoY2xvc2FibGUpIHtcbiAgICAgIHJldHVybiBjbG9zZUljb24gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbG9zZUNsaWNrXG4gICAgICB9LCBjbG9zZUljb24pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbG9zZUNsaWNrXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgaXNOZWVkV2F2ZSA9ICdvbkNsaWNrJyBpbiBwcm9wcyB8fCBjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlID09PSAnYSc7XG4gIHZhciB0YWdQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHByb3BzLCBbJ3Zpc2libGUnXSk7XG4gIHZhciBpY29uTm9kZSA9IGljb24gfHwgbnVsbDtcbiAgdmFyIGtpZHMgPSBpY29uTm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpY29uTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSkgOiBjaGlsZHJlbjtcbiAgdmFyIHRhZ05vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0YWdQcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogdGFnQ2xhc3NOYW1lLFxuICAgIHN0eWxlOiB0YWdTdHlsZVxuICB9KSwga2lkcywgcmVuZGVyQ2xvc2VJY29uKCkpO1xuICByZXR1cm4gaXNOZWVkV2F2ZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF93YXZlW1wiZGVmYXVsdFwiXSwgbnVsbCwgdGFnTm9kZSkgOiB0YWdOb2RlO1xufTtcblxudmFyIFRhZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsVGFnKTtcblRhZy5kaXNwbGF5TmFtZSA9ICdUYWcnO1xuVGFnLkNoZWNrYWJsZVRhZyA9IF9DaGVja2FibGVUYWdbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gVGFnO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGF0ZVBpY2tlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2RhdGUtcGlja2VyXCIpKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgSW50ZXJuYWxUaW1lUGlja2VyID0gX2RhdGVQaWNrZXJbXCJkZWZhdWx0XCJdLlRpbWVQaWNrZXIsXG4gICAgSW50ZXJuYWxSYW5nZVBpY2tlciA9IF9kYXRlUGlja2VyW1wiZGVmYXVsdFwiXS5SYW5nZVBpY2tlcjtcbnZhciBSYW5nZVBpY2tlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcm5hbFJhbmdlUGlja2VyLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHByb3BzLCB7XG4gICAgcGlja2VyOiBcInRpbWVcIixcbiAgICBtb2RlOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG52YXIgVGltZVBpY2tlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gIHZhciBhZGRvbiA9IF9hLmFkZG9uLFxuICAgICAgcmVuZGVyRXh0cmFGb290ZXIgPSBfYS5yZW5kZXJFeHRyYUZvb3RlcixcbiAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX2EucG9wdXBDbGFzc05hbWUsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImFkZG9uXCIsIFwicmVuZGVyRXh0cmFGb290ZXJcIiwgXCJwb3B1cENsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGludGVybmFsUmVuZGVyRXh0cmFGb290ZXIgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgIHJldHVybiByZW5kZXJFeHRyYUZvb3RlcjtcbiAgICB9XG5cbiAgICBpZiAoYWRkb24pIHtcbiAgICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKGZhbHNlLCAnVGltZVBpY2tlcicsICdgYWRkb25gIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYHJlbmRlckV4dHJhRm9vdGVyYCBpbnN0ZWFkLicpO1xuICAgICAgcmV0dXJuIGFkZG9uO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFthZGRvbiwgcmVuZGVyRXh0cmFGb290ZXJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEludGVybmFsVGltZVBpY2tlciwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN0UHJvcHMsIHtcbiAgICBkcm9wZG93bkNsYXNzTmFtZTogcG9wdXBDbGFzc05hbWUsXG4gICAgbW9kZTogdW5kZWZpbmVkLFxuICAgIHJlZjogcmVmLFxuICAgIHJlbmRlckV4dHJhRm9vdGVyOiBpbnRlcm5hbFJlbmRlckV4dHJhRm9vdGVyXG4gIH0pKTtcbn0pO1xuVGltZVBpY2tlci5kaXNwbGF5TmFtZSA9ICdUaW1lUGlja2VyJztcblRpbWVQaWNrZXIuUmFuZ2VQaWNrZXIgPSBSYW5nZVBpY2tlcjtcbnZhciBfZGVmYXVsdCA9IFRpbWVQaWNrZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgbG9jYWxlID0ge1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCB0aW1lJyxcbiAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCB0aW1lJywgJ0VuZCB0aW1lJ11cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KSh0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMi5kZWZhdWx0KSh0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxudmFyIE5vdGljZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMi5kZWZhdWx0KShOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTm90aWNlKTtcblxuICBmdW5jdGlvbiBOb3RpY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazIuZGVmYXVsdCkodGhpcywgTm90aWNlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuXG4gICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG5cbiAgICAgIHZhciBvbkNsb3NlID0gX3RoaXMucHJvcHMub25DbG9zZTtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGFydENsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZHVyYXRpb24pIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LCBfdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY2xvc2VUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMi5kZWZhdWx0KShOb3RpY2UsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBwcmV2UHJvcHMuZHVyYXRpb24gfHwgdGhpcy5wcm9wcy51cGRhdGUpIHtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3RhcnRDbG9zZVRpbWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3RhcnRDbG9zZVRpbWVyKCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsb3NhYmxlID0gX3RoaXMkcHJvcHMuY2xvc2FibGUsXG4gICAgICAgICAgY2xvc2VJY29uID0gX3RoaXMkcHJvcHMuY2xvc2VJY29uLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBob2xkZXIgPSBfdGhpcyRwcm9wcy5ob2xkZXI7XG4gICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vdGljZVwiKTtcbiAgICAgIHZhciBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGlmIChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IF90aGlzMi5wcm9wc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgdmFyIG5vZGUgPSBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjb21wb25lbnRDbGFzcywgY2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NhYmxlXCIpLCBjbG9zYWJsZSkpLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5jbGVhckNsb3NlVGltZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5zdGFydENsb3NlVGltZXIsXG4gICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICAgIH0sIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyksIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jb250ZW50XCIpXG4gICAgICB9LCBjaGlsZHJlbiksIGNsb3NhYmxlID8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgb25DbGljazogdGhpcy5jbG9zZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2VcIilcbiAgICAgIH0sIGNsb3NlSWNvbiB8fCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NlLXhcIilcbiAgICAgIH0pKSA6IG51bGwpO1xuXG4gICAgICBpZiAoaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3REb20uZGVmYXVsdC5jcmVhdGVQb3J0YWwobm9kZSwgaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOb3RpY2U7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb3RpY2U7XG5Ob3RpY2UuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG4gIGR1cmF0aW9uOiAxLjUsXG4gIHN0eWxlOiB7XG4gICAgcmlnaHQ6ICc1MCUnXG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlTm90aWZpY2F0aW9uO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Ob3RpY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vdGljZVwiKSk7XG5cbmZ1bmN0aW9uIHVzZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JbnN0YW5jZSkge1xuICB2YXIgY3JlYXRlZFJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKFtdKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBlbGVtZW50cyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRFbGVtZW50cyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgZnVuY3Rpb24gbm90aWZ5KG5vdGljZVByb3BzKSB7XG4gICAgbm90aWZpY2F0aW9uSW5zdGFuY2UuYWRkKG5vdGljZVByb3BzLCBmdW5jdGlvbiAoZGl2LCBwcm9wcykge1xuICAgICAgdmFyIGtleSA9IHByb3BzLmtleTtcblxuICAgICAgaWYgKGRpdiAmJiAhY3JlYXRlZFJlZi5jdXJyZW50W2tleV0pIHtcbiAgICAgICAgdmFyIG5vdGljZUVsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX05vdGljZS5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIGhvbGRlcjogZGl2XG4gICAgICAgIH0pKTtcbiAgICAgICAgY3JlYXRlZFJlZi5jdXJyZW50W2tleV0gPSBub3RpY2VFbGU7XG4gICAgICAgIHNldEVsZW1lbnRzKGZ1bmN0aW9uIChvcmlnaW5FbGVtZW50cykge1xuICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTIuZGVmYXVsdCkob3JpZ2luRWxlbWVudHMpLCBbbm90aWNlRWxlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFtub3RpZnksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGVsZW1lbnRzKV07XG59IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR28gdG8nLFxuICBqdW1wX3RvX2NvbmZpcm06ICdjb25maXJtJyxcbiAgcGFnZTogJycsXG4gIC8vIFBhZ2luYXRpb24uanN4XG4gIHByZXZfcGFnZTogJ1ByZXZpb3VzIFBhZ2UnLFxuICBuZXh0X3BhZ2U6ICdOZXh0IFBhZ2UnLFxuICBwcmV2XzU6ICdQcmV2aW91cyA1IFBhZ2VzJyxcbiAgbmV4dF81OiAnTmV4dCA1IFBhZ2VzJyxcbiAgcHJldl8zOiAnUHJldmlvdXMgMyBQYWdlcycsXG4gIG5leHRfMzogJ05leHQgMyBQYWdlcydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbW9tZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcInJjLXV0aWwvbGliL3dhcm5pbmdcIik7XG5cbnZhciBnZW5lcmF0ZUNvbmZpZyA9IHtcbiAgLy8gZ2V0XG4gIGdldE5vdzogZnVuY3Rpb24gZ2V0Tm93KCkge1xuICAgIHJldHVybiAoMCwgX21vbWVudC5kZWZhdWx0KSgpO1xuICB9LFxuICBnZXRXZWVrRGF5OiBmdW5jdGlvbiBnZXRXZWVrRGF5KGRhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCkubG9jYWxlKCdlbl9VUycpO1xuICAgIHJldHVybiBjbG9uZS53ZWVrZGF5KCkgKyBjbG9uZS5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKTtcbiAgfSxcbiAgZ2V0WWVhcjogZnVuY3Rpb24gZ2V0WWVhcihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUueWVhcigpO1xuICB9LFxuICBnZXRNb250aDogZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLm1vbnRoKCk7XG4gIH0sXG4gIGdldERhdGU6IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmRhdGUoKTtcbiAgfSxcbiAgZ2V0SG91cjogZnVuY3Rpb24gZ2V0SG91cihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuaG91cigpO1xuICB9LFxuICBnZXRNaW51dGU6IGZ1bmN0aW9uIGdldE1pbnV0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUubWludXRlKCk7XG4gIH0sXG4gIGdldFNlY29uZDogZnVuY3Rpb24gZ2V0U2Vjb25kKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5zZWNvbmQoKTtcbiAgfSxcbiAgLy8gc2V0XG4gIGFkZFllYXI6IGZ1bmN0aW9uIGFkZFllYXIoZGF0ZSwgZGlmZikge1xuICAgIHZhciBjbG9uZSA9IGRhdGUuY2xvbmUoKTtcbiAgICByZXR1cm4gY2xvbmUuYWRkKGRpZmYsICd5ZWFyJyk7XG4gIH0sXG4gIGFkZE1vbnRoOiBmdW5jdGlvbiBhZGRNb250aChkYXRlLCBkaWZmKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5hZGQoZGlmZiwgJ21vbnRoJyk7XG4gIH0sXG4gIGFkZERhdGU6IGZ1bmN0aW9uIGFkZERhdGUoZGF0ZSwgZGlmZikge1xuICAgIHZhciBjbG9uZSA9IGRhdGUuY2xvbmUoKTtcbiAgICByZXR1cm4gY2xvbmUuYWRkKGRpZmYsICdkYXknKTtcbiAgfSxcbiAgc2V0WWVhcjogZnVuY3Rpb24gc2V0WWVhcihkYXRlLCB5ZWFyKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS55ZWFyKHllYXIpO1xuICB9LFxuICBzZXRNb250aDogZnVuY3Rpb24gc2V0TW9udGgoZGF0ZSwgbW9udGgpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLm1vbnRoKG1vbnRoKTtcbiAgfSxcbiAgc2V0RGF0ZTogZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCBudW0pIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLmRhdGUobnVtKTtcbiAgfSxcbiAgc2V0SG91cjogZnVuY3Rpb24gc2V0SG91cihkYXRlLCBob3VyKSB7XG4gICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgIHJldHVybiBjbG9uZS5ob3VyKGhvdXIpO1xuICB9LFxuICBzZXRNaW51dGU6IGZ1bmN0aW9uIHNldE1pbnV0ZShkYXRlLCBtaW51dGUpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLm1pbnV0ZShtaW51dGUpO1xuICB9LFxuICBzZXRTZWNvbmQ6IGZ1bmN0aW9uIHNldFNlY29uZChkYXRlLCBzZWNvbmQpIHtcbiAgICB2YXIgY2xvbmUgPSBkYXRlLmNsb25lKCk7XG4gICAgcmV0dXJuIGNsb25lLnNlY29uZChzZWNvbmQpO1xuICB9LFxuICAvLyBDb21wYXJlXG4gIGlzQWZ0ZXI6IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIGRhdGUxLmlzQWZ0ZXIoZGF0ZTIpO1xuICB9LFxuICBpc1ZhbGlkYXRlOiBmdW5jdGlvbiBpc1ZhbGlkYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5pc1ZhbGlkKCk7XG4gIH0sXG4gIGxvY2FsZToge1xuICAgIGdldFdlZWtGaXJzdERheTogZnVuY3Rpb24gZ2V0V2Vla0ZpcnN0RGF5KGxvY2FsZSkge1xuICAgICAgdmFyIGRhdGUgPSAoMCwgX21vbWVudC5kZWZhdWx0KSgpLmxvY2FsZShsb2NhbGUpO1xuICAgICAgcmV0dXJuIGRhdGUubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgfSxcbiAgICBnZXRXZWVrOiBmdW5jdGlvbiBnZXRXZWVrKGxvY2FsZSwgZGF0ZSkge1xuICAgICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGNsb25lLmxvY2FsZShsb2NhbGUpO1xuICAgICAgcmV0dXJuIHJlc3VsdC53ZWVrKCk7XG4gICAgfSxcbiAgICBnZXRTaG9ydFdlZWtEYXlzOiBmdW5jdGlvbiBnZXRTaG9ydFdlZWtEYXlzKGxvY2FsZSkge1xuICAgICAgdmFyIGRhdGUgPSAoMCwgX21vbWVudC5kZWZhdWx0KSgpLmxvY2FsZShsb2NhbGUpO1xuICAgICAgcmV0dXJuIGRhdGUubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKCk7XG4gICAgfSxcbiAgICBnZXRTaG9ydE1vbnRoczogZnVuY3Rpb24gZ2V0U2hvcnRNb250aHMobG9jYWxlKSB7XG4gICAgICB2YXIgZGF0ZSA9ICgwLCBfbW9tZW50LmRlZmF1bHQpKCkubG9jYWxlKGxvY2FsZSk7XG4gICAgICByZXR1cm4gZGF0ZS5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQoKTtcbiAgICB9LFxuICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGxvY2FsZSwgZGF0ZSwgX2Zvcm1hdCkge1xuICAgICAgdmFyIGNsb25lID0gZGF0ZS5jbG9uZSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGNsb25lLmxvY2FsZShsb2NhbGUpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5mb3JtYXQoX2Zvcm1hdCk7XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UobG9jYWxlLCB0ZXh0LCBmb3JtYXRzKSB7XG4gICAgICB2YXIgZmFsbGJhY2tGb3JtYXRMaXN0ID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1tpXTtcbiAgICAgICAgdmFyIGZvcm1hdFRleHQgPSB0ZXh0O1xuXG4gICAgICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoJ3dvJykgfHwgZm9ybWF0LmluY2x1ZGVzKCdXbycpKSB7XG4gICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL3dvL2csICd3JykucmVwbGFjZSgvV28vZywgJ1cnKTtcbiAgICAgICAgICB2YXIgbWF0Y2hGb3JtYXQgPSBmb3JtYXQubWF0Y2goL1stWXlNbURkSGhTc1d3R2ddKy9nKTtcbiAgICAgICAgICB2YXIgbWF0Y2hUZXh0ID0gZm9ybWF0VGV4dC5tYXRjaCgvWy1cXGRdKy9nKTtcblxuICAgICAgICAgIGlmIChtYXRjaEZvcm1hdCAmJiBtYXRjaFRleHQpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IG1hdGNoRm9ybWF0LmpvaW4oJycpO1xuICAgICAgICAgICAgZm9ybWF0VGV4dCA9IG1hdGNoVGV4dC5qb2luKCcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFsbGJhY2tGb3JtYXRMaXN0LnB1c2goZm9ybWF0LnJlcGxhY2UoL28vZywgJycpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0ZSA9ICgwLCBfbW9tZW50LmRlZmF1bHQpKGZvcm1hdFRleHQsIGZvcm1hdCwgbG9jYWxlLCB0cnVlKTtcblxuICAgICAgICBpZiAoZGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBGYWxsYmFjayB0byBmdXp6eSBtYXRjaGluZywgdGhpcyBzaG91bGQgYWx3YXlzIG5vdCByZWFjaCBtYXRjaCBvciBuZWVkIGZpcmUgYSBpc3N1ZVxuXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmYWxsYmFja0Zvcm1hdExpc3QubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBfZGF0ZSA9ICgwLCBfbW9tZW50LmRlZmF1bHQpKHRleHQsIGZhbGxiYWNrRm9ybWF0TGlzdFtfaV0sIGxvY2FsZSwgZmFsc2UpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICAgICAgaWYgKF9kYXRlLmlzVmFsaWQoKSkge1xuICAgICAgICAgICgwLCBfd2FybmluZy5ub3RlT25jZSkoZmFsc2UsICdOb3QgbWF0Y2ggYW55IGZvcm1hdCBzdHJpY3RseSBhbmQgZmFsbGJhY2sgdG8gZnV6enkgbWF0Y2guIFBsZWFzZSBoZWxwIHRvIGZpcmUgYSBpc3N1ZSBhYm91dCB0aGlzLicpO1xuICAgICAgICAgIHJldHVybiBfZGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBnZW5lcmF0ZUNvbmZpZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgbG9jYWxlOiAnZW5fVVMnLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9