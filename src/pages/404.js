import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const notFoundPage = () => {
    return (
        <Layout>
            <Head title="404"></Head>
            <h1>Page Not Found</h1>
            <p><Link to="/">Opps this pages doesn't exist! click here to go to the home page!</Link></p>
        </Layout>
    )
}

export default notFoundPage