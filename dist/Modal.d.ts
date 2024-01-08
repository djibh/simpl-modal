import React, { ReactNode } from 'react';
import './Modal.css';
type ModalProps = {
    className?: string;
    children: ReactNode;
    blur?: boolean;
    animated?: boolean;
    theme?: 'neutral' | 'light' | 'dark';
};
export default function Modal({ className, children, animated, blur, theme }: ModalProps): React.JSX.Element;
export {};
