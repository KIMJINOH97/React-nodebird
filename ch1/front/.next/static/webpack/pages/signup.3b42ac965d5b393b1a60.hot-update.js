webpackHotUpdate_N_E("pages/signup",{

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
  siginUpData: {
    id: '',
    nick: '',
    password: ''
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwic2lnaW5VcERhdGEiLCJpZCIsIm5pY2siLCJwYXNzd29yZCIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiTE9HX0lOIiwiTE9HX09VVCIsIlNJR05fVVAiLCJsb2dpbkFjdGlvbiIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJzaWduVXBBY3Rpb24iLCJkYXRhIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2lnblVwRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRztBQUNkQyxVQUFRLEVBQUUsS0FESTtBQUVkQyxNQUFJLEVBQUUsRUFGUTtBQUdkQyxZQUFVLEVBQUUsRUFIRTtBQUlkQyxXQUFTLEVBQUUsRUFKRztBQUtkQyxhQUFXLEVBQUU7QUFDVEMsTUFBRSxFQUFFLEVBREs7QUFFVEMsUUFBSSxFQUFFLEVBRkc7QUFHVEMsWUFBUSxFQUFFO0FBSEQ7QUFMQyxDQUFsQjtBQVlPLElBQU1DLFlBQVksR0FBRztBQUN4QjtBQUNBQyxZQUFVLEVBQUUsS0FGWTtBQUd4QkMsTUFBSSxFQUFFO0FBQ0ZWLFlBQVEsRUFBRTtBQURSO0FBSGtCLENBQXJCO0FBUUEsSUFBTVcsTUFBTSxHQUFHLFFBQWYsQyxDQUF5Qjs7QUFDekIsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCLEMsQ0FFUDs7QUFDTyxJQUFNQyxXQUFXLEdBQUc7QUFDdkJDLE1BQUksRUFBRUo7QUFEaUIsQ0FBcEI7QUFJQSxJQUFNSyxZQUFZLEdBQUc7QUFDeEJELE1BQUksRUFBRUg7QUFEa0IsQ0FBckI7QUFJQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDbEM7QUFDQSxTQUFPO0FBQ0hILFFBQUksRUFBRUYsT0FESDtBQUVISyxRQUFJLEVBQUVBO0FBRkgsR0FBUDtBQUlILENBTk07O0FBUVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCWixZQUF5QjtBQUFBLE1BQVhhLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNJLFNBQUtKLE1BQUw7QUFBYTtBQUNULCtDQUNPUyxLQURQO0FBQ2M7QUFDVlgsb0JBQVUsRUFBRSxJQUZoQjtBQUdJQyxjQUFJLEVBQUVYO0FBSFY7QUFLSDs7QUFDRCxTQUFLYSxPQUFMO0FBQWM7QUFDViwrQ0FDT1EsS0FEUDtBQUNjO0FBQ1ZYLG9CQUFVLEVBQUUsS0FGaEI7QUFHSUMsY0FBSSxFQUFFO0FBSFY7QUFLSDs7QUFDRCxTQUFLRyxPQUFMO0FBQWM7QUFDViwrQ0FDT08sS0FEUDtBQUVJRSxvQkFBVSxFQUFFRCxNQUFNLENBQUNIO0FBRnZCO0FBSUg7O0FBQ0Q7QUFBUztBQUNMLGlDQUNPRSxLQURQO0FBR0g7QUF6Qkw7QUEyQkgsQ0E1QkQ7O0FBOEJlRCxzRUFBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuM2I0MmFjOTY1ZDViMzkzYjFhNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIFBvc3Q6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6IFtdLFxyXG4gICAgc2lnaW5VcERhdGE6IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgbmljazogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAvLyDstIjquLAg6rCSICwg66as7JWh7Yq47J2YIHN0YXRl6528IOuztOuptCDrkKhcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU4gPSAnTE9HX0lOJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9HX09VVCA9ICdMT0dfT1VUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVAgPSAnU0lHTl9VUCc7XHJcblxyXG4vLyDslYTrnpjripQgc2V0IFN0YXRl6528IOuztOuptOuQqC4gQWN0aW9u6rO8IHJlZHVjZXLroZwg67aE66as65CoLlxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSB7XHJcbiAgICB0eXBlOiBMT0dfSU4sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8g64+Z7KCBIOuNsOydtO2EsOuKlCDtlajsiJg/XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTjoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOuLpOydjCBzdGF0ZeuTpCDtlaAg7ZaJ64+ZXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZHVtbXlVc2VyLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDsiqTtlITroIjrk5wg66y467KVOiDsg4jroZzsmrQg6rCd7LK064KYIOuwsOyXtOydhCDsg53shLHtlZjripQg66y467KVIOunpOuyiCDri6Qg7JOw6rOgIOyeiOydjFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8vIHNldFN0YXRlKChwcmV2U3RhdGUpPT57IOyYm+uCoCDsiqTthYzsnbTtirjsmYAg6rCZ7JWE7KGM64qU7KeAIO2ZleyduO2VmOq4sCDrlYzrrLjsl5Ag7IOI66GcIOyDneyEsSDtlbTspJjslbztlaguXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGZpZWxkOiB7IC4uLnByZXZTdGF0ZS5maWVsZH0sXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=