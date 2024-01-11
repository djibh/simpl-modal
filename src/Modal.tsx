/* Modal.tsx
 *
 * Here is the component you will import in your code.
 * You can add any state and setter to open/close the modal based off of external state.
 * 
 */
import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

import './Modal.css'

type ModalProps = {
    isOpen: boolean, // state from parent component
    setIsOpen: Dispatch<SetStateAction<boolean>>; // setter from parent component
    className?: string, // used to add custom css
    children: ReactNode, // the content you want to add
    animated?: boolean, // defines if you want the modal to appear/vanish with a transition
    theme?: 'neutral' | 'light' | 'dark', // defines the color scheme of the modal background
    showCloseButton?: boolean // show a close button in the top-right corner of the child component if necessary
}

export default function Modal({ isOpen, setIsOpen, className, children, animated, showCloseButton, theme }: ModalProps ) {

  const handleClick = () => {
    setIsOpen(false)
  }

  /* Feature: close Modal on 'Escape' key press event.
   *
   * Add event listener to handle closing on 'Escape' keydown event.
   * We also remove the listener in case the DOM element is removed.
   * 
   */
  useEffect(() => {
    const closeOnKeyDown = (event: KeyboardEvent) => {
      // check if escape key is pressed
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) { document.addEventListener('keydown', closeOnKeyDown) };

    return () => { document.removeEventListener('keydown', closeOnKeyDown) };
  }, [isOpen, setIsOpen])
  
  return (
    <div id='modal' role='dialog' title='Show content with modal' aria-label="Show content with modal" className={`modal ${isOpen ? "modal-active" : ""} ${className}`} data-close-button={showCloseButton} data-animated={animated} data-theme={theme}>
        <div className='modal__content'>
          <button id='modal__close-button' type='button' aria-label='Close modal' onClick={handleClick}>X</button>
          { children }
        </div>
    </div>
  )
}