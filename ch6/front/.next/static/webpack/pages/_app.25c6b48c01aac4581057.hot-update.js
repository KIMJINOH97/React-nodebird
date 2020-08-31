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
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logout),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogout),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loaduser),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function loginAPI(logindata) {
  // 서버에 요청을 보내는 동작
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', logindata, {
    withCredentials: true // 쿠키를 주고 받을 수 있다 서버에서도 설정해야함 cors가 담당.

  }); // 3번째 axios 설정 할 수 있다.
}

function login(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // 성공하면 이 부분 동작한다.
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data // 정보를 서버로부터 받아옴.

          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // loginAPI 실패
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
  }, _marked, null, [[0, 8]]);
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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/', signUpdata);
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

function logoutAPI() {
  // 로그아웃은 data 필요 x 쿠키만 보내주면됨
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout', {}, {
    withCredentials: true // 쿠키 보내기 위함.

  });
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

function logout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logout$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutAPI);

        case 3:
          _context7.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context7.next = 12;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context7.t0
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function watchLogout() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogout$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logout);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked7);
}

function loaduserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/user/', {
    withCredentials: true
  });
}

function loaduser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loaduser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          console.log('시발시발', action.data);
          _context9.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loaduserAPI, action.data);

        case 4:
          result = _context9.sent;
          _context9.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 7:
          _context9.next = 14;
          break;

        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context9.t0
          });

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked8, null, [[0, 9]]);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loaduser);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked9);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYS91c2VyLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwid2F0Y2hMb2dpbiIsIndhdGNoSGVsbG8iLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsImxvZ291dCIsIndhdGNoTG9nb3V0IiwibG9hZHVzZXIiLCJ3YXRjaExvYWRVc2VyIiwidXNlclNhZ2EiLCJsb2dpbkFQSSIsImxvZ2luZGF0YSIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImFjdGlvbiIsImNhbGwiLCJkYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiTE9HX0lOX0ZBSUxVUkUiLCJ0YWtlRXZlcnkiLCJMT0dfSU5fUkVRVUVTVCIsInRha2VMYXRlc3QiLCJIRUxMT19TQUdBIiwiZGVsYXkiLCJzaWduVXBBUEkiLCJzaWduVXBkYXRhIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwibG9nb3V0QVBJIiwiU0lHTl9VUF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwibG9hZHVzZXJBUEkiLCJnZXQiLCJsb2ciLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0F3QlVBLEs7bUdBeUJBQyxVO21HQU9BQyxVO21HQWNBQyxNO21HQTZCQUMsVzttR0FJQUMsTTttR0FlQUMsVzttR0FVQUMsUTttR0FpQkFDLGE7b0dBSWVDLFE7O0FBckp6QjtBQUNBO0FBY0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDekI7QUFDQSxTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUEwQkYsU0FBMUIsRUFBcUM7QUFDeENHLG1CQUFl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VjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWlCLG9FQUFTLENBQUNtQixnRUFBRCxFQUFvQnJDLFFBQXBCLENBQWY7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTW9DLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQzdDLFVBQUQsQ0FBTCxFQUFtQjZDLCtEQUFJLENBQUMxQyxXQUFELENBQXZCLEVBQXNDMEMsK0RBQUksQ0FBQ3hDLFdBQUQsQ0FBMUMsRUFBeUR3QywrREFBSSxDQUFDdEMsYUFBRCxDQUE3RCxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQU9mO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI1YzZiNDhjMDFhYWM0NTgxMDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgY2FsbCwgcHV0LCB0YWtlLCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShsb2dpbmRhdGEpIHtcclxuICAgIC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOuPmeyekVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgbG9naW5kYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLCAvLyDsv6DtgqTrpbwg7KO86rOgIOuwm+ydhCDsiJgg7J6I64ukIOyEnOuyhOyXkOyEnOuPhCDshKTsoJXtlbTslbztlaggY29yc+qwgCDri7Tri7kuXHJcbiAgICB9KTsgLy8gM+uyiOynuCBheGlvcyDshKTsoJUg7ZWgIOyImCDsnojri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICAgIC8vIOygnOuEiOugiOydtO2EsOuKlCBhc3luYyBhd2FpdOuztOuLpCDtlaAg7IiYIOyeiOuKlOqyg+ydtCDrp47ri6QuXHJcbiAgICAvLyB0cnksIGNhdGNoIOuKlCDsi6TtjKjtlaAg7IiYIOyeiOuKlCDsvZTrk5zsl5DshJwg67O07Zi47ZWY6riwIOychO2VtCDsgqzsmqkuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIOuhnOq3uOyduCDtlajsiJjqsIAg64+Z7J6R7ZWY66m0IOyEnOuyhOyXkCDrqLzsoIAg7JqU7LKt7J2EIOuztOuCtOqzoFxyXG4gICAgICAgIC8vIHlpZWxkIGZvcmsobG9nZ2VyKTsgLy8gbG9nZ2Vy64qUIOuCtCDquLDroZ3snYQg66Gc6rmF7ZWY64qUIO2VqOyImCwgMTDstIjqsbjrprwuXHJcbiAgICAgICAgLy8g66eM7JW9IGNhbGzroZwg7ZWY66m0IDEw7LSIIOq4sOuLpOuguOuLpOqwgCDrsJHsnZgg7ZWo7IiYIOyLpO2WiS4g7J2065+wIOqyveyasOuKlCBmb3Jr7JSALlxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTsgLy8gZm9ya+ulvCDtlZjrqbQg7ISc67KEIOyalOyyreydhCDrs7TrgrTqs6Ag7Iug6rK9IOyViOyTtCDrkqQgcHV07J2EIO2VnOuLpC5cclxuICAgICAgICAvLyBmb3Jr64qUIOusuOygnOqwgCDsg53quLTri6QuIGNhbGzsnbwg65WM64qUIGxvZ2luQVBJ6rCAIOyYpOulmOuCmOuptCBlcnJvcuuhnCDrhJjslrTqsIAg7Jik66WY7LKY66asLlxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIC8vIOyEseqzte2VmOuptCDsnbQg67aA67aEIOuPmeyeke2VnOuLpC5cclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyDsoJXrs7Trpbwg7ISc67KE66Gc67aA7YSwIOuwm+yVhOyYtC5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDsgqzsmqnsnpAg7KCV67O064qUIOyEnOuyhOydmCDshLjshZjsl5AsIO2UhOuhoO2KuOyXkOuKlCDshLjshZjsnYQg7KGw7ZqM7ZWgIOyImCDsnojripQg7L+g7YKk66W8IOyghOuLrO2VnOuLpC5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBsb2dpbkFQSSDsi6TtjKhcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG4vLyB3aGlsZSh0cnVlKSA9IHRha2VFdmVyeeyZgCDruYTsirftlZjqsowg7J6R7JqpLlxyXG4vLyB0YWtlTGF0ZXN0IOyZgCB0YWtlRXZlcnnripQg64+Z7J6R7J2AIOu5hOyKt+2VqC4g7J207KCEIOyalOyyrSDspJEg64Gd64KY7KeAIOyViuydgOqyjCDsnojri6TrqbQg7J207KCEIOyalOyyrSDst6jshoztlbTspIwuXHJcbi8vIOq3uOufrOuCmCBkZWxheeqwgCDrk6TslrTqsIDrqbQg64uk66aELiBIRUxMT1NBR0EgM+uyiO2VmOuptCAx67KI66eMIOucuC4g6rCA7J6lIOy1nOyLoOydmCDqsoPrp4wg67Cb7JWY64ukIOy5nOuLpD/snoQuIOuPmeyLnOyXkCDsl6zrn6zrsogg7ZWY66m0IOq3uCDspJEg66eI7KeA66eJ66eMIOuwm+uKlOuLpC5cclxuZnVuY3Rpb24qIHdhdGNoSGVsbG8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEhFTExPX1NBR0EsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0JZRV9TQUdBJyxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoc2lnblVwZGF0YSkge1xyXG4gICAgLy8g7ISc67KE7JqU7LKtXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvJywgc2lnblVwZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICAvLyBhY3Rpb27sl5AgaWQgcGFzc3dvcmQgbmlja+ydtCDrk6TslrTsnojsnYxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTsgLy8g7ISc67KE7JqU7LKtIOuztOuDhCwg65GQ67KI7Ke464qUIOyduOyekHNpZ25VcEFQSeydmCDsnbjsnpDroZwg7KCE64usLlxyXG4gICAgICAgIC8veWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoJ+yXkOufrOyehCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ291dEFQSSgpIHtcclxuICAgIC8vIOuhnOq3uOyVhOybg+ydgCBkYXRhIO2VhOyalCB4IOy/oO2CpOunjCDrs7TrgrTso7zrqbTrkKhcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFxyXG4gICAgICAgICcvdXNlci9sb2dvdXQnLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLCAvLyDsv6DtgqQg67O064K06riwIOychO2VqC5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZHVzZXJBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci8nLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkdXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yLnOuwnOyLnOuwnCcsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWR1c2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZHVzZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2dpbiksIGZvcmsod2F0Y2hTaWduVXApLCBmb3JrKHdhdGNoTG9nb3V0KSwgZm9yayh3YXRjaExvYWRVc2VyKV0pOyAvLyDsi5zsnpHsoJBcclxuICAgIC8vIGFsbOydgCDsl6zrn6wg7J207Y6Z7Yq466W8IOuPmeyLnOyXkCDsi6Ttlokg7ZWgIOyImCDsnojqsozrgZTtlaguXHJcbiAgICAvLyBmb3JrLCBjYWxsIOu5hOyKt+2VqC4g6rO17Ya17KCQOiDquLDrs7jsoIHsnLzroZwg7ZWo7IiY66W8IOyLpO2Wie2VqFxyXG4gICAgLy8gY2FsbOydgCDrj5nquLDtmLjstpwsIGZvcmvripQg67mE64+Z6riwIO2YuOy2nOyehC4gZm9ya+uKlCDruYTrj5nquLDrnbwg64+Z7IucIOyLpO2WiSDqsIDriqUuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBsb2dfaW4nKTtcclxuLy8gICAgIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICAgICAgeWllbGQgdGFrZShMT0dfSU4pOyAvLyB0YWtlKExPR19JTiwgbG9naW4p66Gc6re47J24IOyVoeyEoOydtCDrk6TslrTsmKTrqbQgbG9naW7tlajsiJjrpbwg7Iuk7ZaJXHJcbi8vICAgICAgICAgeWllbGQgZGVsYXkoMjAwMCk7IC8vIDLstIjrkqTsl5Agc3VjY2Vzc+qwgCDsi6TtlolcclxuLy8gICAgICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUywgLy8gc2FnYeydmCBkaXNwYXRjaOyZgCDqsJnri6Trs7TrqbTrkKguXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkamYnKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoSGVsbG8oKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnYmVmb3JlIHNhZ2EnKTtcclxuLy8gICAgIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICAgICAgeWllbGQgdGFrZShIRUxMT19TQUdBKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gc2FnYScpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBzYWdhJyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHNhZ2EnKTtcclxuLy8gICAgICAgICAvLyDrpqzrjZXsiqTsnZgg64+Z7J6R7J2EIOuwqe2VtO2VmOynhCDslYrripTri6QuXHJcbi8vICAgICB9IC8vIHRha2XqsIAgSEVMTE9fU0FHQeulvCDquLDri6TrpqzqsqDri6TripQg6rGw7J6ELiBuZXh06rCAIOyYpOuptCDsi6TtlontlZjqsqDri6TripQg6rGw7J6ELlxyXG4vLyAgICAgLy8gdGFrZe2VqOyImCDslYjsl5AgbmV4dOqwgCDsnojsnYwuIOyVjOyVhOyEnCDtlbTspIwuIOyWuOygnCDsnqzqsozqsIAg65CY64OQ66m0IEhFTExPX1NBR0HrnbzripQgYWN0aW9u7J20IOyYrCDrlYzquYzsp4BcclxuLy8gICAgIC8vIOymiSBIRUxMT19TQUdBIGFjdGlvbuydtCDrk6TslrTsmKTrqbQg7KSR64uoIO2SiC5cclxuLy8gICAgIC8vIOu5hOuPmeq4sCDsmpTssq3tlbTrj4Qg65CY6rOgLCDtg4DsnbTrqLgg64Sj7Ja064+EIOuQqC5cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9