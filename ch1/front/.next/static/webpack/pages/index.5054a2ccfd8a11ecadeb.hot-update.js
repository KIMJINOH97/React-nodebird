webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN, LOG_OUT, SIGN_UP_ID, SIGN_UP_NICK, SIGN_UP_PASSWORD, loginAction, logoutAction, signUpAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_ID", function() { return SIGN_UP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_NICK", function() { return SIGN_UP_NICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_PASSWORD", function() { return SIGN_UP_PASSWORD; });
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
var SIGN_UP_ID = 'SIGN_UP_ID';
var SIGN_UP_NICK = 'SIGN_UP_NICK';
var SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD'; // 아래는 set State라 보면됨. Action과 reducer로 분리됨.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwic2lnaW5VcERhdGEiLCJpZCIsIm5pY2siLCJwYXNzd29yZCIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiTE9HX0lOIiwiTE9HX09VVCIsIlNJR05fVVBfSUQiLCJTSUdOX1VQX05JQ0siLCJTSUdOX1VQX1BBU1NXT1JEIiwibG9naW5BY3Rpb24iLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwic2lnblVwQWN0aW9uIiwiZGF0YSIsIlNJR05fVVAiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJzaWduVXBEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEtBREk7QUFFZEMsTUFBSSxFQUFFLEVBRlE7QUFHZEMsWUFBVSxFQUFFLEVBSEU7QUFJZEMsV0FBUyxFQUFFLEVBSkc7QUFLZEMsYUFBVyxFQUFFO0FBQ1RDLE1BQUUsRUFBRSxFQURLO0FBRVRDLFFBQUksRUFBRSxFQUZHO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBTEMsQ0FBbEI7QUFZTyxJQUFNQyxZQUFZLEdBQUc7QUFDeEI7QUFDQUMsWUFBVSxFQUFFLEtBRlk7QUFHeEJDLE1BQUksRUFBRTtBQUNGVixZQUFRLEVBQUU7QUFEUjtBQUhrQixDQUFyQjtBQVFBLElBQU1XLE1BQU0sR0FBRyxRQUFmLEMsQ0FBeUI7O0FBQ3pCLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDLENBRVA7O0FBQ08sSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCQyxNQUFJLEVBQUVOO0FBRGlCLENBQXBCO0FBSUEsSUFBTU8sWUFBWSxHQUFHO0FBQ3hCRCxNQUFJLEVBQUVMO0FBRGtCLENBQXJCO0FBSUEsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDO0FBQ0EsU0FBTztBQUNISCxRQUFJLEVBQUVJLE9BREg7QUFFSEQsUUFBSSxFQUFFQTtBQUZILEdBQVA7QUFJSCxDQU5NOztBQVFQLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmYsWUFBeUI7QUFBQSxNQUFYZ0IsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0ksU0FBS04sTUFBTDtBQUFhO0FBQ1QsK0NBQ09ZLEtBRFA7QUFDYztBQUNWZCxvQkFBVSxFQUFFLElBRmhCO0FBR0lDLGNBQUksRUFBRVg7QUFIVjtBQUtIOztBQUNELFNBQUthLE9BQUw7QUFBYztBQUNWLCtDQUNPVyxLQURQO0FBQ2M7QUFDVmQsb0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxjQUFJLEVBQUU7QUFIVjtBQUtIOztBQUNELFNBQUtXLE9BQUw7QUFBYztBQUNWLCtDQUNPRSxLQURQO0FBRUlFLG9CQUFVLEVBQUVELE1BQU0sQ0FBQ0o7QUFGdkI7QUFJSDs7QUFDRDtBQUFTO0FBQ0wsaUNBQ09HLEtBRFA7QUFHSDtBQXpCTDtBQTJCSCxDQTVCRDs7QUE4QmVELHNFQUFmLEUsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwNTRhMmNjZmQ4YTExZWNhZGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBQb3N0OiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICAgIHNpZ2luVXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG5pY2s6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLy8g7LSI6riwIOqwkiAsIOumrOyVoe2KuOydmCBzdGF0ZeudvCDrs7TrqbQg65CoXHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOID0gJ0xPR19JTic7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0lEID0gJ1NJR05fVVBfSUQnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9OSUNLID0gJ1NJR05fVVBfTklDSyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1BBU1NXT1JEID0gJ1NJR05fVVBfUEFTU1dPUkQnO1xyXG5cclxuLy8g7JWE656Y64qUIHNldCBTdGF0ZeudvCDrs7TrqbTrkKguIEFjdGlvbuqzvCByZWR1Y2Vy66GcIOu2hOumrOuQqC5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0ge1xyXG4gICAgdHlwZTogTE9HX0lOLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcclxuICAgIHR5cGU6IExPR19PVVQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIC8vIOuPmeyggSDrjbDsnbTthLDripQg7ZWo7IiYP1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU46IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDri6TsnYwgc3RhdGXrk6Qg7ZWgIO2WieuPmVxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGR1bW15VXNlcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g7Iqk7ZSE66CI65OcIOusuOuylTog7IOI66Gc7Jq0IOqwneyytOuCmCDrsLDsl7TsnYQg7IOd7ISx7ZWY64qUIOusuOuylSDrp6Trsogg64ukIOyTsOqzoCDsnojsnYxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4vLyBzZXRTdGF0ZSgocHJldlN0YXRlKT0+eyDsmJvrgqAg7Iqk7YWM7J207Yq47JmAIOqwmeyVhOyhjOuKlOyngCDtmZXsnbjtlZjquLAg65WM66y47JeQIOyDiOuhnCDsg53shLEg7ZW07KSY7JW87ZWoLlxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBmaWVsZDogeyAuLi5wcmV2U3RhdGUuZmllbGR9LFxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9