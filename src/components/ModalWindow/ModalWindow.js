import React from 'react';

import './ModalWindow.sass';

const ModalWindow = (props) => {
  return (
    <div className="modal" onClick={(e) => {
      if(e.target.classList.contains('modal')) props.close();
    }}>
      {props.children}
    </div>
  );
};

export default ModalWindow;