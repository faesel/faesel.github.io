import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <p>
                The best way to reach me is via <a href="https://twitter.com/@faeselsaeed" rel="noopener noreferrer" target="_blank">@faeselsaeed</a> on Twitter!
            </p>
        </Layout>
    )
}

export default ContactPage