import React from 'react';

const MapMarker = (props) => {
    const { color, name, } = props;
    return (
        <div className="marker"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
        />
    );
};

export default MapMarker;