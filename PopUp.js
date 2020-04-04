import React from 'react';
import './style.css'

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>{props.title}</h2>

        <button onClick={ props.closePopup }> Close </button>
      </div>
    </div>    
  )
}
export default Popup
