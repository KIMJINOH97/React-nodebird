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
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Provider, {
      store: store,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, "Node bird"), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx(Component, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }))))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJOb2RlYmlyZCIsIkNvbXBvbmVudCIsInN0b3JlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDaEM7QUFDQSxTQUNJO0FBQ0EsdUVBQ0ksTUFBQyxRQUFEO0FBQVUsV0FBSyxFQUFFQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLDZEQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFRLFNBQUcsRUFBQyw0REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosQ0FESixFQU1JLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FOSixDQURKO0FBRko7QUFlSCxDQWpCRCxDLENBa0JBOzs7S0FsQk1GLFE7QUFtQk5BLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQjtBQUNqQkYsV0FBUyxFQUFFRyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURoQixDQUM0Qjs7QUFENUIsQ0FBckI7QUFJZSxxRUFBQUMsNkRBQU8sQ0FBQ0MsU0FBUixDQUFrQlIsUUFBbEIsQ0FBZixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzY3NmE5NTExYjVkOTNjZTQ2MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbi8vIOuqqOuToCDtjIzsnbzrk6TsnbQg67aA66qoIGNvbXBvbmVudOuhnCDsgqzsmqntlZzri6QuXHJcbi8vIGFwcC5qcyDripQg66qo65OgIO2OmOydtOyngOyXkCDqs7XthrXsoIHsnLzroZwg7KCB7JqpIOuQqC4g7KSR7JWZIO2GteygnOyLpOuPhCByZWR1eOulvCDsl7DqsrAg7ZW07KSY7JW87ZWoIGFwcC5qc+qwgCDqs7XsnKDtlZjquLAg65WM66y47JeQXHJcblxyXG4vLyBzdG9yZeydhCDrhKPslrQg7KSE6rKMIOyXhuycvOuvgOuhnCBucG0gaSBuZXh0LXJlZHV4LXdyYXBwZXLroZwg7ZW07KSA64ukLlxyXG5jb25zdCBOb2RlYmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICAvLyBwcm9wc+uhnCBDb21wb25lbnTrpbwg67Cb64qU64ukLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBzdG9yZSDripQg66as642V7IqkIHN0YXRl7J6EIOyekOyLnSBjb21wb25lbnTripQg7KSR7JWZ7Ya17KCc7IukIHN0YXRl66W8IOuLpCDrsJvripQg6rGw7J6EIOy1nOyDgeychCDrtoDrqqjsnbTquLAg65WM66y4XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZSBiaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xNi4yL2FudGQuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4xNi4yL2FudGQuanNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbi8vIOu2gOuqqOuhnOu2gO2EsCDsmKzrsJTrpbgg7J6Q66OM7ZiV7J2EIOuwm+yVmOuKlOyngCDtmZXsnbhcclxuTm9kZWJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCwgLy8g64W465Oc66GcIOqwgOuKpe2VnCDqsoMgOiDrnpzrjZTrp4HsnLzroZwg7ZWgIOyImCDsnojripQg66qo65OgIOqygyB0YWcg7JOw64qUIOyVoOuTpCA+PiBlbGVtZW50VHlwZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZWJpcmQpO1xyXG4vLyDqs6DsnIQg7Lu07Y2864SM7Yq465286rOgIOu2gOumhCDquLDsobQg7Lu07Y2864SM7Yq47J2YIOq4sOuKpeydhCDtmZXsnqXtlbTspIwuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eCgoaW5pdGlhbFN0YXRlLCBvcHRpb25zKSA9PiB7XHJcbi8vICAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbi8vICAgICAvLyDrpqzrk4DshJzrk6TsnYQg66eM65Ok7JeI64qU642wKHN0YXRl65Ok7J20IOyWtOuWu+qyjCDrj5nsnpHtlZjripTsp4ApIOydtCDsnITsnZjqsoMg65GQ6rCcIO2Vqey5nOqyjCBzdG9yZVxyXG4vLyAgICAgLy8g7Jes6riw7JeQ64uk6rCAIHN0b3JlIOy7pOyKpO2EsOuniOydtOynlVxyXG4vLyAgICAgcmV0dXJuIHN0b3JlO1xyXG4vLyB9KShOb2RlYmlyZCk7XHJcbi8vIOuFuOuTnOuyhOuTnOyXkCBzdG9yZeydhCBwcm9wc+uhnCDrhKPslrTspIDri6Tqs6Ag7IOd6rCB7ZWY66m0IOuQqFxyXG5cclxuLy8gaG90KE51bWJlckJhc2VCYWxsKTsg7Iuk7Iuc6rCE7Jy866GcIOyXheuNsOydtO2KuCDqsIDriqXtlZwg6riw64qlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=