/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./lib/data-binding */ \"./lib/data-binding.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsbyc7XG4vLyBcbi8vIHNheUhlbGxvKCk7IFxuaW1wb3J0ICcuL2xpYi9kYXRhLWJpbmRpbmcnOyJdLCJtYXBwaW5ncyI6Ijs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/data-binding.js":
/*!*****************************!*\
  !*** ./lib/data-binding.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DataBinding = /*#__PURE__*/function () {\n  function DataBinding() {\n    _classCallCheck(this, DataBinding);\n\n    this.input = document.querySelector('.input-wrapper input');\n    this.data = {\n      value: ''\n    };\n    this.htmlView = document.querySelector('.input-value span');\n    this.init();\n  }\n\n  _createClass(DataBinding, [{\n    key: \"init\",\n    value: function init() {\n      this.setProxy();\n      this.setInitialValue('Initial value');\n      this.displayValue();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"setProxy\",\n    value: function setProxy() {\n      var self = this; // https://learn.javascript.ru/proxy\n\n      this.data = new Proxy(this.data, {\n        get: function get(target, prop) {\n          if (prop in target) {\n            return target[prop];\n          }\n        },\n        set: function set(target, key, val) {\n          if (key === 'value') {\n            target[key] = val;\n            self.displayValue();\n            return true;\n          }\n\n          return false;\n        }\n      });\n    }\n  }, {\n    key: \"setInitialValue\",\n    value: function setInitialValue(initialValue) {\n      this.data.value = initialValue;\n    }\n  }, {\n    key: \"displayValue\",\n    value: function displayValue() {\n      this.input.value = this.data.value;\n      this.htmlView.innerText = this.data.value;\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      this.input.oninput = function (event) {\n        return _this.data.value = event.target.value;\n      };\n\n      this.displayValue();\n    } // passDataToWindowObject() {\n    // Object.keys(this.data).forEach(key => {\n    // window.key = this.data[key]\n    // })\n    // }\n\n  }]);\n\n  return DataBinding;\n}();\n\nwindow.dataBinding = new DataBinding();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS1iaW5kaW5nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvZGF0YS1iaW5kaW5nLmpzPzYxMWYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGF0YUJpbmRpbmcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXdyYXBwZXIgaW5wdXQnKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gICAgdGhpcy5odG1sVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC12YWx1ZSBzcGFuJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0gXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zZXRQcm94eSgpO1xuICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlKCdJbml0aWFsIHZhbHVlJyk7XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgc2V0UHJveHkoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgLy8gaHR0cHM6Ly9sZWFybi5qYXZhc2NyaXB0LnJ1L3Byb3h5XG4gICAgdGhpcy5kYXRhID0gbmV3IFByb3h5KHRoaXMuZGF0YSwge1xuICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAocHJvcCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0KHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICAgIHNlbGYuZGlzcGxheVZhbHVlKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgc2V0SW5pdGlhbFZhbHVlKGluaXRpYWxWYWx1ZSkge1xuICAgIHRoaXMuZGF0YS52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgfVxuICBkaXNwbGF5VmFsdWUoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuZGF0YS52YWx1ZTtcbiAgICB0aGlzLmh0bWxWaWV3LmlubmVyVGV4dCA9IHRoaXMuZGF0YS52YWx1ZTtcbiAgfVxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmlucHV0Lm9uaW5wdXQgPSAoZXZlbnQpID0+XG4gICAgICB0aGlzLmRhdGEudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSgpOyBcbiAgfVxuICAvLyBwYXNzRGF0YVRvV2luZG93T2JqZWN0KCkge1xuICAgIC8vIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgLy8gd2luZG93LmtleSA9IHRoaXMuZGF0YVtrZXldXG4gICAgLy8gfSlcbiAgLy8gfVxufVxuXG53aW5kb3cuZGF0YUJpbmRpbmcgPSBuZXcgRGF0YUJpbmRpbmcoKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBZUE7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/data-binding.js\n");

/***/ })

/******/ });