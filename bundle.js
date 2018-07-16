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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/activity/activity.component.less":
/*!*********************************************************!*\
  !*** ./app/components/activity/activity.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/less-loader/dist/cjs.js!./activity.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/activity/activity.component.tsx":
/*!********************************************************!*\
  !*** ./app/components/activity/activity.component.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./activity.component.less */ "./app/components/activity/activity.component.less");
var markers_component_1 = __webpack_require__(/*! ./markers/markers.component */ "./app/components/activity/markers/markers.component.tsx");
var tabAttr = { tabIndex: 0 };
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity(props) {
        var _this = _super.call(this, props) || this;
        _this.question = 'Highlight the proper nouns and underline the common nouns in each sentence';
        _this.activityDone = false;
        _this.state = {
            sentences: _this.props.questionSets[_this.props.currentPageIdx].sentences,
            selectedOption: 'word-highlight',
            markerStates: _this.resetMarkers(_this.props.questionSets[_this.props.currentPageIdx].sentences),
            correctMarkers: _this.props.questionSets[_this.props.currentPageIdx].correctMarkers,
            tickCrossStates: [],
            attemptCount: 0,
            hasTickCross: false
        };
        _this.setSelectedOption = _this.setSelectedOption.bind(_this);
        _this.markWord = _this.markWord.bind(_this);
        _this.markChar = _this.markChar.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.validateMarkers = _this.validateMarkers.bind(_this);
        _this.clearMarkers = _this.clearMarkers.bind(_this);
        return _this;
    }
    Activity.prototype.componentWillReceiveProps = function (newProps) {
        if (this.props.currentPageIdx !== newProps.currentPageIdx) {
            this.activityDone = false;
            this.setState({
                sentences: newProps.questionSets[newProps.currentPageIdx].sentences,
                markerStates: this.resetMarkers(newProps.questionSets[newProps.currentPageIdx].sentences),
                tickCrossStates: [],
                attemptCount: 0,
                correctMarkers: newProps.questionSets[newProps.currentPageIdx].correctMarkers
            });
        }
    };
    Activity.prototype.resetMarkers = function (sentences) {
        var structure = [];
        sentences.map(function (item) {
            structure.push([]);
        });
        return structure;
    };
    Activity.prototype.clearMarkers = function () {
        this.setState({
            markerStates: this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences),
            tickCrossStates: [],
            hasTickCross: false
        });
    };
    Activity.prototype.setSelectedOption = function (value) {
        this.setState({
            selectedOption: value
        });
    };
    Activity.prototype.findExistingMarker = function (currentStatementStates, currentDOM, markerToSet) {
        return currentStatementStates.findIndex(function (obj) {
            if (typeof obj.charIdx !== 'undefined') {
                return (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index') && obj.charIdx === currentDOM.getAttribute('char-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            }
            else {
                return (obj.wordIdx === currentDOM.getAttribute('word-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            }
        });
    };
    Activity.prototype.markWord = function (currentDOM) {
        var _this = this;
        var markerToSet = '';
        if (this.state.selectedOption === 'word-highlight') {
            markerToSet = 'highlighted';
        }
        else if (this.state.selectedOption === 'word-underline') {
            markerToSet = 'underlined';
        }
        this.setState(function (state) {
            var currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.getAttribute('statement-index'))];
            if (_this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.getAttribute('word-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        });
    };
    Activity.prototype.markChar = function (event) {
        var _this = this;
        event.stopPropagation();
        var markerToSet = '', currentDOM = event.target;
        if (this.state.selectedOption === 'eraser') {
            this.eraseMark(currentDOM, this.state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))]);
            return;
        }
        else if (this.state.selectedOption === 'letter-highlight') {
            markerToSet = 'colored';
        }
        else if (this.state.selectedOption === 'letter-divide') {
            markerToSet = 'divider';
        }
        markerToSet ? this.setState(function (state) {
            var currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            if (_this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.parentElement.getAttribute('word-index'),
                    charIdx: currentDOM.getAttribute('char-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        }) : this.markWord(currentDOM.parentElement);
    };
    Activity.prototype.handleKeyPress = function (event) {
        console.log('Enter pressed', event);
        if (event.key === 'Enter') {
            console.log('Enter pressed');
            this.markWord(event.target);
        }
    };
    Activity.prototype.eraseMark = function (currentDOM, currentElementStates) {
        this.setState(function (state) {
            var isFound = false;
            var currentElementStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            currentElementStates.map(function (obj, idx) {
                if (typeof obj.charIdx !== 'undefined') {
                    if (obj.charIdx === currentDOM.getAttribute('char-index') && obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                        currentElementStates.splice(idx, 1);
                        isFound = true;
                    }
                }
                else if (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                    currentElementStates.splice(idx, 1);
                    isFound = true;
                }
            });
            if (isFound) {
                return {
                    markerStates: state.markerStates
                };
            }
        });
    };
    Activity.prototype.setMarker = function (statementIdx, wordIdx, charIdx) {
        var classToAdd = '', sentenceMarkers = this.state.markerStates[statementIdx];
        if (sentenceMarkers.length) {
            if (typeof charIdx === 'undefined') {
                sentenceMarkers.find(function (obj) {
                    classToAdd += parseInt(obj.wordIdx) === wordIdx ? ' ' + obj.type : '';
                });
            }
            else {
                sentenceMarkers.find(function (obj) {
                    classToAdd += (parseInt(obj.wordIdx) === wordIdx && parseInt(obj.charIdx) === charIdx) ? ' ' + obj.type : '';
                });
            }
        }
        return classToAdd;
    };
    Activity.prototype.showCorrectMarkers = function () {
        var _this = this;
        this.state.attemptCount = 0;
        this.activityDone = true;
        this.state.markerStates = this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences);
        this.state.correctMarkers.map(function (marker, currentIdx) {
            marker.idx.map(function (idxArr, index) {
                idxArr.map(function (currentIdx) {
                    _this.state.markerStates[index].push((function () {
                        switch (marker.type) {
                            case 'word-highlight':
                                return {
                                    type: 'highlighted',
                                    wordIdx: '' + currentIdx
                                };
                            case 'word-underline':
                                return {
                                    type: 'underlined',
                                    wordIdx: '' + currentIdx
                                };
                            case 'letter-highlight':
                                return {
                                    type: 'colored',
                                    wordIdx: '' + currentIdx.wordIdx,
                                    charIdx: '' + currentIdx.charIdx
                                };
                            case 'letter-divide':
                                return {
                                    type: 'divider',
                                    wordIdx: '' + currentIdx.wordIdx,
                                    charIdx: '' + currentIdx.charIdx
                                };
                        }
                    })());
                });
            });
            _this.state.tickCrossStates[currentIdx] = 'correct';
        });
    };
    Activity.prototype.validateMarkers = function () {
        var _this = this;
        this.state.tickCrossStates = [];
        if (++this.state.attemptCount == 2) {
            this.showCorrectMarkers();
        }
        else {
            var isIncorrect_1 = [], wordCheckerByUserInput_1 = function (sentenceIdx, entryIdx, currentIdx) {
                if (_this.state.correctMarkers[sentenceIdx].idx[entryIdx].indexOf(parseInt(currentIdx)) === -1) {
                    isIncorrect_1.push(true);
                }
            }, charCheckerByUserInput_1 = function (sentenceIdx, entryIdx, currentWordIdx, currentCharIdx) {
                if (_this.state.correctMarkers[sentenceIdx].idx[entryIdx].findIndex(function (item) {
                    return (item.wordIdx === parseInt(currentWordIdx) && (item.charIdx === parseInt(currentCharIdx)));
                }) === -1) {
                    isIncorrect_1.push(true);
                }
            }, checkByCorrectAnswers_1 = function (sentence, idxArr, type) {
                idxArr.map(function (correctIdx) {
                    if (sentence.findIndex(function (currentObj) {
                        if (typeof correctIdx === 'number') {
                            return (currentObj.type === type && parseInt(currentObj.wordIdx) === correctIdx);
                        }
                        else {
                            return (currentObj.type === type && parseInt(currentObj.wordIdx) === correctIdx.wordIdx && parseInt(currentObj.charIdx) === correctIdx.charIdx);
                        }
                    }) === -1) {
                        isIncorrect_1.push(true);
                    }
                });
            };
            this.state.markerStates.map(function (sentence, idx) {
                sentence.map(function (obj) {
                    if (typeof obj.charIdx === 'undefined') {
                        (obj.type === 'highlighted') ? wordCheckerByUserInput_1(0, idx, obj.wordIdx) : (obj.type === 'underlined') ? wordCheckerByUserInput_1(1, idx, obj.wordIdx) : '';
                    }
                    else {
                        (obj.type === 'colored') ? charCheckerByUserInput_1(2, idx, obj.wordIdx, obj.charIdx) : (obj.type === 'divider') ? charCheckerByUserInput_1(3, idx, obj.wordIdx, obj.charIdx) : '';
                    }
                });
                _this.state.correctMarkers.map(function (correctObj) {
                    switch (correctObj.type) {
                        case 'word-highlight':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'highlighted');
                            break;
                        case 'word-underline':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'underlined');
                            break;
                        case 'letter-highlight':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'colored');
                            break;
                        case 'letter-divide':
                            checkByCorrectAnswers_1(sentence, (typeof correctObj.idx[idx] !== 'undefined' ? correctObj.idx[idx] : []), 'divider');
                            break;
                        default:
                            return;
                    }
                });
                (!_this.state.markerStates[idx].length || isIncorrect_1.length) ? _this.state.tickCrossStates.push('incorrect') : _this.state.tickCrossStates.push('correct');
                isIncorrect_1 = [];
            });
        }
        if (this.state.tickCrossStates.length && this.state.tickCrossStates.indexOf('incorrect') === -1) {
            this.activityDone = true;
            this.props.enableNextQuestion();
        }
        this.setState({
            hasTickCross: true,
            markerStates: this.state.markerStates,
            attemptCount: this.state.attemptCount,
            tickCrossStates: this.state.tickCrossStates
        });
    };
    Activity.prototype.render = function () {
        var _this = this;
        var tickCrossDOM;
        if (this.state.hasTickCross) {
            tickCrossDOM = function (idx1) { return React.createElement("img", { src: _this.state.tickCrossStates[idx1] === 'correct' ? '../../assets/tick.png' : _this.state.tickCrossStates[idx1] === 'incorrect' ? '../../assets/cross.png' : '' }); };
        }
        else {
            tickCrossDOM = function () { };
        }
        console.log(this.state.markerStates);
        return (React.createElement("div", { className: "activity-container" },
            React.createElement("h2", { className: "question" }, this.question),
            React.createElement("div", { className: "statements-container" }, this.state.sentences.map(function (item, idx1) {
                var wordCount = item.split(' ').length;
                return React.createElement(React.Fragment, { key: 'moon2' + idx1 },
                    React.createElement("span", { className: "tick-cross" }, tickCrossDOM(idx1)),
                    React.createElement("p", { className: "sentence", key: 'moon' + idx1, "statement-index": idx1 }, item.split(' ').map(function (item, idx2) {
                        var letterCount = item.split('').length, selectedOptionClass = "word" + (_this.state.selectedOption === 'word-highlight' ? ' highlight' : _this.state.selectedOption === 'word-underline' ? ' underline' : '') + _this.setMarker(idx1, idx2);
                        return React.createElement(React.Fragment, { key: 'moon2' + idx2 },
                            React.createElement("span", __assign({}, tabAttr, { className: selectedOptionClass, onKeyPress: _this.handleKeyPress, "word-index": idx2 }), item.split('').map(function (item, idx3) {
                                var classNames = "" + (item !== ' ' ? 'character' : '') + (_this.state.selectedOption === 'letter-highlight' ? ' highlight' : _this.state.selectedOption === 'letter-divide' ? ' divide' : '') + (idx3 === letterCount - 1 ? ' last' : '') + _this.setMarker(idx1, idx2, idx3);
                                return React.createElement("span", { className: classNames, key: 'moon' + idx3, onClick: _this.markChar, "char-index": idx3 }, item);
                            })),
                            idx2 !== wordCount - 1 ? React.createElement("span", null, "\u00A0") : '');
                    })),
                    React.createElement("br", null));
            })),
            React.createElement(markers_component_1.Markers, { validateMarkers: this.validateMarkers, setSelectedOption: this.setSelectedOption, clearMarkers: this.clearMarkers, activityDone: this.activityDone })));
    };
    return Activity;
}(React.Component));
exports.Activity = Activity;


/***/ }),

