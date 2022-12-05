import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import CurrentLocationIcon from '../../UI/SVGIcons/CurrentLocatonIcon';
import styles from './Map.module.css';

const PrintCenter = () => {
  const map=useMap()

  useEffect(()=>{
    map.on('moveend', function (e) {
      console.log('on moveend',e.target.getCenter());
    });
  },[map])

  const flyToPoint = () => {
    console.log('fly to 50,30');
    map.flyTo([50,30])
  };
  
  return (<div className={`${styles.button} ${styles['current-location-btn']}`} onClick={flyToPoint}>
    <CurrentLocationIcon />
  </div>)
}

export default PrintCenter