import styles from './CurrentLocatonIcon.module.css';

const CurrentLocatonIcon = (props) => {
  // classes = props.className? `${props.className} ${styles.container}` : styles.container;

  return <div className={styles.container} >
    <div className={styles.v}></div>
    <div className={styles.h}></div>
    <div className={styles.c1}></div>
    <div className={styles.c2}></div>
    <div className={styles.c3}></div>

  </div>;
};

export default CurrentLocatonIcon;
