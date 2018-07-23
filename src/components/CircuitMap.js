import React from 'react';
import { compose, withProps } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const CircuitMap = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3Ojj2mBCOzeSa-EG6MFQlCADfu5_hsJ8',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `200px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={14} defaultCenter={props.position}>
        {props.isMarkerShown && <Marker position={props.position} />}
    </GoogleMap>
));

export default CircuitMap;
