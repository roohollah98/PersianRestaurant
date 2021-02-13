"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopItems = exports.TopContent = exports.TopContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _pizza = _interopRequireDefault(require("../../images/pizza-3.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\njustify-content:center;\nalign-items:flex-start;\nwidth:650px;\nheight:100vh;\nflex-direction:column;\ncolor:#fff;\npadding:0 2rem;\ntext-align:center;\nline-height:1.5;\nfont-weight:bold;\n@media screen and (max-width:650px){\n  width:100%;\n}\n\nh1{\n    font-size: clamp(2.5rem,10vw,5rem);\n    margin-bottom: 1rem;\n    box-shadow:-3px 5px #e9ba23;\n    padding-left:1rem;\n}\np{\n    font-size: clamp(2rem,2.5vw,3rem);\n    margin-bottom:2rem;\n}\n\nbutton{\n    padding:1rem 4rem;\n    color:#fff;\n    background:#e31837;\n    font-size:1.5rem;\n    line-height: 1;\n    font-weight: bold;\n    border:none;\n    transition:0.2s ease-out;\n    cursor:pointer;\n    &:hover{\n        color:#000;\n        transition:0.2s ease-out;\n        background:#ffc500;\n    }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nheight:calc(100vh-80px);\npadding:0rem calc((100vh -1300px)/2);\nmax-height:100%;\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nheight:100vh;\nwidth:100%;\n\nbackground: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(", ");\n\n    background-size:cover;\n    background-position:center;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TopContainer = _styledComponents["default"].div(_templateObject(), _pizza["default"]);

exports.TopContainer = TopContainer;

var TopContent = _styledComponents["default"].div(_templateObject2());

exports.TopContent = TopContent;

var TopItems = _styledComponents["default"].div(_templateObject3());

exports.TopItems = TopItems;