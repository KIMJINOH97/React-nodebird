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
      isAddingPost = _useSelector.isAddingPost,
      addedPost = _useSelector.addedPost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setText('');
  });
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
        lineNumber: 46,
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
        lineNumber: 47,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 50,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9\uCA31")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, imagePath.map(function (v, i) {
      // 반복문
      return __jsx("div", {
        key: v,
        style: {
          display: 'inline-block'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
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
          lineNumber: 59,
          columnNumber: 29
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 33
        }
      }, "\uC81C\uAC70")));
    })))
  );
};

_s(PostForm, "WjP8s3FZIL9r+2eonkss/1Gomts=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRoIiwiaXNBZGRpbmdQb3N0IiwiYWRkZWRQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZVRleHQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0Rm9ybSIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm1hcmdpbiIsIm1hcCIsInYiLCJpIiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDNEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRHZDO0FBQUEsTUFDWEMsU0FEVyxnQkFDWEEsU0FEVztBQUFBLE1BQ0FDLFlBREEsZ0JBQ0FBLFlBREE7QUFBQSxNQUNjQyxTQURkLGdCQUNjQSxTQURkOztBQUVuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZtQixrQkFHS0Msc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdaQyxJQUhZO0FBQUEsTUFHTkMsT0FITTs7QUFLbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0gsR0FGUSxDQUFUO0FBSUEsTUFBTUUsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNwQ0osV0FBTyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0gsR0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7QUFJQSxNQUFNQyxZQUFZLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNuQ1AsWUFBUSxDQUFDO0FBQ0xZLFVBQUksRUFBRUMsK0RBREQ7QUFFTEMsVUFBSSxFQUFFO0FBQ0ZYLFlBQUksRUFBSkE7QUFERTtBQUZELEtBQUQsQ0FBUjtBQU1ILEdBUCtCLEVBTzdCLEVBUDZCLENBQWhDO0FBU0EsU0FDSTtBQUNBO0FBQ0EsVUFBQyx5Q0FBRDtBQUFNLGFBQU8sRUFBQyxxQkFBZDtBQUFvQyxXQUFLLEVBQUU7QUFBRVksY0FBTSxFQUFFO0FBQVYsT0FBM0M7QUFBd0UsY0FBUSxFQUFFSixZQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IsZUFBUyxFQUFFLEdBQTNCO0FBQWdDLGlCQUFXLEVBQUMsdUVBQTVDO0FBQTZELFdBQUssRUFBRVIsSUFBcEU7QUFBMEUsY0FBUSxFQUFFRyxZQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURKLEVBRUksTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBQyxTQUFiO0FBQXVCLFdBQUssRUFBRTtBQUFFLGlCQUFPO0FBQVQsT0FBOUI7QUFBa0QsY0FBUSxFQUFDLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosQ0FGSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS1QsU0FBUyxDQUFDbUIsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCO0FBQ0EsYUFDSTtBQUFLLFdBQUcsRUFBRUQsQ0FBVjtBQUFhLGFBQUssRUFBRTtBQUFFRSxpQkFBTyxFQUFFO0FBQVgsU0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssV0FBRyxFQUFFLDJCQUEyQkYsQ0FBckM7QUFBd0MsYUFBSyxFQUFFO0FBQUVHLGVBQUssRUFBRTtBQUFULFNBQS9DO0FBQW1FLFdBQUcsRUFBRUgsQ0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixDQUZKLENBREo7QUFRSCxLQVZBLENBREwsQ0FSSjtBQUhKO0FBMEJILENBaEREOztHQUFNeEIsUTtVQUM2Q0MsdUQsRUFDOUJPLHVEOzs7S0FGZlIsUTtBQWlEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjE4ZWYxZmU2MmRlMTZhYzZlY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbi8vIGNvbnN0IGR1bW15ID0ge1xyXG4vLyAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuLy8gICAgIGltYWdlUGF0aHM6IFtdLFxyXG4vLyAgICAgbWFpblBvc3RzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAJyxcclxuLy8gICAgICAgICAgICAgaW1nOiAnJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZVBhdGgsIGlzQWRkaW5nUG9zdCwgYWRkZWRQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyDsnbTrr7jsp4Ag7JeF66Gc65OcIO2VtOyVvO2VmOq4sCDrlYzrrLjsl5AgZW5jVHlwZeydgCBtdWx0aXBhcnTsnoRcclxuICAgICAgICAvLyBzdHlsZeuEo+ydhCDrlYzripQg6rCd7LK0IO2YleyLneycvOuhnCB7eyDrhKPslrTslbztlaggfX1cclxuICAgICAgICA8Rm9ybSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMHB4IDIwcHgnIH19IG9uU3VibWl0PXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6H7JeI64KY7JqUXCIgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOynueynueyosVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aC5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDrsJjrs7XrrLhcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgdn0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=