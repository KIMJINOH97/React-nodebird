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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login());

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

function signUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 3:
          _context5.next = 10;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4, null, [[0, 5]]);
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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin()), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp())]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoSGVsbG8iLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9HX0lOX1JFUVVFU1QiLCJ0YWtlTGF0ZXN0IiwiSEVMTE9fU0FHQSIsInNpZ25VcEFQSSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVNVQSxLO21HQXdCQUMsVTttR0FPQUMsVTttR0FjQUMsTTttR0FjQUMsVzttR0FJZUMsUTs7QUF4RXpCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTUSxpQkFBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBVFI7QUFBQTtBQVVRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ047QUFDQUMsZ0JBQUksRUFBRUMsNkRBQWNBO0FBRmQsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlUTtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxpQkFBTyxDQUFDRSxLQUFSO0FBakJSO0FBa0JRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVLLDZEQUFjQTtBQURkLFdBQUQsQ0FBVDs7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVmLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1nQixvRUFBUyxDQUFDQyw2REFBRCxFQUFpQmxCLEtBQUssRUFBdEIsQ0FBZjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBSUE7QUFDQTtBQUNBOzs7QUFDQSxTQUFVRSxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNaUIscUVBQVUsQ0FBQ0MsVUFBRCxzRkFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekIsMkJBQU1YLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUR5QjtBQUFBO0FBRXpCLDJCQUFNQyw4REFBRyxDQUFDO0FBQ05DLDBCQUFJLEVBQUU7QUFEQSxxQkFBRCxDQUFUOztBQUZ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFiLEVBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFNBQVNVLFNBQVQsR0FBcUI7QUFDakI7QUFDQSxTQUFPZCw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsUUFBWCxDQUFQO0FBQ0g7O0FBRUQsU0FBVUwsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdRLGlCQUFNTyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVXLDhEQUFlQTtBQURmLFdBQUQsQ0FBVDs7QUFIUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT1FULGlCQUFPLENBQUNFLEtBQVI7QUFQUjtBQVFRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVZLDhEQUFlQTtBQURmLFdBQUQsQ0FBVDs7QUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSxTQUFVbkIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWEsb0VBQVMsQ0FBQ08sOERBQUQsRUFBa0JyQixNQUFsQixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1vQiw4REFBRyxDQUFDLENBQUNDLCtEQUFJLENBQUN6QixVQUFVLEVBQVgsQ0FBTCxFQUFxQnlCLCtEQUFJLENBQUN0QixXQUFXLEVBQVosQ0FBekIsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FPZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZTFhM2E2MmIxN2QxOWM1MmU1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnksIGNhbGwsIHB1dCwgdGFrZSwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSSgpIHtcclxuICAgIC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOuPmeyekVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9sb2dpbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9naW4oKSB7XHJcbiAgICAvLyDsoJzrhIjroIjsnbTthLDripQgYXN5bmMgYXdhaXTrs7Tri6Qg7ZWgIOyImCDsnojripTqsoPsnbQg66eO64ukLlxyXG4gICAgLy8gdHJ5LCBjYXRjaCDripQg7Iuk7Yyo7ZWgIOyImCDsnojripQg7L2U65Oc7JeQ7IScIOuztO2YuO2VmOq4sCDsnITtlbQg7IKs7JqpLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDroZzqt7jsnbgg7ZWo7IiY6rCAIOuPmeyeke2VmOuptCDshJzrsoTsl5Ag66i87KCAIOyalOyyreydhCDrs7TrgrTqs6BcclxuICAgICAgICAvLyB5aWVsZCBmb3JrKGxvZ2dlcik7IC8vIGxvZ2dlcuuKlCDrgrQg6riw66Gd7J2EIOuhnOq5he2VmOuKlCDtlajsiJgsIDEw7LSI6rG466a8LlxyXG4gICAgICAgIC8vIOunjOyVvSBjYWxs66GcIO2VmOuptCAxMOy0iCDquLDri6TroLjri6TqsIAg67CR7J2YIO2VqOyImCDsi6TtlokuIOydtOufsCDqsr3smrDripQgZm9ya+yUgC5cclxuICAgICAgICAvLyB5aWVsZCBjYWxsKGxvZ2luQVBJKTsgLy8gZm9ya+ulvCDtlZjrqbQg7ISc67KEIOyalOyyreydhCDrs7TrgrTqs6Ag7Iug6rK9IOyViOyTtCDrkqQgcHV07J2EIO2VnOuLpC5cclxuICAgICAgICAvLyBmb3Jr64qUIOusuOygnOqwgCDsg53quLTri6QuIGNhbGzsnbwg65WM64qUIGxvZ2luQVBJ6rCAIOyYpOulmOuCmOuptCBlcnJvcuuhnCDrhJjslrTqsIAg7Jik66WY7LKY66asLlxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIC8vIOyEseqzte2VmOuptCDsnbQg67aA67aEIOuPmeyeke2VnOuLpC5cclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gbG9naW5BUEkg7Iuk7YyoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Fkc2ZqJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKCkpO1xyXG59XHJcblxyXG4vLyB3aGlsZSh0cnVlKSA9IHRha2VFdmVyeeyZgCDruYTsirftlZjqsowg7J6R7JqpLlxyXG4vLyB0YWtlTGF0ZXN0IOyZgCB0YWtlRXZlcnnripQg64+Z7J6R7J2AIOu5hOyKt+2VqC4g7J207KCEIOyalOyyrSDspJEg64Gd64KY7KeAIOyViuydgOqyjCDsnojri6TrqbQg7J207KCEIOyalOyyrSDst6jshoztlbTspIwuXHJcbi8vIOq3uOufrOuCmCBkZWxheeqwgCDrk6TslrTqsIDrqbQg64uk66aELiBIRUxMT1NBR0EgM+uyiO2VmOuptCAx67KI66eMIOucuC4g6rCA7J6lIOy1nOyLoOydmCDqsoPrp4wg67Cb7JWY64ukIOy5nOuLpD/snoQuIOuPmeyLnOyXkCDsl6zrn6zrsogg7ZWY66m0IOq3uCDspJEg66eI7KeA66eJ66eMIOuwm+uKlOuLpC5cclxuZnVuY3Rpb24qIHdhdGNoSGVsbG8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEhFTExPX1NBR0EsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0JZRV9TQUdBJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgICAvLyDshJzrsoTsmpTssq1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbG9naW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgY2FsbChzaWduVXBBUEkpOyAvLyDshJzrsoTsmpTssq0g67O064OEXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbigpKSwgZm9yayh3YXRjaFNpZ25VcCgpKV0pOyAvLyDsi5zsnpHsoJBcclxuICAgIC8vIGFsbOydgCDsl6zrn6wg7J207Y6Z7Yq466W8IOuPmeyLnOyXkCDsi6Ttlokg7ZWgIOyImCDsnojqsozrgZTtlaguXHJcbiAgICAvLyBmb3JrLCBjYWxsIOu5hOyKt+2VqC4g6rO17Ya17KCQOiDquLDrs7jsoIHsnLzroZwg7ZWo7IiY66W8IOyLpO2Wie2VqFxyXG4gICAgLy8gY2FsbOydgCDrj5nquLDtmLjstpwsIGZvcmvripQg67mE64+Z6riwIO2YuOy2nOyehC4gZm9ya+uKlCDruYTrj5nquLDrnbwg64+Z7IucIOyLpO2WiSDqsIDriqUuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBsb2dfaW4nKTtcclxuLy8gICAgIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICAgICAgeWllbGQgdGFrZShMT0dfSU4pOyAvLyB0YWtlKExPR19JTiwgbG9naW4p66Gc6re47J24IOyVoeyEoOydtCDrk6TslrTsmKTrqbQgbG9naW7tlajsiJjrpbwg7Iuk7ZaJXHJcbi8vICAgICAgICAgeWllbGQgZGVsYXkoMjAwMCk7IC8vIDLstIjrkqTsl5Agc3VjY2Vzc+qwgCDsi6TtlolcclxuLy8gICAgICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUywgLy8gc2FnYeydmCBkaXNwYXRjaOyZgCDqsJnri6Trs7TrqbTrkKguXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkamYnKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoSGVsbG8oKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnYmVmb3JlIHNhZ2EnKTtcclxuLy8gICAgIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICAgICAgeWllbGQgdGFrZShIRUxMT19TQUdBKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gc2FnYScpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBzYWdhJyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHNhZ2EnKTtcclxuLy8gICAgICAgICAvLyDrpqzrjZXsiqTsnZgg64+Z7J6R7J2EIOuwqe2VtO2VmOynhCDslYrripTri6QuXHJcbi8vICAgICB9IC8vIHRha2XqsIAgSEVMTE9fU0FHQeulvCDquLDri6TrpqzqsqDri6TripQg6rGw7J6ELiBuZXh06rCAIOyYpOuptCDsi6TtlontlZjqsqDri6TripQg6rGw7J6ELlxyXG4vLyAgICAgLy8gdGFrZe2VqOyImCDslYjsl5AgbmV4dOqwgCDsnojsnYwuIOyVjOyVhOyEnCDtlbTspIwuIOyWuOygnCDsnqzqsozqsIAg65CY64OQ66m0IEhFTExPX1NBR0HrnbzripQgYWN0aW9u7J20IOyYrCDrlYzquYzsp4BcclxuLy8gICAgIC8vIOymiSBIRUxMT19TQUdBIGFjdGlvbuydtCDrk6TslrTsmKTrqbQg7KSR64uoIO2SiC5cclxuLy8gICAgIC8vIOu5hOuPmeq4sCDsmpTssq3tlbTrj4Qg65CY6rOgLCDtg4DsnbTrqLgg64Sj7Ja064+EIOuQqC5cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9