import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import projectStyles from './projects.module.scss'

const ProjectsPage = () => {
    return (
        <Layout>
            <Head siteTitle="Projects"/>
            <h1>Projects</h1>
            <ol className={projectStyles.projectbox}>
                <li className={projectStyles.contactoption}>
                    <a href="https://github.com/faesel/gatsby-techblog-starter" target="_blank" rel="noreferrer">
                        <div className={projectStyles.content}>
                            <p>
                                Gatsby tech blog template that anyone can use and create a replica of this blog!
                            </p>
                        </div>
                    </a>
                </li>
            </ol>
        </Layout>
    )
}

export default ProjectsPage