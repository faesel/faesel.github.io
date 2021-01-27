import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { DiscussionEmbed } from "disqus-react"
import { FiCalendar, FiClock } from "react-icons/fi";
import SharePanel from "../components/sharePanel";
import RelatedArticles from "../components/relatedArticles";

import Layout from "../components/layout"
import Head from "../components/head"

import './blog.scss'

export const query = graphql`
    query($slug: String!, $tags: [String!]) {
        site {
          siteMetadata {
            siteUrl
          }
        }
        contentfulBlog (
            slug: {
                eq: $slug
            }
        ) {
            title,
            slug
            tags
    				hero {
              file {
                url
              }
              title
            }
            datePublished(formatString: "MMMM Do, YYYY")
            iso8601DatePublished: datePublished(formatString: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            bodym {
              childMarkdownRemark {
                excerpt(pruneLength: 50)
                timeToRead
                html
              }
            }
        }
        related: allContentfulBlog(
          filter: { slug: { ne: $slug }, tags: { in: $tags } }
          sort: { fields: datePublished, order: DESC }
          limit: 5
        ){
           edges {
            node {
              title
              slug
              hero {
                file {
                  url
                }
                title
              }
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

  const blogContent = {
    title: props.data.contentfulBlog.title,
    description: props.data.contentfulBlog.bodym.childMarkdownRemark.excerpt,
    timeToRead: props.data.contentfulBlog.bodym.childMarkdownRemark.timeToRead,
    url: `${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`,
    imageUrl: `https:${props.data.contentfulBlog.hero.file.url}`,
    imageAlt: props.data.contentfulBlog.hero.title,
    datePublishedIso8601: props.data.contentfulBlog.iso8601DatePublished,
    datePublished: props.data.contentfulBlog.datePublished,
    tags: props.data.contentfulBlog.tags,
    content: props.data.contentfulBlog.bodym,
    related: props.data.related.edges.map(related => ({
        title: related.node.title,
        url: `${props.data.site.siteMetadata.siteUrl}/blog/${related.node.slug}` ,
        imageUrl: `https:${related.node.hero.file.url}`,
        imageAlt: related.node.hero.title
      }
    ))
  }

  return (
    <Layout>
      <Head 
        pageTitle={blogContent.title}
        title={blogContent.title}
        description={blogContent.description}
        url={blogContent.url}
        imageUrl={blogContent.imageUrl}
        imageAlt={blogContent.imageAlt} 
        type='article'
        datePublished={blogContent.datePublishedIso8601} />

      <h1>{blogContent.title}</h1>
      <p><FiCalendar title="Date Published" /> {blogContent.datePublished}&nbsp;&nbsp;<FiClock title="Reading Time" /> {blogContent.timeToRead} Minutes</p>
      <ol className="tags">
        {blogContent.tags.map((tag, index) =>
            (
              <li key={index} className="tag">{tag}</li>
            )
          )}
      </ol>
      
      <img src={blogContent.imageUrl} alt={blogContent.imageAlt}></img>
      { blogContent.content && (
        <div className="article" dangerouslySetInnerHTML={{ 
          __html: blogContent.content.childMarkdownRemark.html }}>
        </div>
      )}

      <SharePanel
        heroImageUrl={blogContent.imageUrl}
        heroImageAlt={blogContent.imageAlt}
        url={blogContent.url}
        title={blogContent.title}
        source={'www.faesel.com'}
        summary={blogContent.description}>
      </SharePanel>

      <DiscussionEmbed {...disqusConfig} />

      <hr></hr>

      <h2>RELATED ARTICLES</h2>

      <RelatedArticles relatedArticles={blogContent.related}></RelatedArticles>

    </Layout>
  )
}

export default Blog
