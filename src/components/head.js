import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../../static/favicon.ico'

const Head = ({ title, ogTitle, ogUrl, ogDescription, ogImageUrl, ogImageAlt }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author,
                    social {
                        twitterUsername
                    }
                }
            }
        }
    `)

    return (
        <>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
            <Helmet>
                <link rel="icon" href={favicon} />
                
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:site" contact={data.site.siteMetadata.social.twitterUsername}></meta>
                <meta name="twitter:author" content={data.site.siteMetadata.author}></meta>

                <meta property="og:locale" content="en_GB" />
                <meta property="og:site_name" content={data.site.siteMetadata.title} />

                <meta name="og:title" content={ogTitle}></meta>
                <meta name="og:url" content={ogUrl}></meta>
                <meta name="og:description" content={ogDescription}></meta>
                <meta name="og:image" content={ogImageUrl}></meta>
                <meta name="og:image:alt" content={ogImageAlt}></meta>
                
            </Helmet>
        </>
    )
}

export default Head