/***/ "./app/components/activity/markers/markers.component.less":
/*!****************************************************************!*\
  !*** ./app/components/activity/markers/markers.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader?url=false!../../../../node_modules/less-loader/dist/cjs.js!./markers.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/activity/markers/markers.component.tsx":
/*!***************************************************************!*\
  !*** ./app/components/activity/markers/markers.component.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./markers.component.less */ "./app/components/activity/markers/markers.component.less");
var tabAttr = { tabIndex: 0 };
var Markers = /** @class */ (function (_super) {
    __extends(Markers, _super);
    function Markers(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOptionChange = _this.handleOptionChange.bind(_this);
        _this.handleMarkerClearance = _this.handleMarkerClearance.bind(_this);
        _this.handleValidation = _this.handleValidation.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        return _this;
    }
    Markers.prototype.componentWillMount = function () {
        this.setState({
            selectedOption: 'word-highlight',
            activityDone: false
        });
    };
    Markers.prototype.handleOptionChange = function (event) {
        this.setState({
            selectedOption: event.target.getAttribute('data-value')
        });
        this.props.setSelectedOption(event.target.getAttribute('data-value'));
    };
    Markers.prototype.handleMarkerClearance = function () {
        this.props.clearMarkers();
    };
    Markers.prototype.handleValidation = function () {
        this.props.validateMarkers();
    };
    Markers.prototype.handleKeyPress = function (event) {
        console.log('Enter pressed', event);
        if (event.key === 'Enter' || event.key === 'Space') {
            console.log('Enter pressed');
            this.handleOptionChange(event);
        }
    };
    Markers.prototype.render = function () {
        return (React.createElement("div", { className: "master-marker-container" },
            React.createElement("div", { className: "markers-container" },
                React.createElement("div", { className: "highlight" },
                    React.createElement("img", __assign({}, tabAttr, { className: this.state.selectedOption === 'word-highlight' ? 'img-highlight active' : 'img-highlight', src: "../../../assets/lamp.png", alt: "Word Highlight", "data-value": "word-highlight", onKeyPress: this.handleKeyPress, onClick: this.handleOptionChange })),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-highlight-lbl", "aria-hidden": "true" }, "Word Highlight")),
                React.createElement("div", { className: "underline" },
                    React.createElement("img", __assign({}, tabAttr, { className: this.state.selectedOption === 'word-underline' ? 'img-underline active' : 'img-underline', src: "../../../assets/ruler.png", alt: "Word Underline", "data-value": "word-underline", onKeyPress: this.handleKeyPress, onClick: this.handleOptionChange })),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-underline-lbl", "aria-hidden": "true" }, "Word Underline")),
                React.createElement("div", { className: "color" },
                    React.createElement("img", __assign({}, tabAttr, { className: this.state.selectedOption === 'letter-highlight' ? 'img-color active' : 'img-color', src: "../../../assets/paintbrush.png", alt: "Letter Highlight", "data-value": "letter-highlight", onKeyPress: this.handleKeyPress, onClick: this.handleOptionChange })),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-color-lbl", "aria-hidden": "true" }, "Letter Highlight")),
                React.createElement("div", { className: "divide" },
                    React.createElement("img", __assign({}, tabAttr, { className: this.state.selectedOption === 'letter-divide' ? 'img-divide active' : 'img-divide', src: "../../../assets/saw.png", alt: "Letter Divide", "data-value": "letter-divide", onKeyPress: this.handleKeyPress, onClick: this.handleOptionChange })),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-divide-lbl", "aria-hidden": "true" }, "Divide")),
                React.createElement("div", { className: "eraser" },
                    React.createElement("img", __assign({}, tabAttr, { className: this.state.selectedOption === 'eraser' ? 'img-eraser active' : 'img-eraser', src: "../../../assets/eraser.png", alt: "Eraser", "data-value": "eraser", onKeyPress: this.handleKeyPress, onClick: this.handleOptionChange })),
                    React.createElement("br", null),
                    React.createElement("span", { className: "img-eraser-lbl", "aria-hidden": "true" }, "Eraser"))),
            React.createElement("div", { className: "validators-container" },
                React.createElement("button", { className: "reset", onClick: this.handleMarkerClearance, disabled: this.props.activityDone }, "Reset"),
                React.createElement("button", { className: "ok", onClick: this.handleValidation, disabled: this.props.activityDone }, "OK"))));
    };
    return Markers;
}(React.Component));
exports.Markers = Markers;


/***/ }),

/***/ "./app/components/app.less":
/*!*********************************!*\
  !*** ./app/components/app.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?url=false!../../node_modules/less-loader/dist/cjs.js!./app.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/app.tsx":
/*!********************************!*\
  !*** ./app/components/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./app.less */ "./app/components/app.less");
var constants_1 = __webpack_require__(/*! ../constants */ "./app/constants.tsx");
var activity_component_1 = __webpack_require__(/*! ./activity/activity.component */ "./app/components/activity/activity.component.tsx");
var navigation_component_1 = __webpack_require__(/*! ./navigation/navigation.component */ "./app/components/navigation/navigation.component.tsx");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(render) {
        var _this = _super.call(this, render) || this;
        _this.title = 'Grammar: Common and proper nouns';
        _this.questionSets = constants_1.default.questionSets;
        _this.state = {
            currentPageIdx: 0,
            lastIdx: 0
        };
        _this.setNavIdx = _this.setNavIdx.bind(_this);
        _this.enableNextQuestion = _this.enableNextQuestion.bind(_this);
        return _this;
    }
    App.prototype.setNavIdx = function (direction) {
        this.setState({
            currentPageIdx: direction === 'prev' ? this.state.currentPageIdx - 1 : this.state.currentPageIdx + 1
        });
    };
    App.prototype.enableNextQuestion = function () {
        if (this.state.currentPageIdx === this.state.lastIdx) {
            this.setState({
                lastIdx: ++this.state.lastIdx
            });
        }
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "master-container" },
            React.createElement("div", { className: "title-container" },
                React.createElement("h2", { className: "title" }, this.title)),
            React.createElement(activity_component_1.Activity, { currentPageIdx: this.state.currentPageIdx, questionSets: this.questionSets, enableNextQuestion: this.enableNextQuestion }),
            React.createElement(navigation_component_1.Navigation, { setNavIdx: this.setNavIdx, currentPageIdx: this.state.currentPageIdx, lastIdx: this.state.lastIdx })));
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),

