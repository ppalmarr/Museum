/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/app.js":
/*!**************************!*\
  !*** ./source/js/app.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_finder_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/finder_webp.js */ \"./source/js/modules/finder_webp.js\");\n/* harmony import */ var _modules_switch_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/switch_menu.js */ \"./source/js/modules/switch_menu.js\");\n/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper.js */ \"./source/js/modules/swiper.js\");\n/* harmony import */ var _modules_yandex_map_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/yandex_map_api.js */ \"./source/js/modules/yandex_map_api.js\");\n/* harmony import */ var _modules_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events.js */ \"./source/js/modules/events.js\");\n\n\n\n\n\n\n_modules_finder_webp_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\nymaps.ready(_modules_yandex_map_api_js__WEBPACK_IMPORTED_MODULE_3__.init);\n_modules_events_js__WEBPACK_IMPORTED_MODULE_4__.tgText();\n\n\n//# sourceURL=webpack://gulp_2/./source/js/app.js?");

/***/ }),

/***/ "./source/js/modules/events.js":
/*!*************************************!*\
  !*** ./source/js/modules/events.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tgText\": function() { return /* binding */ tgText; }\n/* harmony export */ });\nfunction tgText(){\n  let calendar_text = document.querySelector('.events__link-calendar > a');\n  let form_text = document.querySelector('.events__link-registration > a');\n\n  document.addEventListener(\"DOMContentLoaded\", function(event)\n  {\n    if(window.screen.width < 768){\n      calendar_text.textContent = \"??????????????????????\";\n      form_text.textContent = \"????????????\";\n    }\n    else if(window.screen.width > 768){\n      calendar_text.textContent = \"?????????????????? ??????????????????????\";\n      form_text.textContent = \"???????????????????? ???? ?????????????????? ?????? ??????????????????????\";\n    }\n\n    window.addEventListener(`resize`, event => {\n      if(window.screen.width < 768){\n        calendar_text.textContent = \"??????????????????????\";\n        form_text.textContent = \"????????????\";\n      }\n      else if(window.screen.width > 768){\n        calendar_text.textContent = \"?????????????????? ??????????????????????\";\n        form_text.textContent = \"???????????????????? ???? ?????????????????? ?????? ??????????????????????\";\n      }\n    }, false);\n  });\n}\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/events.js?");

/***/ }),

/***/ "./source/js/modules/events_ref_link.js":
/*!**********************************************!*\
  !*** ./source/js/modules/events_ref_link.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nlet back = document.getElementById('ref_link_expo');\n\nif(back){\n  back.addEventListener('click', function(e) {\n    history.back();\n  })\n}\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/events_ref_link.js?");

/***/ }),

/***/ "./source/js/modules/finder_webp.js":
/*!******************************************!*\
  !*** ./source/js/modules/finder_webp.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": function() { return /* binding */ isWebp; }\n/* harmony export */ });\n//???????????????????? ???????????????????????? ???? ?????????????? ???????????? ?????????????????????? .webp\nfunction isWebp() {\n  function testWebP(callback) {\n    var webP = new Image();\n    webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n    };\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n  }\n    testWebP(function (support) {\n      let className = support === true ? 'webp' : 'no-webp';\n      document.documentElement.classList.add(className);\n  });\n}\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/finder_webp.js?");

/***/ }),

/***/ "./source/js/modules/swiper.js":
/*!*************************************!*\
  !*** ./source/js/modules/swiper.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swiper\": function() { return /* binding */ swiper; }\n/* harmony export */ });\nlet swiper = new Swiper(\".swiper\", {\n  watchOverflow: true,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'coverflow',\n  coverflowEffect:{\n    rotate: 30,\n    stretch: 0,\n    slideShadows: true,\n  },\n  breakpoints:{\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 10,\n      slidesPerGroup: 1,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\",\n      },\n    },\n    767.98: {\n      slidesPerView: 3,\n      spaceBetween: 0,\n      slidesPerGroup: 1,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\",\n      },\n    },\n  },\n});\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/swiper.js?");

/***/ }),

