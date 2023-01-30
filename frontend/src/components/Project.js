import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  desc: { para },
  title,
  github,
  stack,
  url,
  image,
  slug,
  index,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">{("0" + (index + 1)).slice(-2)}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>
            {title} <span>(show details)</span>
          </h3>
        </Link>
        {para.map((p, index) => {
          return (
            <p key={index} className="project-desc">
              {p.value}
            </p>
          )
        })}

        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item.title}</span>
          })}
        </div>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
