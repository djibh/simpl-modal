"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Modal.css");
function Modal(_a) {
    var isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, className = _a.className, children = _a.children, animated = _a.animated, showCloseButton = _a.showCloseButton, theme = _a.theme;
    var handleClick = function () {
        setIsOpen(false);
    };
    return (react_1.default.createElement("div", { role: 'dialog', className: "modal ".concat(isOpen ? "modal-active" : "", " ").concat(className), "data-close-button": showCloseButton, "data-animated": animated, "data-theme": theme },
        react_1.default.createElement("div", { className: 'modal__content' },
            react_1.default.createElement("button", { id: 'modal__close-button', onClick: handleClick }, "X"),
            children)));
}
exports.default = Modal;
