import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
    query($slug: String!) {
        contentfulBlog (
            slug: {
                eq: $slug
            }
        ) {
            title
            datePublished(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            bodym {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-GB']
        const url = node.data.target.fields.file['en-GB'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  console.log(props.data.contentfulBlog)

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title}/>
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.datePublished}</p>

      { props.data.contentfulBlog.body && (
        documentToReactComponents(props.data.contentfulBlog.body.json, options)
      )}

      { props.data.contentfulBlog.bodym && (
        <div dangerouslySetInnerHTML={{ 
          __html: props.data.contentfulBlog.bodym.childMarkdownRemark.html }}>
        </div>
      )}

    </Layout>
  )
}

export default Blog
