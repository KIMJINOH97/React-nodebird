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
  }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJuaWNrbmFtZSIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQW9EOztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUZlLENBSWY7O0FBSmUscUJBS0FDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBTFg7QUFBQSxNQUtQQyxFQUxPLGdCQUtQQSxFQUxPLEVBS29DOzs7QUFMcEMsc0JBTU9ILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBTmxCO0FBQUEsTUFNUEMsU0FOTyxpQkFNUEEsU0FOTzs7QUFPZkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVo7QUFFQUsseURBQVMsQ0FBQyxZQUFNO0FBQ1pWLFlBQVEsQ0FBQztBQUNMVyxVQUFJLEVBQUVDLHNFQUF1QkE7QUFEeEIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0k7QUFDQSx1RUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tQLEVBQUUsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUFpQkEsRUFBRSxDQUFDUSxRQUFwQixDQUFILEdBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBRGhELEVBRUtSLEVBQUUsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGWCxFQUdLRSxTQUFTLENBQUNPLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQU87QUFDbEIsYUFBTyxNQUFDLDREQUFEO0FBQVUsV0FBRyxFQUFFQSxDQUFmO0FBQWtCLFlBQUksRUFBRUEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0gsS0FGQSxDQUhMLENBREo7QUFGSjtBQVlILENBM0JEOztHQUFNaEIsSTtVQUVlRSx1RCxFQUdGQyx1RCxFQUNPQSx1RDs7O0tBTnBCSCxJO0FBNkJTQSxtRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxMGQ0M2MzYjBmYWQxNjczNjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgLy8gbmV4dOyXkOyEoCDsm5Drnpgg7JWI7I2o64+EIOuQqFxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbi8vIGNvbnN0IGR1bW15ID0geyDrpqzrjZXsiqQgc3RhdGXqsIAg6rCA7KeA6rOgIOyeiOycvOuvgOuhnCDtlYTsmpQg7JeG7J2MLlxyXG4vLyAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgIGltYWdlUGF0aHM6IFtdLFxyXG4vLyAgICAgbWFpblBvc3RzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcclxuLy8gICAgICAgICAgICAgaW1nOiAnJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICAvLyBob29rc1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHVzZVN0YXRl6rCAIHVzZVNlbGVjdG9y66GcIOuwlOuAjOyXiOuLpCDsg53qsIHtlZjrqbQg65CY6rOgLCBzZXRTdGF0ZeqwgCBkaXNwYXRjaOudvCDrs7TrqbQg65CoLlxyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTsgLy8g7LKrIHN0YXRl64qUIOyghOyytCBzdGF0ZSDslYjsl5DripQgdXNlcuyZgCBpc2xvZ2dlZGlu7J20IOuTpOyWtOyeiOydjFxyXG4gICAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zb2xlLmxvZyhtZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTUFJTl9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gdXNlcuuPhCDtm4XsiqTroZwg6rCA7KC47JisIOyImCDsnojsnYxcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21lID8gPGRpdj7roZzqt7jsnbgg7ZaI7Iq164uI64ukIDoge21lLm5pY2tuYW1lfTwvZGl2PiA6IDxkaXY+66Gc6re47JWE7JuDIO2WiOyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFBvc3RDYXJkIGtleT17Y30gcG9zdD17Y30gLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbi8vIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbicpO1xyXG4vLyAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4vLyAgICAgfSk7IC8vIOydtOufsOyLneycvOuhnCDsp5zrj4Qg65CoLiDqt7jrn6zrgpgg66Gc6re47J247J20IOykkeuzteydtCDrkJjslrQg7JWI65CoLlxyXG5cclxuLy/roZzqt7jsnbgg66Gc6re47JWE7JuDIOq3uOuDpSDthYzsiqTtirjsmqlcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuLy8gZGlzcGF0Y2goe1xyXG4vLyAgICAgdHlwZTogJ0hFTExPX1NBR0EnLFxyXG4vLyB9KTtcclxuXHJcbi8vIDPrsoggZGlzcGF0Y2jtlZjrqbQgM+uyiCDrkKDqurzrnbwg7IOd6rCB7ZWY7KeA66eMLCBoZWxsb1NhZ2HqsIAg7J2066+4IOykkeuLqCDrkJjsl4jquLAg65WM66y47JeQXHJcbi8vIOyViOuQqC5cclxuLy8gfSwgW10pO1xyXG5cclxuLy8gICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBMT0dfT1VULFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbik7XHJcbi8vICAgICAvLyBkaXNwYXRjaChsb2dvdXRBY3Rpb24pO1xyXG4vLyB9LCBbXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=