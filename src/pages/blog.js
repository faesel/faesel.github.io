import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import blogStyles from './blog.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlog (
                sort: {
                    fields: datePublished
                    order: DESC
                }
                limit: 50
                ) {
                edges {
                    node {
                        title
                        slug
                        datePublished(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)


    return (
        <Layout>
            <Head title="Blog"></Head>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlog.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={ `/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.datePublished}</p>
                            </Link>
                            
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage