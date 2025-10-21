import React from "react";
import { IoBookOutline } from "react-icons/io5";

const Resume = () => {
  return (
    <>
      <article className="resume active">
        <header>
          <h2 className="h2 article-title mt20">Resume</h2>
        </header>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline color="goldenrod" />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Bachelor of Science in Computer Science</h4>
              <span>2023 — 2026</span>
              <p className="timeline-text">
                Pursuing a strong foundation in software development, web technologies, and problem-solving at Emerson University, Multan. The program includes hands-on projects that bridge theory and real-world applications, providing me with comprehensive knowledge in computer science fundamentals and modern development practices.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Development Certification</h4>
              <span>2021</span>
              <p className="timeline-text">
                Completed an intensive, practical training program at Corvit Institute, Multan, focused on HTML, CSS, JavaScript, WordPress, and modern web development techniques. This certification prepared me to build responsive and user-focused websites, laying the foundation for my career in web development.
              </p>
            </li>
          </ol>
        </section>
        <section className="timeline">
  <div className="title-wrapper">
    <div className="icon-box">
      <IoBookOutline color="goldenrod" />
    </div>
    <h3 className="h3">Experience</h3>
  </div>
  <ol className="timeline-list">
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">Team Lead & Project Manager</h4>
      <span>2024 — Present</span>
      <p className="timeline-text">
        Currently leading a talented team to deliver web projects from start to finish at Predawn Solution in Multan. I manage timelines, resources, and client communications to ensure everything runs smoothly. More than just managing, I focus on fostering collaboration and creativity, helping the team produce their best work and delivering websites that clients love.
      </p>
    </li>
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">Senior WordPress Developer | Custom Solutions</h4>
      <span>2024</span>
      <p className="timeline-text">
        Developed custom WordPress solutions—themes, plugins, and WooCommerce features—tailored to each client's needs. I paid close attention to performance, SEO, and code quality, ensuring the websites were fast, secure, and easy to maintain. I enjoy working across both front-end and back-end, creating websites that not only look good but work flawlessly.
      </p>
    </li>
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">WordPress Developer</h4>
      <span>2023 — 2024</span>
      <p className="timeline-text">
        At TechTitanStudio, I focused on building custom WordPress themes and plugins that were clean, secure, and easy to manage. I worked closely on WooCommerce stores, improving performance and SEO, and making sure every site was responsive and user-friendly. I enjoyed translating client ideas into functional websites that truly represented their brand.
      </p>
    </li>
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">Web Animator</h4>
      <span>2021 — 2023</span>
      <p className="timeline-text">
        I loved bringing websites to life with smooth and engaging animations on various freelancing platforms. Using CSS, JavaScript, GSAP, and Lottie, I created interactive scroll effects, hover animations, and dynamic UI transitions that made websites feel more alive. Each project was an opportunity to turn a static layout into a more immersive experience for users.
      </p>
    </li>
  </ol>
</section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills after 2021</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress Development</h5>
                <data value={95}>95%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "95%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Animation (GSAP, Lottie)</h5>
                <data value={90}>90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WooCommerce</h5>
                <data value={88}>88%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "88%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Project Management</h5>
                <data value={85}>85%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Team Leadership</h5>
                <data value={82}>82%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "82%" }} />
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Resume;
