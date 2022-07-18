import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Layout from "./components/Layout";
import { MapboxScene, PolygonLayer, LayerEvent } from '@antv/l7-react'

function App() {
  const filldata = {
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
  }
  return (
    <div className="App">
      {/* <Layout /> */}
      <MapboxScene
         map={{
          center: [100, 30],
          zoom: 3,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
          <PolygonLayer
            key={'1'}
            options={{
              autoFit: false,
            }}
            source={{
              data: filldata,
            }}
            scale={{
              values: {
                confirmedCount: {
                  type: 'quantile',
                },
              },
            }}
            color={{
              values: '#f00',
            }}
            shape={{
              values: 'fill',
            }}
            style={{
              opacity: 1,
            }}
          >
            <LayerEvent type="click" handler={() => {
              alert('click')
            }} />
          </PolygonLayer>

      </MapboxScene>
    </div>
  );
}

export default App;
