webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_REQUEST", function() { return LOAD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_SUCCESS", function() { return LOAD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOW_FAILURE", function() { return LOAD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1
}; // 리덕스는 동기화로 작용함. 비동기로 하기 위해선 사가라는 미들웨어를 넣어야함.
// 원래는 서버 쪽에 data가 전달되고, 서버가 로그인 성공이라는 응답을 보내주고, 그걸 다시 받아 로그인 함.
// 서버가 맞는 응답을 보내주는 과정이 필요함. 그래서 필요한 것이 미들웨어.

var initialState = {
  // 초기 값 , 리액트의 state라 보면 됨
  isLoggedIn: false,
  // 로그인 여부
  isLoggingOut: false,
  // 로그아웃 시도중
  isLoggingIn: false,
  // 로그인 시도중
  loginErrorReason: '',
  // 로그인 에러 사유
  signedUp: false,
  // 회원가입 여부
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: '',
  // 회원가입 실패 사유
  me: null,
  followingList: [],
  // 팔로잉 리스트
  followerList: [],
  // 팔로우 리스트
  userInfo: null,
  // 남의 정보
  data: {}
}; // 로그인 동작할 때,
// 서버에 요청을 보낸다 -> request -> 비동기로 LOG_IN_SUCCESS or LOG_IN_FAILURE 선택> LOG_IN 동작

var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

var LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 액션의 이름

var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 액션의 이름

var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 비동기 요청 서버에 갔다 와야하는!

var LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
var LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS'; // 액션의 이름

var LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE'; // 액션의 이름

var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'; // 액션의 이름

var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; // 액션의 이름

var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'; // 액션의 이름

var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'; // 액션의 이름

var ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // export const SIGN_UP_ID = 'SIGN_UP_ID';
// export const SIGN_UP_NICK = 'SIGN_UP_NICK';
// export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';
// 원래는 이렇게 해줘야함.
// 아래는 set State라 보면됨. Action과 reducer로 분리됨.
// export const signUpSuccess = {
//     type: SIGN_UP_SUCCESS,
// };
// export const loginRequestAction = (data) => ({
//     type: LOG_IN_REQUEST,
//     data,
// });
// export const logoutRequestAction = {
//     type: LOG_OUT_REQUEST,
//     data,
// };
// export const signUpRequestAction = (data) => ({
//     type: SIGN_UP_REQUEST,
//     data,
// }); // 바로 리턴

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // 다음 state들 할 행동
          isLoading: true,
          loginErrorReason: ''
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: true,
          me: dummyUser,
          isLoading: false
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: false,
          loginErrorReason: action.error,
          me: null
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
          isLoggedIn: false,
          me: null
        });
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signedUp: false,
          // 회원가입 여부
          isSigningUp: true // 회원가입 시도중

        });
      }

    case SIGN_UP_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signedUp: true,
          // 회원가입 여부
          isSigningUp: false // 회원가입 시도중

        });
      }

    case SIGN_UP_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          signedUp: false,
          // 회원가입 여부
          isSigningUp: false,
          // 회원가입 시도중
          signUpErrorReason: action.error // 회원가입 실패 사유

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
// function* generator() {
//     // 제너레이터 라고 *는 무한의 개념 제너레이터는 함수 실행을 중간에 멈출 수 있고 원할 때 재개 가능
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaWQiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnaW5nSW4iLCJsb2dpbkVycm9yUmVhc29uIiwic2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcEVycm9yUmVhc29uIiwibWUiLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwidXNlckluZm8iLCJkYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9BRF9GT0xMT1dfUkVRVUVTVCIsIkxPQURfRk9MTE9XX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNMb2FkaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2RDLFVBQVEsRUFBRSxLQURJO0FBRWRDLE1B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O0FBS0loQyxZQUFFLEVBQUU7QUFMUjtBQU9IOztBQUNELFNBQUtjLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ09jLEtBRFA7QUFDYztBQUNWbkMsb0JBQVUsRUFBRSxLQUZoQjtBQUdJTyxZQUFFLEVBQUU7QUFIUjtBQUtIOztBQUNELFNBQUtXLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ09pQixLQURQO0FBRUkvQixrQkFBUSxFQUFFLEtBRmQ7QUFFcUI7QUFDakJDLHFCQUFXLEVBQUUsSUFIakIsQ0FHdUI7O0FBSHZCO0FBS0g7O0FBQ0QsU0FBS2MsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT2dCLEtBRFA7QUFFSS9CLGtCQUFRLEVBQUUsSUFGZDtBQUVvQjtBQUNoQkMscUJBQVcsRUFBRSxLQUhqQixDQUd3Qjs7QUFIeEI7QUFLSDs7QUFDRCxTQUFLZSxlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPZSxLQURQO0FBRUkvQixrQkFBUSxFQUFFLEtBRmQ7QUFFcUI7QUFDakJDLHFCQUFXLEVBQUUsS0FIakI7QUFHd0I7QUFDcEJDLDJCQUFpQixFQUFFOEIsTUFBTSxDQUFDRyxLQUo5QixDQUlxQzs7QUFKckM7QUFNSDs7QUFDRDtBQUFTO0FBQ0wsaUNBQ09KLEtBRFA7QUFHSDtBQTNETDtBQTZESCxDQTlERDs7QUFnRWVELHNFQUFmLEUsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmRlYjQzMjExN2I1ZTcwMjQ4MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIFBvc3Q6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6IFtdLFxyXG4gICAgaWQ6IDEsXHJcbn07XHJcblxyXG4vLyDrpqzrjZXsiqTripQg64+Z6riw7ZmU66GcIOyekeyaqe2VqC4g67mE64+Z6riw66GcIO2VmOq4sCDsnITtlbTshKAg7IKs6rCA652864qUIOuvuOuTpOybqOyWtOulvCDrhKPslrTslbztlaguXHJcbi8vIOybkOuemOuKlCDshJzrsoQg7Kq97JeQIGRhdGHqsIAg7KCE64us65CY6rOgLCDshJzrsoTqsIAg66Gc6re47J24IOyEseqzteydtOudvOuKlCDsnZHri7XsnYQg67O064K07KO86rOgLCDqt7jqsbgg64uk7IucIOuwm+yVhCDroZzqt7jsnbgg7ZWoLlxyXG4vLyDshJzrsoTqsIAg66ee64qUIOydkeuLteydhCDrs7TrgrTso7zripQg6rO87KCV7J20IO2VhOyalO2VqC4g6re4656Y7IScIO2VhOyalO2VnCDqsoPsnbQg66+465Ok7Juo7Ja0LlxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIC8vIOy0iOq4sCDqsJIgLCDrpqzslaHtirjsnZggc3RhdGXrnbwg67O066m0IOuQqFxyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsl6zrtoBcclxuICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9naW5FcnJvclJlYXNvbjogJycsIC8vIOuhnOq3uOyduCDsl5Drn6wg7IKs7JygXHJcbiAgICBzaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsl6zrtoBcclxuICAgIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRXJyb3JSZWFzb246ICcnLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBmb2xsb3dpbmdMaXN0OiBbXSwgLy8g7YyU66Gc7J6JIOumrOyKpO2KuFxyXG4gICAgZm9sbG93ZXJMaXN0OiBbXSwgLy8g7YyU66Gc7JqwIOumrOyKpO2KuFxyXG4gICAgdXNlckluZm86IG51bGwsIC8vIOuCqOydmCDsoJXrs7RcclxuICAgIGRhdGE6IHt9LFxyXG59O1xyXG5cclxuLy8g66Gc6re47J24IOuPmeyeke2VoCDrlYwsXHJcbi8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K464ukIC0+IHJlcXVlc3QgLT4g67mE64+Z6riw66GcIExPR19JTl9TVUNDRVNTIG9yIExPR19JTl9GQUlMVVJFIOyEoO2DnT4gTE9HX0lOIOuPmeyekVxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7IC8vIOu5hOuPmeq4sCDsmpTssq0g7ISc67KE7JeQIOqwlOuLpCDsmYDslbztlZjripQhXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFNJR05fVVBfSUQgPSAnU0lHTl9VUF9JRCc7XHJcbi8vIGV4cG9ydCBjb25zdCBTSUdOX1VQX05JQ0sgPSAnU0lHTl9VUF9OSUNLJztcclxuLy8gZXhwb3J0IGNvbnN0IFNJR05fVVBfUEFTU1dPUkQgPSAnU0lHTl9VUF9QQVNTV09SRCc7XHJcbi8vIOybkOuemOuKlCDsnbTroIfqsowg7ZW07KSY7JW87ZWoLlxyXG5cclxuLy8g7JWE656Y64qUIHNldCBTdGF0ZeudvCDrs7TrqbTrkKguIEFjdGlvbuqzvCByZWR1Y2Vy66GcIOu2hOumrOuQqC5cclxuLy8gZXhwb3J0IGNvbnN0IHNpZ25VcFN1Y2Nlc3MgPSB7XHJcbi8vICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuLy8gICAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSB7XHJcbi8vICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuLy8gICAgIGRhdGEsXHJcbi8vIH0pOyAvLyDrsJTroZwg66as7YS0XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g64uk7J2MIHN0YXRl65OkIO2VoCDtlonrj5lcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luRXJyb3JSZWFzb246ICcnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogZHVtbXlVc2VyLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRToge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luRXJyb3JSZWFzb246IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOyKpO2UhOugiOuTnCDrrLjrspU6IOyDiOuhnOyatCDqsJ3ssrTrgpgg67Cw7Je07J2EIOyDneyEse2VmOuKlCDrrLjrspUg66ek67KIIOuLpCDsk7Dqs6Ag7J6I7J2MXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsl6zrtoBcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiB0cnVlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25lZFVwOiB0cnVlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7IKs7JygXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbi8vIHNldFN0YXRlKChwcmV2U3RhdGUpPT57IOyYm+uCoCDsiqTthYzsnbTtirjsmYAg6rCZ7JWE7KGM64qU7KeAIO2ZleyduO2VmOq4sCDrlYzrrLjsl5Ag7IOI66GcIOyDneyEsSDtlbTspJjslbztlaguXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGZpZWxkOiB7IC4uLnByZXZTdGF0ZS5maWVsZH0sXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiogZ2VuZXJhdG9yKCkge1xyXG4vLyAgICAgLy8g7KCc64SI66CI7J207YSwIOudvOqzoCAq64qUIOustO2VnOydmCDqsJzrhZAg7KCc64SI66CI7J207YSw64qUIO2VqOyImCDsi6TtlonsnYQg7KSR6rCE7JeQIOupiOy2nCDsiJgg7J6I6rOgIOybkO2VoCDrlYwg7J6s6rCcIOqwgOuKpVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=