/***/ "./source/js/modules/switch_menu.js":
/*!******************************************!*\
  !*** ./source/js/modules/switch_menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuSwitch\": function() { return /* binding */ menuSwitch; },\n/* harmony export */   \"menuSwitchMobile\": function() { return /* binding */ menuSwitchMobile; },\n/* harmony export */   \"menuSwitchEvent\": function() { return /* binding */ menuSwitchEvent; }\n/* harmony export */ });\nlet hamburger = document.querySelector('.link--exposition');\nlet expositionDesktop = document.querySelector('.list-exposition');\nlet expositionMobile = document.querySelector('.list-exposition-mobile');\nlet itemMobile = document.querySelector('.item--expostion-mobile');\nlet switchEvent = document.querySelector('.link--event-mobile');\nlet eventsMobile = document.querySelector('.list-events-mobile');\nlet itemEventMobile = document.querySelector('.item--event-mobile');\n\nlet pageBody = document.querySelector('.page__body');\n\nconst menuSwitch = () => {\n  expositionDesktop.classList.toggle('_active');\n}\n\nconst menuSwitchMobile = () =>{\n  expositionMobile.classList.toggle('_active');\n  itemMobile.classList.toggle('_active');\n  pageBody.classList.toggle('_lock');\n\n  if(pageBody.classList.contains('_lock1')){\n    pageBody.classList.toggle('_lock1');\n  }\n\n  if(itemEventMobile.classList.contains('_active')){\n    eventsMobile.classList.toggle('_active');\n    itemEventMobile.classList.toggle('_active');\n  }\n}\n\nhamburger.addEventListener('click', e => {\n  e.preventDefault();\n  e.stopPropagation();\n  menuSwitch();\n  menuSwitchMobile();\n  hamburger.classList.toggle('_active');\n});\n\nconst menuSwitchEvent = () =>{\n  eventsMobile.classList.toggle('_active');\n  itemEventMobile.classList.toggle('_active');\n  pageBody.classList.toggle('_lock1');\n\n  if(pageBody.classList.contains('_lock')){\n    pageBody.classList.toggle('_lock');\n  }\n\n  if(itemMobile.classList.contains('_active')){\n    expositionMobile.classList.toggle('_active');\n    itemMobile.classList.toggle('_active');\n  }\n}\n\nswitchEvent.addEventListener('click', e =>{\n  e.preventDefault();\n  e.stopPropagation();\n  menuSwitchEvent();\n  switchEvent.classList.toggle('_active');\n})\n\ndocument.addEventListener('click', e => {\n  let target = e.target;\n  let its_menu = target == expositionDesktop || expositionDesktop.contains(target);\n  let its_menu_mobile = target == expositionMobile || expositionMobile.contains(target);\n  let its_hamburger = target == hamburger;\n  let menu_is_active = expositionDesktop.classList.contains('_active');\n  let mobile_menu_is_active = expositionMobile.classList.contains('_active');\n\n  let its_menu_mobile_events = target == eventsMobile || eventsMobile.contains(target);\n  let its_switchEvent = target == switchEvent;\n  let mobile_menu_events_is_active = eventsMobile.classList.contains('_active');\n\n  if (!its_menu && !its_hamburger && menu_is_active) {\n    hamburger.classList.toggle('_active');\n    menuSwitch();\n  }\n  if(!its_menu_mobile && !its_hamburger && mobile_menu_is_active){\n    menuSwitchMobile();\n  }\n\n  if (!its_menu_mobile_events && !its_switchEvent && mobile_menu_events_is_active) {\n    switchEvent.classList.toggle('_active');\n    menuSwitch();\n  }\n})\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/switch_menu.js?");

/***/ }),

/***/ "./source/js/modules/toggle_popup_questions.js":
/*!*****************************************************!*\
  !*** ./source/js/modules/toggle_popup_questions.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"togglePopup\": function() { return /* binding */ togglePopup; }\n/* harmony export */ });\nfunction togglePopup(){\n  const askQuestionBtn = document.querySelector('.museum-contacts__btn-form');\n  const popupQuestionForm = document.querySelector('.wrapper-modal');\n  const popupClose = document.querySelector('.museum-contacts-form__close');\n\n\n  var isStorageSupport = true;\n  var storageName = \"\";\n  var storageEmail = \"\";\n\n  askQuestionBtn.addEventListener('click', function(e){\n    e.preventDefault();\n\n    popupQuestionForm.classList.toggle('visually-hidden');\n  })\n\n  popupClose.addEventListener('click', function(e){\n    e.preventDefault()\n\n    popupQuestionForm.classList.toggle('visually-hidden');\n    popupQuestionForm.classList.remove(\"wrapper-feedback-error\");\n  })\n\n  window.addEventListener(\"keydown\", function(e) {\n    if(e.keyCode === 27){\n        if(!popupQuestionForm.classList.contains(\"visually-hidden\")){\n          e.preventDefault();\n          popupQuestionForm.classList.add(\"visually-hidden\");\n          popupQuestionForm.classList.remove(\"wrapper-feedback-error\");\n        }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/toggle_popup_questions.js?");

/***/ }),

