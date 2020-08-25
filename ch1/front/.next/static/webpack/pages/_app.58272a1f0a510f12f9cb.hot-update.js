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

function signUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoSGVsbG8iLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIiwibG9naW5BUEkiLCJheGlvcyIsInBvc3QiLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwidGFrZUV2ZXJ5IiwiTE9HX0lOX1JFUVVFU1QiLCJ0YWtlTGF0ZXN0IiwiSEVMTE9fU0FHQSIsInNpZ25VcEFQSSIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVNVQSxLO21HQXdCQUMsVTttR0FPQUMsVTttR0FjQUMsTTttR0FlQUMsVzttR0FJZUMsUTs7QUF6RXpCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVSLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTUSxpQkFBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBVFI7QUFBQTtBQVVRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ047QUFDQUMsZ0JBQUksRUFBRUMsNkRBQWNBO0FBRmQsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlUTtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxpQkFBTyxDQUFDRSxLQUFSO0FBakJSO0FBa0JRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVLLDZEQUFjQTtBQURkLFdBQUQsQ0FBVDs7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JBLFNBQVVmLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1nQixvRUFBUyxDQUFDQyw2REFBRCxFQUFpQmxCLEtBQWpCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUlBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBVUUsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWlCLHFFQUFVLENBQUNDLFVBQUQsc0ZBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCLDJCQUFNWCxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFEeUI7QUFBQTtBQUV6QiwyQkFBTUMsOERBQUcsQ0FBQztBQUNOQywwQkFBSSxFQUFFO0FBREEscUJBQUQsQ0FBVDs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYixFQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFTVSxTQUFULEdBQXFCO0FBQ2pCO0FBQ0EsU0FBT2QsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVMLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUSxpQkFBTU0sZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSFI7QUFBQTtBQUlRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVXLDhEQUFlQTtBQURmLFdBQUQsQ0FBVDs7QUFKUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUVFULGlCQUFPLENBQUNFLEtBQVI7QUFSUjtBQVNRLGlCQUFNTCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVZLDhEQUFlQTtBQURmLFdBQUQsQ0FBVDs7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFVbkIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWEsb0VBQVMsQ0FBQ08sOERBQUQsRUFBa0JyQixNQUFsQixDQUFmOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1vQiw4REFBRyxDQUFDLENBQUNDLCtEQUFJLENBQUN6QixVQUFELENBQUwsRUFBbUJ5QiwrREFBSSxDQUFDdEIsV0FBRCxDQUF2QixDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQU9mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU4MjcyYTFmMGE1MTBmMTJmOWNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgY2FsbCwgcHV0LCB0YWtlLCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKCkge1xyXG4gICAgLy8g7ISc67KE7JeQIOyalOyyreydhCDrs7TrgrTripQg64+Z7J6RXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2xvZ2luJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbigpIHtcclxuICAgIC8vIOygnOuEiOugiOydtO2EsOuKlCBhc3luYyBhd2FpdOuztOuLpCDtlaAg7IiYIOyeiOuKlOqyg+ydtCDrp47ri6QuXHJcbiAgICAvLyB0cnksIGNhdGNoIOuKlCDsi6TtjKjtlaAg7IiYIOyeiOuKlCDsvZTrk5zsl5DshJwg67O07Zi47ZWY6riwIOychO2VtCDsgqzsmqkuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIOuhnOq3uOyduCDtlajsiJjqsIAg64+Z7J6R7ZWY66m0IOyEnOuyhOyXkCDrqLzsoIAg7JqU7LKt7J2EIOuztOuCtOqzoFxyXG4gICAgICAgIC8vIHlpZWxkIGZvcmsobG9nZ2VyKTsgLy8gbG9nZ2Vy64qUIOuCtCDquLDroZ3snYQg66Gc6rmF7ZWY64qUIO2VqOyImCwgMTDstIjqsbjrprwuXHJcbiAgICAgICAgLy8g66eM7JW9IGNhbGzroZwg7ZWY66m0IDEw7LSIIOq4sOuLpOuguOuLpOqwgCDrsJHsnZgg7ZWo7IiYIOyLpO2WiS4g7J2065+wIOqyveyasOuKlCBmb3Jr7JSALlxyXG4gICAgICAgIC8vIHlpZWxkIGNhbGwobG9naW5BUEkpOyAvLyBmb3Jr66W8IO2VmOuptCDshJzrsoQg7JqU7LKt7J2EIOuztOuCtOqzoCDsi6Dqsr0g7JWI7JO0IOuSpCBwdXTsnYQg7ZWc64ukLlxyXG4gICAgICAgIC8vIGZvcmvripQg66y47KCc6rCAIOyDneq4tOuLpC4gY2FsbOydvCDrlYzripQgbG9naW5BUEnqsIAg7Jik66WY64KY66m0IGVycm9y66GcIOuEmOyWtOqwgCDsmKTrpZjsspjrpqwuXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgLy8g7ISx6rO17ZWY66m0IOydtCDrtoDrtoQg64+Z7J6R7ZWc64ukLlxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBsb2dpbkFQSSDsi6TtjKhcclxuICAgICAgICBjb25zb2xlLmxvZygnYWRzZmonKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG4vLyB3aGlsZSh0cnVlKSA9IHRha2VFdmVyeeyZgCDruYTsirftlZjqsowg7J6R7JqpLlxyXG4vLyB0YWtlTGF0ZXN0IOyZgCB0YWtlRXZlcnnripQg64+Z7J6R7J2AIOu5hOyKt+2VqC4g7J207KCEIOyalOyyrSDspJEg64Gd64KY7KeAIOyViuydgOqyjCDsnojri6TrqbQg7J207KCEIOyalOyyrSDst6jshoztlbTspIwuXHJcbi8vIOq3uOufrOuCmCBkZWxheeqwgCDrk6TslrTqsIDrqbQg64uk66aELiBIRUxMT1NBR0EgM+uyiO2VmOuptCAx67KI66eMIOucuC4g6rCA7J6lIOy1nOyLoOydmCDqsoPrp4wg67Cb7JWY64ukIOy5nOuLpD/snoQuIOuPmeyLnOyXkCDsl6zrn6zrsogg7ZWY66m0IOq3uCDspJEg66eI7KeA66eJ66eMIOuwm+uKlOuLpC5cclxuZnVuY3Rpb24qIHdhdGNoSGVsbG8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEhFTExPX1NBR0EsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0JZRV9TQUdBJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgICAvLyDshJzrsoTsmpTssq1cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbG9naW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgY2FsbChzaWduVXBBUEkpOyAvLyDshJzrsoTsmpTssq0g67O064OEXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hTaWduVXApXSk7IC8vIOyLnOyekeygkFxyXG4gICAgLy8gYWxs7J2AIOyXrOufrCDsnbTtjpntirjrpbwg64+Z7Iuc7JeQIOyLpO2WiSDtlaAg7IiYIOyeiOqyjOuBlO2VqC5cclxuICAgIC8vIGZvcmssIGNhbGwg67mE7Iq37ZWoLiDqs7XthrXsoJA6IOq4sOuzuOyggeycvOuhnCDtlajsiJjrpbwg7Iuk7ZaJ7ZWoXHJcbiAgICAvLyBjYWxs7J2AIOuPmeq4sO2YuOy2nCwgZm9ya+uKlCDruYTrj5nquLAg7Zi47Lac7J6ELiBmb3Jr64qUIOu5hOuPmeq4sOudvCDrj5nsi5wg7Iuk7ZaJIOqwgOuKpS5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnYmVmb3JlIGxvZ19pbicpO1xyXG4vLyAgICAgd2hpbGUgKHRydWUpIHtcclxuLy8gICAgICAgICB5aWVsZCB0YWtlKExPR19JTik7IC8vIHRha2UoTE9HX0lOLCBsb2dpbinroZzqt7jsnbgg7JWh7ISg7J20IOuTpOyWtOyYpOuptCBsb2dpbu2VqOyImOulvCDsi6TtlolcclxuLy8gICAgICAgICB5aWVsZCBkZWxheSgyMDAwKTsgLy8gMuy0iOuSpOyXkCBzdWNjZXNz6rCAIOyLpO2WiVxyXG4vLyAgICAgICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLCAvLyBzYWdh7J2YIGRpc3BhdGNo7JmAIOqwmeuLpOuztOuptOuQqC5cclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2RqZicpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hIZWxsbygpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgc2FnYScpO1xyXG4vLyAgICAgd2hpbGUgKHRydWUpIHtcclxuLy8gICAgICAgICB5aWVsZCB0YWtlKEhFTExPX1NBR0EpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBzYWdhJyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHNhZ2EnKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gc2FnYScpO1xyXG4vLyAgICAgICAgIC8vIOumrOuNleyKpOydmCDrj5nsnpHsnYQg67Cp7ZW07ZWY7KeEIOyViuuKlOuLpC5cclxuLy8gICAgIH0gLy8gdGFrZeqwgCBIRUxMT19TQUdB66W8IOq4sOuLpOumrOqyoOuLpOuKlCDqsbDsnoQuIG5leHTqsIAg7Jik66m0IOyLpO2Wie2VmOqyoOuLpOuKlCDqsbDsnoQuXHJcbi8vICAgICAvLyB0YWtl7ZWo7IiYIOyViOyXkCBuZXh06rCAIOyeiOydjC4g7JWM7JWE7IScIO2VtOykjC4g7Ja47KCcIOyerOqyjOqwgCDrkJjrg5DrqbQgSEVMTE9fU0FHQeudvOuKlCBhY3Rpb27snbQg7JisIOuVjOq5jOyngFxyXG4vLyAgICAgLy8g7KaJIEhFTExPX1NBR0EgYWN0aW9u7J20IOuTpOyWtOyYpOuptCDspJHri6gg7ZKILlxyXG4vLyAgICAgLy8g67mE64+Z6riwIOyalOyyre2VtOuPhCDrkJjqs6AsIO2DgOydtOuouCDrhKPslrTrj4Qg65CoLlxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=