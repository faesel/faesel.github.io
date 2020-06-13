import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark (
//             fields: {
//                 slug: {
//                     eq: $slug
//                 }
//             }
//         ) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

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
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlog.title}</h1>
            <p>{props.data.contentfulBlog.datePublished}</p>
            { documentToReactComponents(props.data.contentfulBlog.body.json) }
        </Layout>
    ) 
}

export default Blog