/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/eventHandler.js":
/*!*********************************!*\
  !*** ./src/api/eventHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* API Css animations */
var Handler = /*#__PURE__*/function () {
  function Handler() {
    _classCallCheck(this, Handler);

    this.animations = [];

    for (var _len = arguments.length, animations = new Array(_len), _key = 0; _key < _len; _key++) {
      animations[_key] = arguments[_key];
    }

    this._initAnimations(animations);

    return Object.freeze(Object.create({
      onTimeout: this.onTimeout.bind(this),
      onClick: this.onClick.bind(this),
      onScroll: this.onScroll.bind(this)
    }));
  }

  _createClass(Handler, [{
    key: "_initAnimations",
    value: function _initAnimations(animations) {
      var _this = this;

      animations.forEach(function (a, i) {
        _this.animations.push({
          element: document.getElementById(a.element),
          css: Array.isArray(a.css) ? a.css : [a.css]
        });

        _this._setDefaultAnimation(i);
      });
    }
  }, {
    key: "_setDefaultAnimation",
    value: function _setDefaultAnimation(index) {
      var animation = this.animations[index],
          element = animation.element,
          css = animation.css;
      if (css.length > 1) this._toggleAnimation(element, css[0]);
    }
  }, {
    key: "_toggleAnimation",
    value: function _toggleAnimation(element, css) {
      element.classList.toggle(css);
    }
  }, {
    key: "_animate",
    value: function _animate() {
      var _this2 = this;

      this.animations.forEach(function (animation) {
        animation.css.forEach(function (cssName) {
          _this2._toggleAnimation(animation.element, cssName);
        });
      });
    }
  }, {
    key: "onTimeout",
    value: function onTimeout(time) {
      var _this3 = this;

      setTimeout(function () {
        _this3._animate();
      }, time);
      return this;
    }
  }, {
    key: "onClick",
    value: function onClick(controls) {
      var _this4 = this;

      var keys = document.querySelectorAll(".".concat(controls));
      keys.forEach(function (e) {
        e.addEventListener("click", function () {
          _this4._animate();
        });
      });
      return this;
    }
  }, {
    key: "_initScroll",
    value: function _initScroll(offset) {
      if (window.scrollY >= offset) {
        this._animate();

        return true;
      }

      return false;
    }
  }, {
    key: "onScroll",
    value: function onScroll(offset) {
      var _this5 = this;

      var scrolled = this._initScroll(offset);

      document.addEventListener("scroll", function () {
        var scroll = window.scrollY;

        if (scroll <= offset && scrolled || scroll >= offset && !scrolled) {
          scrolled = !scrolled;

          _this5._animate();
        }
      });
      return this;
    }
  }]);

  return Handler;
}();



/***/ }),

/***/ "./src/api/parallaxText.js":
/*!*********************************!*\
  !*** ./src/api/parallaxText.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Parallax movement */
var Parallax = /*#__PURE__*/function () {
  function Parallax(target) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var minOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Parallax);

    this.target = document.getElementById(target);
    this.direction = direction;
    this.minOffset = minOffset;

    this._updateMovement();

    return Object.freeze(Object.create({
      serve: this.serve.bind(this)
    }));
  }

  _createClass(Parallax, [{
    key: "_updateMovement",
    value: function _updateMovement() {
      var offset = window.scrollY,
          style = this.target.style,
          movement = (offset - this.minOffset) * this.direction;
      if (offset > this.minOffset) style.transform = "translateY( ".concat(movement, "px)");
    }
  }, {
    key: "serve",
    value: function serve() {
      var _this = this;

      window.addEventListener("scroll", function () {
        _this._updateMovement();
      });
    }
  }]);

  return Parallax;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_eventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/eventHandler */ "./src/api/eventHandler.js");
/* harmony import */ var _api_parallaxText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/parallaxText */ "./src/api/parallaxText.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// Import modules

 // Webpack styles



var initMenu = function initMenu() {
  return new Promise(function (resolve) {
    var menu = new _api_eventHandler__WEBPACK_IMPORTED_MODULE_0__.default({
      element: "menu",
      css: ["disappear", "appear"]
    });
    resolve(menu.onClick("menu-trigger"));
  });
};

var initLoader = function initLoader() {
  return new Promise(function (resolve) {
    var loader = new _api_eventHandler__WEBPACK_IMPORTED_MODULE_0__.default({
      element: "loader",
      css: "disappear"
    });
    resolve(loader.onTimeout(1200));
  });
};

var initHeader = function initHeader() {
  return new Promise(function (resolve) {
    var header = new _api_eventHandler__WEBPACK_IMPORTED_MODULE_0__.default({
      element: "header",
      css: ["transparence", "opaque"]
    });
    var offset = document.documentElement.clientHeight;
    resolve(header.onScroll(offset - 100));
  });
};

var initSlogan = function initSlogan() {
  return new Promise(function (resolve) {
    var parallax = new _api_parallaxText__WEBPACK_IMPORTED_MODULE_1__.default("slogan", 1.2);
    resolve(parallax.serve());
  });
};

var initInfo = function initInfo() {
  return new Promise(function (resolve) {
    var minOffset = document.documentElement.clientHeight,
        info = new _api_parallaxText__WEBPACK_IMPORTED_MODULE_1__.default("info-body", -1.2, minOffset);
    resolve(info.serve());
  });
}; // Main function.


window.addEventListener("load", function () {
  initMenu().then(initLoader()).then(initHeader()).then(initSlogan()).then(initInfo());
});
console.log("Hot reloading...");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map