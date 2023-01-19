import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const { title, info, stack, image, comic } = data.strapiAbout
  console.log(image)

  return (
    <>
      <Seo title="About Me" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={comic.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            {info.para.map((p, index) => {
              return <p key={index}>{p.value}</p>
            })}
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>

        <div className="about-me">
          <h2>Cat Fanatic</h2>
          <h5>This is my cat Dongdong</h5>
          <div className="image-container">
            {image
              .filter(item => item.name.startsWith("cat"))
              .map((item, index) => {
                return (
                  <GatsbyImage
                    key={index}
                    image={item.localFile.childImageSharp.gatsbyImageData}
                    alt={item.name}
                    className="about-img"
                  />
                )
              })}
          </div>
        </div>

        <div className="about-me">
          <h2>Taylor Swifties</h2>
          <h5>I love her for 11 years</h5>
          <div className="image-container">
            {image
              .filter(item => item.name.startsWith("taylor"))
              .map((item, index) => {
                return (
                  <GatsbyImage
                    key={index}
                    image={item.localFile.childImageSharp.gatsbyImageData}
                    alt={item.name}
                    className="about-img"
                  />
                )
              })}
          </div>
        </div>

        <div className="about-me">
          <h2>iPhone Photographer</h2>
          <h5>I like to capture the beautiful moments of life</h5>
          <div className="image-container photo">
            {image
              .filter(item => item.name.startsWith("photo"))
              .map((item, index) => {
                return (
                  <GatsbyImage
                    key={index}
                    image={item.localFile.childImageSharp.gatsbyImageData}
                    alt={item.name}
                    className="about-img"
                  />
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      title
      info {
        para {
          value
        }
      }
      stack {
        id
        title
      }
      comic {
        localFile {
          publicURL
        }
      }
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
        name
      }
    }
  }
`

export default About
