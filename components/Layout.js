import Head from "next/head";
import Navbar from "./navs/Navbar";
import Footer from "./navs/Footer";
import { Box } from "@material-ui/core";

const Layout = (props) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar></Navbar>
    <Box paddingBottom="100px">{props.children}</Box>
    <div>
      <Footer></Footer>
    </div>
  </div>
);

export default Layout;
