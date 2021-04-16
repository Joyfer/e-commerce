import Head from 'next/head'
import Navbar from './navbar/Navbar'

const Layout = (props) => (
    <div>
        <Head>
        <title>Hola</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
            <Navbar></Navbar>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout;