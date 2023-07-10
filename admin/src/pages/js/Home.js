import React, { useState } from 'react'
import '../../pages/css/Home.css'
import Kurs from './Meningkurslarim.js'
import Nav from 'react-bootstrap/Nav';
import Bilm from './Bilm.js'
import Sertifikat from './Sertifikat.js'
import tolov from '../img/Group 26.png'
import { FaTelegramPlane } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import { GrYoutube } from 'react-icons/gr';


export default function Home() {
  const [toggle, setToggle] = useState(1)

  function updatetoggle(id) {
    setToggle(id)
  }
  return (
    <div>
      <div className="navs_tabs">
        <div className="inline_navs">
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={() => updatetoggle(1)}><span>Mening kurslarim</span> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updatetoggle(2)}><span>O’rganilgan bilimlarim</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updatetoggle(3)}><span>Sertifikatlarim</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updatetoggle(4)}><span>A’zo mentorlarim</span></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className={toggle === 1 ? "show-content" : "content"}><Kurs /></div>
      <div className={toggle === 2 ? "show-content" : "content"}><Bilm /></div>
      <div className={toggle === 3 ? "show-content" : "content"}><Sertifikat /></div>
      <div className={toggle === 4 ? "show-content" : "content"}>adsda</div>

      <div className="bow"></div>

      <div className="futer">
        <div className="xoji_mini">
          <div className="mini_futer">
            <div className="as_card">
              <ul><h6>Asosiy</h6>
                <li>Loyiha haqida</li>
                <li>Kurslar</li>
                <li>Mentorlarga</li>
                <li>Ommaviy oferta</li>
                <li>Maxfiylik siyosati</li>
              </ul>
            </div>
            <div className="qow_card">

              <ul><h6>Qo’shimcha</h6>
                <li>Bizning jamoa</li>
                <li>Biz bilan hamkorlik</li>
                <li>Bu qanday ishlaydi ?</li>
              </ul>
            </div>
          </div>

          <div className="mini_futer">
            <div className="qol_card">
              <ul><h6>Qo’llab quvvatlash</h6>
                <li>Eng ko’p beriladigan savollar</li>
                <li>Kontakt</li>
              </ul>
            </div>
            <div className="tol_card">
              <h6>To’lov turlari</h6>
              <div className="tolov_card"><img src={tolov} alt="" /></div>
              <p>100011, Toshkent sh. Shayxontohur tum., <br />
                Zarqaynar ko'ch., 3B-uy</p>
              <button className='aloqa_btn'>Biz bilan aloqa</button>
            </div>
          </div>
        </div>


        <div className="social_i">
          <div className="telegram"><FaTelegramPlane /></div>
          <div className="facebook"><GrFacebookOption /></div>
          <div className="instagram"><AiFillInstagram /></div>
          <div className="youtube"><GrYoutube /></div>
        </div>

        <div className="botom_p">
          <p>© 2019 storm.uz</p>
          <div className="line"></div>
          <p>Personel Development Process LLC</p>
          <div className="line"></div>
          <p>Foydalanish shartlari</p>
        </div>
      </div>
    </div>
  )
}
