import React from 'react'
import PropTypes from 'prop-types';
import buttonStyles from './index.css'

const FloatingButton = ({ icon, onClick, styles, color }) => {
    return (
        <div className={buttonStyles.fab} onClick={onClick} style={{...styles, backgroundColor: color}} >
            <span className={buttonStyles.buttonSpan}>{icon}</span>
        </div>
    );
}

FloatingButton.defaultProps = {
    icon: '+',
    styles: {
        width: '64px',
	    height: '64px',
    },
    color: '#03A9F4',
}

FloatingButton.protoTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    styles: PropTypes.object,
}

export default React.memo(FloatingButton);
