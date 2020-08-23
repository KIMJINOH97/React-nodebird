webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN, LOG_OUT, SIGN_UP, loginAction, logoutAction, signUpAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpAction", function() { return signUpAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  siginUpData: []
};
var initialState = {
  // 초기 값 , 리액트의 state라 보면 됨
  isLoggedIn: false,
  user: {
    nickname: null
  }
};
var LOG_IN = 'LOG_IN'; // 액션의 이름

var LOG_OUT = 'LOG_OUT';
var SIGN_UP = 'SIGN_UP'; // 아래는 set State라 보면됨. Action과 reducer로 분리됨.

var loginAction = {
  type: LOG_IN
};
var logoutAction = {
  type: LOG_OUT
};
var signUpAction = function signUpAction(data) {
  // 동적 데이터는 함수?
  return {
    type: SIGN_UP,
    data: data
  };
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
          user: dummyUser
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

    case SIGN_UP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signUpData: action.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwic2lnaW5VcERhdGEiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidXNlciIsIkxPR19JTiIsIkxPR19PVVQiLCJTSUdOX1VQIiwibG9naW5BY3Rpb24iLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwic2lnblVwQWN0aW9uIiwiZGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNpZ25VcERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEtBREk7QUFFZEMsTUFBSSxFQUFFLEVBRlE7QUFHZEMsWUFBVSxFQUFFLEVBSEU7QUFJZEMsV0FBUyxFQUFFLEVBSkc7QUFLZEMsYUFBVyxFQUFFO0FBTEMsQ0FBbEI7QUFRTyxJQUFNQyxZQUFZLEdBQUc7QUFDeEI7QUFDQUMsWUFBVSxFQUFFLEtBRlk7QUFHeEJDLE1BQUksRUFBRTtBQUNGUCxZQUFRLEVBQUU7QUFEUjtBQUhrQixDQUFyQjtBQVFBLElBQU1RLE1BQU0sR0FBRyxRQUFmLEMsQ0FBeUI7O0FBQ3pCLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFoQixDLENBRVA7O0FBQ08sSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCQyxNQUFJLEVBQUVKO0FBRGlCLENBQXBCO0FBSUEsSUFBTUssWUFBWSxHQUFHO0FBQ3hCRCxNQUFJLEVBQUVIO0FBRGtCLENBQXJCO0FBSUEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDO0FBQ0EsU0FBTztBQUNISCxRQUFJLEVBQUVGLE9BREg7QUFFSEssUUFBSSxFQUFFQTtBQUZILEdBQVA7QUFJSCxDQU5NOztBQVFQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7QUFBQSxNQUFYYSxNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNOLElBQWY7QUFDSSxTQUFLSixNQUFMO0FBQWE7QUFDVCwrQ0FDT1MsS0FEUDtBQUNjO0FBQ1ZYLG9CQUFVLEVBQUUsSUFGaEI7QUFHSUMsY0FBSSxFQUFFUjtBQUhWO0FBS0g7O0FBQ0QsU0FBS1UsT0FBTDtBQUFjO0FBQ1YsK0NBQ09RLEtBRFA7QUFDYztBQUNWWCxvQkFBVSxFQUFFLEtBRmhCO0FBR0lDLGNBQUksRUFBRTtBQUhWO0FBS0g7O0FBQ0QsU0FBS0csT0FBTDtBQUFjO0FBQ1YsK0NBQ09PLEtBRFA7QUFFSUUsb0JBQVUsRUFBRUQsTUFBTSxDQUFDSDtBQUZ2QjtBQUlIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT0UsS0FEUDtBQUdIO0FBekJMO0FBMkJILENBNUJEOztBQThCZUQsc0VBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGIxOTY2NWFjM2VmMmJkOTNmZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIFBvc3Q6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6IFtdLFxyXG4gICAgc2lnaW5VcERhdGE6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIC8vIOy0iOq4sCDqsJIgLCDrpqzslaHtirjsnZggc3RhdGXrnbwg67O066m0IOuQqFxyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTiA9ICdMT0dfSU4nOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUCA9ICdTSUdOX1VQJztcclxuXHJcbi8vIOyVhOuemOuKlCBzZXQgU3RhdGXrnbwg67O066m065CoLiBBY3Rpb27qs7wgcmVkdWNlcuuhnCDrtoTrpqzrkKguXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IHtcclxuICAgIHR5cGU6IExPR19JTixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSB7XHJcbiAgICB0eXBlOiBMT0dfT1VULFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICAvLyDrj5nsoIEg642w7J207YSw64qUIO2VqOyImD9cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUCxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g64uk7J2MIHN0YXRl65OkIO2VoCDtlonrj5lcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkdW1teVVzZXIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOyKpO2UhOugiOuTnCDrrLjrspU6IOyDiOuhnOyatCDqsJ3ssrTrgpgg67Cw7Je07J2EIOyDneyEse2VmOuKlCDrrLjrspUg66ek67KIIOuLpCDsk7Dqs6Ag7J6I7J2MXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuLy8gc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pnsg7Jib64KgIOyKpO2FjOydtO2KuOyZgCDqsJnslYTsoYzripTsp4Ag7ZmV7J247ZWY6riwIOuVjOusuOyXkCDsg4jroZwg7IOd7ISxIO2VtOykmOyVvO2VqC5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgZmllbGQ6IHsgLi4ucHJldlN0YXRlLmZpZWxkfSxcclxuLy8gICAgIH1cclxuLy8gfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==