/***/ "./app/components/navigation/navigation.component.less":
/*!*************************************************************!*\
  !*** ./app/components/navigation/navigation.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader?url=false!../../../node_modules/less-loader/dist/cjs.js!./navigation.component.less */ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/navigation/navigation.component.tsx":
/*!************************************************************!*\
  !*** ./app/components/navigation/navigation.component.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var constants_1 = __webpack_require__(/*! ../../constants */ "./app/constants.tsx");
__webpack_require__(/*! ./navigation.component.less */ "./app/components/navigation/navigation.component.less");
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.questionSets = constants_1.default.questionSets;
        _this.setNavIdx = _this.setNavIdx.bind(_this);
        return _this;
    }
    Navigation.prototype.setNavIdx = function (event) {
        this.props.setNavIdx(event.target.value);
    };
    Navigation.prototype.render = function () {
        var _this = this;
        var className = '';
        return (React.createElement("div", { className: "navigation-container" },
            React.createElement("div", { className: "pagination-container" },
                React.createElement("button", { className: "prev", onClick: this.setNavIdx, value: "prev", disabled: this.props.currentPageIdx === 0 }, "Prev"),
                React.createElement("div", { className: "page-holders" }, this.questionSets.map(function (item, index) {
                    className = 'page ';
                    if (index < _this.props.currentPageIdx) {
                        className += 'completed ';
                    }
                    if (index === _this.props.currentPageIdx) {
                        className += 'active';
                    }
                    return React.createElement("span", { className: className, key: "moon" + index });
                })),
                React.createElement("button", { className: "next", onClick: this.setNavIdx, value: "next", disabled: this.props.currentPageIdx === this.props.lastIdx }, "Next"))));
    };
    return Navigation;
}(React.Component));
exports.Navigation = Navigation;


/***/ }),

/***/ "./app/constants.tsx":
/*!***************************!*\
  !*** ./app/constants.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.questionSets = [
        {
            sentences: [
                'Jen lost her mittens at King School.',
                'Kids sing all day at Camp Quest.',
                'We saw bass in Bells Pond.',
                'Mel will make props for the play.'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0, 5, 6], [5, 6], [4, 5], [0]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[3], [0, 3], [2], [3, 6]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'The hen has eggs in that nest.',
                'My dog Tess three pups',
                'Cass can hem her pants',
                'Brag and Med wed the next day'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[], [3], [0], [0, 2]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[1, 3, 6], [1, 4], [4], [6]]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'Dad is grilling at the picnic.',
                'The duck had fuzz on its head',
                'Mom likes to eat fresh fish',
                'Could Brent move to Billings?'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0], [], [0], [1, 4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[5], [1, 3, 6], [5], []]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'Dad is grilling at the picnic.',
                'The duck had fuzz on its head',
                'Mom likes to eat fresh fish',
                'Could Brent move to Billings?'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0], [], [0], [1, 4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[5], [1, 3, 6], [5], []]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'Dad is grilling at the picnic.',
                'The duck had fuzz on its head',
                'Mom likes to eat fresh fish',
                'Could Brent move to Billings?'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0], [], [0], [1, 4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[5], [1, 3, 6], [5], []]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        },
        {
            sentences: [
                'Dad is grilling at the picnic.',
                'The duck had fuzz on its head',
                'Mom likes to eat fresh fish',
                'Could Brent move to Billings?'
            ],
            correctMarkers: [
                {
                    'type': 'word-highlight',
                    'idx': [[0], [], [0], [1, 4]]
                },
                {
                    'type': 'word-underline',
                    'idx': [[5], [1, 3, 6], [5], []]
                },
                {
                    'type': 'letter-highlight',
                    'idx': [[{
                                wordIdx: 0,
                                charIdx: 2
                            },
                            {
                                wordIdx: 2,
                                charIdx: 1
                            }]]
                },
                {
                    'type': 'letter-divide',
                    'idx': [[]]
                }
            ]
        }
    ];
    return Constants;
}());
exports.default = Constants;


/***/ }),

/***/ "./app/index.tsx":
/*!***********************!*\
  !*** ./app/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var app_1 = __webpack_require__(/*! ./components/app */ "./app/components/app.tsx");
