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
import React, { useState, useEffect } from "react";
import { FaClosedCaptioning, FaCode, FaTimes, FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  const [showModel, setShowModel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Store Owner",
      image: null,
      initial: "S",
      text: "Manan transformed our online store with a custom WordPress and WooCommerce solution. The site is not only beautiful but also performs exceptionally well. Our sales have increased by 40% since the launch!",
      project: {
        title: "Premium E-commerce Platform",
        description: "A fully customized WordPress and WooCommerce e-commerce platform with advanced product filtering, real-time inventory management, and seamless payment gateway integration.",
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript", "CSS3"],
        github: "https://github.com/yourusername/wordpress-ecommerce",
        live: "https://premium-store.com",
        duration: "3 months",
        challenges: "Implemented complex product variations, custom shipping rules, and multi-currency support while maintaining optimal performance."
      }
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      image: null,
      initial: "M",
      text: "Working with Manan on our React-based dashboard was a pleasure. His attention to detail and modern frontend practices resulted in a highly performant and maintainable application.",
      project: {
        title: "Enterprise Analytics Dashboard",
        description: "A modern, responsive analytics dashboard built with React, featuring real-time data visualization, interactive charts, and advanced filtering capabilities.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux Toolkit"],
        github: "https://github.com/yourusername/react-dashboard",
        live: "https://analytics-demo.com",
        duration: "4 months",
        challenges: "Optimized performance for large datasets and implemented complex data visualization features while maintaining smooth user experience."
      }
    },
    {
      name: "David Wilson",
      role: "Startup Founder",
      image: null,
      initial: "D",
      text: "Manan's expertise in MERN stack development helped us build a scalable social media platform. His clean code and architecture decisions made it easy to maintain and scale our application.",
      project: {
        title: "Social Media Platform",
        description: "A full-featured social media platform with real-time messaging, content sharing, and user interactions, built using the MERN stack.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "AWS"],
        github: "https://github.com/yourusername/mern-social",
        live: "https://social-platform.com",
        duration: "5 months",
        challenges: "Implemented real-time features, handled large-scale data operations, and ensured high availability with proper error handling and monitoring."
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModel(true);
  };

  const handleContactClick = () => {
    setShowModel(false);
    // Find and click the contact tab
    const contactTab = document.querySelector('[data-tab="contact"]');
    if (contactTab) {
      contactTab.click();
    }
  };

  return (
    <>
      <article className="about active">
        <header className="">
          <h2 className="h2 article-title mt20">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm a frontend developer with over 3 years of going hands-on
            experience in creating responsive and engaging user interfaces.
            Recently, I've expanded my skill set to include WordPress with
            WooCommerce, where I have 5 months of experience in crafting
            customized websites and e-commerce solutions. Currently, I'm diving
            into full-stack development with the MERN stack and have already
            completed three projects, applying my learning to build scalable,
            dynamic applications.
          </p>
          <p>
            I'm proud to be part of XemenSolution in Multan, where I collaborate
            with a talented team to deliver impactful solutions. I hold a
            Bachelor's degree in Computer Science from Virtual University,
            Vehari campus, and am always excited about learning, growing, and
            connecting with others in the tech community. Let's connect!
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

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <div className="testimonials-slider-container">
            <div className="testimonials-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div 
                    className="testimonial-card"
                    onClick={() => handleTestimonialClick(testimonial)}
                  >
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="avatar-fallback">
                            {testimonial.initial}
                          </div>
                        )}
                      </div>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <Image
                        src={iconquote}
                        alt="quote"
                        width={24}
                        height={24}
                        className="quote-icon"
                      />
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-nav prev" onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
              <FaChevronRight />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <div className={`modal-container ${showModel ? "active" : ""}`}>
          <div className="overlay" onClick={() => setShowModel(false)} />
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={() => setShowModel(false)}
            >
              <FaTimes />
            </button>
            {selectedTestimonial && (
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-avatar">
                    {selectedTestimonial.image ? (
                      <Image
                        src={selectedTestimonial.image}
                        alt={selectedTestimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="avatar-fallback-large">
                        {selectedTestimonial.initial}
                      </div>
                    )}
                  </div>
                  <div className="modal-title-section">
                    <h3 className="modal-title">{selectedTestimonial.project.title}</h3>
                    <p className="modal-subtitle">{selectedTestimonial.name} - {selectedTestimonial.role}</p>
                  </div>
                </div>
                
                <div className="modal-body">
                  <div className="project-details">
                    <p className="project-description">{selectedTestimonial.project.description}</p>
                    
                    <div className="project-tech">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {selectedTestimonial.project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-info">
                      <p><strong>Duration:</strong> {selectedTestimonial.project.duration}</p>
                      <p><strong>Key Challenges:</strong> {selectedTestimonial.project.challenges}</p>
                    </div>

                    <div className="project-links">
                      <a href={selectedTestimonial.project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="contact-btn" onClick={handleContactClick}>
                    Contact Me
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        <style jsx>{`
          .testimonials-slider-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin: 2rem auto;
            overflow: hidden;
            padding: 0 1rem;
          }

          .testimonials-slider {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: 100%;
          }

          .testimonial-slide {
            flex: 0 0 100%;
            padding: 0 1rem;
          }

          .testimonial-card {
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            border-radius: 14px;
            padding: 2rem;
            box-shadow: var(--shadow-2);
            cursor: pointer;
            transition: var(--transition-1);
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-3);
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .testimonial-avatar {
            position: relative;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;
          }

          .avatar-fallback {
            width: 100%;
            height: 100%;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .testimonial-info h4 {
            color: var(--white-2);
            font-size: var(--fs-3);
            font-weight: var(--fw-500);
            margin: 0;
          }

          .testimonial-info p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.25rem 0 0;
          }

          .testimonial-content {
            position: relative;
            padding-left: 1.5rem;
          }

          .quote-icon {
            position: absolute;
            top: -0.5rem;
            left: -0.5rem;
            opacity: 0.2;
          }

          .testimonial-content p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            line-height: 1.6;
            margin: 0;
          }

          .slider-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--orange-yellow-crayola);
            transition: var(--transition-1);
            z-index: 10;
          }

          .slider-nav:hover {
            transform: translateY(-50%) scale(1.1);
            box-shadow: var(--shadow-2);
          }

          .slider-nav.prev {
            left: 0;
          }

          .slider-nav.next {
            right: 0;
          }

          .slider-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
          }

          .dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background: var(--jet);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: var(--transition-1);
          }

          .dot.active {
            background: var(--orange-yellow-crayola);
            transform: scale(1.2);
          }

          .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-1);
          }

          .modal-container.active {
            opacity: 1;
            visibility: visible;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--smoky-black);
            opacity: 0.8;
          }

          .testimonials-modal {
            position: relative;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            background: var(--eerie-black-2);
            border: 1px solid var(--jet);
            border-radius: 14px;
            padding: 2rem;
            box-shadow: var(--shadow-5);
            z-index: 1001;
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--onyx);
            border-radius: 8px;
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white-2);
            font-size: 18px;
            opacity: 0.7;
            transition: var(--transition-1);
          }

          .modal-close-btn:hover {
            opacity: 1;
          }

          .modal-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .modal-avatar {
            flex-shrink: 0;
          }

          .avatar-fallback-large {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
          }

          .modal-title-section {
            flex-grow: 1;
          }

          .modal-title {
            color: var(--white-2);
            font-size: var(--fs-2);
            font-weight: var(--fw-500);
            margin: 0;
          }

          .modal-subtitle {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.5rem 0 0;
          }

          .project-details {
            margin-bottom: 2rem;
          }

          .project-description {
            color: var(--light-gray);
            font-size: var(--fs-6);
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .project-tech {
            margin-bottom: 1.5rem;
          }

          .project-tech h4 {
            color: var(--white-2);
            font-size: var(--fs-4);
            font-weight: var(--fw-500);
            margin-bottom: 0.75rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            padding: 0.25rem 0.75rem;
            border-radius: 8px;
            font-size: var(--fs-7);
            font-weight: var(--fw-500);
          }

          .project-info {
            margin-bottom: 1.5rem;
          }

          .project-info p {
            color: var(--light-gray);
            font-size: var(--fs-6);
            margin: 0.5rem 0;
          }

          .project-links {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .project-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            text-decoration: none;
            transition: var(--transition-1);
          }

          .project-link:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          .contact-btn {
            width: 100%;
            padding: 1rem;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            border: none;
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            cursor: pointer;
            transition: var(--transition-1);
          }

          .contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          @media (max-width: 640px) {
            .testimonials-slider-container {
              padding: 0;
            }

            .testimonial-slide {
              padding: 0 0.5rem;
            }

            .testimonial-card {
              padding: 1.5rem;
            }

            .slider-nav {
              width: 2rem;
              height: 2rem;
            }

            .testimonials-modal {
              padding: 1.5rem;
            }

            .modal-header {
              flex-direction: column;
              text-align: center;
            }

            .project-links {
              flex-direction: column;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default About;
