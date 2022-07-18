import React from "react";
import "./layout-style.css";
import { Mapbox, Scene, PolygonLayer } from '@antv/l7'; 

class Layout extends React.Component {

  componentDidMount() {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        zoom: 4,
        center: [100, 30]
      })
    })
    const layer = new PolygonLayer()
    .source({
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  103.53515625,
                  37.85750715625203
                ],
                [
                  101.07421875,
                  28.536274512989916
                ],
                [
                  106.34765625,
                  31.728167146023935
                ],
                [
                  103.53515625,
                  37.85750715625203
                ]
              ]
            ]
          }
        }
      ]
    })
    .shape('fill')
    .color('#f00')
    scene.on('loaded', () => {
      scene.addLayer(layer);
      layer.on('click', () => {
        alert('click')
      })
    })
  }

  render() {
    return (
      <div id="map" style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: '#f00'
      }}>
      
      </div>
    );
  }
}

export default Layout;
