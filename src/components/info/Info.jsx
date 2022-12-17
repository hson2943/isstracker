import React, { useState } from 'react'
import styles from './info.module.css';
export default function Info({ data }) {
    const latitude = data.latitude;
    const longitude = data.longitude;
    return (
        <div className={styles.info_panel}>
            <div className={styles.info}>

                <center>
                    Latitute : <input type="text" value={latitude} />
                    <br />
                    Longtitude :
                    <input type="text" value={longitude} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_station_pictured_from_the_SpaceX_Crew_Dragon_5_%28cropped%29.jpg/408px-The_station_pictured_from_the_SpaceX_Crew_Dragon_5_%28cropped%29.jpg" alt="" />
                </center>

                <br />
                <div className={styles.info_text}>
                    Trạm vũ trụ Quốc tế hay Trạm Không gian Quốc tế (tiếng Anh: International Space Station, viết tắt: ISS, tiếng Nga: Междунаро́дная косми́ческая ста́нция, МКС, tiếng Pháp: Station spatiale internationale, SSI) là một tổ hợp công trình quốc tế nhằm nghiên
                    cứu không gian trên quỹ đạo tầm thấp của Trái Đất, nhờ sự hợp tác của năm cơ quan không gian: NASA (Hoa Kỳ), RKA (Nga), JAXA (Nhật Bản), CSA (Canada) và 10 trong 17 nước thành viên của ESA (châu Âu).
                    <br />
                    <div className={styles.line}></div>
                    Phi hành đoàn	Phi hành đoàn đầy đủ: 7            <br />
                    <div className={styles.line}></div>
                    Hiện đang ở trên tàu: 7            <br />
                    <div className={styles.line}></div>
                    Chỉ huy: Sergey Prokopyev (Roscosmos)            <br />
                    <div className={styles.line}></div>
                    Ngày phóng	20 tháng 11 năm 1998; 24 năm trước            <br />
                    <div className={styles.line}></div>
                    Địa điểm phóng
                    Baikonur            <br />
                    <div className={styles.line}></div>
                    Khối lượng	444.615 kg (980.208 lb)            <br />
                    <div className={styles.line}></div>
                    Chiều dài	73,0 m (239,4 ft)            <br />
                    <div className={styles.line}></div>
                    Chiều rộng 109,0 m (357,5 ft)
                </div>
            </div>



        </div>
    )
}
