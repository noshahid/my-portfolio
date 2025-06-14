import React, { useState } from "react";
import { IoChevronDown, IoMdEye } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { projectcategories } from "@/public/assets/Data";

const Portfolio = () => {
  const [activeCate, setActiveCate] = useState("All");

  // Function to handle category click
  const handleClick = (category) => {
    setActiveCate(category);
  };

  // Function to generate project slug
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <>
      <article className="portfolio active">
        <header>
          <h2 className="h2 article-title mt20">Portfolio</h2>
        </header>

        <section className="projects">
          {/* Category Filter Buttons */}
          <ul className="filter-list">
            {projectcategories.map((item) => (
              <li className="filter-item" key={item.category}>
                <button
                  className={`${item.category === activeCate ? "active" : ""}`}
                  onClick={() => handleClick(item.category)}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>

          {/* Project List */}
          <ul className="project-list">
            {projectcategories.map((item) => {
              // Check if the category is active or if the category is "All"
              if (activeCate === "All" || item.category === activeCate) {
                return item.projectDetail
                  ? item.projectDetail.map((project, index) => (
                      <li className="project-item active" key={index}>
                        <Link href={`/projects/${generateSlug(project.name)}`}>
                          <div className="project-img">
                            <div className="project-item-icon-box">
                              <IoMdEye />
                            </div>
                            <Image
                              src={project.src}
                              alt={project.name}
                              height={80}
                              width={80}
                            />
                          </div>
                          <h3 className="project-title">{project.name}</h3>
                          <p className="project-category">
                            {item.category}
                          </p>
                        </Link>
                      </li>
                    ))
                  : null;
              }
              return null;
            })}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Portfolio;
