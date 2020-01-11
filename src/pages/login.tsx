import React from 'react';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';

function LoginPage(): React.ReactElement {
    return (
        <React.Fragment>
            <NavBar/>
            <Header/>
            <Login/>
            <Footer/>
        </React.Fragment>
    );
};

export default LoginPage;
