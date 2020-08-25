webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\react-nodebird\\ch1\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

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

var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePath = _useSelector.imagePath,
      isAddingPost = _useSelector.isAddingPost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: {
        text: text
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
      onSubmit: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC787\uC5C8\uB098\uC694",
      value: text,
      onChange: onChangeText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      style: {
        "float": 'right'
      },
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9\uCA31")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, mainPosts.map(function (v, i) {
      // 반복문
      return __jsx("div", {
        key: v,
        style: {
          display: 'inline-block'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: 'http://localhost:3000/' + v,
        style: {
          width: '200px'
        },
        alt: v,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 29
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 33
        }
      }, "\uC81C\uAC70")));
    })))
  );
};

_s(PostForm, "WQ2gXRYRQbM0vdZ8rWkHb8CNIVs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRoIiwiaXNBZGRpbmdQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJvbkNoYW5nZVRleHQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0Rm9ybSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm1hcmdpbiIsIm1haW5Qb3N0cyIsIm1hcCIsInYiLCJpIiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDaUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRDVCO0FBQUEsTUFDWEMsU0FEVyxnQkFDWEEsU0FEVztBQUFBLE1BQ0FDLFlBREEsZ0JBQ0FBLFlBREE7O0FBRW5CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRm1CLGtCQUdLQyxzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR1pDLElBSFk7QUFBQSxNQUdOQyxPQUhNOztBQUtuQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDSCxXQUFPLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDSCxHQUYrQixFQUU3QixFQUY2QixDQUFoQztBQUlBLE1BQU1DLFlBQVksR0FBR0oseURBQVcsQ0FBQyxZQUFNO0FBQ25DTixZQUFRLENBQUM7QUFDTFcsVUFBSSxFQUFFQywrREFERDtBQUVMQyxVQUFJLEVBQUU7QUFDRlYsWUFBSSxFQUFKQTtBQURFO0FBRkQsS0FBRCxDQUFSO0FBTUgsR0FQK0IsRUFPN0IsRUFQNkIsQ0FBaEM7QUFTQSxTQUNJO0FBQ0E7QUFDQSxVQUFDLHlDQUFEO0FBQU0sYUFBTyxFQUFDLHFCQUFkO0FBQW9DLFdBQUssRUFBRTtBQUFFVyxjQUFNLEVBQUU7QUFBVixPQUEzQztBQUF3RSxjQUFRLEVBQUVKLFlBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixlQUFTLEVBQUUsR0FBM0I7QUFBZ0MsaUJBQVcsRUFBQyx1RUFBNUM7QUFBNkQsV0FBSyxFQUFFUCxJQUFwRTtBQUEwRSxjQUFRLEVBQUVFLFlBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREosRUFFSSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBSyxFQUFFO0FBQUUsaUJBQU87QUFBVCxPQUE5QjtBQUFrRCxjQUFRLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSixDQUZKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLVSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQjtBQUNBLGFBQ0k7QUFBSyxXQUFHLEVBQUVELENBQVY7QUFBYSxhQUFLLEVBQUU7QUFBRUUsaUJBQU8sRUFBRTtBQUFYLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLFdBQUcsRUFBRSwyQkFBMkJGLENBQXJDO0FBQXdDLGFBQUssRUFBRTtBQUFFRyxlQUFLLEVBQUU7QUFBVCxTQUEvQztBQUFtRSxXQUFHLEVBQUVILENBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosQ0FGSixDQURKO0FBUUgsS0FWQSxDQURMLENBUko7QUFISjtBQTBCSCxDQTVDRDs7R0FBTXZCLFE7VUFDa0NDLHVELEVBQ25CTSx1RDs7O0tBRmZQLFE7QUE2Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyNmY1ZDQ3YzZlOGQ4ODFkOTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuLy8gY29uc3QgZHVtbXkgPSB7XHJcbi8vICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4vLyAgICAgaW1hZ2VQYXRoczogW10sXHJcbi8vICAgICBtYWluUG9zdHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAnLFxyXG4vLyAgICAgICAgICAgICBpbWc6ICcnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aCwgaXNBZGRpbmdQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIOydtOuvuOyngCDsl4XroZzrk5wg7ZW07JW87ZWY6riwIOuVjOusuOyXkCBlbmNUeXBl7J2AIG11bHRpcGFydOyehFxyXG4gICAgICAgIC8vIHN0eWxl64Sj7J2EIOuVjOuKlCDqsJ3ssrQg7ZiV7Iud7Jy866GcIHt7IOuEo+yWtOyVvO2VqCB9fVxyXG4gICAgICAgIDxGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAwcHggMjBweCcgfX0gb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnofsl4jrgpjsmpRcIiB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg7Ke57Ke57KixXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOuwmOuzteusuFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyB2fSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==