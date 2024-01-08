import React, { ReactNode} from 'react';

import './Modal.css'

type ModalProps = {
    className?: string,
    children: ReactNode,
    blur?: boolean,
    animated?: boolean,
    theme?: 'neutral' | 'light' | 'dark'
}

export default function Modal({ className, children, animated, blur, theme }: ModalProps ) {
  return (
    <div role='dialog' className={`modal ${className}`} data-blur={blur} data-animated={animated} data-theme={theme}>
        <div className='modal-content'>
          { children }
        </div>
    </div>
  )
}