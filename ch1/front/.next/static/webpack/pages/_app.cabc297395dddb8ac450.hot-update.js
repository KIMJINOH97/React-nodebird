webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN, LOG_OUT, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  // 초기 값 , 리액트의 state라 보면 됨
  isLoggedIn: true,
  user: {
    nickname: null
  }
};
var LOG_IN = 'LOG_IN'; // 액션의 이름

var LOG_OUT = 'LOG_OUT'; // 아래는 set State라 보면됨. Action과 reducer로 분리됨.

var loginAction = {
  type: LOG_IN
};
var logoutAction = {
  type: LOG_OUT
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // 다음 state들 할 행동
          isLoggedIn: true,
          user: action.data
        });
      }

    case LOG_OUT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
          isLoggedIn: false,
          user: null
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // setState((prevState)=>{ 옛날 스테이트와 같아졌는지 확인하기 때문에 새로 생성 해줘야함.
//     return {
//         field: { ...prevState.field},
//     }
// })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidXNlciIsIm5pY2tuYW1lIiwiTE9HX0lOIiwiTE9HX09VVCIsImxvZ2luQWN0aW9uIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCO0FBQ0FDLFlBQVUsRUFBRSxJQUZZO0FBR3hCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFO0FBRFI7QUFIa0IsQ0FBckI7QUFRQSxJQUFNQyxNQUFNLEdBQUcsUUFBZixDLENBQXlCOztBQUN6QixJQUFNQyxPQUFPLEdBQUcsU0FBaEIsQyxDQUVQOztBQUNPLElBQU1DLFdBQVcsR0FBRztBQUN2QkMsTUFBSSxFQUFFSDtBQURpQixDQUFwQjtBQUlBLElBQU1JLFlBQVksR0FBRztBQUN4QkQsTUFBSSxFQUFFRjtBQURrQixDQUFyQjs7QUFJUCxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJWLFlBQXlCO0FBQUEsTUFBWFcsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0gsTUFBTDtBQUFhO0FBQ1QsK0NBQ09NLEtBRFA7QUFDYztBQUNWVCxvQkFBVSxFQUFFLElBRmhCO0FBR0lDLGNBQUksRUFBRVMsTUFBTSxDQUFDQztBQUhqQjtBQUtIOztBQUNELFNBQUtQLE9BQUw7QUFBYztBQUNWLCtDQUNPSyxLQURQO0FBQ2M7QUFDVlQsb0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxjQUFJLEVBQUU7QUFIVjtBQUtIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT1EsS0FEUDtBQUdIO0FBbkJMO0FBcUJILENBdEJEOztBQXdCZUQsc0VBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYWJjMjk3Mzk1ZGRkYjhhYzQ1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIC8vIOy0iOq4sCDqsJIgLCDrpqzslaHtirjsnZggc3RhdGXrnbwg67O066m0IOuQqFxyXG4gICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOID0gJ0xPR19JTic7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcblxyXG4vLyDslYTrnpjripQgc2V0IFN0YXRl6528IOuztOuptOuQqC4gQWN0aW9u6rO8IHJlZHVjZXLroZwg67aE66as65CoLlxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSB7XHJcbiAgICB0eXBlOiBMT0dfSU4sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g64uk7J2MIHN0YXRl65OkIO2VoCDtlonrj5lcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g7Iqk7ZSE66CI65OcIOusuOuylTog7IOI66Gc7Jq0IOqwneyytOuCmCDrsLDsl7TsnYQg7IOd7ISx7ZWY64qUIOusuOuylSDrp6Trsogg64ukIOyTsOqzoCDsnojsnYxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuLy8gc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pnsg7Jib64KgIOyKpO2FjOydtO2KuOyZgCDqsJnslYTsoYzripTsp4Ag7ZmV7J247ZWY6riwIOuVjOusuOyXkCDsg4jroZwg7IOd7ISxIO2VtOykmOyVvO2VqC5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgZmllbGQ6IHsgLi4ucHJldlN0YXRlLmZpZWxkfSxcclxuLy8gICAgIH1cclxuLy8gfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==