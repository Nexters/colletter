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
        if (localStorage.getItem('id_token') !== null) {
            bLogin = true;
        }

        $(window).resize(function () {
            rightNavHide();
        });


        return (
            <div className="app">
                <Nav>
                    <Nav.Item className="navImg">
                        <a href="/">
                            <LogoImg src={logo} alt="logo"/>
                        </a>
                    </Nav.Item>
                    <Nav.Item className="about navText">
                        <Nav.Link href="/">
                            어바웃
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navText">
                        <Nav.Link href="/category">
                            카테고리
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navText">
                        <Nav.Link href="/mypage">
                            마이페이지
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navText">
                        <Nav.Link>
                            <img src={searching} alt="searching"/>
                            검색
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="rightNav navText">
                        {(bLogin === false) ? googleLogin : loginComplete}
                    </Nav.Item>
                    <Nav.Item className="rightNav navImg">
                        <Nav.Link className="newsRegister">
                            등록 요청 <RegisterArrow src={registerImg}/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Router>
                    <div>
                        <Route exact path="/" component={home}/>
                        <Route exact path="/mypage" component={mypage}/>
                        <Route exact path="/category" component={category}/>
                    </div>
                </Router>
                <Footer src={footer} alt="footer"/>
            </div>
        )
    };
}

export default App;
