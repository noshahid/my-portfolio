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
              <h4 className="h4 timeline-item-title">Graduation</h4>
              <span>2021 — Present</span>
              <p className="timeline-text">
                Enrolled at the Virtual University of Pakistan, where I
                completed my first semester before pausing studies to pursue an
                internship in Lahore. After 8 months of hands-on front-end developer  experience,
                I secured my first job with XemenSolution in Multan. Currently,
                I am balancing my studies with work, continuing my degree in the
                first half of the day and contributing professionally in the
                second.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Intermediate</h4>
              <span>2019 — 2021</span>
              <p className="timeline-text">
                Completed Intermediate of Computer Science (ICS) with a focus on
                foundational skills in computer science, enhancing my analytical
                abilities and technical knowledge, essential for my journey in
                web development.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">High School</h4>
              <span>2017 — 2019</span>
              <p className="timeline-text">
                Completed high school with a focus in Computer Science, studying
                in an English-medium environment. This program covered
                foundational topics in programming, computer systems, and data
                management, equipping me with essential technical and analytical
                skills.
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
      <h4 className="h4 timeline-item-title">Frontend Developer</h4>
      <span>2022 — Present</span>
      <p className="timeline-text">
        Over 1.5 years of experience in developing responsive and engaging user interfaces using HTML, CSS, JavaScript, ReactJS,redux, jQuery, Bootstrap, and Tailwind CSS. Skilled in building optimized, user-centered web solutions that adapt seamlessly across devices.
      </p>
    </li>
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">WordPress Developer</h4>
      <span>5 months experience</span>
      <p className="timeline-text">
        Built customized websites and e-commerce solutions on WordPress with WooCommerce, enabling clients to establish and grow their online presence with user-friendly, scalable designs.
      </p>
    </li>
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">Full-Stack Developer (MERN)</h4>
      <span>Current</span>
      <p className="timeline-text">
        Currently developing full-stack skills using the MERN stack, with experience in Next.js, Express.js, MongoDB, and Node.js. Completed three projects, building scalable, dynamic applications that demonstrate proficiency in both frontend and backend technologies.
      </p>
    </li>
  </ol>
</section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills after 2021</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Frontend </h5>
                <data value={80}>80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }} />
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value={70}>70%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }} />
              </div>
            </li>
             
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Mern Stack</h5>
                <data value={50}>50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "50%" }} />
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Resume;
