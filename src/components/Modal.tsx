import React from 'react';

import './Modal.css'

type ModalProps = {
    className?: string,
    Content: JSX.Element,
    blur?: boolean,
    animated?: boolean,
    theme?: 'neutral' | 'light' | 'dark'
}

export default function Modal({ className, Content, animated, blur, theme }: ModalProps ) {
  return (
    <div role='dialog' className={`modal ${className}`} data-blur={blur} data-animated={animated} data-theme={theme}>
        <div className='modal-content'>
          { Content }
        </div>
    </div>
  )
}