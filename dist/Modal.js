"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Modal.css");
function Modal(_a) {
    var className = _a.className, children = _a.children, animated = _a.animated, blur = _a.blur, theme = _a.theme;
    return (react_1.default.createElement("div", { role: 'dialog', className: "modal ".concat(className), "data-blur": blur, "data-animated": animated, "data-theme": theme },
        react_1.default.createElement("div", { className: 'modal-content' }, children)));
}
exports.default = Modal;