import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { PinPos } from './pinPos/PinPos';
import { iss } from './iss/iss';
export default function Map({ data, trace }) {
    if (!data.latitude) {
        return "No data";
    }
    const latitude = data.latitude;
    const longitude = data.longitude;
    const limeOptions = { color: 'lime' }
    return (
        <MapContainer center={[0, 0]} zoom={1.6} style={{ height: '100vh', width: '60vw' }} minZoom={1.5} maxBounds={[[-90, -180], [90, 180]]} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
                <Popup>
                    ISS <br /> {latitude}<br />{longitude}
                </Popup>
            </TileLayer>
            <Marker position={[latitude, longitude]} icon={iss}>
                <Popup>
                    ISS <br /> {latitude}<br />{longitude}
                </Popup>
            </Marker>
            <PinPos></PinPos>
            <Polyline pathOptions={limeOptions} positions={trace} />
        </MapContainer>
    )
}
