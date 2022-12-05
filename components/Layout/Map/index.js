import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet'
import Image from 'next/image';
import marker from '../../../public/map-marker.png';
import L from 'leaflet';
import PrintCenter from './PrintCenter'
import styles from './Map.module.css';
import { useEffect } from 'react';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DEFAULT_CENTER = [37.215009, 50.014012];

const Map = () => {

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
      <div className={`${styles.container} ${styles.map}`}>
        <MapContainer className={styles.homeMap}
          center={DEFAULT_CENTER}
          zoom={15}
          zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=""
          />
          <PrintCenter/>
          <Image
            className={styles.marker}
            src={marker}
            alt=""
            width={500}
          ></Image>
        </MapContainer>
      </div>
  );
};

export default Map;
