import { useState, useEffect } from 'react';
import './modal.css';
import React from 'react';
import { AiOutlineCloseCircle} from "react-icons/ai";

function Modal({isOpen, closeModal, contenido, task}) { 
 const handleModalDialogClick = (e) => {
    e.stopPropagation();
    
}
  return (
     <div className={isOpen?'modal modal-open':'modal'} onClick={closeModal}> 
      <section className="modal_dialog" onClick={handleModalDialogClick}>
      <div className='titleModalContainer'> 
      <div></div>

      <h1> {task}</h1> 

      <button onClick={closeModal} className="closeIcon"><AiOutlineCloseCircle/></button>
      </div>  
      <article>{contenido}</article>
      </section>
    </div>
  );
}

export default Modal;
