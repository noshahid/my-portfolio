"use client";

import {
  avatar1,
  icondesgin,
  iconphoto,
  iconquote,
  mobIcon,
  webIcon,
} from "@/public/assets/Data";
import Image from "next/image";
import React, { useState } from "react";
import { FaClosedCaptioning, FaCode, FaTimes } from "react-icons/fa";
import Slider from "./Slider";

const About = () => {
  const [showModel, setShowModel] = useState(false);
  console.log(showModel);
  return (
    <>
      <article className="about active ">
        <header className="">
          <h2 className="h2 article-title mt20">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm a Team Lead & Project Manager with over 3 years of hands-on experience
            in web development, specializing in WordPress, WooCommerce, and web animations.
            My journey started as a Web Animator, where I fell in love with bringing websites
            to life using CSS, JavaScript, GSAP, and Lottie. I've since evolved into a
            Senior WordPress Developer, creating custom themes, plugins, and WooCommerce
            solutions that are fast, secure, and user-friendly.
          </p>
          <p>
            Currently, I lead a talented team at Predawn Solution in Multan, managing
            projects from start to finish while fostering collaboration and creativity.
            I hold a Bachelor's degree in Computer Science from Virtual University,
            and am always excited about learning, growing, and connecting with others
            in the tech community. Let's connect!
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={icondesgin}
                  alt="design icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={webIcon}
                  alt="Web development icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={mobIcon}
                  alt="mobile app icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile Responsive</h4>
                <p className="service-item-text">
                  As a stunning desinger i create Mobile optimize professioanl
                  websites.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box text-[#FFCD67]">
                <FaCode color="#FFCD67" fontSize={39} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Problem Solving</h4>
                <p className="service-item-text">
                  I love solving problems whether programming problems or real
                  life problems.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul
            className="testimonials-list has-scrollbar"
            onClick={() => setShowModel(true)}
          >
            <li className="testimonials-item">
              <div className="content-card">
                <Image
                  src={avatar1}
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Not only was Manan's work on-time and to spec, he pays
                    attention to improve the aesthetics of the site as well as
                    the functionality. Throughout the entire process he is
                    responsive, and willing to work through issues as they
                    arise. It’s obvious he takes tremendous pride in his work,
                    and I wouldn’t hesitate to recommend or work with him again.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section> */}
        
        <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
      <Slider />
      </div>
    </section>

        <div className={`modal-container ${showModel ? "active" : ""}`}>
          <div className="overlay" />
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={() => setShowModel(false)}
            >
              <FaTimes color="goldenrod" />
            </button>
            <div className="modal-Image-wrapper">
              <Image
                src={avatar1}
                alt="Daniel lewis"
                className="modal-Image-wrapper"
                width={80}
                height={80}
              />
              <Image src={iconquote} alt="quote icon" width={24} height={24} />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">Daniel lewis</h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of the client.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
