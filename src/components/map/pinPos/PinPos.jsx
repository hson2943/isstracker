import React, { useState } from 'react'
import { Marker, useMapEvents, Popup } from 'react-leaflet'
export const PinPos = () => {
    const [postition, setPostion] = useState(null);
    const map = useMapEvents({
        click(e) {
            setPostion(e.latlng)
        },
    })

    return postition === null ? null : (
        <Marker position={postition}>
            < Popup>
                Latitude : {postition.lat} <br />
                Longitude : {postition.lng}
            </ Popup>
        </Marker>
    )
}
