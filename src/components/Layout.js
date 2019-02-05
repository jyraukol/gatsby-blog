import React from 'react'
import { rhythm } from '../utils/typography'

import Header from "./Header"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const {children, title} = this.props

    return (
      <div
        style={{
          marginTop: `1em`,
          marginLeft: `auto`,
          marginRight: `auto`,
          backgroundColor: `#f8f8ff`,
          borderRadius: `0 0 50% 0`,    
          boxShadow: `5px 10px 5px slategrey`,
          maxWidth: rhythm(34),
          padding: `${rhythm(1.5)} ${rhythm(3)}`,
        }}
      >
        <Header title={title}/>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
