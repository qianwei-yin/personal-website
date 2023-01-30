import React from "react"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const ProjectsPage = ({ data }) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" data={data} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query GetProjects {
    allStrapiProject(sort: { order: DESC }) {
      nodes {
        desc {
          para {
            value
          }
        }
        github
        id
        slug
        title
        url
        stack {
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
          }
        }
        type
      }
    }
  }
`

export default ProjectsPage
