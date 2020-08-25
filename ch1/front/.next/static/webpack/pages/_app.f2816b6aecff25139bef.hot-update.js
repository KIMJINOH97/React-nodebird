webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\pages\\signup.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // useCallback으로 evnetlistener들을 감싸준다






var useInput = function useInput() {
  _s();

  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  // 커스텀 훅!
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setter(e.target.value);
  });
  return [value, handler];
};

_s(useInput, "jJC7NbJZBwPw2rLfrH4q62FtgpU=");

var TextInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = function _c(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: value,
    required: true,
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  });
}); // 지나친 최적화긴 함.

_c2 = TextInput;
var TexInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c3 = function _c3(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange;
  // proptypes 확인 차
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, value);
}); // 프로토 타입 확인 차

_c4 = TexInput;
TexInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var Signup = function Signup() {
  _s2();

  // 훅스 사용 실무 input은 항상 value랑 onchange가 짝을 이뤄야한다.
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nick = _useState3[0],
      setNick = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordCheck = _useState5[0],
      setPasswordCheck = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      term = _useState6[0],
      setTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordError = _useState7[0],
      setPasswordError = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      termError = _useState8[0],
      setTermError = _useState8[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isSigningUp = _useSelector.isSigningUp,
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 로그인 누르면 작동
    if (me) {
      alert('로그인 했으니 메인페이지로 이동합니다.');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log('Submit!!!');
    e.preventDefault;

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      alert('약관에 동의 하셔야 합니다');
      return setTermError(true);
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["SIGN_UP_REQUEST"],
      data: {
        id: id,
        password: password,
        nick: nick
      }
    });
    console.log(id, password, nick);
  }, [password, passwordCheck, term]); // useCallback을 쓰면 dependancy들도 넣어 줘야한다. 어떤 것들이 쓰이는 지
  // antd component안에 들어가는 함수들은 useCallback으로 감싸줘야한다.
  // why? 의도치 않은 rerendering이 되기 때문에 >> props로 넘겨주는 함수는 usecallback으로 감싸준다. 통째로 다 재 실행 되기 때문에 막기 위해
  // 함수도 객체기 때문에 새로 생성한 함수는 이전 객체와 다른 객체가 되기 때문에 의도치 않은 리렌더링이 된다.

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  });
  var onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setNick(e.target.value);
  });
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.target.value);
  });
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setTermError(false);
    setTerm(e.target.checked);
  }); //const [id, onChangeId] = useInput('');

  return (// onSubmit > onFinish로 변경됨 antd 문법
    // 폼같은 경우에는 react state 쓰는게 좋음.
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmit,
      style: {
        padding: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-id",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, "\uC544\uC774\uB514"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }), __jsx(TextInput, {
      name: "user-id",
      value: id,
      onChange: onChangeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-nick",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, "\uB2C9\uB124\uC784"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      name: "user-nick",
      value: nick,
      required: true,
      onChange: onChangeNick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      name: "user-password",
      type: "password",
      value: password,
      required: true,
      onChange: onChangePassword,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      name: "user-password-check",
      type: "password",
      value: passwordCheck,
      required: true,
      onChange: onChangePasswordCheck,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }), passwordError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 39
      }
    }, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      name: "user-term",
      checked: term,
      onChange: onChangeTerm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, "\uB9D0\uC744 \uC798 \uB4E3\uC790 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 35
      }
    }, " \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
      style: {
        marginTop: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: isSigningUp,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, "\uAC00\uC785\uD558\uAE30"))))
  ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

