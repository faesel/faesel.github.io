import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"></Head>
            <h1>About Me</h1>
            <p>Im a software developer</p>
            <Link to="/contact">Want to work with me reach out!</Link>
        </Layout>
    )
}

export default AboutPage