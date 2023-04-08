// esbuild-scss-modules-plugin:./Button.module.scss
var digest = "46b06cdb381856c2d7a53540af0ba1d55dcaa7785471994b4d3f085fa4d65777";
var classes = { "button": "_button_t9yfv_1" };
var css = `._button_t9yfv_1 {
  background-color: red;
}`;
(function() {
  if (typeof document !== "undefined" && !document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Button_module_default = classes;

// src/ui/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("button", {
    className: Button_module_default["button"],
    children: "Test"
  });
};
export {
  Button
};
