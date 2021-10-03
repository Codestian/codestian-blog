import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/blogroll/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogRoll />
      </Layout>
    )
  }
}
