"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Modal.css");
function Modal(_a) {
    var className = _a.className, children = _a.children, animated = _a.animated, showCloseButton = _a.showCloseButton, theme = _a.theme;
    var _b = (0, react_1.useState)(true), isVisible = _b[0], setIsVisible = _b[1];
    if (!isVisible)
        return null;
    return (react_1.default.createElement("div", { role: 'dialog', className: "modal ".concat(className), "data-closeButton": showCloseButton, "data-animated": animated, "data-theme": theme },
        react_1.default.createElement("div", { className: 'modal__content' },
            react_1.default.createElement("button", { id: 'modal__close-button', onClick: function () { return setIsVisible(false); } }, "X"),
            children)));
}
exports.default = Modal;
