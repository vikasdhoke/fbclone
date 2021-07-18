self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Inputbox.js":
/*!********************************!*\
  !*** ./components/Inputbox.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_ReactProjects_fbclone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\ReactProjects\\fbclone\\components\\Inputbox.js",
    _s = $RefreshSig$();









function Inputbox() {
  _s();

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)(),
      _useSession2 = (0,D_ReactProjects_fbclone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
  var filepickerRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      imageToPost = _useState[0],
      setImageToPost = _useState[1];

  var sendPost = function sendPost(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;
    _firebase__WEBPACK_IMPORTED_MODULE_7__.db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.serverTimestamp()
    }).then(function (doc) {
      if (imageToPost) {
        var uploadTask = _firebase__WEBPACK_IMPORTED_MODULE_7__.storage.ref("post/".concat(doc.id)).putString(imageToPost, 'data_url');
        removeImage();
        uploadTask.on('state_change', null, function (error) {
          return console.error(error);
        }, function () {
          _firebase__WEBPACK_IMPORTED_MODULE_7__.storage.ref("post").child(doc.id).getDownloadURL().then(function (url) {
            _firebase__WEBPACK_IMPORTED_MODULE_7__.db.collection('posts').doc(doc.id).set({
              postImage: url
            }, {
              merge: true
            });
          });
        });
      }
    });
    inputRef.current.value = '';
  };

  var addImageToPost = function addImageToPost(e) {
    var reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = function (readerEvent) {
      setImageToPost(readerEvent.target.result);
    };
  };

  var removeImage = function removeImage() {
    setImageToPost(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex space-x-4 p-4 items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "rounded-full",
        src: session.user.image,
        width: 40,
        height: 40,
        layout: "fixed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        className: "flex flex-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: " rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none",
          type: "text",
          ref: inputRef,
          placeholder: "What's on your mind, ".concat(session.user.name, "?")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          hidden: true,
          type: "submit",
          onClick: sendPost,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), imageToPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: removeImage,
        className: "flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "h-10 object-contain layout-fill",
          src: imageToPost,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-red-500 text-center",
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-evenly p-3 border-1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.VideoCameraIcon, {
          className: "h-7 text-red-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:text-5m\r xl:text-base",
          children: "Live Vedeo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          return filepickerRef.current.click();
        },
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.CameraIcon, {
          className: "h-7 text-green-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:text-5m\r xl:text-base",
          children: "Photo/ Vedeo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: filepickerRef,
          onChange: addImageToPost,
          type: "file",
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.EmojiHappyIcon, {
          className: "h-7 text-yellow-300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs sm:text-5m\r xl:text-base",
          children: "Feeling/ Activity"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

_s(Inputbox, "3RZiaeHPKOPYCoLIJMJM6xuq7PM=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession];
});

_c = Inputbox;
/* harmony default export */ __webpack_exports__["default"] = (Inputbox);

var _c;

