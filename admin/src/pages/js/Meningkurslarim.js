import React from 'react'
import '../../pages/css/Meningkurslarm.css'
import { FiSearch } from 'react-icons/fi';
import { BsFilter } from 'react-icons/bs';
import { PiSquaresFourFill } from 'react-icons/pi';
import { MdFormatListBulleted } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import k_img from '../img/download.png'
import d_img from '../img/download (1).png'

export default function Meningkurslarim() {
  return (
    <div>
        <div className="inp_df">
            <div className="inp"><input type="text" placeholder='Kurslarim orasidan qidirish' />
            <i><FiSearch/></i>
            </div>
            <div className="filters">
                <button className='filter_btn'><i><BsFilter/></i>Filter</button>
            <i><PiSquaresFourFill/></i>
            <i><MdFormatListBulleted/></i>
            </div>
        </div>
        <div className="kurs_cards">
            <div className="kurs_card">
                <button className='btn_das'>Dasturlash</button>
                <img src={k_img} alt="" />
                <h4>Ishlab chiquvchilar uchun AWS: ECS <br />
va ko'p mintaqali yuklarni <br />
muvozanatlash</h4>
<div className='star_card'>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_ib'><AiFillStar/></i>
  <p>4.1 <span>(524)</span></p>
</div>
<div className='hajm'>
  <h5>
  <p>Kurs hajmi</p>
  38 soat
</h5>
<h5>
  <p>Kurs narxi</p>
  5 ta bo’lim 
</h5>
</div>
<button className='button_circle'><AiOutlineArrowRight/></button>
            </div>

            <div className="kurs_card">
                <button className='btn_das'>Dasturlash</button>
                <img src={d_img} alt="" />
                <h4>Ishlab chiquvchilar uchun AWS: ECS <br />
va ko'p mintaqali yuklarni <br />
muvozanatlash</h4>
<div className='star_card'>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_i'><AiFillStar/></i>
  <i className='star_ib'><AiFillStar/></i>
  <p>4.1 <span>(524)</span></p>
</div>
<div className='hajm'>
  <h5>
  <p>Kurs hajmi</p>
  38 soat
</h5>
<h5>
  <p>Kurs narxi</p>
  5 ta bo’lim 
</h5>
</div>
<button className='button_circle'><AiOutlineArrowRight/></button>
            </div>

            <div className="kurs_card1">
                <i><AiOutlinePlus/></i>
                <h4>Yangi kurs qo’shish</h4>
            </div>
        </div>
    </div>
  )
}
