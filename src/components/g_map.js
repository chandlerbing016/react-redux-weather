import React, { Component } from 'react';

export default class GoogleMap extends Component {
    // hook in react component life cycle; get called right after comp rendered
    componentDidMount() {
        // create new map; inject it into map div
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.coord.lat,
                lng: this.props.coord.lon
            }
        });
    }
    render() {
        return <div ref="map" />;
    }
}