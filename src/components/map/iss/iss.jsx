import L from 'leaflet';

const iss = new L.Icon({
    iconUrl: require('./iss.png'),
    iconSize: new L.Point(60, 75),
});

export { iss };