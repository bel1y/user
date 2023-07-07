import React,{useState} from 'react'
import '../../pages/css/Home.css'
import Kurs from './Meningkurslarim.js'
import Nav from 'react-bootstrap/Nav';
import Bilm from './Bilm.js'
import Sertifikat from './Sertifikat.js'


export default function Home() {
    const [toggle,setToggle] = useState(1)

    function updatetoggle(id){
        setToggle(id)
    }
  return (
    <div>
        <div className="navs_tabs">
            <div className="inline_navs">
            <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>updatetoggle(1)}><span>Mening kurslarim</span> </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>updatetoggle(2)}><span>O’rganilgan bilimlarim</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>updatetoggle(3)}><span>Sertifikatlarim</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>updatetoggle(4)}><span>A’zo mentorlarim</span></Nav.Link>
      </Nav.Item>
    </Nav>
            </div>
        </div>
        <div className={toggle===1?"show-content":"content"}><Kurs/></div>
        <div className={toggle===2?"show-content":"content"}><Bilm/></div>
        <div className={toggle===3?"show-content":"content"}><Sertifikat/></div>
        <div className={toggle===4?"show-content":"content"}>adsda</div>
    </div>
  )
}
