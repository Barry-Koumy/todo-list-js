/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Mes tâches\");\r\n\r\nconst savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\nsavedTasks.forEach(taskData => {\r\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskData.title, taskData.dueDate, taskData.completed);\r\n  defaultProject.addTask(task);\r\n});\r\n\r\nfunction renderTasks(project) {\r\n  const list = document.querySelector('#task-list');\r\n  list.innerHTML = \"\";\r\n\r\n  project.tasks.forEach((task, index) => {\r\n    const li = document.createElement('li');\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = \"checkbox\";\r\n    checkbox.checked = task.completed;\r\n    checkbox.addEventListener('change', () => {\r\n      task.completed = checkbox.checked;\r\n      localStorage.setItem('tasks', JSON.stringify(project.tasks));\r\n    });\r\n\r\n    const info = document.createElement('span');\r\n    info.textContent = `${task.title} - ${task.description} (Priorité: ${task.priority})`;\r\n\r\n    if (task.dueDate) {\r\n      const due = document.createElement('small');\r\n      due.textContent = `Échéance: ${task.dueDate}`;\r\n      li.appendChild(due);\r\n    }\r\n\r\n    const deleteBtn = document.createElement('button');\r\n    deleteBtn.textContent = \"❌\";\r\n    deleteBtn.addEventListener('click', () => {\r\n      project.removeTask(index);\r\n      localStorage.setItem('tasks', JSON.stringify(project.tasks));\r\n      renderTasks(project);\r\n    });\r\n\r\n    li.appendChild(checkbox);\r\n    li.appendChild(info);\r\n    li.appendChild(deleteBtn);\r\n    list.appendChild(li);\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\ndocument.querySelector('#task-form').addEventListener('submit', (e) => {\r\n  e.preventDefault(); \r\n  const title = document.querySelector('#task-title').value;\r\n  const desc = document.querySelector('#task-desc').value;\r\n  const date = document.querySelector('#task-date').value;\r\n  const priority = document.querySelector('#task-priority').value;\r\n  \r\n  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, desc, date, priority);\r\n  defaultProject.addTask(newTask);\r\n\r\n  localStorage.setItem('tasks', JSON.stringify(defaultProject.tasks));\r\n  \r\n  renderTasks(defaultProject); \r\n  e.target.reset();\r\n});\r\n\r\n\r\n\r\nrenderTasks(defaultProject);\r\n\n\n//# sourceURL=webpack://todo-list-js/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n  }\r\n\r\n  addTask(task) {\r\n    this.tasks.push(task);\r\n  }\r\n\r\n  removeTask(index) {\r\n    this.tasks.splice(index, 1);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-js/./src/project.js?\n}");

/***/ },

/***/ "./src/task.js"
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, description = \"\", dueDate = null, priority = \"normal\", completed = false) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;  \r\n    this.completed = completed;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-js/./src/task.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;