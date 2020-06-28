import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            
            <div className={footerStyles.social}>
                <a href="https://twitter.com/@faeselsaeed" rel="noopener noreferrer" target="_blank"><FiTwitter /></a>
                <a href="https://www.linkedin.com/in/faesel-saeed-a97b1614" rel="noopener noreferrer" target="_blank"><FiLinkedin /></a>
                <a href="https://github.com/faesel" rel="noopener noreferrer" target="_blank"><FiGithub /></a>
            </div>

            <div>
                <p>© Copyright 2020, {data.site.siteMetadata.author}</p>
            </div>

        </footer>
    )
}

export default Footer