import React, { ReactNode } from 'react';
import './Modal.css';
type ModalProps = {
    className?: string;
    children: ReactNode;
    animated?: boolean;
    theme?: 'neutral' | 'light' | 'dark';
    showCloseButton?: boolean;
};
export default function Modal({ className, children, animated, showCloseButton, theme }: ModalProps): React.JSX.Element | null;
export {};
