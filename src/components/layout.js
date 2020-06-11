import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

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