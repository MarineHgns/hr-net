import React from 'react';
import {FaWindowClose} from "react-icons/fa";

const Modal = () => {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <button className='modal-toggle modal-button close-btn'><FaWindowClose/></button>
        <div className='modal-content'>
          <p className='p'>Employee Created !</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Modal;