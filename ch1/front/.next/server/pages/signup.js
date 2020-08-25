module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\react-nodebird\\ch1\\front\\pages\\signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // useCallback으로 evnetlistener들을 감싸준다






const useInput = (initValue = null) => {
  // 커스텀 훅!
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  });
  return [value, handler];
};
const TextInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  value,
  onChange
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: value,
    required: true,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  });
}); // 지나친 최적화긴 함.

const TexInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  value,
  onChange
}) => {
  // proptypes 확인 차
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, value);
}); // 프로토 타입 확인 차

TexInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

const Signup = () => {
  // 훅스 사용 실무 input은 항상 value랑 onchange가 짝을 이뤄야한다.
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: nick,
    1: setNick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    isSigningUp,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // 로그인 누르면 작동
    if (me) {
      alert('로그인 했으니 메인페이지로 이동합니다.');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
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
        id,
        password,
        nick
      }
    });
    console.log(id, password, nick);
  }, [password, passwordCheck, term]); // useCallback을 쓰면 dependancy들도 넣어 줘야한다. 어떤 것들이 쓰이는 지
  // antd component안에 들어가는 함수들은 useCallback으로 감싸줘야한다.
  // why? 의도치 않은 rerendering이 되기 때문에 >> props로 넘겨주는 함수는 usecallback으로 감싸준다. 통째로 다 재 실행 되기 때문에 막기 위해
  // 함수도 객체기 때문에 새로 생성한 함수는 이전 객체와 다른 객체가 되기 때문에 의도치 않은 리렌더링이 된다.

  const onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setId(e.target.value);
  });
  const onChangeNick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setNick(e.target.value);
  });
  const onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPassword(e.target.value);
  });
  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-id",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, "\uC544\uC774\uB514"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }), __jsx(TextInput, {
      name: "user-id",
      value: id,
      onChange: onChangeId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-nick",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, "\uB2C9\uB124\uC784"), __jsx("br", {
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "user-password-check",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }), passwordError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 39
      }
    }, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      name: "user-term",
      checked: term,
      onChange: onChangeTerm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, "\uB9D0\uC744 \uC798 \uB4E3\uC790 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
      style: {
        color: 'red'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 35
      }
    }, " \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
      style: {
        marginTop: 10
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: isSigningUp,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, "\uAC00\uC785\uD558\uAE30"))))
  ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOW_REQUEST, LOAD_FOLLOW_SUCCESS, LOAD_FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1
}; // 리덕스는 동기화로 작용함. 비동기로 하기 위해선 사가라는 미들웨어를 넣어야함.
// 원래는 서버 쪽에 data가 전달되고, 서버가 로그인 성공이라는 응답을 보내주고, 그걸 다시 받아 로그인 함.
// 서버가 맞는 응답을 보내주는 과정이 필요함. 그래서 필요한 것이 미들웨어.

