"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: Button_module_default["button"],
    children: "Test"
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
