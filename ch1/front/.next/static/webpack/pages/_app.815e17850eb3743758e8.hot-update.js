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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
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
      lineNumber: 17,
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
      lineNumber: 22,
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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"],
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
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-id",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, "\uC544\uC774\uB514"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }), __jsx(TextInput, {
      name: "user-id",
      value: id,
      onChange: onChangeId,
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
      htmlFor: "user-nick",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, "\uB2C9\uB124\uC784"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
        lineNumber: 106,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
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
        lineNumber: 111,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
        lineNumber: 116,
        columnNumber: 21
      }
    }), passwordError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 39
      }
    }, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      name: "user-term",
      checked: term,
      onChange: onChangeTerm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, "\uB9D0\uC744 \uC798 \uB4E3\uC790 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 35
      }
    }, " \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
      style: {
        marginTop: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, "\uAC00\uC785\uD558\uAE30"))))
  ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

_s2(Signup, "4e4AwzS4R8LkIrvK3jiyL37uRBg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInVzZUlucHV0IiwiaW5pdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHRlciIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJUZXh0SW5wdXQiLCJtZW1vIiwib25DaGFuZ2UiLCJUZXhJbnB1dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIlNpZ251cCIsImlkIiwic2V0SWQiLCJuaWNrIiwic2V0TmljayIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInR5cGUiLCJTSUdOX1VQX1JFUVVFU1QiLCJkYXRhIiwib25DaGFuZ2VJZCIsIm9uQ2hhbmdlTmljayIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJvbkNoYW5nZVRlcm0iLCJjaGVja2VkIiwicGFkZGluZyIsImNvbG9yIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTREOztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQXNCO0FBQUE7O0FBQUEsTUFBckJDLFNBQXFCLHVFQUFULElBQVM7O0FBQzFDO0FBRDBDLGtCQUVsQkMsc0RBQVEsQ0FBQ0QsU0FBRCxDQUZVO0FBQUEsTUFFbkNFLEtBRm1DO0FBQUEsTUFFNUJDLE1BRjRCOztBQUcxQyxNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQUMsVUFB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Q0F4R0Q7O0lBQU1qQyxNO1VBVWVnQix1RDs7O01BVmZoQixNO0FBMEdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgxNWUxNzg1MGViMzc0Mzc1OGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSAncmVhY3QnOyAvLyB1c2VDYWxsYmFja+ycvOuhnCBldm5ldGxpc3RlbmVy65Ok7J2EIOqwkOyLuOykgOuLpFxyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gICAgLy8g7Luk7Iqk7YWAIO2bhSFcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIHJldHVybiA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17dmFsdWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz47XHJcbn0pOyAvLyDsp4DrgpjsuZwg7LWc7KCB7ZmU6ri0IO2VqC5cclxuXHJcbmNvbnN0IFRleElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgLy8gcHJvcHR5cGVzIO2ZleyduCDssKhcclxuICAgIHJldHVybiA8ZGl2Pnt2YWx1ZX08L2Rpdj47XHJcbn0pOyAvLyDtlITroZzthqAg7YOA7J6FIO2ZleyduCDssKhcclxuXHJcblRleElucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgLy8g7ZuF7IqkIOyCrOyaqSDsi6TrrLQgaW5wdXTsnYAg7ZWt7IOBIHZhbHVl656RIG9uY2hhbmdl6rCAIOynneydhCDsnbTrpITslbztlZzri6QuXHJcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuaWNrLCBzZXROaWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXQhISEnKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfslb3qtIDsl5Ag64+Z7J2YIO2VmOyFlOyVvCDtlanri4jri6QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2ssXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkLCBuaWNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV1cclxuICAgICk7IC8vIHVzZUNhbGxiYWNr7J2EIOyTsOuptCBkZXBlbmRhbmN565Ok64+EIOuEo+yWtCDspJjslbztlZzri6QuIOyWtOuWpCDqsoPrk6TsnbQg7JOw7J2064qUIOyngFxyXG5cclxuICAgIC8vIGFudGQgY29tcG9uZW507JWI7JeQIOuTpOyWtOqwgOuKlCDtlajsiJjrk6TsnYAgdXNlQ2FsbGJhY2vsnLzroZwg6rCQ7Iu47KSY7JW87ZWc64ukLlxyXG4gICAgLy8gd2h5PyDsnZjrj4TsuZgg7JWK7J2AIHJlcmVuZGVyaW5n7J20IOuQmOq4sCDrlYzrrLjsl5AgPj4gcHJvcHProZwg64SY6rKo7KO864qUIO2VqOyImOuKlCB1c2VjYWxsYmFja+ycvOuhnCDqsJDsi7jspIDri6QuIO2GteynuOuhnCDri6Qg7J6sIOyLpO2WiSDrkJjquLAg65WM66y47JeQIOunieq4sCDsnITtlbRcclxuICAgIC8vIO2VqOyImOuPhCDqsJ3ssrTquLAg65WM66y47JeQIOyDiOuhnCDsg53shLHtlZwg7ZWo7IiY64qUIOydtOyghCDqsJ3ssrTsmYAg64uk66W4IOqwneyytOqwgCDrkJjquLAg65WM66y47JeQIOydmOuPhOy5mCDslYrsnYAg66as66CM642U66eB7J20IOuQnOuLpC5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTmljayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0TmljayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Bhc3N3b3JkXVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gb25TdWJtaXQgPiBvbkZpbmlzaOuhnCDrs4Dqsr3rkKggYW50ZCDrrLjrspVcclxuICAgICAgICAvLyDtj7zqsJnsnYAg6rK97Jqw7JeQ64qUIHJlYWN0IHN0YXRlIOyTsOuKlOqyjCDsoovsnYwuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fSBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja1wiPuuLieuEpOyehDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLW5pY2tcIiB2YWx1ZT17bmlja30gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlTmlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCI+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+IOu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLiA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2VyLXRlcm1cIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg66eQ7J2EIOyemCDrk6PsnpAg64+Z7J2Y7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rlcm1FcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4g7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvCDtlanri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOqwgOyehe2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7IC8v7YyM656A7IOJIOuyhO2KvOydgCB0eXBlID0gcHJpbWFyeSAgaHRtbCDsk7Dqs6Ag7Iu27Jy866m0IGh0bWxUeXBlPVwic3VibWl0XCIg7I2o7JW87ZWoID4+IGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9