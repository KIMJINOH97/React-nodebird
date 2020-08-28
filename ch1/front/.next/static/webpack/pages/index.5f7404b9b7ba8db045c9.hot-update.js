webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\pages\\index.js",
    _s = $RefreshSig$();

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

var Home = function Home() {
  _s();

  // hooks
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // useState가 useSelector로 바뀌었다 생각하면 되고, setState가 dispatch라 보면 됨.

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // 첫 state는 전체 state 안에는 user와 isloggedin이 들어있음


  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  console.log(me);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_MAIN_POSTS_REQUEST"]
    });
  });
  return (// user도 훅스로 가져올 수 있음
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, me ? __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }, "\uB85C\uADF8\uC778 \uD588\uC2B5\uB2C8\uB2E4 : ", me.nickname) : __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 61
      }
    }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 24
      }
    }), mainPosts.map(function (c) {
      return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: c,
        post: c,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 28
        }
      });
    })))
  );
};

_s(Home, "SjOs5WQYacRgg+StJiACe7tEKoY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
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

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJuaWNrbmFtZSIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQW9EOztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUZlLENBSWY7O0FBSmUscUJBS0FDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBTFg7QUFBQSxNQUtQQyxFQUxPLGdCQUtQQSxFQUxPLEVBS29DOzs7QUFMcEMsc0JBTU9ILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBTmxCO0FBQUEsTUFNUEMsU0FOTyxpQkFNUEEsU0FOTzs7QUFPZkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVo7QUFFQUsseURBQVMsQ0FBQyxZQUFNO0FBQ1pWLFlBQVEsQ0FBQztBQUNMVyxVQUFJLEVBQUVDLHNFQUF1QkE7QUFEeEIsS0FBRCxDQUFSO0FBR0gsR0FKUSxDQUFUO0FBTUEsU0FDSTtBQUNBLHVFQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS1AsRUFBRSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBQWlCQSxFQUFFLENBQUNRLFFBQXBCLENBQUgsR0FBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFEaEQsRUFFS1IsRUFBRSxJQUFJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZYLEVBR0tFLFNBQVMsQ0FBQ08sR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBTztBQUNsQixhQUFPLE1BQUMsNERBQUQ7QUFBVSxXQUFHLEVBQUVBLENBQWY7QUFBa0IsWUFBSSxFQUFFQSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDSCxLQUZBLENBSEwsQ0FESjtBQUZKO0FBWUgsQ0EzQkQ7O0dBQU1oQixJO1VBRWVFLHVELEVBR0ZDLHVELEVBQ09BLHVEOzs7S0FOcEJILEk7QUE2QlNBLG1FQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWY3NDA0YjliN2JhOGRiMDQ1YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyAvLyBuZXh07JeQ7ISgIOybkOuemCDslYjsjajrj4Qg65CoXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuLy8gY29uc3QgZHVtbXkgPSB7IOumrOuNleyKpCBzdGF0ZeqwgCDqsIDsp4Dqs6Ag7J6I7Jy866+A66GcIO2VhOyalCDsl4bsnYwuXHJcbi8vICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4vLyAgICAgaW1hZ2VQYXRoczogW10sXHJcbi8vICAgICBtYWluUG9zdHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxyXG4vLyAgICAgICAgICAgICBpbWc6ICcnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIC8vIGhvb2tzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gdXNlU3RhdGXqsIAgdXNlU2VsZWN0b3LroZwg67CU64CM7JeI64ukIOyDneqwge2VmOuptCDrkJjqs6AsIHNldFN0YXRl6rCAIGRpc3BhdGNo6528IOuztOuptCDrkKguXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpOyAvLyDssqsgc3RhdGXripQg7KCE7LK0IHN0YXRlIOyViOyXkOuKlCB1c2Vy7JmAIGlzbG9nZ2VkaW7snbQg65Ok7Ja07J6I7J2MXHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnNvbGUubG9nKG1lKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIHVzZXLrj4Qg7ZuF7Iqk66GcIOqwgOyguOyYrCDsiJgg7J6I7J2MXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttZSA/IDxkaXY+66Gc6re47J24IO2WiOyKteuLiOuLpCA6IHttZS5uaWNrbmFtZX08L2Rpdj4gOiA8ZGl2PuuhnOq3uOyVhOybgyDtlojsirXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQb3N0Q2FyZCBrZXk9e2N9IHBvc3Q9e2N9IC8+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG4vLyB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBhd2FpdCBheGlvcy5wb3N0KCcvbG9naW4nKTtcclxuLy8gICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuLy8gICAgIH0pOyAvLyDsnbTrn7Dsi53snLzroZwg7Kec64+EIOuQqC4g6re465+s64KYIOuhnOq3uOyduOydtCDspJHrs7XsnbQg65CY7Ja0IOyViOuQqC5cclxuXHJcbi8v66Gc6re47J24IOuhnOq3uOyVhOybgyDqt7jrg6Ug7YWM7Iqk7Yq47JqpXHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcbi8vIGRpc3BhdGNoKHtcclxuLy8gICAgIHR5cGU6ICdIRUxMT19TQUdBJyxcclxuLy8gfSk7XHJcblxyXG4vLyAz67KIIGRpc3BhdGNo7ZWY66m0IDPrsogg65Cg6rq86528IOyDneqwge2VmOyngOunjCwgaGVsbG9TYWdh6rCAIOydtOuvuCDspJHri6gg65CY7JeI6riwIOuVjOusuOyXkFxyXG4vLyDslYjrkKguXHJcbi8vIH0sIFtdKTtcclxuXHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9HX09VVCxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5BY3Rpb24pO1xyXG4vLyAgICAgLy8gZGlzcGF0Y2gobG9nb3V0QWN0aW9uKTtcclxuLy8gfSwgW10pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9