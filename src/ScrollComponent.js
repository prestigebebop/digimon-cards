import React from 'react';

const ScrollComponent = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '1000px'}}>
            {props.children}
        </div>
    )
}

export default ScrollComponent;