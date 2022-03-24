import React from 'react'
import styles from './info.module.css';
export default function Info({ data }) {
    const latitude = data.latitude;
    const longitude = data.longitude;
    return (
        <div className={styles.info}>
            <input type="text" value={latitude} />
            <input type="text" value={longitude} />
        </div>
    )
}
