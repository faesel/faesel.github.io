import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { DiscussionEmbed } from "disqus-react"
import { FiCalendar, FiClock } from "react-icons/fi";
import { EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, LinkedinIcon, LinkedinShareButton, PocketIcon, PocketShareButton } from "react-share";
import Layout from "../components/layout"
import Head from "../components/head"

import './blog.scss'

export const query = graphql`
    query($slug: String!) {
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
      <Head 
        pageTitle={props.data.contentfulBlog.title}
        title={props.data.contentfulBlog.title}
        description={props.data.contentfulBlog.bodym.childMarkdownRemark.excerpt}
        url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`}
        imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`}
        imageAlt={props.data.contentfulBlog.hero.title} 
        type='article'
        datePublished={props.data.contentfulBlog.iso8601DatePublished} />

      <h1>{props.data.contentfulBlog.title}</h1>
      <p><FiCalendar title="Date Published" /> {props.data.contentfulBlog.datePublished}&nbsp;&nbsp;<FiClock title="Reading Time" /> {props.data.contentfulBlog.bodym.childMarkdownRemark.timeToRead} Minutes</p>
      <ol className="tags">
        {props.data.contentfulBlog.tags.map(tag =>
            (
              <li className="tag">{tag}</li>
            )
          )}
      </ol>
      
      <img src={`https:${props.data.contentfulBlog.hero.file.url}`} alt={props.data.contentfulBlog.hero.title}></img>
      { props.data.contentfulBlog.bodym && (
        <div dangerouslySetInnerHTML={{ 
          __html: props.data.contentfulBlog.bodym.childMarkdownRemark.html }}>
        </div>
      )}

      <div className="sharebox">
        <div className="sharebox-title">
          SHARE
        </div>
        <EmailShareButton className="sharebox-social" imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} subject={props.data.contentfulBlog.title}>
          <EmailIcon>
          </EmailIcon> 
        </EmailShareButton>
        <TwitterShareButton className="sharebox-social" imageAlt={props.data.contentfulBlog.hero.title} imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} title={props.data.contentfulBlog.title}>
          <TwitterIcon>
          </TwitterIcon>
        </TwitterShareButton>
        <FacebookShareButton className="sharebox-social" imageAlt={props.data.contentfulBlog.hero.title} imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} quote={props.data.contentfulBlog.bodym.childMarkdownRemark.excerpt}>
          <FacebookIcon>
          </FacebookIcon>
        </FacebookShareButton>
        <RedditShareButton className="sharebox-social" imageAlt={props.data.contentfulBlog.hero.title} imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} title={props.data.contentfulBlog.title}>
          <RedditIcon>
          </RedditIcon>
        </RedditShareButton>
        <LinkedinShareButton className="sharebox-social" imageAlt={props.data.contentfulBlog.hero.title} imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} source={"www.faesel.com"} title={props.data.contentfulBlog.title} summary={props.data.contentfulBlog.bodym.childMarkdownRemark.excerpt}>
          <LinkedinIcon>
          </LinkedinIcon>
        </LinkedinShareButton>
        <PocketShareButton className="sharebox-social" imageAlt={props.data.contentfulBlog.hero.title} imageUrl={`https:${props.data.contentfulBlog.hero.file.url}`} url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`} title={props.data.contentfulBlog.title}>
          <PocketIcon>
          </PocketIcon>
        </PocketShareButton>
      </div>

      <DiscussionEmbed {...disqusConfig} />

    </Layout>
  )
}

export default Blog