$RefreshReg$(_c, "Inputbox");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dGJveC5qcyJdLCJuYW1lcyI6WyJJbnB1dGJveCIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJmaWxlcGlja2VyUmVmIiwidXNlU3RhdGUiLCJpbWFnZVRvUG9zdCIsInNldEltYWdlVG9Qb3N0Iiwic2VuZFBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJkYiIsImFkZCIsIm1lc3NhZ2UiLCJuYW1lIiwidXNlciIsImVtYWlsIiwiaW1hZ2UiLCJ0aW1lc3RhbXAiLCJmaXJlYmFzZSIsInRoZW4iLCJkb2MiLCJ1cGxvYWRUYXNrIiwic3RvcmFnZSIsImlkIiwicHV0U3RyaW5nIiwicmVtb3ZlSW1hZ2UiLCJvbiIsImVycm9yIiwiY29uc29sZSIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJzZXQiLCJwb3N0SW1hZ2UiLCJtZXJnZSIsImFkZEltYWdlVG9Qb3N0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlYWRlckV2ZW50IiwicmVzdWx0IiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUNFQyw0REFBVSxFQURaO0FBQUE7QUFBQSxNQUNUQyxPQURTOztBQUVoQixNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QsNkNBQU0sQ0FBQyxJQUFELENBQTVCOztBQUhnQixrQkFJc0JFLCtDQUFRLENBQUMsSUFBRCxDQUo5QjtBQUFBLE1BSVRDLFdBSlM7QUFBQSxNQUlJQyxjQUpKOztBQU1oQixNQUFNQyxRQUFRLEdB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUtJO0FBQ0ksYUFBRyxFQUFFM0MsYUFEVDtBQUVJLGtCQUFRLEVBQUVrQyxjQUZkO0FBR0ksY0FBSSxFQUFDLE1BSFQ7QUFJSSxnQkFBTTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFtQkk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSSw4REFBQyxvRUFBRDtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsbUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTRESDs7R0FsSFF2QyxRO1VBQ2FDLHdEOzs7S0FEYkQsUTtBQW9IVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OWNjZGZkZmI3MDUzOTRhN2VkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1vamlIYXBweUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IFZpZGVvQ2FtZXJhSWNvbiwgQ2FtZXJhSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCB7IHNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZGIsIHN0b3JhZ2UgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxuZnVuY3Rpb24gSW5wdXRib3goKSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZpbGVwaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaW1hZ2VUb1Bvc3QsIHNldEltYWdlVG9Qb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHNlbmRQb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCFpbnB1dFJlZi5jdXJyZW50LnZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuYWRkKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogaW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgbmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIGltYWdlOiBzZXNzaW9uLnVzZXIuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKClcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VUb1Bvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVmKGBwb3N0LyR7ZG9jLmlkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wdXRTdHJpbmcoaW1hZ2VUb1Bvc3QsICdkYXRhX3VybCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2UnLCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7c3RvcmFnZS5yZWYoYHBvc3RgKS5jaGlsZChkb2MuaWQpLmdldERvd25sb2FkVVJMKCkudGhlbih1cmwgPT4geyBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmRvYyhkb2MuaWQpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0SW1hZ2U6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7IG1lcmdlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICApO1xyXG5cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZEltYWdlVG9Qb3N0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkID0gKHJlYWRlckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEltYWdlVG9Qb3N0KHJlYWRlckV2ZW50LnRhcmdldC5yZXN1bHQpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VUb1Bvc3QobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGJnLXdoaXRlIHAtMiByb3VuZGVkLXhsIHNoYWRvdy1tZCB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIG10LTYnID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IHAtNCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ZpeGVkJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXggZmxleC0xJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBoLTEyIGJnLWdyYXktMTAwIGZsZXgtZ3JvdyBweC01IGZvY3VzOm91dGxpbmUtbm9uZVwiIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgV2hhdCdzIG9uIHlvdXIgbWluZCwgJHtzZXNzaW9uLnVzZXIubmFtZX0/YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhpZGRlbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e3NlbmRQb3N0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VUb1Bvc3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cmVtb3ZlSW1hZ2V9IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBmaWx0ZXIgaG92ZXI6YnJpZ2h0bmVzcy0xMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC0xMCBvYmplY3QtY29udGFpbiBsYXlvdXQtZmlsbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VUb1Bvc3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlcicgPlJlbW92ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZXZlbmx5IHAtMyBib3JkZXItMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRJY29uJz5cclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9DYW1lcmFJY29uIGNsYXNzTmFtZT1cImgtNyB0ZXh0LXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBzbTp0ZXh0LTVtXHJcbiAgICAgICAgICAgICAgICAgICAgeGw6dGV4dC1iYXNlJz5MaXZlIFZlZGVvPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBmaWxlcGlja2VyUmVmLmN1cnJlbnQuY2xpY2soKX0gY2xhc3NOYW1lPSdpbnB1dEljb24nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC1ncmVlbi01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBzbTp0ZXh0LTVtXHJcbiAgICAgICAgICAgICAgICAgICAgeGw6dGV4dC1iYXNlJz5QaG90by8gVmVkZW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZXBpY2tlclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2FkZEltYWdlVG9Qb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdmaWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dEljb24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbW9qaUhhcHB5SWNvbiBjbGFzc05hbWU9XCJoLTcgdGV4dC15ZWxsb3ctMzAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgc206dGV4dC01bVxyXG4gICAgICAgICAgICAgICAgICAgIHhsOnRleHQtYmFzZSc+RmVlbGluZy8gQWN0aXZpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9