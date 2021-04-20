import Head from 'next/head'
import Navbar from './navbar/Navbar'

const Layout = (props) => (
    <div>
        <Head>
        <title>Hola</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&amp;display=swap" rel="stylesheet" />
        </Head>
            <Navbar></Navbar>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout;