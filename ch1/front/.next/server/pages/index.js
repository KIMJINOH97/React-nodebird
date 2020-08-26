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
    isAddingComment,
    commentAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  });
  console.log(post.id);
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCommentText('');
  }, [commentAdded == true]);
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
        lineNumber: 51,
        columnNumber: 36
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "ellipsis",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }
      }, "\uC2E0\uACE0"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 33
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        danger: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 33
        }
      }, "\uC0AD\uC81C")),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }))],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 24
      }
    }, "\uD314\uB85C\uC6B0"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "\uC090\uC57D")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: `${post.Comments ? post.Comments.length : 0} 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments || [],
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 45
        }
      }, item.User.nickname),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
    img: '',
    Comments: []
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
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 성공에 대한 action.data.postId로 게시글 위치를 찾음

        const post = state.mainPosts[postIndex]; // 찾은 위치로 게시글 선택

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJ1c2VTdGF0ZSIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNBZGRpbmdDb21tZW50IiwiY29tbWVudEFkZGVkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uVG9nZ2xlQ29tbWVudCIsInVzZUNhbGxiYWNrIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm9uU3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwicG9zdElkIiwidXNlRWZmZWN0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlZEF0IiwiaW1nIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInBhZGRpbmdUb3AiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyIsIlBvc3RGb3JtIiwiaW1hZ2VQYXRoIiwiaXNBZGRpbmdQb3N0IiwicG9zdEFkZGVkIiwidGV4dCIsInNldFRleHQiLCJvbkNoYW5nZVRleHQiLCJvblN1Ym1pdEZvcm0iLCJBRERfUE9TVF9SRVFVRVNUIiwibWFyZ2luIiwiZmxvYXQiLCJtYXAiLCJ2IiwiaSIsImRpc3BsYXkiLCJ3aWR0aCIsIkhvbWUiLCJpc0xvZ2dlZEluIiwibWFpblBvc3RzIiwiYyIsImluaXRpYWxTdGF0ZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsIkRhdGUiLCJMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCIsIkxPQURfTUFJTl9QT1NUU19TVUNDRVNTIiwiTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0lNQUdFU19QT1NUU19SRVFVRVNUIiwiTE9BRF9JTUFHRVNfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSU1BR0VTX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfQ09NTUVOVFNfUkVRVUVTVCIsIkxPQURfQ09NTUVOVFNfU1VDQ0VTUyIsIkxPQURfQ09NTUVOVFNfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwicmVkdWNlciIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwiZHVtbXlVc2VyIiwiUG9zdCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dpbmdJbiIsImxvZ2luRXJyb3JSZWFzb24iLCJzaWduZWRVcCIsImlzU2lnbmluZ1VwIiwic2lnblVwRXJyb3JSZWFzb24iLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwidXNlckluZm8iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV19SRVFVRVNUIiwiTE9BRF9GT0xMT1dfU1VDQ0VTUyIsIkxPQURfRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsImlzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7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O0FBR0loRCxvQkFBVSxFQUFFLEtBSGhCO0FBSUlpRCwwQkFBZ0IsRUFBRVYsTUFBTSxDQUFDQyxLQUo3QjtBQUtJakcsWUFBRSxFQUFFO0FBTFI7QUFPSDs7QUFDRCxTQUFLMEgsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT3hILEtBRFA7QUFDYztBQUNWdUQsb0JBQVUsRUFBRSxLQUZoQjtBQUdJekQsWUFBRSxFQUFFO0FBSFI7QUFLSDs7QUFDRCxTQUFLdUgsZUFBTDtBQUFzQjtBQUNsQiwrQ0FDT3JILEtBRFA7QUFFSXlHLGtCQUFRLEVBQUUsS0FGZDtBQUVxQjtBQUNqQkMscUJBQVcsRUFBRSxJQUhqQixDQUd1Qjs7QUFIdkI7QUFLSDs7QUFDRCxTQUFLWSxlQUFMO0FBQXNCO0FBQ2xCLCtDQUNPdEgsS0FEUDtBQUVJeUcsa0JBQVEsRUFBRSxJQUZkO0FBRW9CO0FBQ2hCQyxxQkFBVyxFQUFFLEtBSGpCLENBR3dCOztBQUh4QjtBQUtIOztBQUNELFNBQUthLGVBQUw7QUFBc0I7QUFDbEIsK0NBQ092SCxLQURQO0FBRUl5RyxrQkFBUSxFQUFFLEtBRmQ7QUFFcUI7QUFDakJDLHFCQUFXLEVBQUUsS0FIakI7QUFHd0I7QUFDcEJDLDJCQUFpQixFQUFFYixNQUFNLENBQUNDLEtBSjlCLENBSXFDOztBQUpyQztBQU1IOztBQUNEO0FBQVM7QUFDTCxpQ0FDTy9GLEtBRFA7QUFHSDtBQTNETDtBQTZESCxDQTlERDs7QUFnRWU2RixzRUFBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQzlKQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQXZhdGFyLCBQb3BvdmVyLCBJbnB1dCwgRm9ybSwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgaXNBZGRpbmdDb21tZW50LCBjb21tZW50QWRkZWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHBvc3QuaWQpO1xyXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgaWYgKCFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB1c2VDYWxsYmFja+yXkOyEnCBzdGF0ZeulvCDrhKPslrTso7zrqbQg7IOB7IaN7JeQIOuEo+yWtOykmOyVvO2VqFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW21lICYmIG1lLmlkXVxyXG4gICAgKTsgLy8g6rCd7LK07J2YIOqwkuydhCDrhKPsmrDso7zrj4TroZ0g67mE6rWQ65WM66mUIOyXkOufrOuCmOq4sOqwgCDsiazsm4AuXHJcbiAgICAvLyDsspjsnYzsnZggbWXrpbwg6riw7Ja17ZW0IG51bGzsg4Htg5zrpbwg6riw7Ja17ZWoLlxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfSwgW2NvbW1lbnRBZGRlZCA9PSB0cnVlXSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb21tZW50VGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICBzZXRDb21tZW50VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXsrcG9zdC5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5pbWcgJiYgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPXtwb3N0LmltZ30gLz59XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRUd29Ub25lIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJlbGxpcHNpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkYW5nZXI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8QnV0dG9uPu2MlOuhnOyasDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA+PC9DYXJkLk1ldGE+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0gc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHJvd3M9ezR9IHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtpc0FkZGluZ0NvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKQ7JW9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDB9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWV9PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGltZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB9KSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbi8vIGNvbnN0IGR1bW15ID0ge1xyXG4vLyAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgIGltYWdlUGF0aHM6IFtdLFxyXG4vLyAgICAgbWFpblBvc3RzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcclxuLy8gICAgICAgICAgICAgaW1nOiAnJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZVBhdGgsIGlzQWRkaW5nUG9zdCwgcG9zdEFkZGVkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9LCBbcG9zdEFkZGVkID09PSB0cnVlXSk7IC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg65CY66m0IHRleHTslYgg6rCSIOu5hOybjOykjC5cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDsgLy8g7Y6Y7J207KeAIOyViCDrhJjslrTqsIDqsozrgZQg7ZW07KSMXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3Qg7JqU7LKt7ZaI7Ja0ISEnKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyDsnbTrr7jsp4Ag7JeF66Gc65OcIO2VtOyVvO2VmOq4sCDrlYzrrLjsl5AgZW5jVHlwZeydgCBtdWx0aXBhcnTsnoRcclxuICAgICAgICAvLyBzdHlsZeuEo+ydhCDrlYzripQg6rCd7LK0IO2YleyLneycvOuhnCB7eyDrhKPslrTslbztlaggfX1cclxuICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMHB4IDIwcHgnIH19IG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6H7JeI64KY7JqUXCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nUG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgICAg7Ke57Ke57KixXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRoLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOuwmOuzteusuFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwLyAke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyAvLyBuZXh07JeQ7ISgIOybkOuemCDslYjsjajrj4Qg65CoXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gY29uc3QgZHVtbXkgPSB7IOumrOuNleyKpCBzdGF0ZeqwgCDqsIDsp4Dqs6Ag7J6I7Jy866+A66GcIO2VhOyalCDsl4bsnYwuXHJcbi8vICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4vLyAgICAgaW1hZ2VQYXRoczogW10sXHJcbi8vICAgICBtYWluUG9zdHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxyXG4vLyAgICAgICAgICAgICBpbWc6ICcnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIC8vIGhvb2tzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gdXNlU3RhdGXqsIAgdXNlU2VsZWN0b3LroZwg67CU64CM7JeI64ukIOyDneqwge2VmOuptCDrkJjqs6AsIHNldFN0YXRl6rCAIGRpc3BhdGNo6528IOuztOuptCDrkKguXHJcbiAgICBjb25zdCB7IGlzTG9nZ2VkSW4sIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpOyAvLyDssqsgc3RhdGXripQg7KCE7LK0IHN0YXRlIOyViOyXkOuKlCB1c2Vy7JmAIGlzbG9nZ2VkaW7snbQg65Ok7Ja07J6I7J2MXHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4sIG1lKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIHVzZXLrj4Qg7ZuF7Iqk66GcIOqwgOyguOyYrCDsiJgg7J6I7J2MXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttZSA/IDxkaXY+66Gc6re47J24IO2WiOyKteuLiOuLpCA6IHttZS5uaWNrbmFtZX08L2Rpdj4gOiA8ZGl2PuuhnOq3uOyVhOybgyDtlojsirXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFBvc3RDYXJkIGtleT17Y30gcG9zdD17Y30gLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbi8vIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbicpO1xyXG4vLyAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4vLyAgICAgfSk7IC8vIOydtOufsOyLneycvOuhnCDsp5zrj4Qg65CoLiDqt7jrn6zrgpgg66Gc6re47J247J20IOykkeuzteydtCDrkJjslrQg7JWI65CoLlxyXG5cclxuLy/roZzqt7jsnbgg66Gc6re47JWE7JuDIOq3uOuDpSDthYzsiqTtirjsmqlcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuXHJcbi8vIDPrsoggZGlzcGF0Y2jtlZjrqbQgM+uyiCDrkKDqurzrnbwg7IOd6rCB7ZWY7KeA66eMLCBoZWxsb1NhZ2HqsIAg7J2066+4IOykkeuLqCDrkJjsl4jquLAg65WM66y47JeQXHJcbi8vIOyViOuQqC5cclxuLy8gfSwgW10pO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBMT0dfT1VULFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbik7XHJcbi8vICAgICAvLyBkaXNwYXRjaChsb2dvdXRBY3Rpb24pO1xyXG4vLyB9LCBbXSk7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcclxuICAgICAgICAgICAgaW1nOiAnJyxcclxuICAgICAgICAgICAgQ29tbWVudHM6IFtdLFxyXG4gICAgICAgIH0sIC8vIO2ZlOuptOydmCDtj6zsiqTtirgg65OkXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoOiBbXSwgLy8g66+466as67O06riwIOydtOuvuOyngCDqsr3roZxcclxuICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7Iuk7YyoIOyCrOycoFxyXG4gICAgaXNBZGRpbmdQb3N0OiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDspJFcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7ISx6rO1XHJcbiAgICBhZGRDb21tZW50RXJyb3I6ICcnLFxyXG4gICAgaXNBZGRpbmdDb21tZW50OiBmYWxzZSxcclxuICAgIGNvbW1lbnRBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ+uCmOuKlCDrjZTrr7gg7J6F64uI64ukLicsXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgY29udGVudDogJ+uNlOuvuCDrjJPquIAg7J6F64uI64ukLicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lNQUdFU19QT1NUU19SRVFVRVNUID0gJ0xPQURfSU1BR0VTX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTUFHRVNfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0lNQUdFU19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSU1BR0VTX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9JTUFHRVNfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19SRVFVRVNUID0gJ0xPQURfQ09NTUVOVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MgPSAnTE9BRF9DT01NRU5UU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfRkFJTFVSRSA9ICdMT0FEX0NPTU1FTlRTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOuNlOuvuCDtj6zsiqTtirjqsIAg6riw7KG0IO2PrOyKpO2EsCDslZ7sl5Ag65Ok7Ja06rCQXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FkZGluZ1Bvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7Iuk7YyoIOyCrOycoFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdDb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgLy8g7ISx6rO17JeQIOuMgO2VnCBhY3Rpb24uZGF0YS5wb3N0SWTroZwg6rKM7Iuc6riAIOychOy5mOulvCDssL7snYxcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdOyAvLyDssL7snYAg7JyE7LmY66GcIOqyjOyLnOq4gCDshKDtg51cclxuICAgICAgICAgICAgY29uc3QgQ29tbWVudHMgPSBbLi4ucG9zdC5Db21tZW50cywgZHVtbXlDb21tZW50XTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107IC8vIOuqqOuToCDqsoPsnYAg67aI67OA7ISx65WM66y47J6ELlxyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHsgLi4ucG9zdCwgQ29tbWVudHMgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdDb21tZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIGR1bW15Q29tbWVudCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRBZGRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJjb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBQb3N0OiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG4gICAgRm9sbG93ZXJzOiBbXSxcclxuICAgIGlkOiAxLFxyXG59O1xyXG5cclxuLy8g66as642V7Iqk64qUIOuPmeq4sO2ZlOuhnCDsnpHsmqntlaguIOu5hOuPmeq4sOuhnCDtlZjquLAg7JyE7ZW07ISgIOyCrOqwgOudvOuKlCDrr7jrk6Tsm6jslrTrpbwg64Sj7Ja07JW87ZWoLlxyXG4vLyDsm5DrnpjripQg7ISc67KEIOyqveyXkCBkYXRh6rCAIOyghOuLrOuQmOqzoCwg7ISc67KE6rCAIOuhnOq3uOyduCDshLHqs7XsnbTrnbzripQg7J2R64u17J2EIOuztOuCtOyjvOqzoCwg6re46rG4IOuLpOyLnCDrsJvslYQg66Gc6re47J24IO2VqC5cclxuLy8g7ISc67KE6rCAIOunnuuKlCDsnZHri7XsnYQg67O064K07KO864qUIOqzvOygleydtCDtlYTsmpTtlaguIOq3uOuemOyEnCDtlYTsmpTtlZwg6rKD7J20IOuvuOuTpOybqOyWtC5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAvLyDstIjquLAg6rCSICwg66as7JWh7Yq47J2YIHN0YXRl6528IOuztOuptCDrkKhcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Jes67aAXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ2luRXJyb3JSZWFzb246ICcnLCAvLyDroZzqt7jsnbgg7JeQ65+sIOyCrOycoFxyXG4gICAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcEVycm9yUmVhc29uOiAnJywgLy8g7ZqM7JuQ6rCA7J6FIOyLpO2MqCDsgqzsnKBcclxuICAgIG1lOiBudWxsLFxyXG4gICAgZm9sbG93aW5nTGlzdDogW10sIC8vIO2MlOuhnOyeiSDrpqzsiqTtirhcclxuICAgIGZvbGxvd2VyTGlzdDogW10sIC8vIO2MlOuhnOyasCDrpqzsiqTtirhcclxuICAgIHVzZXJJbmZvOiBudWxsLCAvLyDrgqjsnZgg7KCV67O0XHJcbiAgICBkYXRhOiB7fSxcclxufTtcclxuXHJcbi8vIOuhnOq3uOyduCDrj5nsnpHtlaAg65WMLFxyXG4vLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCuOuLpCAtPiByZXF1ZXN0IC0+IOu5hOuPmeq4sOuhnCBMT0dfSU5fU1VDQ0VTUyBvciBMT0dfSU5fRkFJTFVSRSDshKDtg50+IExPR19JTiDrj5nsnpFcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnOyAvLyDruYTrj5nquLAg7JqU7LKtIOyEnOuyhOyXkCDqsJTri6Qg7JmA7JW87ZWY64qUIVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19TVUNDRVNTID0gJ0xPQURfRk9MTE9XX1NVQ0NFU1MnOyAvLyDslaHshZjsnZgg7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV19GQUlMVVJFID0gJ0xPQURfRk9MTE9XX0ZBSUxVUkUnOyAvLyDslaHshZjsnZgg7J2066aEXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7IC8vIOyVoeyFmOydmCDsnbTrpoRcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJzsgLy8g7JWh7IWY7J2YIOydtOumhFxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBTSUdOX1VQX0lEID0gJ1NJR05fVVBfSUQnO1xyXG4vLyBleHBvcnQgY29uc3QgU0lHTl9VUF9OSUNLID0gJ1NJR05fVVBfTklDSyc7XHJcbi8vIGV4cG9ydCBjb25zdCBTSUdOX1VQX1BBU1NXT1JEID0gJ1NJR05fVVBfUEFTU1dPUkQnO1xyXG4vLyDsm5DrnpjripQg7J2066CH6rKMIO2VtOykmOyVvO2VqC5cclxuXHJcbi8vIOyVhOuemOuKlCBzZXQgU3RhdGXrnbwg67O066m065CoLiBBY3Rpb27qs7wgcmVkdWNlcuuhnCDrtoTrpqzrkKguXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBTdWNjZXNzID0ge1xyXG4vLyAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0ge1xyXG4vLyAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4vLyAgICAgZGF0YSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyB9KTsgLy8g67CU66GcIOumrO2EtFxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIC8vIOuLpOydjCBzdGF0ZeuTpCDtlaAg7ZaJ64+ZXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkVycm9yUmVhc29uOiAnJyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGR1bW15VXNlcixcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dpbkVycm9yUmVhc29uOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyDsiqTtlITroIjrk5wg66y467KVOiDsg4jroZzsmrQg6rCd7LK064KYIOuwsOyXtOydhCDsg53shLHtlZjripQg66y467KVIOunpOuyiCDri6Qg7JOw6rOgIOyeiOydjFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnbmVkVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Jes67aAXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogdHJ1ZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduZWRVcDogdHJ1ZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyXrOu2gFxyXG4gICAgICAgICAgICAgICAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvclJlYXNvbjogYWN0aW9uLmVycm9yLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOyCrOycoFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4vLyBzZXRTdGF0ZSgocHJldlN0YXRlKT0+eyDsmJvrgqAg7Iqk7YWM7J207Yq47JmAIOqwmeyVhOyhjOuKlOyngCDtmZXsnbjtlZjquLAg65WM66y47JeQIOyDiOuhnCDsg53shLEg7ZW07KSY7JW87ZWoLlxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBmaWVsZDogeyAuLi5wcmV2U3RhdGUuZmllbGR9LFxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24qIGdlbmVyYXRvcigpIHtcclxuLy8gICAgIC8vIOygnOuEiOugiOydtO2EsCDrnbzqs6AgKuuKlCDrrLTtlZzsnZgg6rCc64WQIOygnOuEiOugiOydtO2EsOuKlCDtlajsiJgg7Iuk7ZaJ7J2EIOykkeqwhOyXkCDrqYjstpwg7IiYIOyeiOqzoCDsm5DtlaAg65WMIOyerOqwnCDqsIDriqVcclxuLy8gfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==