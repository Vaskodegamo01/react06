import React,{Fragment} from 'react';
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

const Layout = (props) => {
    return(
        <Fragment>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </Fragment>
    )
};

export default Layout;