import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Layout from "../components/layout"
import Head from "../components/head"

import './blog.scss'

export const query = graphql`
    query($slug: String!) {
        contentfulBlog (
            slug: {
                eq: $slug
            }
        ) {
            title
            datePublished(formatString: "MMMM Do, YYYY")
            bodym {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`

const Blog = props => {
  deckDeckGoHighlightElement();

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title}/>
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.datePublished}</p>

      { props.data.contentfulBlog.bodym && (
        <div dangerouslySetInnerHTML={{ 
          __html: props.data.contentfulBlog.bodym.childMarkdownRemark.html }}>
        </div>
      )}

    </Layout>
  )
}

export default Blog
