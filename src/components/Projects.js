import React, { useState } from "react"
import { Link } from "gatsby"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ title, data, showMore }) => {
  const projects = data.allStrapiProject.nodes

  const [type, setType] = useState("Large-Scale")

  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center">
        <div className="type-center">
          <button
            className={`${
              type === "Large-Scale" ? "active" : null
            } btn btn-primary`}
            onClick={() => setType("Large-Scale")}
          >
            Large-Scale
          </button>

          <button
            className={`${
              type === "Front-End" ? "active" : null
            } btn btn-primary`}
            onClick={() => setType("Front-End")}
          >
            Front-End
          </button>

          <button
            className={`${
              type === "Functionality" ? "active" : null
            } btn btn-primary`}
            onClick={() => setType("Functionality")}
          >
            Functionality
          </button>
        </div>
      </div>

      <div className="section-center projects-center">
        {projects
          .filter(pro => pro.type === type)
          .map((pro, index) => {
            return <Project key={pro.id} index={index} {...pro} />
          })}
      </div>

      {showMore && (
        <Link to="/projects" className="btn center-btn">
          show more
        </Link>
      )}
    </section>
  )
}

export default Projects
