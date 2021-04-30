import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import {
  FiBookOpen,
  FiServer,
  FiLayout,
  FiUsers,
  FiPenTool,
} from "react-icons/fi"

import profilePhoto from "../../static/profile.jpg"
import azlazyPhoto from "../../static/projects/azlazy/azlazy.png"
import gatsbyTemplate from "../../static/projects/gatsby-template/gatsbyTemplate.png"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <Layout>
      <Head
        pageTitle="Home"
        breadcrumbList={[
          {
            name: "Home",
            url: "Home",
          },
        ]}
      />
      <article className="h-card">
        <p className={indexStyles.heading}>
          Hi I&apos;m {author}, a full-stack developer, team lead & mentor.
        </p>
        <div className={indexStyles.subheading}>
          <div className={indexStyles.subheadingdescription}>
            <p>
              I am a software developer with a strong passion for technology and
              all things new. I specialise in delivering web-based & enterprise
              solutions and love new challenges. I take great pride in keeping
              up to date with current development practices and instilling them
              within my working environment.
            </p>
          </div>
          <div className={indexStyles.subheadingphoto}>
            <img src={profilePhoto} alt={author}></img>
          </div>
        </div>
        <p className={indexStyles.headingminor}>My projects...</p>
        <div className={indexStyles.projectone}>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://github.com/faesel/az-lazy"}
            >
              <img src={azlazyPhoto} alt="Az Lazy"></img>
            </a>
          </div>
          <div className={indexStyles.projectonecontent}>
            <h3>Az-Lazy - The go-to CLI for Azure storage</h3>
            <p>
              Check out my CLI tool Az-Lazy, it provides a command line
              interface to quickly manage and make changes to azure storage
              queues, blobs and tables. The inspiration for this project was to
              move away from using Azure Storage Manager and provide a faster
              CLI experience for developers.
            </p>
          </div>
        </div>
        <div className={indexStyles.projecttwo}>
          <div className={indexStyles.projecttwocontent}>
            <h3>Gatsby tech blog starter template</h3>
            <p>
              Checkout my tech blog template built with Gatsby, Contentful and
              Disqus. Its free to use for anyone this includes all costs aside
              from a custom domain (which is optional), and really easy to
              configure.
            </p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://github.com/faesel/gatsby-techblog-starter"}
            >
              <img
                src={gatsbyTemplate}
                alt="Gatsby Project Starter Template"
              ></img>
            </a>
          </div>
        </div>
        <p className={indexStyles.headingminor}>What I do...</p>
        <div className={indexStyles.skills}>
          <div className={indexStyles.skillitem}>
            <FiServer className={indexStyles.skilliconone}></FiServer>
            <h2>Backend Development</h2>
            <p>
              A backend developer of 10 Years + experience, server side
              development has always been the backbone of my experience. With
              the spectrum of responsibilities now widened by the Dev-Ops
              movement, creating infrastructure as code has widened my scope and
              interest in the field.
            </p>
          </div>
          <div className={indexStyles.skillitem}>
            <FiLayout className={indexStyles.skillicontwo}></FiLayout>
            <h2>Front End Development</h2>
            <p>
              Ive always found the fast moving pase of front-end technology
              fascinating. As library&apos;s have started to mature I have begun
              to invest more time working on library&apos;s within the React
              echo system. And lets not forget the black magic that is CSS.
            </p>
          </div>
        </div>
        <div className={indexStyles.skills}>
          <div className={indexStyles.skillitem}>
            <FiUsers className={indexStyles.skilliconthree}></FiUsers>
            <h2>Tech Lead</h2>
            <p>
              Throughout my career ive had multiple opportunities building and
              refining teams as well as company culture. I have always
              considered training up a apprentice developer to a well respected
              engineer as one of my greatest achievements.
            </p>
          </div>
          <div className={indexStyles.skillitem}>
            <FiPenTool className={indexStyles.skilliconfour}></FiPenTool>
            <h2>Blog Writer</h2>
            <p>
              Sometimes this content is more for myself to remember some of the
              harder challenges I have faced, but I also hope this content can
              be of use to someone else.
            </p>
          </div>
        </div>
        <p className={indexStyles.headingminor}>Have a look...</p>
        <div className={indexStyles.bloglink}>
          <Link to="/blog">
            <p>
              Take a look at my blog{" "}
              <FiBookOpen className={indexStyles.bloglinkicon}></FiBookOpen>
            </p>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default IndexPage
