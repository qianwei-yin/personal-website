import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ data }) => {
  const { strapiProject: info } = data
  console.log(info)

  return (
    <>
      <Seo title={info.title} image={info.image.localFile.publicURL} />
      <section className="project-detail-page">
        <main className="section-center project-template-page">
          <h1>{info.title}</h1>

          <div className="underline"></div>

          <div className="project-stack stack">
            {info.stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>

          <GatsbyImage
            image={getImage(info.image.localFile)}
            // className="project-img"
            alt={info.slug}
          />

          <h2>1. A brief Introduction</h2>

          {info.desc.para.map((p, index) => {
            return <p key={index}>{p.value}</p>
          })}

          <p>
            Now go to{" "}
            <a href={info.url} target="_blank" rel="noreferrer">
              {info.title.toUpperCase()}
            </a>{" "}
            to take your journey!
          </p>

          {info.resources.length > 0 && (
            <>
              <h2>2. Technology Stack and Resources</h2>

              {info.resources.map((reso, index) => {
                const { title, desc } = reso

                return (
                  <div key={index}>
                    <h4>{title}</h4>
                    {desc.para.map((p, ind) => {
                      return <p key={ind}>{p.value}</p>
                    })}
                  </div>
                )
              })}
            </>
          )}
        </main>
      </section>
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      desc {
        para {
          value
        }
      }
      github
      id
      resources {
        desc {
          para {
            value
          }
        }
        title
      }
      slug
      stack {
        id
        title
      }
      title
      type
      url
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
