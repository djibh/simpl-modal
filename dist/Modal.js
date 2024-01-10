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
/* Modal.tsx
 *
 * Here is the component you will import in your code.
 * You can add any state and setter to open/close the modal based off of external state.
 *
 */
var react_1 = __importStar(require("react"));
require("./Modal.css");
function Modal(_a) {
    var isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, className = _a.className, children = _a.children, animated = _a.animated, showCloseButton = _a.showCloseButton, theme = _a.theme;
    var handleClick = function () {
        setIsOpen(false);
    };
    /* Feature: close Modal on 'Escape' key press event.
     *
     * Add event listener to handle closing on 'Escape' keydown event.
     * We also remove the listener in case the DOM element is removed.
     *
     */
    (0, react_1.useEffect)(function () {
        var closeOnKeyDown = function (event) {
            // check if escape key is pressed
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', closeOnKeyDown);
        }
        ;
        return function () { document.removeEventListener('keydown', closeOnKeyDown); };
    }, [isOpen, setIsOpen]);
    return (react_1.default.createElement("div", { role: 'dialog', className: "modal ".concat(isOpen ? "modal-active" : "", " ").concat(className), "data-close-button": showCloseButton, "data-animated": animated, "data-theme": theme },
        react_1.default.createElement("div", { className: 'modal__content' },
            react_1.default.createElement("button", { id: 'modal__close-button', onClick: handleClick }, "X"),
            children)));
}
exports.default = Modal;
