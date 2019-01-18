import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    //if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    /*} else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }*/
    return (
      <div>
        <div
          style={{ display: 'flex', height: '100%', minHeight: '100vh', maxWidth: '100%', backgroundColor: '#dbd3c9' }}
        >
          <header
            style={{
              borderRight: '1px solid #88a0a8',
              padding: '1rem 1rem',
              backgroundColor: '#546a76',
            }}
          >
            {header}
          </header>
          <div
            style={{
              marginLeft: `${rhythm(2.5)}`,
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              maxWidth: '1220px',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