const initialState = {
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

const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 액션의 이름

const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 액션의 이름

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 비동기 요청 서버에 갔다 와야하는!

const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS'; // 액션의 이름

const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE'; // 액션의 이름

const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'; // 액션의 이름

const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; // 액션의 이름

const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'; // 액션의 이름

const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'; // 액션의 이름

const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // export const SIGN_UP_ID = 'SIGN_UP_ID';
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

const reducer = (state = initialState, action) => {
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

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsImluaXRWYWx1ZSIsInZhbHVlIiwic2V0dGVyIiwidXNlU3RhdGUiLCJoYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiVGV4dElucHV0IiwibWVtbyIsIm9uQ2hhbmdlIiwiVGV4SW5wdXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJTaWdudXAiLCJpZCIsInNldElkIiwibmljayIsInNldE5pY2siLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJ0ZXJtIiwic2V0VGVybSIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiaXNTaWduaW5nVXAiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIlNJR05fVVBfUkVRVUVTVCIsImRhdGEiLCJvbkNoYW5nZUlkIiwib25DaGFuZ2VOaWNrIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJwYWRkaW5nIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ091dCIsImlzTG9nZ2luZ0luIiwibG9naW5FcnJvclJlYXNvbiIsInNpZ25lZFVwIiwic2lnblVwRXJyb3JSZWFzb24iLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwidXNlckluZm8iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV19SRVFVRVNUIiwiTE9BRF9GT0xMT1dfU1VDQ0VTUyIsIkxPQURfRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJpc0xvYWRpbmciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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LG9CQUFVLEVBQUUsS0FGaEI7QUFHSWhDLFlBQUUsRUFBRTtBQUhSO0FBS0g7O0FBQ0QsU0FBS2UsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT2IsS0FEUDtBQUVJa0Msa0JBQVEsRUFBRSxLQUZkO0FBRXFCO0FBQ2pCckMscUJBQVcsRUFBRSxJQUhqQixDQUd1Qjs7QUFIdkI7QUFLSDs7QUFDRCxTQUFLZ0QsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDTzdDLEtBRFA7QUFFSWtDLGtCQUFRLEVBQUUsSUFGZDtBQUVvQjtBQUNoQnJDLHFCQUFXLEVBQUUsS0FIakIsQ0FHd0I7O0FBSHhCO0FBS0g7O0FBQ0QsU0FBS2lELGVBQUw7QUFBc0I7QUFDbEIsK0NBQ085QyxLQURQO0FBRUlrQyxrQkFBUSxFQUFFLEtBRmQ7QUFFcUI7QUFDakJyQyxxQkFBVyxFQUFFLEtBSGpCO0FBR3dCO0FBQ3BCc0MsMkJBQWlCLEVBQUUwQixNQUFNLENBQUNFLEtBSjlCLENBSXFDOztBQUpyQztBQU1IOztBQUNEO0FBQVM7QUFDTCxpQ0FDTy9ELEtBRFA7QUFHSDtBQTNETDtBQTZESCxDQTlERDs7QUFnRWU0RCxzRUFBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQzlKQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ251cC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIG1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gdXNlQ2FsbGJhY2vsnLzroZwgZXZuZXRsaXN0ZW5lcuuTpOydhCDqsJDsi7jspIDri6RcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gICAgLy8g7Luk7Iqk7YWAIO2bhSFcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIHJldHVybiA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17dmFsdWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz47XHJcbn0pOyAvLyDsp4DrgpjsuZwg7LWc7KCB7ZmU6ri0IO2VqC5cclxuXHJcbmNvbnN0IFRleElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgLy8gcHJvcHR5cGVzIO2ZleyduCDssKhcclxuICAgIHJldHVybiA8ZGl2Pnt2YWx1ZX08L2Rpdj47XHJcbn0pOyAvLyDtlITroZzthqAg7YOA7J6FIO2ZleyduCDssKhcclxuXHJcblRleElucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgLy8g7ZuF7IqkIOyCrOyaqSDsi6TrrLQgaW5wdXTsnYAg7ZWt7IOBIHZhbHVl656RIG9uY2hhbmdl6rCAIOynneydhCDsnbTrpITslbztlZzri6QuXHJcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuaWNrLCBzZXROaWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7IGlzU2lnbmluZ1VwLCBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDroZzqt7jsnbgg64iE66W066m0IOyekeuPmVxyXG4gICAgICAgIGlmIChtZSkge1xyXG4gICAgICAgICAgICBhbGVydCgn66Gc6re47J24IO2WiOycvOuLiCDrqZTsnbjtjpjsnbTsp4DroZwg7J2064+Z7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Ym1pdCEhIScpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yVveq0gOyXkCDrj5nsnZgg7ZWY7IWU7JW8IO2VqeuLiOuLpCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmljayxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQsIG5pY2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3Bhc3N3b3JkLCBwYXNzd29yZENoZWNrLCB0ZXJtXVxyXG4gICAgKTsgLy8gdXNlQ2FsbGJhY2vsnYQg7JOw66m0IGRlcGVuZGFuY3nrk6Trj4Qg64Sj7Ja0IOykmOyVvO2VnOuLpC4g7Ja065akIOqyg+uTpOydtCDsk7DsnbTripQg7KeAXHJcblxyXG4gICAgLy8gYW50ZCBjb21wb25lbnTslYjsl5Ag65Ok7Ja06rCA64qUIO2VqOyImOuTpOydgCB1c2VDYWxsYmFja+ycvOuhnCDqsJDsi7jspJjslbztlZzri6QuXHJcbiAgICAvLyB3aHk/IOydmOuPhOy5mCDslYrsnYAgcmVyZW5kZXJpbmfsnbQg65CY6riwIOuVjOusuOyXkCA+PiBwcm9wc+uhnCDrhJjqsqjso7zripQg7ZWo7IiY64qUIHVzZWNhbGxiYWNr7Jy866GcIOqwkOyLuOykgOuLpC4g7Ya17Ke466GcIOuLpCDsnqwg7Iuk7ZaJIOuQmOq4sCDrlYzrrLjsl5Ag66eJ6riwIOychO2VtFxyXG4gICAgLy8g7ZWo7IiY64+EIOqwneyytOq4sCDrlYzrrLjsl5Ag7IOI66GcIOyDneyEse2VnCDtlajsiJjripQg7J207KCEIOqwneyytOyZgCDri6Trpbgg6rCd7LK06rCAIOuQmOq4sCDrlYzrrLjsl5Ag7J2Y64+E7LmYIOyViuydgCDrpqzroIzrjZTrp4HsnbQg65Cc64ukLlxyXG4gICAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VOaWNrID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXROaWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcGFzc3dvcmRdXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gICAgICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBvblN1Ym1pdCA+IG9uRmluaXNo66GcIOuzgOqyveuQqCBhbnRkIOusuOuylVxyXG4gICAgICAgIC8vIO2PvOqwmeydgCDqsr3smrDsl5DripQgcmVhY3Qgc3RhdGUg7JOw64qU6rKMIOyii+ydjC5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1uaWNrXCI+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItbmlja1wiIHZhbHVlPXtuaWNrfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VOaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtY2hlY2tcIj7ruYTrsIDrsojtmLgg7ZmV7J24PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja30gLz5cclxuICAgICAgICAgICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4g67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbmFtZT1cInVzZXItdGVybVwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrp5DsnYQg7J6YIOuTo+yekCDrj5nsnZjtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICB7dGVybUVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PiDslb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtpc1NpZ25pbmdVcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOqwgOyehe2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7IC8v7YyM656A7IOJIOuyhO2KvOydgCB0eXBlID0gcHJpbWFyeSAgaHRtbCDsk7Dqs6Ag7Iu27Jy866m0IGh0bWxUeXBlPVwic3VibWl0XCIg7I2o7JW87ZWoID4+IGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iLCJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBQb3N0OiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICAgIGlkOiAxLFxyXG59O1xyXG5cclxuLy8g66as642V7Iqk64qUIOuPmeq4sO2ZlOuhnCDsnpHsmqntlaguIOu5hOuPmeq4sOuhnCDtlZjquLAg7JyE7ZW07ISgIOyCrOqwgOudvOuKlCDrr7jrk6Tsm6jslrTrpbwg64Sj7Ja07JW87ZWoLlxyXG4vLyDsm5DrnpjripQg7ISc67KEIOyqveyXkCBkYXRh6rCAIOyghOuLrOuQmOqzoCwg7ISc67KE6rCAIOuhnOq3uOyduCDshLHqs7XsnbTrnbzripQg7J2R64u17J2EIOuztOuCtOyjvOqzoCwg6re46rG4IOuLpOyLnCDrsJvslYQg66Gc6re47J24IO2VqC5cclxuLy8g7ISc67KE6rCAIOunnuuKlCDsnZHri7XsnYQg67O064K07KO864qUIOqzvOygleydtCDtlYTsmpTtlaguIOq3uOuemOyEnCDtlYTsmpTtlZwg6rKD7J20IOuvuOuTpOybqOyWtC5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAvLyDstIjquLAg6rCSICwg66as7JWh7Yq47J2YIHN0YXRl6528IOuztOuptCDrkKhcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Jes67aAXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ2luRXJyb3JSZWFzb246ICcnLCAvLyDroZzqt7jsnbgg7JeQ65+sIOyCrOycoFxyXG4gICAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiAnJywgLy8g7ZqM7JuQ6rCA7J6FIOyLpO2MqCDsgqzsnKBcclxuICAgIG1lOiBudWxsLFxyXG4gICAgZm9sbG93aW5nTGlzdDogW10sIC8vIO2MlOuhnOyeiSDrpqzsiqTtirhcclxuICAgIGZvbGxvd2VyTGlzdDogW10sIC8vIO2MlOuhnOyasCDrpqzsiqTtirhcclxuICAgIHVzZXJJbmZvOiBudWxsLCAvLyDrgqjsnZgg7KCV67O0XHJcbiAgICBkYXRhOiB7fSxcclxufTtcclxuXHJcbi8vIOuhnOq3uOyduCDrj5nsnpHtlaAg65WMLFxyXG4vLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCuOuLpCAtPiByZXF1ZXN0IC0+IOu5hOuPmeq4sOuhnCBMT0dfSU5fU1VDQ0VTUyBvciBMT0dfSU5fRkFJTFVSRSDshKDtg50+IExPR19JTiDrj5nsnpFcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnOyAvLyDruYTrj5nquLAg7JqU7LKtIOyEnOuyhOyXkCDqsJTri6Qg7JmA7JW87ZWY64qUIVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19TVUNDRVNTID0gJ0xPQURfRk9MTE9XX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19GQUlMVVJFID0gJ0xPQURfRk9MTE9XX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBTSUdOX1VQX0lEID0gJ1NJR05fVVBfSUQnO1xyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9OSUNLID0gJ1NJR05fVVBfTklDSyc7XHJcbi8vIGV4cG9ydCBjb25zdCBTSUdOX1VQX1BBU1NXT1JEID0gJ1NJR05fVVBfUEFTU1dPUkQnO1xyXG4vLyDsm5DrnpjripQg7J2066CH6rKMIO2VtOykmOyVvO2VqC5cclxuXHJcbi8vIOyVhOuemOuKlCBzZXQgU3RhdGXrnbwg67O066m065CoLiBBY3Rpb27qs7wgcmVkdWNlcuuhnCDrtoTrpqzrkKguXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0ge1xyXG4vLyAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0ge1xyXG4vLyAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4vLyAgICAgZGF0YSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyB9KTsgLy8g67CU66GcIOumrO2EtFxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOuLpOydjCBzdGF0ZeuTpCDtlaAg7ZaJ64+ZXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkVycm9yUmVhc29uOiAnJyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGR1bW15VXNlcixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDsiqTtlITroIjrk5wg66y467KVOiDsg4jroZzsmrQg6rCd7LK064KYIOuwsOyXtOydhCDsg53shLHtlZjripQg66y467KVIOunpOuyiCDri6Qg7JOw6rOgIOyeiOydjFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogdHJ1ZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduZWRVcDogdHJ1ZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvclJlYXNvbjogYWN0aW9uLmVycm9yLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4vLyBzZXRTdGF0ZSgocHJldlN0YXRlKT0+eyDsmJvrgqAg7Iqk7YWM7J207Yq47JmAIOqwmeyVhOyhjOuKlOyngCDtmZXsnbjtlZjquLAg65WM66y47JeQIOyDiOuhnCDsg53shLEg7ZW07KSY7JW87ZWoLlxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBmaWVsZDogeyAuLi5wcmV2U3RhdGUuZmllbGR9LFxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24qIGdlbmVyYXRvcigpIHtcclxuLy8gICAgIC8vIOygnOuEiOugiOydtO2EsCDrnbzqs6AgKuuKlCDrrLTtlZzsnZgg6rCc64WQIOygnOuEiOugiOydtO2EsOuKlCDtlajsiJgg7Iuk7ZaJ7J2EIOykkeqwhOyXkCDrqYjstpwg7IiYIOyeiOqzoCDsm5DtlaAg65WMIOyerOqwnCDqsIDriqVcclxuLy8gfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==