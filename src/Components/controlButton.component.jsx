import React from 'react';
import './controlButton.style.css';

export const ControlButton = ({name, handleEvent}) =>  {
    return (
        <div className = "control-button">
            <button onClick = { handleEvent }>
                { name }
            </button>
        </div>
    );
}