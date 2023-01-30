import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Keywords from "../components/KeyWords"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Keywords />
        <Jobs />
        <Projects title="featured projects" data={data} showMore />
      </main>
    </>
  )
}

export const query = graphql`
  query GetProjects {
    allStrapiProject(
      filter: { featured: { eq: true } }
      sort: { order: DESC }
    ) {
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

export default IndexPage
