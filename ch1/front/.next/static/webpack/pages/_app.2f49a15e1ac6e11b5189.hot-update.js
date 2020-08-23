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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
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
      lineNumber: 16,
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
      lineNumber: 21,
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

  var dispatch = useDispatch();
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

    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["signUpAction"]);
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
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmit,
      style: {
        padding: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-id",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, "\uC544\uC774\uB514"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }), __jsx(TextInput, {
      name: "user-id",
      value: id,
      onChange: onChangeId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-nick",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, "\uB2C9\uB124\uC784"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
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
        lineNumber: 96,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 101,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
        lineNumber: 106,
        columnNumber: 21
      }
    }), passwordError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 39
      }
    }, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      name: "user-term",
      checked: term,
      onChange: onChangeTerm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, "\uB9D0\uC744 \uC798 \uB4E3\uC790 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 35
      }
    }, " \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
      style: {
        marginTop: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, "\uAC00\uC785\uD558\uAE30"))))
  ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

_s2(Signup, "4e4AwzS4R8LkIrvK3jiyL37uRBg=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiaW5pdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHRlciIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJUZXh0SW5wdXQiLCJtZW1vIiwib25DaGFuZ2UiLCJUZXhJbnB1dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIlNpZ251cCIsImlkIiwic2V0SWQiLCJuaWNrIiwic2V0TmljayIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInNpZ25VcEFjdGlvbiIsIm9uQ2hhbmdlSWQiLCJvbkNoYW5nZU5pY2siLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VUZXJtIiwiY2hlY2tlZCIsInBhZGRpbmciLCJjb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTREOztBQUM1RDtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFzQjtBQUFBOztBQUFBLE1BQXJCQyxTQUFxQix1RUFBVCxJQUFTOztBQUMxQztBQUQwQyxrQkFFbEJDLHNEQUFRLENBQUNELFNBQUQsQ0FGVTtBQUFBLE1BRW5DRSxLQUZtQztBQUFBLE1BRTVCQyxNQUY0Qjs7QUFHMUMsTUFBTUMsT0FBTyxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUMvQkgsVUFB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RCxXQUFLLEVBQUVsQixhQUF6RDtBQUF3RSxjQUFRLE1BQWhGO0FBQWlGLGNBQVEsRUFBRW1CLHFCQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFJS2YsYUFBYSxJQUFJO0FBQUssV0FBSyxFQUFFO0FBQUVtQixhQUFLLEVBQUU7QUFBVCxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBSnRCLENBaEJKLEVBc0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDZDQUFEO0FBQVUsVUFBSSxFQUFDLFdBQWY7QUFBMkIsYUFBTyxFQUFFckIsSUFBcEM7QUFBMEMsY0FBUSxFQUFFa0IsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFESixFQUlLZCxTQUFTLElBQUk7QUFBSyxXQUFLLEVBQUU7QUFBRWlCLGFBQUssRUFBRTtBQUFULE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFKbEIsQ0F0QkosRUE0Qkk7QUFBSyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixjQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESixDQTVCSixDQURKO0FBRkosSUF4RGlCLENBOEZkO0FBQ04sQ0EvRkQ7O0lBQU0vQixNOztNQUFBQSxNO0FBaUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJmNDlhMTVlMWFjNmUxMWI1MTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSAncmVhY3QnOyAvLyB1c2VDYWxsYmFja+ycvOuhnCBldm5ldGxpc3RlbmVy65Ok7J2EIOqwkOyLuOykgOuLpFxyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBzaWduVXBBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgICAvLyDsu6TsiqTthYAg7ZuFIVxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59O1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXt2YWx1ZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcclxufSk7IC8vIOyngOuCmOy5nCDstZzsoIHtmZTquLQg7ZWoLlxyXG5cclxuY29uc3QgVGV4SW5wdXQgPSBtZW1vKCh7IHZhbHVlLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICAvLyBwcm9wdHlwZXMg7ZmV7J24IOywqFxyXG4gICAgcmV0dXJuIDxkaXY+e3ZhbHVlfTwvZGl2PjtcclxufSk7IC8vIO2UhOuhnO2GoCDtg4DsnoUg7ZmV7J24IOywqFxyXG5cclxuVGV4SW5wdXQucHJvcFR5cGVzID0ge1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgICAvLyDtm4XsiqQg7IKs7JqpIOyLpOustCBpbnB1dOydgCDtla3sg4EgdmFsdWXrnpEgb25jaGFuZ2XqsIAg7Ked7J2EIOydtOukhOyVvO2VnOuLpC5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25pY2ssIHNldE5pY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Ym1pdCEhIScpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yVveq0gOyXkCDrj5nsnZgg7ZWY7IWU7JW8IO2VqeuLiOuLpCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChzaWduVXBBY3Rpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Bhc3N3b3JkLCBwYXNzd29yZENoZWNrLCB0ZXJtXVxyXG4gICAgKTsgLy8gdXNlQ2FsbGJhY2vsnYQg7JOw66m0IGRlcGVuZGFuY3nrk6Trj4Qg64Sj7Ja0IOykmOyVvO2VnOuLpC4g7Ja065akIOqyg+uTpOydtCDsk7DsnbTripQg7KeAXHJcblxyXG4gICAgLy8gYW50ZCBjb21wb25lbnTslYjsl5Ag65Ok7Ja06rCA64qUIO2VqOyImOuTpOydgCB1c2VDYWxsYmFja+ycvOuhnCDqsJDsi7jspJjslbztlZzri6QuXHJcbiAgICAvLyB3aHk/IOydmOuPhOy5mCDslYrsnYAgcmVyZW5kZXJpbmfsnbQg65CY6riwIOuVjOusuOyXkCA+PiBwcm9wc+uhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZWNhbGxiYWNr7Jy866GcIOqwkOyLuOykgOuLpC4g7Ya17Ke466GcIOuLpCDsnqwg7Iuk7ZaJIOuQmOq4sCDrlYzrrLjsl5Ag66eJ6riwIOychO2VtFxyXG4gICAgLy8g7ZWo7IiY64+EIOqwneyytOq4sCDrlYzrrLjsl5Ag7IOI66GcIOyDneyEse2VnCDtlajsiJjripQg7J207KCEIOqwneyytOyZgCDri6Trpbgg6rCd7LK06rCAIOuQmOq4sCDrlYzrrLjsl5Ag7J2Y64+E7LmYIOyViuydgCDrpqzroIzrjZTrp4HsnbQg65Cc64ukLlxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VOaWNrID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXROaWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcGFzc3dvcmRdXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBvblN1Ym1pdCA+IG9uRmluaXNo66GcIOuzgOqyveuQqCBhbnRkIOusuOuylVxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0gc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrXCIgdmFsdWU9e25pY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZC1jaGVja1wiPuu5hOuwgOuyiO2YuCDtmZXsnbg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZENoZWNrfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOunkOydhCDsnpgg65Oj7J6QIOuPmeydmO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+IOyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDqsIDsnoXtlZjquLBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApOyAvL+2MjOuegOyDiSDrsoTtirzsnYAgdHlwZSA9IHByaW1hcnkgIGh0bWwg7JOw6rOgIOyLtuycvOuptCBodG1sVHlwZT1cInN1Ym1pdFwiIOyNqOyVvO2VqCA+PiBidXR0b24gdHlwZSA9IFwic3VibWl0XCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==