"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _featured = _interopRequireDefault(require("../../images/featured3.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nbackground: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(", ");\n    background-size:cover;\nbackground-position:center;\ncolor:#fff;\n    height: 100vh;\n  max-height:500px;\nflex-direction:column;\npadding: 0 1rem;\nfont-weight:bold;\n\nh1{\n    font-size:clamp(3rem,5vw,5rem);\n}\np{\n    font-size:clamp(1rem,3vw,2rem);\n    margin-bottom: 1rem;\n}\nbutton{\n    background:#ffc500;\n    color:#000;\nborder:none;\noutline:none;\npadding:0.6rem 5rem;\nfont-size:1.4rem;\ntransition:0.2s ease-out;\ncursor:pointer;\n\n&:hover{\n    color:#fff;\n    background:#e31837;\n}\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeatureContainer = _styledComponents["default"].div(_templateObject(), _featured["default"]);

exports.FeatureContainer = FeatureContainer;