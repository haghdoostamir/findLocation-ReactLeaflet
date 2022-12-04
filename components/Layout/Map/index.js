import { Fragment } from 'react';
import 'leaflet/dist/leaflet.css';

import Image from 'next/image';
import DynamicMap from '../Map/DynamicMap/';
import marker from '../../../public/map-marker.png';
import SVGicons from '../../UI/SVGIcons/SVGIcons';
import CurrentLocationIcon from '../../UI/SVGIcons/CurrentLocatonIcon';

import styles from './Map.module.css';

let DEFAULT_CENTER = [37.215009, 50.014012];

const Map = () => {
  const printCenter = (map) => {
    map.target.on('moveend', function (e) {
      console.log(e.target.getCenter());
    });
  };

  const mapp = (
    <DynamicMap
      className={styles.homeMap}
      center={DEFAULT_CENTER}
      zoom={15}
      whenReady={printCenter}
      zoomControl={false}
    >
      {({ TileLayer, Marker, Popup }) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
            // &copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
          />
          {/* <Marker position={DEFAULT_CENTER}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </>
      )}
    </DynamicMap>
  );

  return (
    <Fragment>
      <div className={styles.container}>
        <div
          className={`${styles.button} ${styles['current-location-btn']}`}
        >
          <CurrentLocationIcon />
        </div>
        <label></label>
        <Image
          className={styles.marker}
          src={marker}
          alt=""
          width={500}
        ></Image>
        {mapp}
      </div>
    </Fragment>
  );
};

export default Map;
