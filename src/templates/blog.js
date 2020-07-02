import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { DiscussionEmbed } from "disqus-react"

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
            tags
    				hero {
              file {
                url
              }
              title
            }
            datePublished(formatString: "MMMM Do, YYYY")
            bodym {
              childMarkdownRemark {
                timeToRead
                html
              }
            }
        }
    }
`

const Blog = props => {
  deckDeckGoHighlightElement();

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: props.data.contentfulBlog.title },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title}/>
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>Date Published: {props.data.contentfulBlog.datePublished} Reading Time: {props.data.contentfulBlog.bodym.childMarkdownRemark.timeToRead} minutes</p>
      <ol className="tags">
        {props.data.contentfulBlog.tags.map(tag => {
          return (
            <li className="tag">{tag}</li>
            )
          })}
      </ol>
      <img src={props.data.contentfulBlog.hero.file.url} alt={props.data.contentfulBlog.hero.title}></img>
      { props.data.contentfulBlog.bodym && (
        <div dangerouslySetInnerHTML={{ 
          __html: props.data.contentfulBlog.bodym.childMarkdownRemark.html }}>
        </div>
      )}

      <DiscussionEmbed {...disqusConfig} />

    </Layout>
  )
}

export default Blog
