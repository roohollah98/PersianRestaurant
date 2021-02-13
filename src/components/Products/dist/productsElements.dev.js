"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductButton = exports.ProductPrice = exports.ProductDesc = exports.ProductTitle = exports.ProductInfo = exports.ProductImage = exports.ProductCard = exports.ProductsWrapper = exports.ProductsHeading = exports.ProductsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nborder:none;\ntransition:0.2s ease-out;\ncolor:#fff;\nbackground:#e31837;\npadding:16px 4rem;\nfont-size:1rem;\ncursor:pointer;\n&:hover{\nbackground:#ffc500;\ntransition:0.2s ease-out;\ncolor:#000;\n}\n\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nmargin-bottom:1rem;\nfont-size:2rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-size:1.5rem;\nfont-weight:400;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items: center;\npadding: 2rem;\ntext-align: center;\ncolor:#fff;\n}\n\n\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nmin-width:300px;\nmax-width:100%;\nheight:300px;\nbox-shadow:8px 8px #fdc500;\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth:300px;\nline-height:2;\nmargin:0 2rem;\n\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\ndisplay:flex;\njustify-content:center;\nflex-wrap: wrap;\nmargin: 0 auto;\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ncolor:#fff;\nmargin-bottom:5rem;\nfont-size: clamp(2rem,2.5vw,3rem);\ntext-align:center;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nbackground:#150f0f;\nmin-height:100vh;\nwidth:100%;\ndisplay:flex;\njustify-content:center;\npadding:2rem 0;\nflex-direction:column;\npadding:5rem calc((100vw - 1300px)/2);\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents["default"].div(_templateObject());

exports.ProductsContainer = ProductsContainer;

var ProductsHeading = _styledComponents["default"].h1(_templateObject2());

exports.ProductsHeading = ProductsHeading;

var ProductsWrapper = _styledComponents["default"].div(_templateObject3());

exports.ProductsWrapper = ProductsWrapper;

var ProductCard = _styledComponents["default"].div(_templateObject4());

exports.ProductCard = ProductCard;

var ProductImage = _styledComponents["default"].img(_templateObject5());

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents["default"].div(_templateObject6());

exports.ProductInfo = ProductInfo;

var ProductTitle = _styledComponents["default"].h2(_templateObject7());

exports.ProductTitle = ProductTitle;

var ProductDesc = _styledComponents["default"].p(_templateObject8());

exports.ProductDesc = ProductDesc;

var ProductPrice = _styledComponents["default"].p(_templateObject9());

exports.ProductPrice = ProductPrice;

var ProductButton = _styledComponents["default"].button(_templateObject10());

exports.ProductButton = ProductButton;