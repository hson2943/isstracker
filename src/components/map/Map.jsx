import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { PinPos } from './pinPos/PinPos';
import { iss } from './iss';
export default function Map({ data, trace }) {
    if (!data.latitude) {
        return "No data";
    }
    const latitude = data.latitude;
    const longitude = data.longitude;
    const limeOptions = { color: 'lime' }
    let polyline = [];
    return (
        <MapContainer center={[0, longitude]} zoom={1.5} style={{ height: '100vh', width: '68vw' }} minZoom={1.5} maxBounds={[[-90, -Infinity], [90, Infinity]]} onClick={(e) => console.log('11')}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
                <Popup>
                    ISS <br /> {latitude}<br />{longitude}
                </Popup>
            </TileLayer>
            <Marker position={[latitude, longitude]} >
                <Popup>
                    ISS <br /> {latitude}<br />{longitude}
                </Popup>
            </Marker>
            <PinPos></PinPos>
            <Polyline pathOptions={limeOptions} positions={trace} />
        </MapContainer>
    )
}
