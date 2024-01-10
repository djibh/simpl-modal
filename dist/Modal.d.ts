import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import './Modal.css';
type ModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
    children: ReactNode;
    animated?: boolean;
    theme?: 'neutral' | 'light' | 'dark';
    showCloseButton?: boolean;
};
export default function Modal({ isOpen, setIsOpen, className, children, animated, showCloseButton, theme }: ModalProps): React.JSX.Element;
export {};
