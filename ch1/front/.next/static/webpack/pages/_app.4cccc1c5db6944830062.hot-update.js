webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const dummy = {
//     // 이 데이터를 통해 front end 는 back end가 완성되지 않아도 코드를 확인 할 수 있다.
//     nickname: '제로초',
//     Post: [],
//     Following: [],
//     Followers: [],
//     isLoggedIn: false,
// };

var UserProfile = function UserProfile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  console.log(user);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), user.Post.length), __jsx("div", {
      key: "following",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), user.Following.length), __jsx("div", {
      key: "follower",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC6B0", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }), user.Followers.length)],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 32
      }
    }, user.nickname[0]),
    title: user.nickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
};

_s(UserProfile, "HA6wZhGeXNR9tzJ3aDGGsGCdOyI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIlBvc3QiLCJsZW5ndGgiLCJGb2xsb3dpbmciLCJGb2xsb3dlcnMiLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEscUJBQ0xDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRE47QUFBQSxNQUNkQSxJQURjLGdCQUNkQSxJQURjOztBQUV0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxTQUNJLE1BQUMseUNBQUQ7QUFDSSxXQUFPLEVBQUUsQ0FDTDtBQUFLLFNBQUcsRUFBQyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0tBLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxNQUhmLENBREssRUFNTDtBQUFLLFNBQUcsRUFBQyxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0tKLElBQUksQ0FBQ0ssU0FBTCxDQUFlRCxNQUhwQixDQU5LLEVBV0w7QUFBSyxTQUFHLEVBQUMsVUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQUdLSixJQUFJLENBQUNNLFNBQUwsQ0FBZUYsTUFIcEIsQ0FYSyxDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FtQkksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNKLElBQUksQ0FBQ08sUUFBTCxDQUFjLENBQWQsQ0FBVCxDQUFuQjtBQUF3RCxTQUFLLEVBQUVQLElBQUksQ0FBQ08sUUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURKO0FBdUJILENBMUJEOztHQUFNVixXO1VBQ2VDLHVEOzs7S0FEZkQsVztBQTRCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40Y2NjYzFjNWRiNjk0NDgzMDA2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBjb25zdCBkdW1teSA9IHtcclxuLy8gICAgIC8vIOydtCDrjbDsnbTthLDrpbwg7Ya17ZW0IGZyb250IGVuZCDripQgYmFjayBlbmTqsIAg7JmE7ISx65CY7KeAIOyViuyVhOuPhCDsvZTrk5zrpbwg7ZmV7J24IO2VoCDsiJgg7J6I64ukLlxyXG4vLyAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4vLyAgICAgUG9zdDogW10sXHJcbi8vICAgICBGb2xsb3dpbmc6IFtdLFxyXG4vLyAgICAgRm9sbG93ZXJzOiBbXSxcclxuLy8gICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuUG9zdC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLkZvbGxvd2luZy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg7YyU66Gc7JqwXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuRm9sbG93ZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGEgYXZhdGFyPXs8QXZhdGFyPnt1c2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn0gdGl0bGU9e3VzZXIubmlja25hbWV9IC8+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9