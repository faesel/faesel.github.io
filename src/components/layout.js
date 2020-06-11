import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default Layout