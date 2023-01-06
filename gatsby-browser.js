// This file is to wrap every page in Layout(Navbar and Footer)
// And this is in the node environment, so the syntax is a bit different

const React = require("react")
const Layout = require("./src/components/Layout").default

// element is every page
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
