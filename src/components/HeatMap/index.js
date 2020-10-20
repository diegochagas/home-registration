import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class HeatMap extends Component {
    static defaultProps = {
        center: {
            lat: 70.06,
            lng: 41.42
        },
        zoom: 11
    }

    onMapClick({x, y, lat, lng, event}) {
        this.setState({
            heatmapPoints: [ ...this.props.heatmapPoints, {lat, lng}]
        });

        if (this._googleMap !== undefined) {      
            const point = new window.google.maps.LatLng(lat, lng);

            this._googleMap.heatmap.data.push(point);
        }
    }

    render() {
        const apiKey = { key: 'AIzaSyBbEgH3Bm7kYUluzA4Zbc2VvGEfuJqwuQw' };
        
        const heatMapData = {
            positions: this.props.heatmapPoints,
            options: {
                radius: 20,
                opacity: 0.6
            }
        }

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={apiKey}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatMapData}
                    onClick={this.onMapClick.bind(this)}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default HeatMap