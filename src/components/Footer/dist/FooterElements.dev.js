"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconLink = exports.SocialIcons = exports.SocialLogo = exports.SocialMediaWrap = exports.SocialMedia = exports.FooterWrap = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 24px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 16px auto 0 auto;\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1300px;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1300px;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #0d0909;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents["default"].footer(_templateObject());

exports.FooterContainer = FooterContainer;

var FooterWrap = _styledComponents["default"].div(_templateObject2());

exports.FooterWrap = FooterWrap;

var SocialMedia = _styledComponents["default"].section(_templateObject3());

exports.SocialMedia = SocialMedia;

var SocialMediaWrap = _styledComponents["default"].div(_templateObject4());

exports.SocialMediaWrap = SocialMediaWrap;
var SocialLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject5());
exports.SocialLogo = SocialLogo;

var SocialIcons = _styledComponents["default"].div(_templateObject6());

exports.SocialIcons = SocialIcons;

var SocialIconLink = _styledComponents["default"].a(_templateObject7());

exports.SocialIconLink = SocialIconLink;