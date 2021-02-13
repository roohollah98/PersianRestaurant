"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.NavBarIcon = exports.NavBarLink = exports.NavBarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nfont-size:2rem;\ntransform:translate(-50%,-55%);\n\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ntop:0;\nright:0;\ncolor:#fff;\ndisplay:block;\nposition:absolute;\ncursor:pointer;\n\np{\ntransform:translate(-175%,45%);\nfont-weight:bold;\nfont-size:1.6rem;\n\n\n}\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-size:2rem;\nfont-weight:bold;\ntext-decoration:none;\ncolor:#fff;\n@media screen and(max-width:400px){\n    position:absolute;\n    top:10px;\n    left:25px;\n}\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nheight:80px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarContainer = _styledComponents["default"].div(_templateObject());

exports.NavBarContainer = NavBarContainer;
var NavBarLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject2());
exports.NavBarLink = NavBarLink;

var NavBarIcon = _styledComponents["default"].div(_templateObject3());

exports.NavBarIcon = NavBarIcon;
var Icon = (0, _styledComponents["default"])(_fa.FaPizzaSlice)(_templateObject4());
exports.Icon = Icon;