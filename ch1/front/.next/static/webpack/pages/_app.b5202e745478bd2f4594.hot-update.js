webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // 모든 파일들이 부모 component로 사용한다.
// app.js 는 모든 페이지에 공통적으로 적용 됨. 중앙 통제실도 redux를 연결 해줘야함 app.js가 공유하기 때문에
// store을 넣어 줄게 없으므로 npm i next-redux-wrapper로 해준다.

var Nodebird = function Nodebird(_ref) {
  var Component = _ref.Component;
  // props로 Component를 받는다.
  return (// store 는 리덕스 state임 자식 component는 중앙통제실 state를 다 받는 거임 최상위 부모이기 때문
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "Node bird"), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(Component, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    })))
  );
}; // 부모로부터 올바른 자료형을 받았는지 확인


_c = Nodebird;
Nodebird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired // 노드로 가능한 것 : 랜더링으로 할 수 있는 모든 것 tag 쓰는 애들 >> elementType

};
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(Nodebird)); // 고위 컴퍼넌트라고 부름 기존 컴퍼넌트의 기능을 확장해줌.
// export default withRedux((initialState, options) => {
//     const store = createStore(reducer, initialState);
//     // 리듀서들을 만들었는데(state들이 어떻게 동작하는지) 이 위의것 두개 합친게 store
//     // 여기에다가 store 커스터마이징
//     return store;
// })(Nodebird);
// 노드버드에 store을 props로 넣어준다고 생각하면 됨
// hot(NumberBaseBall); 실시간으로 업데이트 가능한 기능

var _c, _c2;

$RefreshReg$(_c, "Nodebird");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJOb2RlYmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2hDO0FBQ0EsU0FDSTtBQUNBLHVFQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyw2REFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0k7QUFBUSxTQUFHLEVBQUMsNERBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLENBREosRUFNSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTko7QUFGSjtBQWFILENBZkQsQyxDQWdCQTs7O0tBaEJNRCxRO0FBaUJOQSxRQUFRLENBQUNFLFNBQVQsR0FBcUI7QUFDakJELFdBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEaEIsQ0FDNEI7O0FBRDVCLENBQXJCO0FBSWUscUVBQUFDLDZEQUFPLENBQUNDLFNBQVIsQ0FBa0JQLFFBQWxCLENBQWYsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI1MjAyZTc0NTQ3OGJkMmY0NTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG4vLyDrqqjrk6Ag7YyM7J2865Ok7J20IOu2gOuqqCBjb21wb25lbnTroZwg7IKs7Jqp7ZWc64ukLlxyXG4vLyBhcHAuanMg64qUIOuqqOuToCDtjpjsnbTsp4Dsl5Ag6rO17Ya17KCB7Jy866GcIOyggeyaqSDrkKguIOykkeyVmSDthrXsoJzsi6Trj4QgcmVkdXjrpbwg7Jew6rKwIO2VtOykmOyVvO2VqCBhcHAuanPqsIAg6rO17Jyg7ZWY6riwIOuVjOusuOyXkFxyXG5cclxuLy8gc3RvcmXsnYQg64Sj7Ja0IOykhOqyjCDsl4bsnLzrr4DroZwgbnBtIGkgbmV4dC1yZWR1eC13cmFwcGVy66GcIO2VtOykgOuLpC5cclxuY29uc3QgTm9kZWJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgLy8gcHJvcHProZwgQ29tcG9uZW5066W8IOuwm+uKlOuLpC5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gc3RvcmUg64qUIOumrOuNleyKpCBzdGF0ZeyehCDsnpDsi50gY29tcG9uZW5064qUIOykkeyVme2GteygnOyLpCBzdGF0ZeulvCDri6Qg67Cb64qUIOqxsOyehCDstZzsg4HsnIQg67aA66qo7J206riwIOuVjOusuFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGUgYmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xNi4yL2FudGQuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5qc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4vLyDrtoDrqqjroZzrtoDthLAg7Jis67CU66W4IOyekOujjO2YleydhCDrsJvslZjripTsp4Ag7ZmV7J24XHJcbk5vZGViaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsIC8vIOuFuOuTnOuhnCDqsIDriqXtlZwg6rKDIDog656c642U66eB7Jy866GcIO2VoCDsiJgg7J6I64qUIOuqqOuToCDqsoMgdGFnIOyTsOuKlCDslaDrk6QgPj4gZWxlbWVudFR5cGVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGViaXJkKTtcclxuLy8g6rOg7JyEIOy7tO2NvOuEjO2KuOudvOqzoCDrtoDrpoQg6riw7KG0IOy7tO2NvOuEjO2KuOydmCDquLDriqXsnYQg7ZmV7J6l7ZW07KSMLlxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykgPT4ge1xyXG4vLyAgICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4vLyAgICAgLy8g66as65OA7ISc65Ok7J2EIOunjOuTpOyXiOuKlOuNsChzdGF0ZeuTpOydtCDslrTrlrvqsowg64+Z7J6R7ZWY64qU7KeAKSDsnbQg7JyE7J2Y6rKDIOuRkOqwnCDtlansuZzqsowgc3RvcmVcclxuLy8gICAgIC8vIOyXrOq4sOyXkOuLpOqwgCBzdG9yZSDsu6TsiqTthLDrp4jsnbTsp5VcclxuLy8gICAgIHJldHVybiBzdG9yZTtcclxuLy8gfSkoTm9kZWJpcmQpO1xyXG4vLyDrhbjrk5zrsoTrk5zsl5Agc3RvcmXsnYQgcHJvcHProZwg64Sj7Ja07KSA64uk6rOgIOyDneqwge2VmOuptCDrkKhcclxuXHJcbi8vIGhvdChOdW1iZXJCYXNlQmFsbCk7IOyLpOyLnOqwhOycvOuhnCDsl4XrjbDsnbTtirgg6rCA64ql7ZWcIOq4sOuKpVxyXG4iXSwic291cmNlUm9vdCI6IiJ9