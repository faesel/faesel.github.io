import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlog ( sort: { fields: datePublished, order: DESC } ) {
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
                        datePublished(formatString:"MMMM Do, YYYY")
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
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlog.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p className={blogStyles.postdate}>{edge.node.datePublished}</p>
                                <p>{edge.node.bodym.childMarkdownRemark.excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage