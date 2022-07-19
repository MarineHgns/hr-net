import React from 'react';
import {FaWindowClose} from "react-icons/fa";

/**
 * The Modal function returns a div which contains the text "Employee Created !" and a closing button.
 * @returns A modal component that is rendered when the user clicks the submit button.
 */

const Modal = () => {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <button className='modal-toggle modal-button close-btn' aria-label="close button"><FaWindowClose/></button>
        <div className='modal-content'>
          <p className='p'>Employee Created !</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Modal;