_s2(Signup, "FnHgYYZuheap/OozgGYIJCAUoIg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c5 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "TextInput$memo");
$RefreshReg$(_c2, "TextInput");
$RefreshReg$(_c3, "TexInput$memo");
$RefreshReg$(_c4, "TexInput");
$RefreshReg$(_c5, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiaW5pdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHRlciIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJUZXh0SW5wdXQiLCJtZW1vIiwib25DaGFuZ2UiLCJUZXhJbnB1dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIlNpZ251cCIsImlkIiwic2V0SWQiLCJuaWNrIiwic2V0TmljayIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzU2lnbmluZ1VwIiwibWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2hhbmdlSWQiLCJvbkNoYW5nZU5pY2siLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VUZXJtIiwiY2hlY2tlZCIsInBhZGRpbmciLCJjb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXVFOztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBc0I7QUFBQTs7QUFBQSxNQUFyQkMsU0FBcUIsdUVBQVQsSUFBUzs7QUFDMUM7QUFEMEMsa0JBRWxCQyxzREFBUSxDQUFDRCxT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SUFBcEM7QUFBMEMsY0FBUSxFQUFFNEIsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFESixFQUlLeEIsU0FBUyxJQUFJO0FBQUssV0FBSyxFQUFFO0FBQUUyQixhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBSmxCLENBdEJKLEVBNEJJO0FBQUssV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsY0FBUSxFQUFDLFFBQWhDO0FBQXlDLGFBQU8sRUFBRXZCLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosQ0E1QkosQ0FESjtBQUhKLElBM0VpQixDQWtIZDtBQUNOLENBbkhEOztJQUFNbEIsTTtVQVUwQmUsdUQsRUFFWE0sdUQ7OztNQVpmckIsTTtBQXFIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMjgxNmI2YWVjZmYyNTEzOWJlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgbWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLyB1c2VDYWxsYmFja+ycvOuhnCBldm5ldGxpc3RlbmVy65Ok7J2EIOqwkOyLuOykgOuLpFxyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgICAvLyDsu6TsiqTthYAg7ZuFIVxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcclxufSk7IC8vIOyngOuCmOy5nCDstZzsoIHtmZTquLQg7ZWoLlxyXG5cclxuY29uc3QgVGV4SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICAvLyBwcm9wdHlwZXMg7ZmV7J24IOywqFxyXG4gICAgcmV0dXJuIDxkaXY+e3ZhbHVlfTwvZGl2PjtcclxufSk7IC8vIO2UhOuhnO2GoCDtg4DsnoUg7ZmV7J24IOywqFxyXG5cclxuVGV4SW5wdXQucHJvcFR5cGVzID0ge1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgICAvLyDtm4XsiqQg7IKs7JqpIOyLpOustCBpbnB1dOydgCDtla3sg4EgdmFsdWXrnpEgb25jaGFuZ2XqsIAg7Ked7J2EIOydtOukhOyVvO2VnOuLpC5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25pY2ssIHNldE5pY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgaXNTaWduaW5nVXAsIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOuhnOq3uOyduCDriITrpbTrqbQg7J6R64+ZXHJcbiAgICAgICAgaWYgKG1lKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7ZaI7Jy864uIIOuplOyduO2OmOydtOyngOuhnCDsnbTrj5ntlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3VibWl0ISEhJyk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7JW96rSA7JeQIOuPmeydmCDtlZjshZTslbwg7ZWp64uI64ukJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCwgbmljayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dXHJcbiAgICApOyAvLyB1c2VDYWxsYmFja+ydhCDsk7DrqbQgZGVwZW5kYW5jeeuTpOuPhCDrhKPslrQg7KSY7JW87ZWc64ukLiDslrTrlqQg6rKD65Ok7J20IOyTsOydtOuKlCDsp4BcclxuXHJcbiAgICAvLyBhbnRkIGNvbXBvbmVudOyViOyXkCDrk6TslrTqsIDripQg7ZWo7IiY65Ok7J2AIHVzZUNhbGxiYWNr7Jy866GcIOqwkOyLuOykmOyVvO2VnOuLpC5cclxuICAgIC8vIHdoeT8g7J2Y64+E7LmYIOyViuydgCByZXJlbmRlcmluZ+ydtCDrkJjquLAg65WM66y47JeQID4+IHByb3Bz66GcIOuEmOqyqOyjvOuKlCDtlajsiJjripQgdXNlY2FsbGJhY2vsnLzroZwg6rCQ7Iu47KSA64ukLiDthrXsp7jroZwg64ukIOyerCDsi6Ttlokg65CY6riwIOuVjOusuOyXkCDrp4nquLAg7JyE7ZW0XHJcbiAgICAvLyDtlajsiJjrj4Qg6rCd7LK06riwIOuVjOusuOyXkCDsg4jroZwg7IOd7ISx7ZWcIO2VqOyImOuKlCDsnbTsoIQg6rCd7LK07JmAIOuLpOuluCDqsJ3ssrTqsIAg65CY6riwIOuVjOusuOyXkCDsnZjrj4TsuZgg7JWK7J2AIOumrOugjOuNlOungeydtCDrkJzri6QuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU5pY2sgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldE5pY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtwYXNzd29yZF1cclxuICAgICk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIG9uU3VibWl0ID4gb25GaW5pc2jroZwg67OA6rK965CoIGFudGQg66y467KVXHJcbiAgICAgICAgLy8g7Y+86rCZ7J2AIOqyveyasOyXkOuKlCByZWFjdCBzdGF0ZSDsk7DripTqsowg7KKL7J2MLlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0gc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrXCIgdmFsdWU9e25pY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZC1jaGVja1wiPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZENoZWNrfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOunkOydhCDsnpgg65Oj7J6QIOuPmeydmO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+IOyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzU2lnbmluZ1VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6rCA7J6F7ZWY6riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTsgLy/tjIzrnoDsg4kg67KE7Yq87J2AIHR5cGUgPSBwcmltYXJ5ICBodG1sIOyTsOqzoCDsi7bsnLzrqbQgaHRtbFR5cGU9XCJzdWJtaXRcIiDsjajslbztlaggPj4gYnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=