webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_IMAGES_POSTS_REQUEST, LOAD_IMAGES_POSTS_SUCCESS, LOAD_IMAGES_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_IMAGE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
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
var dummyPost = {
  User: {
    id: 1,
    nickname: '제로초'
  },
  content: '나는 더미 입니다.',
  Comments: []
};
var dummyComment = {
  User: {
    id: 1,
    nickname: '제로초'
  },
  createdAt: new Date(),
  content: '더미 댓글 입니다.'
};
var LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
var LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
var LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_IMAGES_POSTS_REQUEST = 'LOAD_IMAGES_POSTS_REQUEST';
var LOAD_IMAGES_POSTS_SUCCESS = 'LOAD_IMAGES_POSTS_SUCCESS';
var LOAD_IMAGES_POSTS_FAILURE = 'LOAD_IMAGES_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
var LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
var LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
          mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)) // 더미 포스트가 기존 포스터 앞에 들어감

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
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });
        var post = state.mainPosts[postIndex];
        var Comments = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments), [action.data.comment]);

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts); // 모든 것은 불변성때문임.


        mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
          Comments: Comments
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingComment: false,
          mainPosts: mainPosts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJVc2VyIiwiaWQiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJpbWciLCJpbWFnZVBhdGgiLCJhZGRQb3N0RXJyb3IiLCJpc0FkZGluZ1Bvc3QiLCJwb3N0QWRkZWQiLCJhZGRDb21tZW50RXJyb3IiLCJpc0FkZGluZ0NvbW1lbnQiLCJjb21tZW50QWRkZWQiLCJkdW1teVBvc3QiLCJDb21tZW50cyIsImR1bW15Q29tbWVudCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCIsIkxPQURfTUFJTl9QT1NUU19TVUNDRVNTIiwiTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0lNQUdFU19QT1NUU19SRVFVRVNUIiwiTE9BRF9JTUFHRVNfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSU1BR0VTX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwiZGF0YSIsInBvc3RJZCIsInBvc3QiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxRQUFJLEVBQUU7QUFDRkMsUUFBRSxFQUFFLENBREY7QUFFRkMsY0FBUSxFQUFFO0FBRlIsS0FEVjtBQUtJQyxXQUFPLEVBQUUsVUFMYjtBQU1JQyxPQUFHLEVBQUU7QUFOVCxHQURPLENBUUo7QUFSSSxHQURhO0FBV3hCQyxXQUFTLEVBQUUsRUFYYTtBQVdUO0FBQ2ZDLGNBQVksRUFBRSxLQVpVO0FBWUg7QUFDckJDLGNBQVksRUFBRSxLQWJVO0FBYUg7QUFDckJDLFdBQVMsRUFBRSxLQWRhO0FBY047QUFDbEJDLGlCQUFlLEVBQUUsRUFmTztBQWdCeEJDLGlCQUFlLEVBQUUsS0FoQk87QUFpQnhCQyxjQUFZLEVBQUU7QUFqQlUsQ0FBckI7QUFvQlAsSUFBTUMsU0FBUyxHQUFHO0FBQ2RaLE1BQUksRUFBRTtBQUNGQyxNQUFFLEVBQUUsQ0FERjtBQUVGQyxZQUFRLEVBQUU7QUFGUixHQURRO0FBS2RDLFNBQU8sRUFBRSxZQUxLO0FBTWRVLFVBQVEsRUFBRTtBQU5JLENBQWxCO0FBU0EsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCZCxNQUFJLEVBQUU7QUFDRkMsTUFBRSxFQUFFLENBREY7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FEVztBQUtqQmEsV0FBUyxFQUFFLElBQUlDLElBQUosRUFMTTtBQU1qQmIsU0FBTyxFQUFFO0FBTlEsQ0FB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LFNBQVMsR0FBRyw2RkFBSWtELEtBQUssQ0FBQ2xELFNBQWIsQ0FBZixDQUpzQixDQUlrQjs7O0FBQ3hDQSxpQkFBUyxDQUFDc0QsU0FBRCxDQUFULG1DQUE0QkssSUFBNUI7QUFBa0M3QyxrQkFBUSxFQUFSQTtBQUFsQztBQUNBLCtDQUNPb0MsS0FEUDtBQUVJdkMseUJBQWUsRUFBRSxLQUZyQjtBQUdJWCxtQkFBUyxFQUFUQSxTQUhKO0FBSUlZLHNCQUFZLEVBQUUsSUFKbEIsQ0FLSTs7QUFMSjtBQU9IOztBQUNELFNBQUtvQyxtQkFBTDtBQUEwQjtBQUN0QiwrQ0FDT0UsS0FEUDtBQUVJdEMsc0JBQVksRUFBRSxLQUZsQjtBQUdJRix5QkFBZSxFQUFFeUMsTUFBTSxDQUFDRTtBQUg1QjtBQUtIOztBQUNEO0FBQVM7QUFDTCxpQ0FDT0gsS0FEUDtBQUdIO0FBckRMO0FBdURILENBeEREOztBQXlEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzExZGI3N2M5ZGYwYzhjMzIwOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgIH0sIC8vIO2ZlOuptOydmCDtj6zsiqTtirgg65OkXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoOiBbXSwgLy8g66+466as67O06riwIOydtOuvuOyngCDqsr3roZxcclxuICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7Iuk7YyoIOyCrOycoFxyXG4gICAgaXNBZGRpbmdQb3N0OiBmYWxzZSwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDspJFcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsIC8vIO2PrOyKpO2KuCDsl4XroZzrk5wg7ISx6rO1XHJcbiAgICBhZGRDb21tZW50RXJyb3I6ICcnLFxyXG4gICAgaXNBZGRpbmdDb21tZW50OiBmYWxzZSxcclxuICAgIGNvbW1lbnRBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ICfrgpjripQg642U66+4IOyeheuLiOuLpC4nLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICBjb250ZW50OiAn642U66+4IOuMk+q4gCDsnoXri4jri6QuJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSU1BR0VTX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9JTUFHRVNfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0lNQUdFU19QT1NUU19TVUNDRVNTID0gJ0xPQURfSU1BR0VTX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9JTUFHRVNfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0lNQUdFU19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRpbmdQb3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8g642U66+4IO2PrOyKpO2KuOqwgCDquLDsobQg7Y+s7Iqk7YSwIOyVnuyXkCDrk6TslrTqsJBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWRkaW5nUG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvciwgLy8g7Y+s7Iqk7Yq4IOyXheuhnOuTnCDsi6TtjKgg7IKs7JygXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FkZGluZ0NvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IENvbW1lbnRzID0gWy4uLnBvc3QuQ29tbWVudHMsIGFjdGlvbi5kYXRhLmNvbW1lbnRdO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTsgLy8g66qo65OgIOqyg+ydgCDrtojrs4DshLHrlYzrrLjsnoQuXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0geyAuLi5wb3N0LCBDb21tZW50cyB9O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FkZGluZ0NvbW1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gZHVtbXlDb21tZW50LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudEFkZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=