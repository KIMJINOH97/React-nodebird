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

function signUpAPI() {
  // 서버요청
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/login');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoSGVsbG8iLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9HX0lOX1JFUVVFU1QiLCJ0YWtlTGF0ZXN0IiwiSEVMTE9fU0FHQSIsInNpZ25VcEFQSSIsImFjdGlvbiIsImNhbGwiLCJkYXRhIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBU1VBLEs7bUdBd0JBQyxVO21HQU9BQyxVO21HQWNBQyxNO21HQWtCQUMsVzttR0FJZUMsUTs7QUE1RXpCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTUSxpQkFBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBVFI7QUFBQTtBQVVRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ047QUFDQUMsZ0JBQUksRUFBRUMsNkRBQWNBO0FBRmQsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlUTtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxpQkFBTyxDQUFDRSxLQUFSO0FBakJSO0FBa0JRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVLLDZEQUFjQTtBQURkLFdBQUQsQ0FBVDs7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVmLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1nQixvRUFBUyxDQUFDQyw2REFBRCxFQUFpQmxCLEtBQWpCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUlBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBVUUsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWlCLHFFQUFVLENBQUNDLFVBQUQsc0ZBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCLDJCQUFNWCxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFEeUI7QUFBQTtBQUV6QiwyQkFBTUMsOERBQUcsQ0FBQztBQUNOQywwQkFBSSxFQUFFO0FBREEscUJBQUQsQ0FBVDs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYixFQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFTVSxTQUFULEdBQXFCO0FBQ2pCO0FBQ0EsU0FBT2QsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVMLE1BQVYsQ0FBaUJtQixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdRLGlCQUFNQywrREFBSSxDQUFDRixTQUFELEVBQVlDLE1BQU0sQ0FBQ0UsSUFBbkIsQ0FBVjs7QUFIUjtBQUFBO0FBTVEsaUJBQU1kLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRWMsOERBQWVBO0FBRGYsV0FBRCxDQUFUOztBQU5SO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVUVosaUJBQU8sQ0FBQ0UsS0FBUjtBQVZSO0FBV1EsaUJBQU1MLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRWUsOERBREE7QUFFTlgsaUJBQUs7QUFGQyxXQUFELENBQVQ7O0FBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBLFNBQVVYLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1hLG9FQUFTLENBQUNVLDhEQUFELEVBQWtCeEIsTUFBbEIsQ0FBZjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNdUIsOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDNUIsVUFBRCxDQUFMLEVBQW1CNEIsK0RBQUksQ0FBQ3pCLFdBQUQsQ0FBdkIsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FPZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZTRkYWE2YmIxYWNjNTM3ZWQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIGNhbGwsIHB1dCwgdGFrZSwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSSgpIHtcclxuICAgIC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOuPmeyekVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9sb2dpbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oKSB7XHJcbiAgICAvLyDsoJzrhIjroIjsnbTthLDripQgYXN5bmMgYXdhaXTrs7Tri6Qg7ZWgIOyImCDsnojripTqsoPsnbQg66eO64ukLlxyXG4gICAgLy8gdHJ5LCBjYXRjaCDripQg7Iuk7Yyo7ZWgIOyImCDsnojripQg7L2U65Oc7JeQ7IScIOuztO2YuO2VmOq4sCDsnITtlbQg7IKs7JqpLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDroZzqt7jsnbgg7ZWo7IiY6rCAIOuPmeyeke2VmOuptCDshJzrsoTsl5Ag66i87KCAIOyalOyyreydhCDrs7TrgrTqs6BcclxuICAgICAgICAvLyB5aWVsZCBmb3JrKGxvZ2dlcik7IC8vIGxvZ2dlcuuKlCDrgrQg6riw66Gd7J2EIOuhnOq5he2VmOuKlCDtlajsiJgsIDEw7LSI6rG466a8LlxyXG4gICAgICAgIC8vIOunjOyVvSBjYWxs66GcIO2VmOuptCAxMOy0iCDquLDri6TroLjri6TqsIAg67CR7J2YIO2VqOyImCDsi6TtlokuIOydtOufsCDqsr3smrDripQgZm9ya+yUgC5cclxuICAgICAgICAvLyB5aWVsZCBjYWxsKGxvZ2luQVBJKTsgLy8gZm9ya+ulvCDtlZjrqbQg7ISc67KEIOyalOyyreydhCDrs7TrgrTqs6Ag7Iug6rK9IOyViOyTtCDrkqQgcHV07J2EIO2VnOuLpC5cclxuICAgICAgICAvLyBmb3Jr64qUIOusuOygnOqwgCDsg53quLTri6QuIGNhbGzsnbwg65WM64qUIGxvZ2luQVBJ6rCAIOyYpOulmOuCmOuptCBlcnJvcuuhnCDrhJjslrTqsIAg7Jik66WY7LKY66asLlxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIC8vIOyEseqzte2VmOuptCDsnbQg67aA67aEIOuPmeyeke2VnOuLpC5cclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gbG9naW5BUEkg7Iuk7YyoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Fkc2ZqJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTtcclxufVxyXG5cclxuLy8gd2hpbGUodHJ1ZSkgPSB0YWtlRXZlcnnsmYAg67mE7Iq37ZWY6rKMIOyekeyaqS5cclxuLy8gdGFrZUxhdGVzdCDsmYAgdGFrZUV2ZXJ564qUIOuPmeyekeydgCDruYTsirftlaguIOydtOyghCDsmpTssq0g7KSRIOuBneuCmOyngCDslYrsnYDqsowg7J6I64uk66m0IOydtOyghCDsmpTssq0g7Leo7IaM7ZW07KSMLlxyXG4vLyDqt7jrn6zrgpggZGVsYXnqsIAg65Ok7Ja06rCA66m0IOuLpOumhC4gSEVMTE9TQUdBIDPrsojtlZjrqbQgMeuyiOunjCDrnLguIOqwgOyepSDstZzsi6DsnZgg6rKD66eMIOuwm+yVmOuLpCDsuZzri6Q/7J6ELiDrj5nsi5zsl5Ag7Jes65+s67KIIO2VmOuptCDqt7gg7KSRIOuniOyngOunieunjCDrsJvripTri6QuXHJcbmZ1bmN0aW9uKiB3YXRjaEhlbGxvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChIRUxMT19TQUdBLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdCWUVfU0FHQScsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4gICAgLy8g7ISc67KE7JqU7LKtXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2xvZ2luJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICAvLyBhY3Rpb27sl5AgaWQgcGFzc3dvcmQgbmlja+ydtCDrk6TslrTsnojsnYxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsgLy8g7ISc67KE7JqU7LKtIOuztOuDhFxyXG4gICAgICAgIC8veWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoJ+yXkOufrOyehCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ2luKSwgZm9yayh3YXRjaFNpZ25VcCldKTsgLy8g7Iuc7J6R7KCQXHJcbiAgICAvLyBhbGzsnYAg7Jes65+sIOydtO2Ome2KuOulvCDrj5nsi5zsl5Ag7Iuk7ZaJIO2VoCDsiJgg7J6I6rKM64GU7ZWoLlxyXG4gICAgLy8gZm9yaywgY2FsbCDruYTsirftlaguIOqzte2GteygkDog6riw67O47KCB7Jy866GcIO2VqOyImOulvCDsi6TtlontlahcclxuICAgIC8vIGNhbGzsnYAg64+Z6riw7Zi47LacLCBmb3Jr64qUIOu5hOuPmeq4sCDtmLjstpzsnoQuIGZvcmvripQg67mE64+Z6riw6528IOuPmeyLnCDsi6Ttlokg6rCA64qlLlxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgbG9nX2luJyk7XHJcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgIHlpZWxkIHRha2UoTE9HX0lOKTsgLy8gdGFrZShMT0dfSU4sIGxvZ2luKeuhnOq3uOyduCDslaHshKDsnbQg65Ok7Ja07Jik66m0IGxvZ2lu7ZWo7IiY66W8IOyLpO2WiVxyXG4vLyAgICAgICAgIHlpZWxkIGRlbGF5KDIwMDApOyAvLyAy7LSI65Kk7JeQIHN1Y2Nlc3PqsIAg7Iuk7ZaJXHJcbi8vICAgICAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsIC8vIHNhZ2HsnZggZGlzcGF0Y2jsmYAg6rCZ64uk67O066m065CoLlxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdzZGpmJyk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaEhlbGxvKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBzYWdhJyk7XHJcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgICAgIHlpZWxkIHRha2UoSEVMTE9fU0FHQSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHNhZ2EnKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gc2FnYScpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBzYWdhJyk7XHJcbi8vICAgICAgICAgLy8g66as642V7Iqk7J2YIOuPmeyekeydhCDrsKntlbTtlZjsp4Qg7JWK64qU64ukLlxyXG4vLyAgICAgfSAvLyB0YWtl6rCAIEhFTExPX1NBR0Hrpbwg6riw64uk66as6rKg64uk64qUIOqxsOyehC4gbmV4dOqwgCDsmKTrqbQg7Iuk7ZaJ7ZWY6rKg64uk64qUIOqxsOyehC5cclxuLy8gICAgIC8vIHRha2XtlajsiJgg7JWI7JeQIG5leHTqsIAg7J6I7J2MLiDslYzslYTshJwg7ZW07KSMLiDslrjsoJwg7J6s6rKM6rCAIOuQmOuDkOuptCBIRUxMT19TQUdB652864qUIGFjdGlvbuydtCDsmKwg65WM6rmM7KeAXHJcbi8vICAgICAvLyDspokgSEVMTE9fU0FHQSBhY3Rpb27snbQg65Ok7Ja07Jik66m0IOykkeuLqCDtkoguXHJcbi8vICAgICAvLyDruYTrj5nquLAg7JqU7LKt7ZW064+EIOuQmOqzoCwg7YOA7J2066i4IOuEo+yWtOuPhCDrkKguXHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==