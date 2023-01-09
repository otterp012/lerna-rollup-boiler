import { jsx } from 'react/jsx-runtime';

var Button = function Button(props) {
  return /*#__PURE__*/jsx("button", {
    "aria-role": props.label,
    children: props.children
  });
};
var List = function List(props) {
  return /*#__PURE__*/jsx("div", {
    children: props.str
  });
};
var Test = function Test(props) {
  return /*#__PURE__*/jsx("span", {});
};

export { Button, List, Test };
//# sourceMappingURL=index.js.map
