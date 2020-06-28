import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from "../components/head"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlog ( sort: { fields: datePublished, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        datePublished(formatString:"MMMM Do, YYYY")
                        bodym {
                            childMarkdownRemark { 
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
            <ol className={blogStyles.posts}>
                {data.allContentfulBlog.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.datePublished}</p>
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