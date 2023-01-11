import React, { useState } from "react"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ title, data }) => {
  const projects = data.allStrapiProject.nodes

  const [type, setType] = useState("Large-Scale")

  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center type-center">
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

      <div className="section-center projects-center">
        {projects
          .filter(pro => pro.type === type)
          .map((pro, index) => {
            return <Project key={pro.id} index={index} {...pro} />
          })}
      </div>
    </section>
  )
}

export default Projects
