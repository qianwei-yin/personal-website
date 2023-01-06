import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Keywords from "../components/KeyWords"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes

  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Keywords />
        <Jobs />
        <Projects title="featured projects" projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
