import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './views/home/home';
import {Nav} from 'react-bootstrap';
import './App.css';
import styled from 'styled-components';
import logo from './img/logo.png';
import searching from './img/ic-searching.png'
import registerImg from './img/ic-arrow.png';
import footer from './img/footer.PNG';
import mypage from './views/mypage/mypage';
import admin from './views/admin/admin';
import category from './views/category/category';
import jQuery from "jquery";

const $ = jQuery;

const LogoImg = styled.img`
  margin-left: 70px;
`;


const Login = styled.div`
  margin-top: 6px;
  position: absolute;
    right: 203px;
`;

const Footer = styled.img`
width:100%
`;
const RegisterArrow = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  `;

const googleLogin = (
    <Login className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></Login>
);

const loginComplete = (
    <Login data-onsuccess="onSignIn"> {localStorage.getItem('name')}</Login>);

function rightNavHide() {
    if ($(window).width() < 960) {
        $('.rightNav').hide();
    } else {
        $('.rightNav').show();
    }

    if ($(window).width() < 1900) {
        $('.imgSide').hide();
    } else {
        $('.imgSide').show();
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        rightNavHide();
    }

    render() {
        var bLogin = false;
    
        return (
            <div className="app">
                <Router>
                    <div>
                        <Route exact path="/admin" component={admin}/>
                    </div>
                </Router>
            </div>
        )
    };
}

export default App;
