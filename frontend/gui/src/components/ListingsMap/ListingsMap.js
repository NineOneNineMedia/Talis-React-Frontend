import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from 'leaflet'

const accessToken = process.env.REACT_APP_MAPBOX_KEY;


const ListingsMap = (props) => {
    return (
        <Map center={[5.559907, -0.204809]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mxnunley1/ck9969yit0kpl1jnrnvr4511e/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'

            />
        </Map>
    );
}

export default ListingsMap;