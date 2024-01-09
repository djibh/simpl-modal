import React, { ReactNode, useState } from 'react';

import './Modal.css'

type ModalProps = {
    className?: string,
    children: ReactNode,
    animated?: boolean,
    theme?: 'neutral' | 'light' | 'dark',
    showCloseButton?: boolean
}

export default function Modal({ className, children, animated, showCloseButton, theme }: ModalProps ) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  
  return (
    <div role='dialog' className={`modal ${className}`} data-closeButton={showCloseButton} data-animated={animated} data-theme={theme}>
        <div className='modal__content'>
        <button id='modal__close-button' onClick={() => setIsVisible(false)}>X</button>
          { children }
        </div>
    </div>
  )
}