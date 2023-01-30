import React from "react"
import Seo from "../components/Seo"
import { useForm } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mgebeqdy")

  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>
            {state.succeeded
              ? "Thanks for contacting!"
              : "get in touch with me!"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="submit-btn btn"
              disabled={state.submitting}
            >
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact
