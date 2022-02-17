"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/edithistory";
exports.ids = ["pages/edithistory"];
exports.modules = {

/***/ "./pages/edithistory.jsx":
/*!*******************************!*\
  !*** ./pages/edithistory.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/koushikdey/Desktop/Intern_Project/devhub/devhub-social-mern-api/forum/pages/edithistory.jsx\";\n\n\n\n\n\nconst Article = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(props => {\n  const {\n    0: editData,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: failure,\n    1: setFailure\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const id = props.router.query.title;\n\n    if (id) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/edit-history?id=${id}`).then(res => {\n        const data = res.data;\n\n        if (data) {\n          console.log(data);\n          return setData(data);\n        } else {\n          setFailure(\"No article Found with that id\");\n        }\n      });\n    } else {\n      location.href = \"/\";\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    style: {\n      overflow: 'scroll'\n    },\n    children: [!editData && !failure && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Loading Edit History ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 33\n    }, undefined), editData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        style: {\n          fontWeight: \"bold\",\n          color: \"#cc2b5e\"\n        },\n        children: [props.router.query.title, \" edit history\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"table\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"thead\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"th\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: \"Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"th\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: \"Event\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"th\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: \"Date\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tbody\", {\n          children: editData.map(atom => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"td\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: atom.user\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"td\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: atom.event\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"td\", {\n              style: {\n                minWidth: '150px'\n              },\n              children: atom.date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 17\n            }, undefined)]\n          }, atom.date, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true), failure && `${failure}`]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBLGFBQVNILElBQUksQ0FBQ0csSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEE7QUFBQSxvQkFKSixFQTZCR3RCLE9BQU8sSUFBSyxHQUFFQSxPQUFRLEVBN0J6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlDRCxDQXREeUIsQ0FBMUI7QUF3REEsaUVBQWVKLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3J1bS8uL3BhZ2VzL2VkaXRoaXN0b3J5LmpzeD84MThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQXJ0aWNsZSA9IHdpdGhSb3V0ZXIocHJvcHMgPT4ge1xuICBjb25zdCBbZWRpdERhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYWlsdXJlLCBzZXRGYWlsdXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBwcm9wcy5yb3V0ZXIucXVlcnkudGl0bGU7XG4gICAgaWYgKGlkKSB7XG4gICAgICBBeGlvcy5nZXQoYC9hcGkvZWRpdC1oaXN0b3J5P2lkPSR7aWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIHNldERhdGEoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RmFpbHVyZShcIk5vIGFydGljbGUgRm91bmQgd2l0aCB0aGF0IGlkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e292ZXJmbG93OidzY3JvbGwnfX0+XG4gICAgICB7IWVkaXREYXRhICYmICFmYWlsdXJlICYmIDxkaXY+TG9hZGluZyBFZGl0IEhpc3RvcnkgLi4uPC9kaXY+fVxuXG4gICAgICB7ZWRpdERhdGEgJiYgKFxuICAgICAgICA8PlxuICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcIiNjYzJiNWVcIiB9fT57cHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlfSBlZGl0IGhpc3Rvcnk8L2gyPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17e21pbldpZHRoOicxNTBweCd9fT5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7bWluV2lkdGg6JzE1MHB4J319PkV2ZW50PC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7bWluV2lkdGg6JzE1MHB4J319PkRhdGU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7ZWRpdERhdGEubWFwKGF0b20gPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXthdG9tLmRhdGV9PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e21pbldpZHRoOicxNTBweCd9fT57YXRvbS51c2VyfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7bWluV2lkdGg6JzE1MHB4J319PnthdG9tLmV2ZW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7bWluV2lkdGg6JzE1MHB4J319PnthdG9tLmRhdGV9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7ZmFpbHVyZSAmJiBgJHtmYWlsdXJlfWB9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF4aW9zIiwid2l0aFJvdXRlciIsIkFydGljbGUiLCJwcm9wcyIsImVkaXREYXRhIiwic2V0RGF0YSIsImZhaWx1cmUiLCJzZXRGYWlsdXJlIiwiaWQiLCJyb3V0ZXIiLCJxdWVyeSIsInRpdGxlIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJocmVmIiwib3ZlcmZsb3ciLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtaW5XaWR0aCIsIm1hcCIsImF0b20iLCJ1c2VyIiwiZXZlbnQiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edithistory.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/edithistory.jsx"));
module.exports = __webpack_exports__;

})();