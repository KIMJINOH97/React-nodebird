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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PostCard = ({
  post
}) => {
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: commentText,
    1: setCommentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    isAddingComment
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  });
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault;

    if (!me) {
      return alert('로그인이 필요합니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        postId: post.id
      }
    }); // useCallback에서 state를 넣어주면 상속에 넣어줘야함
  }, [me && me.id]); // 객체의 값을 넣우주도록 비교때메 에러나기가 쉬움.
  // 처음의 me를 기억해 null상태를 기억함.

  const onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault;
    setCommentText(e.target.value);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt,
    cover: post.img && __jsx("img", {
      alt: "example",
      src: post.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 36
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "ellipsis",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 33
        }
      }, "\uC2E0\uACE0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 33
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        danger: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      }, "\uC0AD\uC81C")),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }))],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 24
      }
    }, "\uD314\uB85C\uC6B0"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    style: {
      paddingTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "\uC090\uC57D")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: `${post.Comments ? post.Comments.length : 0} 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comment || [],
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 45
        }
      }, item.User.nickname),
      content: item.content,
      datetime: item.createdAt,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  })));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [
//         {
//             User: {
//                 id: 1,
//                 nickname: '제로초',
//             },
//             content: '첫 번째 게시글',
//             img: '',
//         },
//     ],
// };

const PostForm = () => {
  const {
    imagePath,
    isAddingPost,
    postAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setText('');
  }, [postAdded === true]); // 포스트 업로드 되면 text안 값 비워줌.

  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value);
  }, []);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault; // 페이지 안 넘어가게끔 해줌

    console.log('post 요청했어!!');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: {
        text
      }
    });
  }, []);
  return (// 이미지 업로드 해야하기 때문에 encType은 multipart임
    // style넣을 때는 객체 형식으로 {{ 넣어야함 }}
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      encType: "multipart/form-data",
      style: {
        margin: '10px 0px 20px'
      },
      onFinish: onSubmitForm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC787\uC5C8\uB098\uC694",
      value: text,
      onChange: onChangeText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      style: {
        float: 'right'
      },
      htmlType: "submit",
      loading: isAddingPost,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9\uCA31")), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, imagePath.map((v, i) => {
      // 반복문
      return __jsx("div", {
        key: v,
        style: {
          display: 'inline-block'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: `http://localhost:3000/ ${v}`,
        style: {
          width: '200px'
        },
        alt: v,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 29
        }
      }), __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 33
        }
      }, "\uC81C\uAC70")));
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\react-nodebird\\ch1\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // next에선 원래 안써도 됨




 // const dummy = { 리덕스 state가 가지고 있으므로 필요 없음.
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [
//         {
//             User: {
//                 id: 1,
//                 nickname: '제로초',
//             },
//             content: '첫 번째 게시글',
//             img: '',
//         },
//     ],
// };

const Home = () => {
  // hooks
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // useState가 useSelector로 바뀌었다 생각하면 되고, setState가 dispatch라 보면 됨.

  const {
    isLoggedIn,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user); // 첫 state는 전체 state 안에는 user와 isloggedin이 들어있음

  const {
    mainPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  console.log(isLoggedIn, me);
  return (// user도 훅스로 가져올 수 있음
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, me ? __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }
    }, "\uB85C\uADF8\uC778 \uD588\uC2B5\uB2C8\uB2E4 : ", me.nickname) : __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 61
      }
    }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 32
      }
    }), mainPosts.map(c => {
      return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: c,
        post: c,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 28
        }
      });
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Home); // useEffect(async () => {
//     dispatch({
//         type: LOG_IN_REQUEST,
//     });
//     await axios.post('/login');
//     dispatch({
//         type: LOG_IN_SUCCESS,
//     }); // 이런식으로 짜도 됨. 그러나 로그인이 중복이 되어 안됨.
//로그인 로그아웃 그냥 테스트용
// dispatch({
//     type: 'HELLO_SAGA',
// });
// dispatch({
//     type: 'HELLO_SAGA',
// });
// dispatch({
//     type: 'HELLO_SAGA',
// });
// 3번 dispatch하면 3번 될꺼라 생각하지만, helloSaga가 이미 중단 되었기 때문에
// 안됨.
// }, []);
//     dispatch({
//         type: LOG_OUT,
//     });
//     dispatch(loginAction);
//     // dispatch(logoutAction);
// }, []);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_IMAGES_POSTS_REQUEST, LOAD_IMAGES_POSTS_SUCCESS, LOAD_IMAGES_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_IMAGE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_REQUEST", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_SUCCESS", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_FAILURE", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_IMAGES_POSTS_REQUEST", function() { return LOAD_IMAGES_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_IMAGES_POSTS_SUCCESS", function() { return LOAD_IMAGES_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_IMAGES_POSTS_FAILURE", function() { return LOAD_IMAGES_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_REQUEST", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_SUCCESS", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_FAILURE", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초'
    },
    content: '첫 번째 게시글',
    img: ''
  } // 화면의 포스트 들
  ],
  imagePath: [],
  // 미리보기 이미지 경로
  addPostError: false,
  // 포스트 업로드 실패 사유
  isAddingPost: false,
  // 포스트 업로드 중
  postAdded: false,
  // 포스트 업로드 성공
  addCommentError: '',
  isAddingComment: false,
  commentAdded: false
};
const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: '제로초'
  },
  content: '나는 더미 입니다.',
  Comments: []
};
const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: '제로초'
  },
  createdAt: new Date(),
  content: '더미 댓글 입니다.'
};
const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_IMAGES_POSTS_REQUEST = 'LOAD_IMAGES_POSTS_REQUEST';
const LOAD_IMAGES_POSTS_SUCCESS = 'LOAD_IMAGES_POSTS_SUCCESS';
const LOAD_IMAGES_POSTS_FAILURE = 'LOAD_IMAGES_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: true
        });
      }

    case ADD_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: false,
          postAdded: true,
          mainPosts: [dummyPost, ...state.mainPosts] // 더미 포스트가 기존 포스터 앞에 들어감

        });
      }

    case ADD_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingPost: false,
          addPostError: action.error // 포스트 업로드 실패 사유

        });
      }

    case ADD_COMMENT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingComment: true
        });
      }

    case ADD_COMMENT_SUCCESS:
      {
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 성공에 대한 action

        const post = state.mainPosts[postIndex];
        const Comments = [...post.Comments, dummyComment];
        const mainPosts = [...state.mainPosts]; // 모든 것은 불변성때문임.

        mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
          Comments
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingComment: false,
          mainPosts,
          commentAdded: true // dummyComment,

        });
      }

    case ADD_COMMENT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          commentAdded: false,
          addCommentError: action.error
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJ1c2VTdGF0ZSIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNBZGRpbmdDb21tZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uVG9nZ2xlQ29tbWVudCIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uU3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwicG9zdElkIiwiaWQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVkQXQiLCJpbWciLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiQ29tbWVudCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyIsIlBvc3RGb3JtIiwiaW1hZ2VQYXRoIiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidGV4dCIsInNldFRleHQiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZVRleHQiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiQUREX1BPU1RfUkVRVUVTVCIsIm1hcmdpbiIsImZsb2F0IiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiLCJIb21lIiwiaXNMb2dnZWRJbiIsIm1haW5Qb3N0cyIsImMiLCJpbml0aWFsU3RhdGUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50RXJyb3IiLCJjb21tZW50QWRkZWQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJEYXRlIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyIsIkxPQURfTUFJTl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9JTUFHRVNfUE9TVFNfUkVRVUVTVCIsIkxPQURfSU1BR0VTX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0lNQUdFU19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsImR1bW15VXNlciIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnaW5nSW4iLCJsb2dpbkVycm9yUmVhc29uIiwic2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcEVycm9yUmVhc29uIiwiZm9sbG93aW5nTGlzdCIsImZvbGxvd2VyTGlzdCIsInVzZXJJbmZvIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9BRF9GT0xMT1dfUkVRVUVTVCIsIkxPQURfRk9MTE9XX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFHSXpELFlBQUUsRUFBRTtBQUhSO0FBS0g7O0FBQ0QsU0FBS3dILGVBQUw7QUFBc0I7QUFDbEIsK0NBQ090SCxLQURQO0FBRUkwRyxrQkFBUSxFQUFFLEtBRmQ7QUFFcUI7QUFDakJDLHFCQUFXLEVBQUUsSUFIakIsQ0FHdUI7O0FBSHZCO0FBS0g7O0FBQ0QsU0FBS1ksZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT3ZILEtBRFA7QUFFSTBHLGtCQUFRLEVBQUUsSUFGZDtBQUVvQjtBQUNoQkMscUJBQVcsRUFBRSxLQUhqQixDQUd3Qjs7QUFIeEI7QUFLSDs7QUFDRCxTQUFLYSxlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPeEgsS0FEUDtBQUVJMEcsa0JBQVEsRUFBRSxLQUZkO0FBRXFCO0FBQ2pCQyxxQkFBVyxFQUFFLEtBSGpCO0FBR3dCO0FBQ3BCQywyQkFBaUIsRUFBRWIsTUFBTSxDQUFDQyxLQUo5QixDQUlxQzs7QUFKckM7QUFNSDs7QUFDRDtBQUFTO0FBQ0wsaUNBQ09oRyxLQURQO0FBR0g7QUEzREw7QUE2REgsQ0E5REQ7O0FBZ0VlOEYsc0VBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7QUM5SkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBBdmF0YXIsIFBvcG92ZXIsIElucHV0LCBGb3JtLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBpc0FkZGluZ0NvbW1lbnQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHVzZUNhbGxiYWNr7JeQ7IScIHN0YXRl66W8IOuEo+yWtOyjvOuptCDsg4Hsho3sl5Ag64Sj7Ja07KSY7JW87ZWoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbbWUgJiYgbWUuaWRdXHJcbiAgICApOyAvLyDqsJ3ssrTsnZgg6rCS7J2EIOuEo+yasOyjvOuPhOuhnSDruYTqtZDrlYzrqZQg7JeQ65+s64KY6riw6rCAIOyJrOybgC5cclxuICAgIC8vIOyymOydjOydmCBtZeulvCDquLDslrXtlbQgbnVsbOyDge2DnOulvCDquLDslrXtlaguXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb21tZW50VGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBzZXRDb21tZW50VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXsrcG9zdC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5pbWcgJiYgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtwb3N0LmltZ30gLz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRUd29Ub25lIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJlbGxpcHNpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYW5nZXI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8QnV0dG9uPu2MlOuhnOyasDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA+PC9DYXJkLk1ldGE+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0gc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHJvd3M9ezR9IHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtpc0FkZGluZ0NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDB9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50IHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e2l0ZW0uY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBpbWc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgfSksXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG4vLyBjb25zdCBkdW1teSA9IHtcclxuLy8gICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbi8vICAgICBpbWFnZVBhdGhzOiBbXSxcclxuLy8gICAgIG1haW5Qb3N0czogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCcsXHJcbi8vICAgICAgICAgICAgIGltZzogJycsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vIH07XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRoLCBpc0FkZGluZ1Bvc3QsIHBvc3RBZGRlZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgfSwgW3Bvc3RBZGRlZCA9PT0gdHJ1ZV0pOyAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOuQmOuptCB0ZXh07JWIIOqwkiDruYTsm4zspIwuXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7IC8vIO2OmOydtOyngCDslYgg64SY7Ja06rCA6rKM64GUIO2VtOykjFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3N0IOyalOyyre2WiOyWtCEhJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8g7J2066+47KeAIOyXheuhnOuTnCDtlbTslbztlZjquLAg65WM66y47JeQIGVuY1R5cGXsnYAgbXVsdGlwYXJ07J6EXHJcbiAgICAgICAgLy8gc3R5bGXrhKPsnYQg65WM64qUIOqwneyytCDtmJXsi53snLzroZwge3sg64Sj7Ja07JW87ZWoIH19XHJcbiAgICAgICAgPEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDBweCAyMHB4JyB9fSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeh+yXiOuCmOyalFwiIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtpc0FkZGluZ1Bvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIOynueynueyosVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aC5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDrsJjrs7XrrLhcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8gJHt2fWB9IHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgLy8gbmV4dOyXkOyEoCDsm5Drnpgg7JWI7I2o64+EIOuQqFxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGNvbnN0IGR1bW15ID0geyDrpqzrjZXsiqQgc3RhdGXqsIAg6rCA7KeA6rOgIOyeiOycvOuvgOuhnCDtlYTsmpQg7JeG7J2MLlxyXG4vLyAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgIGltYWdlUGF0aHM6IFtdLFxyXG4vLyAgICAgbWFpblBvc3RzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcclxuLy8gICAgICAgICAgICAgaW1nOiAnJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICAvLyBob29rc1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHVzZVN0YXRl6rCAIHVzZVNlbGVjdG9y66GcIOuwlOuAjOyXiOuLpCDsg53qsIHtlZjrqbQg65CY6rOgLCBzZXRTdGF0ZeqwgCBkaXNwYXRjaOudvCDrs7TrqbQg65CoLlxyXG4gICAgY29uc3QgeyBpc0xvZ2dlZEluLCBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8g7LKrIHN0YXRl64qUIOyghOyytCBzdGF0ZSDslYjsl5DripQgdXNlcuyZgCBpc2xvZ2dlZGlu7J20IOuTpOyWtOyeiOydjFxyXG4gICAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zb2xlLmxvZyhpc0xvZ2dlZEluLCBtZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyB1c2Vy64+EIO2bheyKpOuhnCDqsIDsoLjsmKwg7IiYIOyeiOydjFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWUgPyA8ZGl2PuuhnOq3uOyduCDtlojsirXri4jri6QgOiB7bWUubmlja25hbWV9PC9kaXY+IDogPGRpdj7roZzqt7jslYTsm4Mg7ZaI7Iq164uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHtpc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQb3N0Q2FyZCBrZXk9e2N9IHBvc3Q9e2N9IC8+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG4vLyB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4nKTtcclxuLy8gICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuLy8gICAgIH0pOyAvLyDsnbTrn7Dsi53snLzroZwg7Kec64+EIOuQqC4g6re465+s64KYIOuhnOq3uOyduOydtCDspJHrs7XsnbQg65CY7Ja0IOyViOuQqC5cclxuXHJcbi8v66Gc6re47J24IOuhnOq3uOyVhOybgyDqt7jrg6Ug7YWM7Iqk7Yq47JqpXHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcblxyXG4vLyAz67KIIGRpc3BhdGNo7ZWY66m0IDPrsogg65Cg6rq86528IOyDneqwge2VmOyngOunjCwgaGVsbG9TYWdh6rCAIOydtOuvuCDspJHri6gg65CY7JeI6riwIOuVjOusuOyXkFxyXG4vLyDslYjrkKguXHJcbi8vIH0sIFtdKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9HX09VVCxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4vLyAgICAgLy8gZGlzcGF0Y2gobG9nb3V0QWN0aW9uKTtcclxuLy8gfSwgW10pO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCcsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgfSwgLy8g7ZmU66m07J2YIO2PrOyKpO2KuCDrk6RcclxuICAgIF0sXHJcbiAgICBpbWFnZVBhdGg6IFtdLCAvLyDrr7jrpqzrs7TquLAg7J2066+47KeAIOqyveuhnFxyXG4gICAgYWRkUG9zdEVycm9yOiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLCAvLyDtj6zsiqTtirgg7JeF66Gc65OcIOykkVxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDshLHqs7VcclxuICAgIGFkZENvbW1lbnRFcnJvcjogJycsXHJcbiAgICBpc0FkZGluZ0NvbW1lbnQ6IGZhbHNlLFxyXG4gICAgY29tbWVudEFkZGVkOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn64KY64qUIOuNlOuvuCDsnoXri4jri6QuJyxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICBjb250ZW50OiAn642U66+4IOuMk+q4gCDsnoXri4jri6QuJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSU1BR0VTX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9JTUFHRVNfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lNQUdFU19QT1NUU19TVUNDRVNTID0gJ0xPQURfSU1BR0VTX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTUFHRVNfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0lNQUdFU19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8g642U66+4IO2PrOyKpO2KuOqwgCDquLDsobQg7Y+s7Iqk7YSwIOyVnuyXkCDrk6TslrTqsJBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvciwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FkZGluZ0NvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAvLyDshLHqs7Xsl5Ag64yA7ZWcIGFjdGlvblxyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IENvbW1lbnRzID0gWy4uLnBvc3QuQ29tbWVudHMsIGR1bW15Q29tbWVudF07XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdOyAvLyDrqqjrk6Ag6rKD7J2AIOu2iOuzgOyEseuVjOusuOyehC5cclxuICAgICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSB7IC4uLnBvc3QsIENvbW1lbnRzIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWRkaW5nQ29tbWVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyBkdW1teUNvbW1lbnQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRToge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50QWRkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgUG9zdDogW10sXHJcbiAgICBGb2xsb3dpbmdzOiBbXSxcclxuICAgIEZvbGxvd2VyczogW10sXHJcbiAgICBpZDogMSxcclxufTtcclxuXHJcbi8vIOumrOuNleyKpOuKlCDrj5nquLDtmZTroZwg7J6R7Jqp7ZWoLiDruYTrj5nquLDroZwg7ZWY6riwIOychO2VtOyEoCDsgqzqsIDrnbzripQg66+465Ok7Juo7Ja066W8IOuEo+yWtOyVvO2VqC5cclxuLy8g7JuQ656Y64qUIOyEnOuyhCDsqr3sl5AgZGF0YeqwgCDsoITri6zrkJjqs6AsIOyEnOuyhOqwgCDroZzqt7jsnbgg7ISx6rO17J20652864qUIOydkeuLteydhCDrs7TrgrTso7zqs6AsIOq3uOqxuCDri6Tsi5wg67Cb7JWEIOuhnOq3uOyduCDtlaguXHJcbi8vIOyEnOuyhOqwgCDrp57ripQg7J2R64u17J2EIOuztOuCtOyjvOuKlCDqs7zsoJXsnbQg7ZWE7JqU7ZWoLiDqt7jrnpjshJwg7ZWE7JqU7ZWcIOqyg+ydtCDrr7jrk6Tsm6jslrQuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgLy8g7LSI6riwIOqwkiAsIOumrOyVoe2KuOydmCBzdGF0ZeudvCDrs7TrqbQg65CoXHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy8g66Gc6re47J24IOyXrOu2gFxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dpbkVycm9yUmVhc29uOiAnJywgLy8g66Gc6re47J24IOyXkOufrCDsgqzsnKBcclxuICAgIHNpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBFcnJvclJlYXNvbjogJycsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7IKs7JygXHJcbiAgICBtZTogbnVsbCxcclxuICAgIGZvbGxvd2luZ0xpc3Q6IFtdLCAvLyDtjJTroZzsnokg66as7Iqk7Yq4XHJcbiAgICBmb2xsb3dlckxpc3Q6IFtdLCAvLyDtjJTroZzsmrAg66as7Iqk7Yq4XHJcbiAgICB1c2VySW5mbzogbnVsbCwgLy8g64Ko7J2YIOygleuztFxyXG4gICAgZGF0YToge30sXHJcbn07XHJcblxyXG4vLyDroZzqt7jsnbgg64+Z7J6R7ZWgIOuVjCxcclxuLy8g7ISc67KE7JeQIOyalOyyreydhCDrs7Trgrjri6QgLT4gcmVxdWVzdCAtPiDruYTrj5nquLDroZwgTE9HX0lOX1NVQ0NFU1Mgb3IgTE9HX0lOX0ZBSUxVUkUg7ISg7YOdPiBMT0dfSU4g64+Z7J6RXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJzsgLy8g67mE64+Z6riwIOyalOyyrSDshJzrsoTsl5Ag6rCU64ukIOyZgOyVvO2VmOuKlCFcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19SRVFVRVNUID0gJ0xPQURfRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV19TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV19GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9JRCA9ICdTSUdOX1VQX0lEJztcclxuLy8gZXhwb3J0IGNvbnN0IFNJR05fVVBfTklDSyA9ICdTSUdOX1VQX05JQ0snO1xyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9QQVNTV09SRCA9ICdTSUdOX1VQX1BBU1NXT1JEJztcclxuLy8g7JuQ656Y64qUIOydtOugh+qyjCDtlbTspJjslbztlaguXHJcblxyXG4vLyDslYTrnpjripQgc2V0IFN0YXRl6528IOuztOuptOuQqC4gQWN0aW9u6rO8IHJlZHVjZXLroZwg67aE66as65CoLlxyXG4vLyBleHBvcnQgY29uc3Qgc2lnblVwU3VjY2VzcyA9IHtcclxuLy8gICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4vLyAgICAgZGF0YSxcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IHtcclxuLy8gICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuLy8gICAgIGRhdGEsXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4vLyAgICAgZGF0YSxcclxuLy8gfSk7IC8vIOuwlOuhnCDrpqzthLRcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDri6TsnYwgc3RhdGXrk6Qg7ZWgIO2WieuPmVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5FcnJvclJlYXNvbjogJycsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9naW5FcnJvclJlYXNvbjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8g7Iqk7ZSE66CI65OcIOusuOuylTog7IOI66Gc7Jq0IOqwneyytOuCmCDrsLDsl7TsnYQg7IOd7ISx7ZWY64qUIOusuOuylSDrp6Trsogg64ukIOyTsOqzoCDsnojsnYxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IHRydWUsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnbmVkVXA6IHRydWUsIC8vIO2ajOybkOqwgOyehSDsl6zrtoBcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsl6zrtoBcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3JSZWFzb246IGFjdGlvbi5lcnJvciwgLy8g7ZqM7JuQ6rCA7J6FIOyLpO2MqCDsgqzsnKBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuLy8gc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pnsg7Jib64KgIOyKpO2FjOydtO2KuOyZgCDqsJnslYTsoYzripTsp4Ag7ZmV7J247ZWY6riwIOuVjOusuOyXkCDsg4jroZwg7IOd7ISxIO2VtOykmOyVvO2VqC5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgZmllbGQ6IHsgLi4ucHJldlN0YXRlLmZpZWxkfSxcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uKiBnZW5lcmF0b3IoKSB7XHJcbi8vICAgICAvLyDsoJzrhIjroIjsnbTthLAg65286rOgICrripQg66y07ZWc7J2YIOqwnOuFkCDsoJzrhIjroIjsnbTthLDripQg7ZWo7IiYIOyLpO2WieydhCDspJHqsITsl5Ag66mI7LacIOyImCDsnojqs6Ag7JuQ7ZWgIOuVjCDsnqzqsJwg6rCA64qlXHJcbi8vIH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=