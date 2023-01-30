import React from "react"
import Title from "./Title"
import keywords from "../constants/keywords"

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="keywords" />
      <p style={{ textAlign: "center" }}>Hint: My initial is QWY 🤪</p>
      <div className="section-center keywords-center">
        {keywords.map(keyword => {
          const { id, icon, title, text } = keyword
          return (
            <article key={id} className="keyword">
              <div className="keyword-icon">{icon}</div>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
