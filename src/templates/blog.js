import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

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
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-GB']
                const src = node.data.target.fields.file['en-GB'].url

                return <img alt={alt} src={src} />
            },
            'paragraph': (node, children) => {
                return node.content.some(childNode => childNode.nodeType === `text` && childNode.marks.some(mark => mark.type === 'code')) ? 
                    children :  //Render code
                    children    //Render paragraph
            }
                 

        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlog.title}></Head>
            <h1>{props.data.contentfulBlog.title}</h1>
            <p>{props.data.contentfulBlog.datePublished}</p>
            { documentToReactComponents(props.data.contentfulBlog.body.json, options) }
        </Layout>
    ) 
}

export default Blog