ReactDOM.render(React.createElement(app_1.App, null), document.getElementById('app'));


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/activity.component.less ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statements-container {\n  padding-top: 15px;\n}\n.statements-container .tick-cross {\n  position: relative;\n  top: 1px;\n  margin-right: 10px;\n}\n.statements-container .tick-cross img {\n  width: 15px;\n}\n.statements-container .sentence {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  cursor: pointer;\n  display: inline-block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.statements-container .sentence .word.highlighted {\n  background-color: yellow;\n}\n.statements-container .sentence .word.underlined {\n  text-decoration: underline;\n}\n.statements-container .sentence .word.highlight:hover {\n  background-color: #f5e6a3;\n}\n.statements-container .sentence .word.underline:hover {\n  text-decoration: underline;\n}\n.statements-container .sentence .word .character.colored {\n  color: #0084ff;\n}\n.statements-container .sentence .word .character.divider {\n  box-shadow: 2px 0 0 0 #e44a0e;\n}\n.statements-container .sentence .word .character.highlight:hover {\n  background-color: skyblue;\n}\n.statements-container .sentence .word .character.divide:not(.last):hover {\n  background-color: transparent;\n  box-shadow: 1px 0 0 0;\n}\nspan {\n  user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/activity/markers/markers.component.less ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".master-marker-container {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n.master-marker-container .markers-container {\n  position: relative;\n  float: left;\n  display: inline;\n  left: 20px;\n}\n.master-marker-container .markers-container div.highlight,\n.master-marker-container .markers-container div.underline,\n.master-marker-container .markers-container div.color,\n.master-marker-container .markers-container div.divide,\n.master-marker-container .markers-container div.eraser {\n  display: inline;\n  float: left;\n  margin-right: 15px;\n}\n.master-marker-container .markers-container div span {\n  color: black;\n  font-weight: 500;\n}\n.master-marker-container .markers-container div span.img-divide-lbl {\n  margin-left: 10px;\n}\n.master-marker-container .markers-container div span.img-eraser-lbl {\n  margin-left: 40px;\n}\n.master-marker-container .markers-container img.img-highlight,\n.master-marker-container .markers-container img.img-underline,\n.master-marker-container .markers-container img.img-color,\n.master-marker-container .markers-container img.img-divide,\n.master-marker-container .markers-container img.img-eraser {\n  width: 170px;\n  height: 130px;\n  margin-left: 25px;\n  cursor: pointer;\n}\n.master-marker-container .markers-container img.img-highlight:hover,\n.master-marker-container .markers-container img.img-underline:hover,\n.master-marker-container .markers-container img.img-color:hover,\n.master-marker-container .markers-container img.img-divide:hover,\n.master-marker-container .markers-container img.img-eraser:hover,\n.master-marker-container .markers-container img.img-highlight.active,\n.master-marker-container .markers-container img.img-underline.active,\n.master-marker-container .markers-container img.img-color.active,\n.master-marker-container .markers-container img.img-divide.active,\n.master-marker-container .markers-container img.img-eraser.active {\n  box-shadow: 0px 0px 5px 1px white;\n}\n.master-marker-container .validators-container {\n  position: absolute;\n  float: right;\n  display: inline;\n  right: 20px;\n  top: 198px;\n}\n.master-marker-container .validators-container button.reset,\n.master-marker-container .validators-container button.ok {\n  border-radius: 10px;\n  box-shadow: 0 1px 1px 2px white;\n  margin-right: 15px;\n  background-color: #1bc6da;\n  width: 120px;\n  height: 30px;\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/app.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%;\n}\nhtml body {\n  height: 98%;\n  margin-top: 0;\n  margin-bottom: 0;\n  box-shadow: 0px 0px 10px 5px;\n}\nhtml body span {\n  user-select: none;\n}\nhtml body div#app {\n  height: 100%;\n}\nhtml body div#app .master-container {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background-image: url('assets/Background.png');\n}\nhtml body div#app .master-container h2.title {\n  display: inline;\n  margin-left: 15px;\n}\nhtml body div#app .master-container .activity-container {\n  height: calc(100% - 35%);\n}\nhtml body div#app .master-container .activity-container h2.question {\n  padding-left: 15px;\n  color: white;\n  text-shadow: 2px 2px #000000;\n}\nhtml body div#app .master-container .activity-container .statements-container {\n  padding: 20px;\n  box-shadow: 0px 0px 5px 1px;\n  height: 48%;\n  margin: 15px;\n  background: white;\n}\nhtml body div#app .master-container .buttons-container {\n  display: inline;\n  float: right;\n}\nhtml body div#app .master-container .buttons-container button.help,\nhtml body div#app .master-container .buttons-container button.close {\n  border-radius: 50px;\n  box-shadow: 0 1px 1px 2px;\n  margin-right: 15px;\n}\nhtml body div#app .master-container .title-container {\n  height: 50px;\n  padding-top: 20px;\n  background-color: #fddda2;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./node_modules/less-loader/dist/cjs.js!./app/components/navigation/navigation.component.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation-container {\n  bottom: 10px;\n  position: absolute;\n  width: 99%;\n  height: 40px;\n  background: red;\n}\n.navigation-container .pagination-container {\n  min-width: 200px;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n.navigation-container .pagination-container .page-holders {\n  display: inline;\n}\n.navigation-container .pagination-container .page-holders span.page {\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  display: inline-flex;\n  top: 5px;\n  position: relative;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n.navigation-container .pagination-container .page-holders span.completed {\n  background: red;\n}\n.navigation-container .pagination-container .page-holders span.active {\n  background: yellow;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50Lmxlc3M/NDlkMyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQubGVzcz8zN2NjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FwcC5sZXNzPzVlZWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3M/OTM3ZiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FjdGl2aXR5L21hcmtlcnMvbWFya2Vycy5jb21wb25lbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAubGVzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsc0RBQStCO0FBRS9CLDBHQUFtQztBQUVuQyw0SUFBc0Q7QUFFdEQsSUFBSSxPQUFPLEdBQUcsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDNUI7SUFBOEIsNEJB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O0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHN4XCIpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hY3Rpdml0eS5jb21wb25lbnQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL2FjdGl2aXR5LmNvbXBvbmVudC5sZXNzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNYXJrZXJzIH0gZnJvbSAnLi9tYXJrZXJzL21hcmtlcnMuY29tcG9uZW50JztcclxuXHJcbmxldCB0YWJBdHRyID0ge3RhYkluZGV4OiAwfTtcclxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHNlbnRlbmNlczogc3RyaW5nW10sXHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb246IHN0cmluZyxcclxuICAgICAgICBtYXJrZXJTdGF0ZXM6IGFueVtdLFxyXG4gICAgICAgIGF0dGVtcHRDb3VudDogbnVtYmVyLFxyXG4gICAgICAgIGNvcnJlY3RNYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgaWR4OiBhbnlbXVxyXG4gICAgICAgIH1bXSxcclxuICAgICAgICB0aWNrQ3Jvc3NTdGF0ZXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGhhc1RpY2tDcm9zczogYm9vbGVhblxyXG4gICAgfTtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcXVlc3Rpb25TZXRzOiB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogc3RyaW5nW10sXHJcbiAgICAgICAgICAgIGNvcnJlY3RNYXJrZXJzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBpZHg6IGFueVtdXHJcbiAgICAgICAgICAgIH1bXVxyXG4gICAgICAgIH1bXSxcclxuICAgICAgICBjdXJyZW50UGFnZUlkeDogbnVtYmVyLFxyXG4gICAgICAgIGVuYWJsZU5leHRRdWVzdGlvbjogRnVuY3Rpb25cclxuICAgIH07XHJcbiAgICBxdWVzdGlvbjogc3RyaW5nID0gJ0hpZ2hsaWdodCB0aGUgcHJvcGVyIG5vdW5zIGFuZCB1bmRlcmxpbmUgdGhlIGNvbW1vbiBub3VucyBpbiBlYWNoIHNlbnRlbmNlJztcclxuICAgIGFjdGl2aXR5RG9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogdGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgbWFya2VyU3RhdGVzOiB0aGlzLnJlc2V0TWFya2Vycyh0aGlzLnByb3BzLnF1ZXN0aW9uU2V0c1t0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4XS5zZW50ZW5jZXMpLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogdGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uY29ycmVjdE1hcmtlcnMsXHJcbiAgICAgICAgICAgIHRpY2tDcm9zc1N0YXRlczogW10sXHJcbiAgICAgICAgICAgIGF0dGVtcHRDb3VudDogMCxcclxuICAgICAgICAgICAgaGFzVGlja0Nyb3NzOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE9wdGlvbiA9IHRoaXMuc2V0U2VsZWN0ZWRPcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1hcmtXb3JkID0gdGhpcy5tYXJrV29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFya0NoYXIgPSB0aGlzLm1hcmtDaGFyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlTWFya2VycyA9IHRoaXMudmFsaWRhdGVNYXJrZXJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGVhck1hcmtlcnMgPSB0aGlzLmNsZWFyTWFya2Vycy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHM6IHtcclxuICAgICAgICBjdXJyZW50UGFnZUlkeDogbnVtYmVyLFxyXG4gICAgICAgIHF1ZXN0aW9uU2V0czoge1xyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogYW55W10sXHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogc3RyaW5nW11cclxuICAgICAgICB9W11cclxuICAgIH0pIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeCAhPT0gbmV3UHJvcHMuY3VycmVudFBhZ2VJZHgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZW50ZW5jZXM6IG5ld1Byb3BzLnF1ZXN0aW9uU2V0c1tuZXdQcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyU3RhdGVzOiB0aGlzLnJlc2V0TWFya2VycyhuZXdQcm9wcy5xdWVzdGlvblNldHNbbmV3UHJvcHMuY3VycmVudFBhZ2VJZHhdLnNlbnRlbmNlcyksXHJcbiAgICAgICAgICAgICAgICB0aWNrQ3Jvc3NTdGF0ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdE1hcmtlcnM6IG5ld1Byb3BzLnF1ZXN0aW9uU2V0c1tuZXdQcm9wcy5jdXJyZW50UGFnZUlkeF0uY29ycmVjdE1hcmtlcnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0TWFya2VycyhzZW50ZW5jZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgbGV0IHN0cnVjdHVyZTogYW55W11bXSA9IFtdO1xyXG4gICAgICAgIHNlbnRlbmNlcy5tYXAoKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBzdHJ1Y3R1cmUucHVzaChbXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhck1hcmtlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1hcmtlclN0YXRlczogdGhpcy5yZXNldE1hcmtlcnModGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzKSxcclxuICAgICAgICAgICAgdGlja0Nyb3NzU3RhdGVzOiBbXSxcclxuICAgICAgICAgICAgaGFzVGlja0Nyb3NzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkT3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb246IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEV4aXN0aW5nTWFya2VyKGN1cnJlbnRTdGF0ZW1lbnRTdGF0ZXM6IGFueSwgY3VycmVudERPTTogSFRNTFNwYW5FbGVtZW50LCBtYXJrZXJUb1NldD86IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50U3RhdGVtZW50U3RhdGVzLmZpbmRJbmRleCgob2JqOiB7XHJcbiAgICAgICAgICAgIHdvcmRJZHg6IHN0cmluZyxcclxuICAgICAgICAgICAgY2hhcklkeDogc3RyaW5nLFxyXG4gICAgICAgICAgICB0eXBlOiBzdHJpbmdcclxuICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNoYXJJZHggIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9iai53b3JkSWR4ID09PSBjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd3b3JkLWluZGV4JykgJiYgb2JqLmNoYXJJZHggPT09IGN1cnJlbnRET00uZ2V0QXR0cmlidXRlKCdjaGFyLWluZGV4JykgJiYgKHR5cGVvZiBtYXJrZXJUb1NldCAhPT0gJ3VuZGVmaW5lZCcgPyBvYmoudHlwZSA9PT0gbWFya2VyVG9TZXQgOiB0cnVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG9iai53b3JkSWR4ID09PSBjdXJyZW50RE9NLmdldEF0dHJpYnV0ZSgnd29yZC1pbmRleCcpICYmICh0eXBlb2YgbWFya2VyVG9TZXQgIT09ICd1bmRlZmluZWQnID8gb2JqLnR5cGUgPT09IG1hcmtlclRvU2V0IDogdHJ1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1dvcmQoY3VycmVudERPTTogSFRNTFNwYW5FbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IG1hcmtlclRvU2V0ID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICd3b3JkLWhpZ2hsaWdodCcpIHtcclxuICAgICAgICAgICAgbWFya2VyVG9TZXQgPSAnaGlnaGxpZ2h0ZWQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ3dvcmQtdW5kZXJsaW5lJykge1xyXG4gICAgICAgICAgICBtYXJrZXJUb1NldCA9ICd1bmRlcmxpbmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YW1lbnRTdGF0ZXMgPSBzdGF0ZS5tYXJrZXJTdGF0ZXNbcGFyc2VJbnQoY3VycmVudERPTS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RhdGVtZW50LWluZGV4JykpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmluZEV4aXN0aW5nTWFya2VyKGN1cnJlbnRTdGFtZW50U3RhdGVzLCBjdXJyZW50RE9NLCBtYXJrZXJUb1NldCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhbWVudFN0YXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXJrZXJUb1NldCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiBjdXJyZW50RE9NLmdldEF0dHJpYnV0ZSgnd29yZC1pbmRleCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyU3RhdGVzOiBzdGF0ZS5tYXJrZXJTdGF0ZXNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQ2hhcihldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IG1hcmtlclRvU2V0ID0gJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnRET00gPSBldmVudC50YXJnZXQgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnZXJhc2VyJykge1xyXG4gICAgICAgICAgICB0aGlzLmVyYXNlTWFyayhjdXJyZW50RE9NLCB0aGlzLnN0YXRlLm1hcmtlclN0YXRlc1twYXJzZUludChjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0YXRlbWVudC1pbmRleCcpKV0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnbGV0dGVyLWhpZ2hsaWdodCcpIHtcclxuICAgICAgICAgICAgbWFya2VyVG9TZXQgPSAnY29sb3JlZCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnbGV0dGVyLWRpdmlkZScpIHtcclxuICAgICAgICAgICAgbWFya2VyVG9TZXQgPSAnZGl2aWRlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmtlclRvU2V0ID8gdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN0YW1lbnRTdGF0ZXMgPSBzdGF0ZS5tYXJrZXJTdGF0ZXNbcGFyc2VJbnQoY3VycmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdGF0ZW1lbnQtaW5kZXgnKSldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maW5kRXhpc3RpbmdNYXJrZXIoY3VycmVudFN0YW1lbnRTdGF0ZXMsIGN1cnJlbnRET00sIG1hcmtlclRvU2V0KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFtZW50U3RhdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1hcmtlclRvU2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3dvcmQtaW5kZXgnKSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiBjdXJyZW50RE9NLmdldEF0dHJpYnV0ZSgnY2hhci1pbmRleCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyU3RhdGVzOiBzdGF0ZS5tYXJrZXJTdGF0ZXNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSA6IHRoaXMubWFya1dvcmQoY3VycmVudERPTS5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50OiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBwcmVzc2VkJywgZXZlbnQpO1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdFbnRlciBwcmVzc2VkJyk7XHJcbiAgICAgICAgICB0aGlzLm1hcmtXb3JkKGV2ZW50LnRhcmdldCBhcyBIVE1MU3BhbkVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGVyYXNlTWFyayhjdXJyZW50RE9NOiBIVE1MU3BhbkVsZW1lbnQsIGN1cnJlbnRFbGVtZW50U3RhdGVzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEVsZW1lbnRTdGF0ZXMgPSBzdGF0ZS5tYXJrZXJTdGF0ZXNbcGFyc2VJbnQoY3VycmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdGF0ZW1lbnQtaW5kZXgnKSldO1xyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudFN0YXRlcy5tYXAoKG9iajogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouY2hhcklkeCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmNoYXJJZHggPT09IGN1cnJlbnRET00uZ2V0QXR0cmlidXRlKCdjaGFyLWluZGV4JykgJiYgb2JqLndvcmRJZHggPT09IGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3dvcmQtaW5kZXgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudFN0YXRlcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoud29yZElkeCA9PT0gY3VycmVudERPTS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnd29yZC1pbmRleCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnRTdGF0ZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaXNGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJTdGF0ZXM6IHN0YXRlLm1hcmtlclN0YXRlc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1hcmtlcihzdGF0ZW1lbnRJZHg6IG51bWJlciwgd29yZElkeDogbnVtYmVyLCBjaGFySWR4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNsYXNzVG9BZGQgPSAnJyxcclxuICAgICAgICAgICAgc2VudGVuY2VNYXJrZXJzID0gdGhpcy5zdGF0ZS5tYXJrZXJTdGF0ZXNbc3RhdGVtZW50SWR4XTtcclxuICAgICAgICBpZiAoc2VudGVuY2VNYXJrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoYXJJZHggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZW50ZW5jZU1hcmtlcnMuZmluZCgob2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc1RvQWRkICs9IHBhcnNlSW50KG9iai53b3JkSWR4KSA9PT0gd29yZElkeCA/ICcgJyArIG9iai50eXBlIDogJyc7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbnRlbmNlTWFya2Vycy5maW5kKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzVG9BZGQgKz0gKHBhcnNlSW50KG9iai53b3JkSWR4KSA9PT0gd29yZElkeCAmJiBwYXJzZUludChvYmouY2hhcklkeCkgPT09IGNoYXJJZHgpID8gJyAnICsgb2JqLnR5cGUgOiAnJztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGFzc1RvQWRkO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb3JyZWN0TWFya2VycygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmF0dGVtcHRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0eURvbmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubWFya2VyU3RhdGVzID0gdGhpcy5yZXNldE1hcmtlcnModGhpcy5wcm9wcy5xdWVzdGlvblNldHNbdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeF0uc2VudGVuY2VzKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvcnJlY3RNYXJrZXJzLm1hcCgobWFya2VyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgaWR4OiBhbnlbXVtdXHJcbiAgICAgICAgfSwgY3VycmVudElkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG1hcmtlci5pZHgubWFwKChpZHhBcnI6IGFueVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZHhBcnIubWFwKChjdXJyZW50SWR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtlclN0YXRlc1tpbmRleF0ucHVzaCgoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hcmtlci50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3b3JkLWhpZ2hsaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZ2hsaWdodGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogJycgKyBjdXJyZW50SWR4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dvcmQtdW5kZXJsaW5lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndW5kZXJsaW5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6ICcnICsgY3VycmVudElkeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZXR0ZXItaGlnaGxpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29sb3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6ICcnICsgY3VycmVudElkeC53b3JkSWR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiAnJyArIGN1cnJlbnRJZHguY2hhcklkeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZXR0ZXItZGl2aWRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGl2aWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6ICcnICsgY3VycmVudElkeC53b3JkSWR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiAnJyArIGN1cnJlbnRJZHguY2hhcklkeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2N1cnJlbnRJZHhdID0gJ2NvcnJlY3QnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlTWFya2VycygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpY2tDcm9zc1N0YXRlcyA9IFtdO1xyXG4gICAgICAgIGlmICgrK3RoaXMuc3RhdGUuYXR0ZW1wdENvdW50ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29ycmVjdE1hcmtlcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXNJbmNvcnJlY3Q6IGJvb2xlYW5bXSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgd29yZENoZWNrZXJCeVVzZXJJbnB1dCA9IChzZW50ZW5jZUlkeDogbnVtYmVyLCBlbnRyeUlkeDogbnVtYmVyLCBjdXJyZW50SWR4OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb3JyZWN0TWFya2Vyc1tzZW50ZW5jZUlkeF0uaWR4W2VudHJ5SWR4XS5pbmRleE9mKHBhcnNlSW50KGN1cnJlbnRJZHgpKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNvcnJlY3QucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hhckNoZWNrZXJCeVVzZXJJbnB1dCA9IChzZW50ZW5jZUlkeDogbnVtYmVyLCBlbnRyeUlkeDogbnVtYmVyLCBjdXJyZW50V29yZElkeDogc3RyaW5nLCBjdXJyZW50Q2hhcklkeDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29ycmVjdE1hcmtlcnNbc2VudGVuY2VJZHhdLmlkeFtlbnRyeUlkeF0uZmluZEluZGV4KChpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0ud29yZElkeCA9PT0gcGFyc2VJbnQoY3VycmVudFdvcmRJZHgpICYmIChpdGVtLmNoYXJJZHggPT09IHBhcnNlSW50KGN1cnJlbnRDaGFySWR4KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luY29ycmVjdC5wdXNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja0J5Q29ycmVjdEFuc3dlcnMgPSAoc2VudGVuY2U6IGFueSwgaWR4QXJyOiBhbnlbXSwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWR4QXJyLm1hcCgoY29ycmVjdElkeDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZW50ZW5jZS5maW5kSW5kZXgoKGN1cnJlbnRPYmo6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvcnJlY3RJZHggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50T2JqLnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoY3VycmVudE9iai53b3JkSWR4KSA9PT0gY29ycmVjdElkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoY3VycmVudE9iai50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGN1cnJlbnRPYmoud29yZElkeCkgPT09IGNvcnJlY3RJZHgud29yZElkeCAmJiBwYXJzZUludChjdXJyZW50T2JqLmNoYXJJZHgpID09PSBjb3JyZWN0SWR4LmNoYXJJZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jb3JyZWN0LnB1c2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtlclN0YXRlcy5tYXAoKHNlbnRlbmNlOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW50ZW5jZS5tYXAoKG9iajoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouY2hhcklkeCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG9iai50eXBlID09PSAnaGlnaGxpZ2h0ZWQnKSA/IHdvcmRDaGVja2VyQnlVc2VySW5wdXQoMCwgaWR4LCBvYmoud29yZElkeCkgOiAob2JqLnR5cGUgPT09ICd1bmRlcmxpbmVkJykgPyB3b3JkQ2hlY2tlckJ5VXNlcklucHV0KDEsIGlkeCwgb2JqLndvcmRJZHgpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG9iai50eXBlID09PSAnY29sb3JlZCcpID8gY2hhckNoZWNrZXJCeVVzZXJJbnB1dCgyLCBpZHgsIG9iai53b3JkSWR4LCBvYmouY2hhcklkeCkgOiAob2JqLnR5cGUgPT09ICdkaXZpZGVyJykgPyBjaGFyQ2hlY2tlckJ5VXNlcklucHV0KDMsIGlkeCwgb2JqLndvcmRJZHgsIG9iai5jaGFySWR4KSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29ycmVjdE1hcmtlcnMubWFwKChjb3JyZWN0T2JqOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkeDogYW55W11cclxuICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvcnJlY3RPYmoudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3b3JkLWhpZ2hsaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0J5Q29ycmVjdEFuc3dlcnMoc2VudGVuY2UsICh0eXBlb2YgY29ycmVjdE9iai5pZHhbaWR4XSAhPT0gJ3VuZGVmaW5lZCcgPyBjb3JyZWN0T2JqLmlkeFtpZHhdIDogW10pLCAnaGlnaGxpZ2h0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3b3JkLXVuZGVybGluZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0J5Q29ycmVjdEFuc3dlcnMoc2VudGVuY2UsICh0eXBlb2YgY29ycmVjdE9iai5pZHhbaWR4XSAhPT0gJ3VuZGVmaW5lZCcgPyBjb3JyZWN0T2JqLmlkeFtpZHhdIDogW10pLCAndW5kZXJsaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xldHRlci1oaWdobGlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCeUNvcnJlY3RBbnN3ZXJzKHNlbnRlbmNlLCAodHlwZW9mIGNvcnJlY3RPYmouaWR4W2lkeF0gIT09ICd1bmRlZmluZWQnID8gY29ycmVjdE9iai5pZHhbaWR4XSA6IFtdKSwgJ2NvbG9yZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsZXR0ZXItZGl2aWRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnlDb3JyZWN0QW5zd2VycyhzZW50ZW5jZSwgKHR5cGVvZiBjb3JyZWN0T2JqLmlkeFtpZHhdICE9PSAndW5kZWZpbmVkJyA/IGNvcnJlY3RPYmouaWR4W2lkeF0gOiBbXSksICdkaXZpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUubWFya2VyU3RhdGVzW2lkeF0ubGVuZ3RoIHx8IGlzSW5jb3JyZWN0Lmxlbmd0aCkgPyB0aGlzLnN0YXRlLnRpY2tDcm9zc1N0YXRlcy5wdXNoKCdpbmNvcnJlY3QnKSA6IHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzLnB1c2goJ2NvcnJlY3QnKTtcclxuICAgICAgICAgICAgICAgIGlzSW5jb3JyZWN0ID0gW107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnRpY2tDcm9zc1N0YXRlcy5pbmRleE9mKCdpbmNvcnJlY3QnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmVuYWJsZU5leHRRdWVzdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGhhc1RpY2tDcm9zczogdHJ1ZSxcclxuICAgICAgICAgICAgbWFya2VyU3RhdGVzOiB0aGlzLnN0YXRlLm1hcmtlclN0YXRlcyxcclxuICAgICAgICAgICAgYXR0ZW1wdENvdW50OiB0aGlzLnN0YXRlLmF0dGVtcHRDb3VudCxcclxuICAgICAgICAgICAgdGlja0Nyb3NzU3RhdGVzOiB0aGlzLnN0YXRlLnRpY2tDcm9zc1N0YXRlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGlja0Nyb3NzRE9NOiBGdW5jdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNUaWNrQ3Jvc3MpIHtcclxuICAgICAgICAgICAgdGlja0Nyb3NzRE9NID0gKGlkeDE6IG51bWJlcikgPT4gPGltZyBzcmM9e3RoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2lkeDFdID09PSAnY29ycmVjdCcgPyAnLi4vLi4vYXNzZXRzL3RpY2sucG5nJyA6IHRoaXMuc3RhdGUudGlja0Nyb3NzU3RhdGVzW2lkeDFdID09PSAnaW5jb3JyZWN0JyA/ICcuLi8uLi9hc3NldHMvY3Jvc3MucG5nJyA6ICcnfSAvPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aWNrQ3Jvc3NET00gPSAoKSA9PiB7IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWFya2VyU3RhdGVzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJxdWVzdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGVtZW50cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VudGVuY2VzLm1hcCgoaXRlbTogc3RyaW5nLCBpZHgxOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3b3JkQ291bnQgPSBpdGVtLnNwbGl0KCcgJykubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9eydtb29uMicgKyBpZHgxfT48c3BhbiBjbGFzc05hbWU9XCJ0aWNrLWNyb3NzXCI+e3RpY2tDcm9zc0RPTShpZHgxKX08L3NwYW4+PHAgY2xhc3NOYW1lPVwic2VudGVuY2VcIiBrZXk9eydtb29uJyArIGlkeDF9IHN0YXRlbWVudC1pbmRleD17aWR4MX0+e2l0ZW0uc3BsaXQoJyAnKS5tYXAoKGl0ZW0sIGlkeDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV0dGVyQ291bnQgPSBpdGVtLnNwbGl0KCcnKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uQ2xhc3MgPSBgd29yZCR7dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ3dvcmQtaGlnaGxpZ2h0JyA/ICcgaGlnaGxpZ2h0JyA6IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICd3b3JkLXVuZGVybGluZScgPyAnIHVuZGVybGluZScgOiAnJ30ke3RoaXMuc2V0TWFya2VyKGlkeDEsIGlkeDIpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9eydtb29uMicgKyBpZHgyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnRhYkF0dHJ9IGNsYXNzTmFtZT17c2VsZWN0ZWRPcHRpb25DbGFzc30gICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfSB3b3JkLWluZGV4PXtpZHgyfT57aXRlbS5zcGxpdCgnJykubWFwKChpdGVtLCBpZHgzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lcyA9IGAke2l0ZW0gIT09ICcgJyA/ICdjaGFyYWN0ZXInIDogJyd9JHt0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnbGV0dGVyLWhpZ2hsaWdodCcgPyAnIGhpZ2hsaWdodCcgOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnbGV0dGVyLWRpdmlkZScgPyAnIGRpdmlkZScgOiAnJ30ke2lkeDMgPT09IGxldHRlckNvdW50IC0gMSA/ICcgbGFzdCcgOiAnJ30ke3RoaXMuc2V0TWFya2VyKGlkeDEsIGlkeDIsIGlkeDMpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBrZXk9eydtb29uJyArIGlkeDN9IG9uQ2xpY2s9e3RoaXMubWFya0NoYXJ9IGNoYXItaW5kZXg9e2lkeDN9PntpdGVtfTwvc3Bhbj47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeDIgIT09IHdvcmRDb3VudCAtIDEgPyA8c3Bhbj4mbmJzcDs8L3NwYW4+IDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX08L3A+PGJyIC8+PC9SZWFjdC5GcmFnbWVudD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TWFya2VycyB2YWxpZGF0ZU1hcmtlcnM9e3RoaXMudmFsaWRhdGVNYXJrZXJzfSBzZXRTZWxlY3RlZE9wdGlvbj17dGhpcy5zZXRTZWxlY3RlZE9wdGlvbn0gY2xlYXJNYXJrZXJzPXt0aGlzLmNsZWFyTWFya2Vyc30gYWN0aXZpdHlEb25lPXt0aGlzLmFjdGl2aXR5RG9uZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFya2Vycy5jb21wb25lbnQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21hcmtlcnMuY29tcG9uZW50Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFya2Vycy5jb21wb25lbnQubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi9tYXJrZXJzLmNvbXBvbmVudC5sZXNzJztcclxuXHJcbmxldCB0YWJBdHRyID0ge3RhYkluZGV4OiAwfTtcclxuZXhwb3J0IGNsYXNzIE1hcmtlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgc2VsZWN0ZWRPcHRpb246IHN0cmluZ1xyXG4gICAgfTtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb246IEZ1bmN0aW9uLFxyXG4gICAgICAgIGNsZWFyTWFya2VyczogRnVuY3Rpb24sXHJcbiAgICAgICAgdmFsaWRhdGVNYXJrZXJzOiBGdW5jdGlvbixcclxuICAgICAgICBhY3Rpdml0eURvbmU6IGJvb2xlYW5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNYXJrZXJDbGVhcmFuY2UgPSB0aGlzLmhhbmRsZU1hcmtlckNsZWFyYW5jZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsaWRhdGlvbiA9IHRoaXMuaGFuZGxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MgPSB0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgYWN0aXZpdHlEb25lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9wdGlvbkNoYW5nZShldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbWFnZUVsZW1lbnQ+KSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogKGV2ZW50LnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0U2VsZWN0ZWRPcHRpb24oKGV2ZW50LnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWFya2VyQ2xlYXJhbmNlKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJNYXJrZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnZhbGlkYXRlTWFya2VycygpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IGFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VudGVyIHByZXNzZWQnLCBldmVudCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXkgPT09J1NwYWNlJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0VudGVyIHByZXNzZWQnKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlKGV2ZW50KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXN0ZXItbWFya2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZXJzLWNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgey4uLnRhYkF0dHJ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ3dvcmQtaGlnaGxpZ2h0JyA/ICdpbWctaGlnaGxpZ2h0IGFjdGl2ZScgOiAnaW1nLWhpZ2hsaWdodCd9IHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9sYW1wLnBuZ1wiIGFsdD1cIldvcmQgSGlnaGxpZ2h0XCIgZGF0YS12YWx1ZT1cIndvcmQtaGlnaGxpZ2h0XCIgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9ICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZX0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW1nLWhpZ2hsaWdodC1sYmxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5Xb3JkIEhpZ2hsaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgey4uLnRhYkF0dHJ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ3dvcmQtdW5kZXJsaW5lJyA/ICdpbWctdW5kZXJsaW5lIGFjdGl2ZScgOiAnaW1nLXVuZGVybGluZSd9IHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9ydWxlci5wbmdcIiBhbHQ9XCJXb3JkIFVuZGVybGluZVwiIGRhdGEtdmFsdWU9XCJ3b3JkLXVuZGVybGluZVwiICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wdGlvbkNoYW5nZX0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW1nLXVuZGVybGluZS1sYmxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5Xb3JkIFVuZGVybGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICB7Li4udGFiQXR0cn0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uID09PSAnbGV0dGVyLWhpZ2hsaWdodCcgPyAnaW1nLWNvbG9yIGFjdGl2ZScgOiAnaW1nLWNvbG9yJ30gc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3BhaW50YnJ1c2gucG5nXCIgYWx0PVwiTGV0dGVyIEhpZ2hsaWdodFwiIGRhdGEtdmFsdWU9XCJsZXR0ZXItaGlnaGxpZ2h0XCIgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWctY29sb3ItbGJsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+TGV0dGVyIEhpZ2hsaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgey4uLnRhYkF0dHJ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbiA9PT0gJ2xldHRlci1kaXZpZGUnID8gJ2ltZy1kaXZpZGUgYWN0aXZlJyA6ICdpbWctZGl2aWRlJ30gc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3Nhdy5wbmdcIiBhbHQ9XCJMZXR0ZXIgRGl2aWRlXCIgZGF0YS12YWx1ZT1cImxldHRlci1kaXZpZGVcIiAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc30gb25DbGljaz17dGhpcy5oYW5kbGVPcHRpb25DaGFuZ2V9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImltZy1kaXZpZGUtbGJsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+RGl2aWRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJhc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHsuLi50YWJBdHRyfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gPT09ICdlcmFzZXInID8gJ2ltZy1lcmFzZXIgYWN0aXZlJyA6ICdpbWctZXJhc2VyJ30gc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2VyYXNlci5wbmdcIiBhbHQ9XCJFcmFzZXJcIiBkYXRhLXZhbHVlPVwiZXJhc2VyXCIgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3B0aW9uQ2hhbmdlfSAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWctZXJhc2VyLWxibFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkVyYXNlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGF0b3JzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVzZXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1hcmtlckNsZWFyYW5jZX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuYWN0aXZpdHlEb25lfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib2tcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVZhbGlkYXRpb259IGRpc2FibGVkPXt0aGlzLnByb3BzLmFjdGl2aXR5RG9uZX0+T0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3VybD1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL2FwcC5sZXNzJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3Rpdml0eSB9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ0dyYW1tYXI6IENvbW1vbiBhbmQgcHJvcGVyIG5vdW5zJztcclxuICAgIHF1ZXN0aW9uU2V0czogYW55W10gPSBDb25zdGFudHMucXVlc3Rpb25TZXRzO1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBjdXJyZW50UGFnZUlkeDogbnVtYmVyLFxyXG4gICAgICAgIGxhc3RJZHg6IG51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXI6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHJlbmRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlSWR4OiAwLFxyXG4gICAgICAgICAgICBsYXN0SWR4OiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXROYXZJZHggPSB0aGlzLnNldE5hdklkeC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlTmV4dFF1ZXN0aW9uID0gdGhpcy5lbmFibGVOZXh0UXVlc3Rpb24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYXZJZHgoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VJZHg6IGRpcmVjdGlvbiA9PT0gJ3ByZXYnID8gdGhpcy5zdGF0ZS5jdXJyZW50UGFnZUlkeCAtIDEgOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlSWR4ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZU5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZUlkeCA9PT0gdGhpcy5zdGF0ZS5sYXN0SWR4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbGFzdElkeDogKyt0aGlzLnN0YXRlLmxhc3RJZHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3Rlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5IGN1cnJlbnRQYWdlSWR4PXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlSWR4fSBxdWVzdGlvblNldHM9e3RoaXMucXVlc3Rpb25TZXRzfSBlbmFibGVOZXh0UXVlc3Rpb249e3RoaXMuZW5hYmxlTmV4dFF1ZXN0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gc2V0TmF2SWR4PXt0aGlzLnNldE5hdklkeH0gY3VycmVudFBhZ2VJZHg9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2VJZHh9IGxhc3RJZHg9e3RoaXMuc3RhdGUubGFzdElkeH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/dXJsPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz91cmw9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHF1ZXN0aW9uU2V0czoge31bXSA9IENvbnN0YW50cy5xdWVzdGlvblNldHM7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHNldE5hdklkeDogRnVuY3Rpb24sXHJcbiAgICAgICAgbGFzdElkeDogbnVtYmVyLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlSWR4OiBudW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXROYXZJZHggPSB0aGlzLnNldE5hdklkeC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hdklkeChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldE5hdklkeCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXZcIiBvbkNsaWNrPXt0aGlzLnNldE5hdklkeH0gdmFsdWU9XCJwcmV2XCIgZGlzYWJsZWQ9e3RoaXMucHJvcHMuY3VycmVudFBhZ2VJZHggPT09IDB9PlByZXY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaG9sZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uU2V0cy5tYXAoKGl0ZW06IGFueVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3BhZ2UgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY29tcGxldGVkICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2FjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtcIm1vb25cIiArIGluZGV4fT48L3NwYW4+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dFwiIG9uQ2xpY2s9e3RoaXMuc2V0TmF2SWR4fSB2YWx1ZT1cIm5leHRcIiBkaXNhYmxlZD17dGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkeCA9PT0gdGhpcy5wcm9wcy5sYXN0SWR4fT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICAgIHN0YXRpYyBxdWVzdGlvblNldHM6IGFueVtdID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2VudGVuY2VzOiBbXHJcbiAgICAgICAgICAgICAgICAnSmVuIGxvc3QgaGVyIG1pdHRlbnMgYXQgS2luZyBTY2hvb2wuJyxcclxuICAgICAgICAgICAgICAgICdLaWRzIHNpbmcgYWxsIGRheSBhdCBDYW1wIFF1ZXN0LicsXHJcbiAgICAgICAgICAgICAgICAnV2Ugc2F3IGJhc3MgaW4gQmVsbHMgUG9uZC4nLFxyXG4gICAgICAgICAgICAgICAgJ01lbCB3aWxsIG1ha2UgcHJvcHMgZm9yIHRoZSBwbGF5LidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgY29ycmVjdE1hcmtlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd3b3JkLWhpZ2hsaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbMCwgNSwgNl0sIFs1LCA2XSwgWzQsIDVdLCBbMF1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtdW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1szXSwgWzAsIDNdLCBbMl0sIFszLCA2XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGV0dGVyLWhpZ2hsaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkSWR4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFySWR4OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGV0dGVyLWRpdmlkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCc6IFtbXV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZW50ZW5jZXM6IFtcclxuICAgICAgICAgICAgICAgICdUaGUgaGVuIGhhcyBlZ2dzIGluIHRoYXQgbmVzdC4nLFxyXG4gICAgICAgICAgICAgICAgJ015IGRvZyBUZXNzIHRocmVlIHB1cHMnLFxyXG4gICAgICAgICAgICAgICAgJ0Nhc3MgY2FuIGhlbSBoZXIgcGFudHMnLFxyXG4gICAgICAgICAgICAgICAgJ0JyYWcgYW5kIE1lZCB3ZWQgdGhlIG5leHQgZGF5J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdLCBbM10sIFswXSxbMCwyXV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZC11bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzEsMyw2XSwgWzEsIDRdLCBbNF0sWzZdXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogW1xyXG4gICAgICAgICAgICAgICAgICdEYWQgaXMgZ3JpbGxpbmcgYXQgdGhlIHBpY25pYy4nLFxyXG4gICAgICAgICAgICAgICAgJ1RoZSBkdWNrIGhhZCBmdXp6IG9uIGl0cyBoZWFkJyxcclxuICAgICAgICAgICAgICAgICdNb20gbGlrZXMgdG8gZWF0IGZyZXNoIGZpc2gnLFxyXG4gICAgICAgICAgICAgICAgJ0NvdWxkIEJyZW50IG1vdmUgdG8gQmlsbGluZ3M/J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1swXSwgW10sIFswXSxbMSw0XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZC11bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzVdLCBbMSwgMyw2XSwgWzVdLFtdXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogW1xyXG4gICAgICAgICAgICAgICAgICdEYWQgaXMgZ3JpbGxpbmcgYXQgdGhlIHBpY25pYy4nLFxyXG4gICAgICAgICAgICAgICAgJ1RoZSBkdWNrIGhhZCBmdXp6IG9uIGl0cyBoZWFkJyxcclxuICAgICAgICAgICAgICAgICdNb20gbGlrZXMgdG8gZWF0IGZyZXNoIGZpc2gnLFxyXG4gICAgICAgICAgICAgICAgJ0NvdWxkIEJyZW50IG1vdmUgdG8gQmlsbGluZ3M/J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1swXSwgW10sIFswXSxbMSw0XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZC11bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzVdLCBbMSwgMyw2XSwgWzVdLFtdXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogW1xyXG4gICAgICAgICAgICAgICAgICdEYWQgaXMgZ3JpbGxpbmcgYXQgdGhlIHBpY25pYy4nLFxyXG4gICAgICAgICAgICAgICAgJ1RoZSBkdWNrIGhhZCBmdXp6IG9uIGl0cyBoZWFkJyxcclxuICAgICAgICAgICAgICAgICdNb20gbGlrZXMgdG8gZWF0IGZyZXNoIGZpc2gnLFxyXG4gICAgICAgICAgICAgICAgJ0NvdWxkIEJyZW50IG1vdmUgdG8gQmlsbGluZ3M/J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1swXSwgW10sIFswXSxbMSw0XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZC11bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzVdLCBbMSwgMyw2XSwgWzVdLFtdXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbnRlbmNlczogW1xyXG4gICAgICAgICAgICAgICAgICdEYWQgaXMgZ3JpbGxpbmcgYXQgdGhlIHBpY25pYy4nLFxyXG4gICAgICAgICAgICAgICAgJ1RoZSBkdWNrIGhhZCBmdXp6IG9uIGl0cyBoZWFkJyxcclxuICAgICAgICAgICAgICAgICdNb20gbGlrZXMgdG8gZWF0IGZyZXNoIGZpc2gnLFxyXG4gICAgICAgICAgICAgICAgJ0NvdWxkIEJyZW50IG1vdmUgdG8gQmlsbGluZ3M/J1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjb3JyZWN0TWFya2VyczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQtaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1swXSwgW10sIFswXSxbMSw0XV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZC11bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZHgnOiBbWzVdLCBbMSwgMyw2XSwgWzVdLFtdXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItaGlnaGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRJZHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJJZHg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZElkeDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcklkeDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdsZXR0ZXItZGl2aWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaWR4JzogW1tdXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGF0ZW1lbnRzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC50aWNrLWNyb3NzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnRpY2stY3Jvc3MgaW1nIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZC5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcbi5zdGF0ZW1lbnRzLWNvbnRhaW5lciAuc2VudGVuY2UgLndvcmQudW5kZXJsaW5lZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZC5oaWdobGlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZTZhMztcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZC51bmRlcmxpbmU6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5zdGF0ZW1lbnRzLWNvbnRhaW5lciAuc2VudGVuY2UgLndvcmQgLmNoYXJhY3Rlci5jb2xvcmVkIHtcXG4gIGNvbG9yOiAjMDA4NGZmO1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkIC5jaGFyYWN0ZXIuZGl2aWRlciB7XFxuICBib3gtc2hhZG93OiAycHggMCAwIDAgI2U0NGEwZTtcXG59XFxuLnN0YXRlbWVudHMtY29udGFpbmVyIC5zZW50ZW5jZSAud29yZCAuY2hhcmFjdGVyLmhpZ2hsaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG4uc3RhdGVtZW50cy1jb250YWluZXIgLnNlbnRlbmNlIC53b3JkIC5jaGFyYWN0ZXIuZGl2aWRlOm5vdCgubGFzdCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAxcHggMCAwIDA7XFxufVxcbnNwYW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbGVmdDogMjBweDtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBkaXYuaGlnaGxpZ2h0LFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgZGl2LnVuZGVybGluZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdi5jb2xvcixcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdi5kaXZpZGUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBkaXYuZXJhc2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGRpdiBzcGFuIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgZGl2IHNwYW4uaW1nLWRpdmlkZS1sYmwge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgZGl2IHNwYW4uaW1nLWVyYXNlci1sYmwge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1oaWdobGlnaHQsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLXVuZGVybGluZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctY29sb3IsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWRpdmlkZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctZXJhc2VyIHtcXG4gIHdpZHRoOiAxNzBweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWhpZ2hsaWdodDpob3ZlcixcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctdW5kZXJsaW5lOmhvdmVyLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1jb2xvcjpob3ZlcixcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctZGl2aWRlOmhvdmVyLFxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAubWFya2Vycy1jb250YWluZXIgaW1nLmltZy1lcmFzZXI6aG92ZXIsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWhpZ2hsaWdodC5hY3RpdmUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLXVuZGVybGluZS5hY3RpdmUsXFxuLm1hc3Rlci1tYXJrZXItY29udGFpbmVyIC5tYXJrZXJzLWNvbnRhaW5lciBpbWcuaW1nLWNvbG9yLmFjdGl2ZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctZGl2aWRlLmFjdGl2ZSxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLm1hcmtlcnMtY29udGFpbmVyIGltZy5pbWctZXJhc2VyLmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggd2hpdGU7XFxufVxcbi5tYXN0ZXItbWFya2VyLWNvbnRhaW5lciAudmFsaWRhdG9ycy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0b3A6IDE5OHB4O1xcbn1cXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLnZhbGlkYXRvcnMtY29udGFpbmVyIGJ1dHRvbi5yZXNldCxcXG4ubWFzdGVyLW1hcmtlci1jb250YWluZXIgLnZhbGlkYXRvcnMtY29udGFpbmVyIGJ1dHRvbi5vayB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDJweCB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmM2ZGE7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmh0bWwgYm9keSB7XFxuICBoZWlnaHQ6IDk4JTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweDtcXG59XFxuaHRtbCBib2R5IHNwYW4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuaHRtbCBib2R5IGRpdiNhcHAgLm1hc3Rlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9CYWNrZ3JvdW5kLnBuZycpO1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciBoMi50aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuaHRtbCBib2R5IGRpdiNhcHAgLm1hc3Rlci1jb250YWluZXIgLmFjdGl2aXR5LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1JSk7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIC5hY3Rpdml0eS1jb250YWluZXIgaDIucXVlc3Rpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDAwMDtcXG59XFxuaHRtbCBib2R5IGRpdiNhcHAgLm1hc3Rlci1jb250YWluZXIgLmFjdGl2aXR5LWNvbnRhaW5lciAuc3RhdGVtZW50cy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweDtcXG4gIGhlaWdodDogNDglO1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbmh0bWwgYm9keSBkaXYjYXBwIC5tYXN0ZXItY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciBidXR0b24uaGVscCxcXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uLmNsb3NlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5odG1sIGJvZHkgZGl2I2FwcCAubWFzdGVyLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZGRhMjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2aWdhdGlvbi1jb250YWluZXIge1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDk5JTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubmF2aWdhdGlvbi1jb250YWluZXIgLnBhZ2luYXRpb24tY29udGFpbmVyIC5wYWdlLWhvbGRlcnMge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4ubmF2aWdhdGlvbi1jb250YWluZXIgLnBhZ2luYXRpb24tY29udGFpbmVyIC5wYWdlLWhvbGRlcnMgc3Bhbi5wYWdlIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciAucGFnaW5hdGlvbi1jb250YWluZXIgLnBhZ2UtaG9sZGVycyBzcGFuLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciAucGFnaW5hdGlvbi1jb250YWluZXIgLnBhZ2UtaG9sZGVycyBzcGFuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==