/***/ "./source/js/modules/valid_form_desktop.js":
/*!*************************************************!*\
  !*** ./source/js/modules/valid_form_desktop.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function() {\n  const questionForm = document.getElementById('question-form-desktop');\n  const popupQuestionForm = document.querySelector('.wrapper-modal');\n\n  questionForm.addEventListener('submit', function(e){\n\n    e.preventDefault();\n    let error = formValidate(questionForm);\n\n    if(error === 0){\n      popupQuestionForm.classList.toggle('visually-hidden');\n      alert(\"?????????? ????????????????????\");\n      e.target.reset ();\n    }else{\n      alert('???? ?????????????????? ???????????????????????? ????????');\n    }\n\n    function formValidate(questionForm) {\n      let error = 0;\n      let formReq = questionForm.querySelectorAll('.req');\n\n      for(let index = 0; index < formReq.length; index++){\n        const input = formReq[index];\n        formRemoveError(input);\n\n        if(input.classList.contains('email')){\n          if(emailTest(input)){\n            formAddError(input);\n            error++;\n          }\n        else{\n          if(input.value === ''){\n            formAddError(input);\n            error++;\n          }\n          }\n        }\n      }\n\n      return error;\n    }\n\n    function formAddError(input) {\n      input.parentElement.classList.add('error');\n      input.classList.add('error');\n    }\n\n    function formRemoveError(input){\n      input.parentElement.classList.remove('error');\n      input.classList.remove('error');\n    }\n\n    function emailTest(input){\n      return !/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,8})+$/.test(input.value);\n    }\n  })\n});\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/valid_form_desktop.js?");

/***/ }),

/***/ "./source/js/modules/valid_form_mobile.js":
/*!************************************************!*\
  !*** ./source/js/modules/valid_form_mobile.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function() {\n  const questionForm = document.getElementById('form-mobile-question');\n\n  questionForm.addEventListener('submit', function(e){\n\n    e.preventDefault();\n    let error = formValidate(questionForm);\n\n    if(error === 0){\n      alert(\"?????????? ????????????????????\");\n      e.target.reset ();\n    }else{\n      alert('???? ?????????????????? ???????????????????????? ????????');\n    }\n\n    function formValidate(questionForm) {\n      let error = 0;\n      let formReq = questionForm.querySelectorAll('.req');\n\n      for(let index = 0; index < formReq.length; index++){\n        const input = formReq[index];\n        formRemoveError(input);\n\n        if(input.classList.contains('email')){\n          if(emailTest(input)){\n            formAddError(input);\n            error++;\n          }\n        else{\n          if(input.value === ''){\n            formAddError(input);\n            error++;\n          }\n          }\n        }\n      }\n\n      return error;\n    }\n\n    function formAddError(input) {\n      input.parentElement.classList.add('error');\n      input.classList.add('error');\n    }\n\n    function formRemoveError(input){\n      input.parentElement.classList.remove('error');\n      input.classList.remove('error');\n    }\n\n    function emailTest(input){\n      return !/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,8})+$/.test(input.value);\n    }\n  })\n});\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/valid_form_mobile.js?");

/***/ }),

/***/ "./source/js/modules/yandex_map_api.js":
/*!*********************************************!*\
  !*** ./source/js/modules/yandex_map_api.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": function() { return /* binding */ init; },\n/* harmony export */   \"resizeInfo\": function() { return /* binding */ resizeInfo; }\n/* harmony export */ });\nvar myMap;\nvar placemark;\n\nfunction init(){\n\n  myMap = new ymaps.Map(\"yandex-map\", {\n      center: [47.20587137631812,38.93814957284925],\n      zoom: 18,\n      controls: [\"trafficControl\"],\n      behaviors: [\"drag\"],\n  });\n\n  placemark = new ymaps.Placemark([47.20599349972225,38.93911441581672], {\n      hintContent: \"?????????????????????????????? ??????????\",\n      balloonContent: \"????????????, ???????????????????? ??????., ??.<br> ????????????????, ????. ???????????? 22,<br> ????????. ??????, 2-?? ??????????????.\"\n  },\n  {\n      iconLayout: \"default#image\",\n      iconImageHref: \"img/icon_map_address_museum.svg\",\n      iconImageSize: [66, 80]\n  });\n\n  myMap.geoObjects.add(placemark);\n  if(window.screen.width < 768){\n    myMap.setCenter([47.205872355234,38.93921813258074]);\n  }\n  else if(window.screen.width > 768){\n    myMap.setCenter([47.20587137631812,38.93814957284925]);\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event)\n{\n    window.onresize = function() {\n        resizeInfo();\n    };\n});\n\nfunction resizeInfo()\n{\n  if(window.screen.width < 768){\n    myMap.setCenter([47.205872355234,38.93921813258074]);\n  }\n  else if(window.screen.width > 768){\n    myMap.setCenter([47.20587137631812,38.93814957284925]);\n  }\n}\n\n\n//# sourceURL=webpack://gulp_2/./source/js/modules/yandex_map_api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./source/js/app.js");
/******/ 	__webpack_require__("./source/js/modules/events.js");
/******/ 	__webpack_require__("./source/js/modules/events_ref_link.js");
/******/ 	__webpack_require__("./source/js/modules/finder_webp.js");
/******/ 	__webpack_require__("./source/js/modules/swiper.js");
/******/ 	__webpack_require__("./source/js/modules/switch_menu.js");
/******/ 	__webpack_require__("./source/js/modules/toggle_popup_questions.js");
/******/ 	__webpack_require__("./source/js/modules/valid_form_desktop.js");
/******/ 	__webpack_require__("./source/js/modules/valid_form_mobile.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/modules/yandex_map_api.js");
/******/ 	
/******/ })()
;