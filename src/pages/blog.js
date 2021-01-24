import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FiCalendar, FiClock } from "react-icons/fi"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: datePublished, order: DESC }) {
        edges {
          node {
            title
            tags
            hero {
              file {
                url
              }
              title
            }
            slug
            datePublished(formatString: "MMMM Do, YYYY")
            bodym {
              childMarkdownRemark {
                timeToRead
                excerpt(pruneLength: 300)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlog.edges.map((edge, index) => {
          const blogInfo = {
            title: edge.node.title,
            datePublished: edge.node.datePublished,
            imageUrl: `https:${edge.node.hero.file.url}`,
            imageAlt: edge.node.hero.title,
            description: edge.node.bodym.childMarkdownRemark.excerpt,
            slug: edge.node.slug,
            timeToRead: edge.node.bodym.childMarkdownRemark.timeToRead,
          }

          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${blogInfo.slug}`}>
                <h2>{blogInfo.title}</h2>
                <p>
                  <FiCalendar title="Date Published" /> {blogInfo.datePublished}
                  &nbsp;&nbsp;
                  <FiClock title="Reading Time" /> {blogInfo.timeToRead} Minutes
                </p>
                <img src={blogInfo.imageUrl} alt={blogInfo.imageAlt}></img>
                <p>{blogInfo.description}</p>
                <ol className={blogStyles.tags}>
                  {edge.node.tags.map((tag, index) => (
                    <li key={index} className={blogStyles.tag}>
                      {tag}
                    </li>
                  ))}
                </ol>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
