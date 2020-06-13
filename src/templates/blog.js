import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

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
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlog.title}</h1>
            <p>{props.data.contentfulBlog.datePublished}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
                
            </div> */}
        </Layout>
    ) 
}

export default Blog