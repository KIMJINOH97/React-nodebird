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
  },
  iginUpData: {
    id: '',
    nick: '',
    password: ''
  }
};
var LOG_IN = 'LOG_IN'; // 액션의 이름

var LOG_OUT = 'LOG_OUT';
var SIGN_UP = 'SIGN_UP'; // export const SIGN_UP_ID = 'SIGN_UP_ID';
// export const SIGN_UP_NICK = 'SIGN_UP_NICK';
// export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';
// 원래는 이렇게 해줘야함.
// 아래는 set State라 보면됨. Action과 reducer로 분리됨.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwic2lnaW5VcERhdGEiLCJpZCIsIm5pY2siLCJwYXNzd29yZCIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiaWdpblVwRGF0YSIsIkxPR19JTiIsIkxPR19PVVQiLCJTSUdOX1VQIiwibG9naW5BY3Rpb24iLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwic2lnblVwQWN0aW9uIiwiZGF0YSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNpZ25VcERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEtBREk7QUFFZEMsTUFBSSxFQUFFLEVBRlE7QUFHZEMsWUFBVSxFQUFFLEVBSEU7QUFJZEMsV0FBUyxFQUFFLEVBSkc7QUFLZEMsYUFBVyxFQUFFO0FBQ1RDLE1BQUUsRUFBRSxFQURLO0FBRVRDLFFBQUksRUFBRSxFQUZHO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBTEMsQ0FBbEI7QUFZTyxJQUFNQyxZQUFZLEdBQUc7QUFDeEI7QUFDQUMsWUFBVSxFQUFFLEtBRlk7QUFHeEJDLE1BQUksRUFBRTtBQUNGVixZQUFRLEVBQUU7QUFEUixHQUhrQjtBQU14QlcsWUFBVSxFQUFFO0FBQ1JOLE1BQUUsRUFBRSxFQURJO0FBRVJDLFFBQUksRUFBRSxFQUZFO0FBR1JDLFlBQVEsRUFBRTtBQUhGO0FBTlksQ0FBckI7QUFhQSxJQUFNSyxNQUFNLEdBQUcsUUFBZixDLENBQXlCOztBQUN6QixJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEIsQyxDQUNQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ08sSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCQyxNQUFJLEVBQUVKO0FBRGlCLENBQXBCO0FBSUEsSUFBTUssWUFBWSxHQUFHO0FBQ3hCRCxNQUFJLEVBQUVIO0FBRGtCLENBQXJCO0FBSUEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDO0FBQ0EsU0FBTztBQUNISCxRQUFJLEVBQUVGLE9BREg7QUFFSEssUUFBSSxFQUFFQTtBQUZILEdBQVA7QUFJSCxDQU5NOztBQVFQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmIsWUFBeUI7QUFBQSxNQUFYYyxNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNOLElBQWY7QUFDSSxTQUFLSixNQUFMO0FBQWE7QUFDVCwrQ0FDT1MsS0FEUDtBQUNjO0FBQ1ZaLG9CQUFVLEVBQUUsSUFGaEI7QUFHSUMsY0FBSSxFQUFFWDtBQUhWO0FBS0g7O0FBQ0QsU0FBS2MsT0FBTDtBQUFjO0FBQ1YsK0NBQ09RLEtBRFA7QUFDYztBQUNWWixvQkFBVSxFQUFFLEtBRmhCO0FBR0lDLGNBQUksRUFBRTtBQUhWO0FBS0g7O0FBQ0QsU0FBS0ksT0FBTDtBQUFjO0FBQ1YsK0NBQ09PLEtBRFA7QUFFSUUsb0JBQVUsRUFBRUQsTUFBTSxDQUFDSDtBQUZ2QjtBQUlIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT0UsS0FEUDtBQUdIO0FBekJMO0FBMkJILENBNUJEOztBQThCZUQsc0VBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmE0MWU3NmRmMWRhMmQ4NjEyMTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBQb3N0OiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICAgIHNpZ2luVXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG5pY2s6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLy8g7LSI6riwIOqwkiAsIOumrOyVoe2KuOydmCBzdGF0ZeudvCDrs7TrqbQg65CoXHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgIH0sXHJcbiAgICBpZ2luVXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG5pY2s6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOID0gJ0xPR19JTic7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQID0gJ1NJR05fVVAnO1xyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9JRCA9ICdTSUdOX1VQX0lEJztcclxuLy8gZXhwb3J0IGNvbnN0IFNJR05fVVBfTklDSyA9ICdTSUdOX1VQX05JQ0snO1xyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9QQVNTV09SRCA9ICdTSUdOX1VQX1BBU1NXT1JEJztcclxuLy8g7JuQ656Y64qUIOydtOugh+qyjCDtlbTspJjslbztlaguXHJcblxyXG4vLyDslYTrnpjripQgc2V0IFN0YXRl6528IOuztOuptOuQqC4gQWN0aW9u6rO8IHJlZHVjZXLroZwg67aE66as65CoLlxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSB7XHJcbiAgICB0eXBlOiBMT0dfSU4sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8g64+Z7KCBIOuNsOydtO2EsOuKlCDtlajsiJg/XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNJR05fVVAsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTjoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOuLpOydjCBzdGF0ZeuTpCDtlaAg7ZaJ64+ZXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZHVtbXlVc2VyLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDsiqTtlITroIjrk5wg66y467KVOiDsg4jroZzsmrQg6rCd7LK064KYIOuwsOyXtOydhCDsg53shLHtlZjripQg66y467KVIOunpOuyiCDri6Qg7JOw6rOgIOyeiOydjFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVA6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8vIHNldFN0YXRlKChwcmV2U3RhdGUpPT57IOyYm+uCoCDsiqTthYzsnbTtirjsmYAg6rCZ7JWE7KGM64qU7KeAIO2ZleyduO2VmOq4sCDrlYzrrLjsl5Ag7IOI66GcIOyDneyEsSDtlbTspJjslbztlaguXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGZpZWxkOiB7IC4uLnByZXZTdGF0ZS5maWVsZH0sXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=