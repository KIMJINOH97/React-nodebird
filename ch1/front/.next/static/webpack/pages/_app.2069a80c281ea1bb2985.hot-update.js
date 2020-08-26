webpackHotUpdate_N_E("pages/_app",{

/***/ "./saga/user.js":
/*!**********************!*\
  !*** ./saga/user.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchHello),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function loginAPI() {
  // 서버에 요청을 보내는 동작
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/login');
}

function login() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // 성공하면 이 부분 동작한다.
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"]
          });

        case 5:
          _context.next = 13;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          // loginAPI 실패
          console.log('adsfj');
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} // while(true) = takeEvery와 비슷하게 작용.
// takeLatest 와 takeEvery는 동작은 비슷함. 이전 요청 중 끝나지 않은게 있다면 이전 요청 취소해줌.
// 그러나 delay가 들어가면 다름. HELLOSAGA 3번하면 1번만 뜸. 가장 최신의 것만 받았다 친다?임. 동시에 여러번 하면 그 중 마지막만 받는다.


function watchHello() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchHello$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(HELLO_SAGA, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

                  case 2:
                    _context3.next = 4;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: 'BYE_SAGA'
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}

function signUpAPI(signUpdata) {
  // 서버요청
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3065/api/user/');
}

function signUp(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context5.t0
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked5);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked6);
} // function* watchLogin() {
//     console.log('before log_in');
//     while (true) {
//         yield take(LOG_IN); // take(LOG_IN, login)로그인 액선이 들어오면 login함수를 실행
//         yield delay(2000); // 2초뒤에 success가 실행
//         yield put({
//             type: LOG_IN_SUCCESS, // saga의 dispatch와 같다보면됨.
//         });
//         console.log('sdjf');
//     }
// }
// function* watchHello() {
//     console.log('before saga');
//     while (true) {
//         yield take(HELLO_SAGA);
//         console.log('hello saga');
//         console.log('hello saga');
//         console.log('hello saga');
//         // 리덕스의 동작을 방해하진 않는다.
//     } // take가 HELLO_SAGA를 기다리겠다는 거임. next가 오면 실행하겠다는 거임.
//     // take함수 안에 next가 있음. 알아서 해줌. 언제 재게가 되냐면 HELLO_SAGA라는 action이 올 때까지
//     // 즉 HELLO_SAGA action이 들어오면 중단 품.
//     // 비동기 요청해도 되고, 타이머 넣어도 됨.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoSGVsbG8iLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9HX0lOX1JFUVVFU1QiLCJ0YWtlTGF0ZXN0IiwiSEVMTE9fU0FHQSIsInNpZ25VcEFQSSIsInNpZ25VcGRhdGEiLCJhY3Rpb24iLCJjYWxsIiwiZGF0YSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVNVQSxLO21HQXdCQUMsVTttR0FPQUMsVTttR0FjQUMsTTttR0FrQkFDLFc7bUdBSWVDLFE7O0FBNUV6QjtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUNoQjtBQUNBLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxRQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFVUixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU1EsaUJBQU1TLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQVRSO0FBQUE7QUFVUSxpQkFBTUMsOERBQUcsQ0FBQztBQUNOO0FBQ0FDLGdCQUFJLEVBQUVDLDZEQUFjQTtBQUZkLFdBQUQsQ0FBVDs7QUFWUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZVE7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsaUJBQU8sQ0FBQ0UsS0FBUjtBQWpCUjtBQWtCUSxpQkFBTUwsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFSyw2REFBY0E7QUFEZCxXQUFELENBQVQ7O0FBbEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCQSxTQUFVZixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNZ0Isb0VBQVMsQ0FBQ0MsNkRBQUQsRUFBaUJsQixLQUFqQixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FJQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVVFLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1pQixxRUFBVSxDQUFDQyxVQUFELHNGQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QiwyQkFBTVgsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBRHlCO0FBQUE7QUFFekIsMkJBQU1DLDhEQUFHLENBQUM7QUFDTkMsMEJBQUksRUFBRTtBQURBLHFCQUFELENBQVQ7O0FBRnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWIsRUFBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU0EsU0FBU1UsU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDM0I7QUFDQSxTQUFPZiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsaUNBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVMLE1BQVYsQ0FBaUJvQixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdRLGlCQUFNQywrREFBSSxDQUFDSCxTQUFELEVBQVlFLE1BQU0sQ0FBQ0UsSUFBbkIsQ0FBVjs7QUFIUjtBQUFBO0FBTVEsaUJBQU1mLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRWUsOERBQWVBO0FBRGYsV0FBRCxDQUFUOztBQU5SO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVUWIsaUJBQU8sQ0FBQ0UsS0FBUjtBQVZSO0FBV1EsaUJBQU1MLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRWdCLDhEQURBO0FBRU5aLGlCQUFLO0FBRkMsV0FBRCxDQUFUOztBQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFVWCxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNYSxvRUFBUyxDQUFDVyw4REFBRCxFQUFrQnpCLE1BQWxCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTXdCLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQzdCLFVBQUQsQ0FBTCxFQUFtQjZCLCtEQUFJLENBQUMxQixXQUFELENBQXZCLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBT2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjA2OWE4MGMyODFlYTFiYjI5ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5LCBjYWxsLCBwdXQsIHRha2UsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoKSB7XHJcbiAgICAvLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCtOuKlCDrj5nsnpFcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbG9naW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKCkge1xyXG4gICAgLy8g7KCc64SI66CI7J207YSw64qUIGFzeW5jIGF3YWl067O064ukIO2VoCDsiJgg7J6I64qU6rKD7J20IOunjuuLpC5cclxuICAgIC8vIHRyeSwgY2F0Y2gg64qUIOyLpO2MqO2VoCDsiJgg7J6I64qUIOy9lOuTnOyXkOyEnCDrs7TtmLjtlZjquLAg7JyE7ZW0IOyCrOyaqS5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g66Gc6re47J24IO2VqOyImOqwgCDrj5nsnpHtlZjrqbQg7ISc67KE7JeQIOuovOyggCDsmpTssq3snYQg67O064K06rOgXHJcbiAgICAgICAgLy8geWllbGQgZm9yayhsb2dnZXIpOyAvLyBsb2dnZXLripQg64K0IOq4sOuhneydhCDroZzquYXtlZjripQg7ZWo7IiYLCAxMOy0iOqxuOumvC5cclxuICAgICAgICAvLyDrp4zslb0gY2FsbOuhnCDtlZjrqbQgMTDstIgg6riw64uk66C464uk6rCAIOuwkeydmCDtlajsiJgg7Iuk7ZaJLiDsnbTrn7Ag6rK97Jqw64qUIGZvcmvslIAuXHJcbiAgICAgICAgLy8geWllbGQgY2FsbChsb2dpbkFQSSk7IC8vIGZvcmvrpbwg7ZWY66m0IOyEnOuyhCDsmpTssq3snYQg67O064K06rOgIOyLoOqyvSDslYjsk7Qg65KkIHB1dOydhCDtlZzri6QuXHJcbiAgICAgICAgLy8gZm9ya+uKlCDrrLjsoJzqsIAg7IOd6ri064ukLiBjYWxs7J28IOuVjOuKlCBsb2dpbkFQSeqwgCDsmKTrpZjrgpjrqbQgZXJyb3LroZwg64SY7Ja06rCAIOyYpOulmOyymOumrC5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAvLyDshLHqs7XtlZjrqbQg7J20IOu2gOu2hCDrj5nsnpHtlZzri6QuXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGxvZ2luQVBJIOyLpO2MqFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZHNmaicpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuXHJcbi8vIHdoaWxlKHRydWUpID0gdGFrZUV2ZXJ57JmAIOu5hOyKt+2VmOqyjCDsnpHsmqkuXHJcbi8vIHRha2VMYXRlc3Qg7JmAIHRha2VFdmVyeeuKlCDrj5nsnpHsnYAg67mE7Iq37ZWoLiDsnbTsoIQg7JqU7LKtIOykkSDrgZ3rgpjsp4Ag7JWK7J2A6rKMIOyeiOuLpOuptCDsnbTsoIQg7JqU7LKtIOy3qOyGjO2VtOykjC5cclxuLy8g6re465+s64KYIGRlbGF56rCAIOuTpOyWtOqwgOuptCDri6TrpoQuIEhFTExPU0FHQSAz67KI7ZWY66m0IDHrsojrp4wg65y4LiDqsIDsnqUg7LWc7Iug7J2YIOqyg+unjCDrsJvslZjri6Qg7Lmc64ukP+yehC4g64+Z7Iuc7JeQIOyXrOufrOuyiCDtlZjrqbQg6re4IOykkSDrp4jsp4Drp4nrp4wg67Cb64qU64ukLlxyXG5mdW5jdGlvbiogd2F0Y2hIZWxsbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoSEVMTE9fU0FHQSwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnQllFX1NBR0EnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShzaWduVXBkYXRhKSB7XHJcbiAgICAvLyDshJzrsoTsmpTssq1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvYXBpL3VzZXIvJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICAvLyBhY3Rpb27sl5AgaWQgcGFzc3dvcmQgbmlja+ydtCDrk6TslrTsnojsnYxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsgLy8g7ISc67KE7JqU7LKtIOuztOuDhCwg65GQ67KI7Ke464qUIOyduOyekHNpZ25VcEFQSeydmCDsnbjsnpDroZwg7KCE64usLlxyXG4gICAgICAgIC8veWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoJ+yXkOufrOyehCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaFNpZ25VcCldKTsgLy8g7Iuc7J6R7KCQXHJcbiAgICAvLyBhbGzsnYAg7Jes65+sIOydtO2Ome2KuOulvCDrj5nsi5zsl5Ag7Iuk7ZaJIO2VoCDsiJgg7J6I6rKM64GU7ZWoLlxyXG4gICAgLy8gZm9yaywgY2FsbCDruYTsirftlaguIOqzte2GteygkDog6riw67O47KCB7Jy866GcIO2VqOyImOulvCDsi6TtlontlahcclxuICAgIC8vIGNhbGzsnYAg64+Z6riw7Zi47LacLCBmb3Jr64qUIOu5hOuPmeq4sCDtmLjstpzsnoQuIGZvcmvripQg67mE64+Z6riw6528IOuPmeyLnCDsi6Ttlokg6rCA64qlLlxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgbG9nX2luJyk7XHJcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgIHlpZWxkIHRha2UoTE9HX0lOKTsgLy8gdGFrZShMT0dfSU4sIGxvZ2luKeuhnOq3uOyduCDslaHshKDsnbQg65Ok7Ja07Jik66m0IGxvZ2lu7ZWo7IiY66W8IOyLpO2WiVxyXG4vLyAgICAgICAgIHlpZWxkIGRlbGF5KDIwMDApOyAvLyAy7LSI65Kk7JeQIHN1Y2Nlc3PqsIAg7Iuk7ZaJXHJcbi8vICAgICAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsIC8vIHNhZ2HsnZggZGlzcGF0Y2jsmYAg6rCZ64uk67O066m065CoLlxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdzZGpmJyk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaEhlbGxvKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBzYWdhJyk7XHJcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgIHlpZWxkIHRha2UoSEVMTE9fU0FHQSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHNhZ2EnKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gc2FnYScpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBzYWdhJyk7XHJcbi8vICAgICAgICAgLy8g66as642V7Iqk7J2YIOuPmeyekeydhCDrsKntlbTtlZjsp4Qg7JWK64qU64ukLlxyXG4vLyAgICAgfSAvLyB0YWtl6rCAIEhFTExPX1NBR0Hrpbwg6riw64uk66as6rKg64uk64qUIOqxsOyehC4gbmV4dOqwgCDsmKTrqbQg7Iuk7ZaJ7ZWY6rKg64uk64qUIOqxsOyehC5cclxuLy8gICAgIC8vIHRha2XtlajsiJgg7JWI7JeQIG5leHTqsIAg7J6I7J2MLiDslYzslYTshJwg7ZW07KSMLiDslrjsoJwg7J6s6rKM6rCAIOuQmOuDkOuptCBIRUxMT19TQUdB652864qUIGFjdGlvbuydtCDsmKwg65WM6rmM7KeAXHJcbi8vICAgICAvLyDspokgSEVMTE9fU0FHQSBhY3Rpb27snbQg65Ok7Ja07Jik66m0IOykkeuLqCDtkoguXHJcbi8vICAgICAvLyDruYTrj5nquLAg7JqU7LKt7ZW064+EIOuQmOqzoCwg7YOA7J2066i4IOuEo+yWtOuPhCDrkKguXHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==