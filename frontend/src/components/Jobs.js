import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query)
  const exps = data.allStrapiExperience.nodes
  const [value, setValue] = useState(0)
  const { company, position, date, desc, companyUrl: url } = exps[value]

  return (
    <section className="section jobs">
      <Title title="experiences" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {exps.map((exp, index) => {
            return (
              <button
                className={`${index === value ? "active-btn" : null} job-btn`}
                key={index}
                onClick={() => setValue(index)}
              >
                {exp.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <a href={url} target="_blank" rel="noreferrer">
            <h4>{company}</h4>
          </a>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

const query = graphql`
  query {
    allStrapiExperience {
      nodes {
        date
        company
        position
        desc {
          id
          name
        }
        companyUrl
      }
    }
  }
`

export default Jobs
