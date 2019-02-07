import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'


class About extends React.Component {
    render() {
      const siteTitle = 'About'
  
      return (
        <Layout title={siteTitle}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={siteTitle}
          />
            <h3>About</h3>
        </Layout>
      )
    }
  }
  
  export default About