import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout'

import roadPic from '../../static/road.jpg'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout title={siteTitle}>
        <Helmet htmlAttributes={{ lang: 'en' }} title={siteTitle} />
        <h3>Hi there</h3>
        <p>
          I'm a software developer from Tampere, Finland. That's me deep in
          thought somewhere in Norway (great views!).
        </p>
        <img src={roadPic} alt={`Pondering about cloud architectures`} />

        {/* prettier-ignore */}
        <p>
          You can also find me on <a href="https://github.com/jyraukol">Github</a> <a href="https://twitter.com/jyraukol">Twitter</a> and <a href="https://www.linkedin.com/in/jyri-raukola-a6aa76151">LinkedIn</a>
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
