import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './views/home/home';
import {Nav} from 'react-bootstrap';
import './App.css';
import styled from 'styled-components';
import logo from './img/logo.png'

import footer from './img/footer.PNG';
import mypage from './views/mypage/mypage';
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
        if (localStorage.getItem('id_token') !== null) {
            bLogin = true;
        }

        $(window).resize(function () {
            rightNavHide();
        });


        return (
            <div className="app">
                <Nav>
                    <Nav.Item>
                        <LogoImg src={logo} alt="logo"/>
                    </Nav.Item>
                    <Nav.Item className="about">
                        <Nav.Link href="/about">
                            어바웃
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/category">
                            카테고리
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/mypage">
                            마이페이지
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            검색
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="rightNav">
                        {(bLogin === false) ? googleLogin : loginComplete}
                    </Nav.Item>
                    <Nav.Item className="rightNav">
                        <Nav.Link className="newsRegister">
                            등록 요청 >
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Router>
                    <div>
                        <Route exact path="/" component={home}/>
                        <Route exact path="/mypage" component={mypage}/>
                    </div>
                </Router>
                <Footer src={footer} alt="footer"/>
            </div>
        )
    };
}

export default App;
