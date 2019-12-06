import React from 'react';

const Spiner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}} width="213px" height="213px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M29 50A21 21 0 0 0 71 50A21 24.4 0 0 1 29 50" fill="#93dbe9" stroke="none" transform="rotate(301.807 50 51.7)">
          <animateTransform attributeName="transform" type="rotate" dur="1.5873015873015872s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.7;360 50 51.7"></animateTransform>
        </path>
        </svg>
    )
}

export default Spiner;