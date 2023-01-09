'use strict';

var jsxRuntime = require('react/jsx-runtime');

var Button = function Button(props) {
  return /*#__PURE__*/jsxRuntime.jsx("button", {
    "aria-role": props.label,
    children: props.children
  });
};
var List = function List(props) {
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: props.str
  });
};
var Test = function Test(props) {
  return /*#__PURE__*/jsxRuntime.jsx("span", {});
};

exports.Button = Button;
exports.List = List;
exports.Test = Test;
//# sourceMappingURL=index.js.map
