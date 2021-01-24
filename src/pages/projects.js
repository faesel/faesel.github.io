import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import projectStyles from "./projects.module.scss"

import azlazyPhoto from "../../static/projects/azlazy/azlazy.png"
import gatsbyTemplate from "../../static/projects/gatsby-template/gatsbyTemplate.png"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head pageTitle="Projects" />
      <h1>Projects</h1>
      <ol className={projectStyles.projectbox}>
        <li className={projectStyles.contactoption}>
          <a
            href="https://github.com/faesel/az-lazy"
            target="_blank"
            rel="noreferrer"
          >
            <div className={projectStyles.content}>
              <img src={azlazyPhoto} alt="Az Lazy"></img>
              <h2>Az-Lazy - The go-to CLI for Azure storage</h2>

              <p>
                Check out my CLI tool Az-Lazy, it provides a command line
                interface to quickly manage and make changes to azure storage
                queues, blobs and tables. The inspiration for this project was
                to move away from using Azure Storage Manager and provide a
                faster CLI experience for developers.
              </p>
            </div>
          </a>
        </li>
        <li className={projectStyles.contactoption}>
          <a
            href="https://github.com/faesel/gatsby-techblog-starter"
            target="_blank"
            rel="noreferrer"
          >
            <div className={projectStyles.content}>
              <img
                src={gatsbyTemplate}
                alt="Gatsby Project Starter Template"
              ></img>
              <h2>Gatsby tech blog starter template</h2>
              <p>
                Checkout my tech blog template built with Gatsby, Contentful and
                Disqus. Its free to use for anyone this includes all costs aside
                from a custom domain (which is optional), and really easy to
                configure.
              </p>
            </div>
          </a>
        </li>
      </ol>
    </Layout>
  )
}

export default ProjectsPage
