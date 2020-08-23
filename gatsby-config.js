module.exports = {
    siteMetadata: {
        title: 'FAESEL.COM',
        author: 'Faesel Saeed',
        description: 'Personal blog of Faesel Saeed',
        siteUrl: 'https://www.faesel.com',
        social: {
            linkedin: 'https://www.linkedin.com/in/faesel-saeed-a97b1614',
            twitter: 'https://twitter.com/@faeselsaeed',
            twitterUsername: '@faeselsaeed',
            github: 'https://github.com/faesel',
            flickr: 'https://www.flickr.com/photos/faesel/',
            email: 'faesel@outlook.com'
        },
        rssFeedUrl: '/rss.xml'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: process.env.GOOGLE_TRACKING_ID,
                // Puts tracking script in the head instead of the bod
                head: true,
                // enable ip anonymization
                anonymize: true,
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Faesel.Com`,
              short_name: `Faesel.Com`,
              start_url: `/`,
              background_color: `#f4f4f4`,
              theme_color: `#2b2b2b`,
              display: `standalone`,
              icon: `src/images/icon.png`
            },
        },
        `gatsby-plugin-offline`,
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: 'carbon',
                            lineNumbers: true
                        }
                    },
                    `gatsby-remark-embedder`,
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            icon: `<svg aria-hidden="true" height="40" width="40" version="1.1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                            className: `auto-link-header`,
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                          target: "_blank",
                          rel: "nofollow"
                        }
                    },
                ]
            }
        },
        `gatsby-plugin-twitter`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/fonts/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        serialize: ({ query: { site, allContentfulBlog } }) => {
                            return allContentfulBlog.edges.map(edge => {
                                return Object.assign({}, edge.node, {
                                    title: edge.node.title,
                                    description: edge.node.bodym.childMarkdownRemark.excerpt,
                                    date: edge.node.datePublished,
                                    url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                                    guid: edge.node.bodym.childMarkdownRemark.id,
                                    custom_elements: [{ "content:encoded": edge.node.bodym.childMarkdownRemark.html }],
                                })
                            })
                        },
                        query: `
                        {
                            allContentfulBlog (
                                sort: {
                                    fields: datePublished
                                    order: DESC
                                }
                            ) {
                            edges {
                                node {
                                    title
                                    slug
                                    datePublished(formatString: "ddd, DD MMM YYYY HH:mm:ss ZZ")
                                    bodym {
                                        id,
                                        childMarkdownRemark {
                                            excerpt(pruneLength: 200)
                                            html
                                        }
                                    }
                                }
                            }
                            }
                        }`,
                        output: '/rss.xml',
                        title: 'Faesel.com - Full-Stack Blogger',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: '/sitemap.xml',
                exclude: [],
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
            
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }`,
                resolveSiteUrl: ({ site, allSitePage }) => {
                    return site.siteMetadata.siteUrl
                },
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map(node => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            changefreq: `weekly`,
                            priority: 0.7,
                        }
                    })
            }
        },
        `gatsby-plugin-remove-trailing-slashes`,
    ]
}