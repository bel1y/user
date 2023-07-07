import React from 'react'
import '../css/Sertifikat.css'
import ino from '../img/image (1).png'
import edu from '../img/image (2).png'

export default function Sertifikat() {
  return (
    <div>
        <div className="sertificat_cards">
            <div className="sertificat_card">
                <img src={ino} alt="" />
            </div>
            <div className="sertificat_card">
            <img src={edu} alt="" />
            <h5>Raspberry Pi dasturlash asoslari</h5>
            <p>20-iyun, 2019 y</p>
            <div className="das_btn">Dasturlash</div>
            </div>
        </div>
    </div>
  )
}
