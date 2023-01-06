import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({ title, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((pro, index) => {
          return <Project key={pro.id} index={index} {...pro} />
        })}
      </div>
    </section>
  )
}

export default Projects
