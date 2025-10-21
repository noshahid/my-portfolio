'use client'
import { avtar } from "@/public/assets/Data";
import Image from "next/image";
import React, { useState } from "react";
import { MdMailOutline, MdPhone, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaAngleDown, FaLinkedin } from "react-icons/fa";

const Aside = () => {
  const [show,setShow] = useState(false)
  return (
    <aside className={`sidebar ${show ? 'active':''}`}>
      <div className="sidebar-info">
        <Image
          src={avtar}
          alt="Noshahaid Nasir"
          className="w-auto h-auto avatar-box"
          height={100}
          width={100}
        />
        <div className="info-content">
          <h1 className="name">Noshahaid Nasir</h1>
          <p className="title">Senior Wordpress Developer and Team lead</p>
        </div>
        <button className="info_more-btn" onClick={()=>setShow(!show)}>
          <FaAngleDown className='text-[#ffda6b]'/>
        </button>
      </div>

      <div className="sidebar-info_more">
        <ul className="contacts-list ">
          <li className="contact-item ">
            <div className="icon-box">
              <MdMailOutline color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="#" className="contact-link">
              itsnoshahid@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdPhone color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:03001810869" className="contact-link">
                03001810869
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdCalendarToday color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-03-10">March 10, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdLocationOn color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Gulgasht, Multan, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <ul className="social-list ">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/noshahid-nasir" className="social-link">
              <FaLinkedin   className="text-gray-300"/>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FaTwitter className="text-gray-300"  />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FaInstagram className="text-gray-300"  />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
