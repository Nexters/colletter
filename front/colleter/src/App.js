import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import home from './views/home/home';
import {Nav, Navbar} from 'react-bootstrap';
import './App.css';
import styled from 'styled-components';
import logo from './img/logo.png';
import searching from './img/ic-searching.png'
import registerImg from './img/ic-arrow.png';
import footerImg from './img/logo-footer.png';
import mypage from './views/mypage/mypage';
import category from './views/category/category';
import jQuery from "jquery";
import RegisterPopup from './views/popup/registerPopup';
import LoginPopup from './views/popup/loginPopup';

const $ = jQuery;

const LogoImg = styled.img`
  margin-left: 70px;
`;


const Footer = styled.div`
width:100%;
height: 236px;
background-color: #000000;
`;

const FooterImg = styled.img`
  width: 120px;
  height: 22px;
  object-fit: contain;
  position: absolute;
                     left: 16%;
                        margin-top: 56px;
`;
const RegisterArrow = styled.img`
width: 20px;
    height: 20px;
    object-fit: contain;
    margin-top: 4px;
    margin-right: 0px;

  `;

const Search = styled.input`
  width: 1000px;
`;

const RegisterLetter = styled.p`
  font-size: 14px;
    margin-right: 8px;
    margin-top: 7px;
    margin-left: 11px;
`;

const LoginButton = styled.p`
    position: absolute;
    margin-right: 27%;
    right: 0;
`;

const login = (
    <Nav.Item className="loginPopup">
        로그인
    </Nav.Item>
);
const goggleLogin = (
    <div className="g-signin2" data-onsuccess="onSignIn"></div>
);
const loginComplete = (
    <div className='nav_user'><img id='user_profile' src={localStorage.getItem('img')} alt='user'/>
        <p id='user_name'>{localStorage.getItem('name')} <br/> <span
            id='user_email'>{localStorage.getItem('email')}</span></p>
    </div>
);

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
        this.state = {
            showPopup: false,
            showLoginPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        if (this.state.showPopup) {
            $('#appNav').show();
        } else {
            $('#appNav').hide();
        }
    }

    toggleLoginPopup() {
        this.setState({
            showLoginPopup: !this.state.showLoginPopup
        });
        if (this.state.showLoginPopup) {
            $('#appNav').show();
        } else {
            $('#appNav').hide();
        }
    }

    componentDidMount() {
        rightNavHide();

        $('.newsRegister').click(function () {
            $('#btnShowRegisterPopup').trigger('click');
        });

        $('.loginPopup').click(function () {
            $('#btnShowLoginPopup').trigger('click');
        });
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
                <Router basename={process.env.PUBLIC_URL}>
                    <Navbar fixed="top" id="appNav">
                        <Nav.Item className="navImg">
                            <a href={process.env.PUBLIC_URL + '/'}>
                                <LogoImg src={logo} alt="logo"/>
                            </a>
                        </Nav.Item>
                        <Nav.Item className="about navText">
                            <Link to="/" className="link">
                                어바웃
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="navText">
                            <Link to="/category" className="link">
                                카테고리
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="navText">
                            <Link to="/mypage" className="link">
                                마이페이지
                            </Link>
                        </Nav.Item>
                        <Nav.Item className=" navText">
                            <img src={searching} alt=" searching"/>
                            검색
                        </Nav.Item>
                        <Nav.Item className="rightNav navText">
                            {(bLogin === false) ? login : loginComplete}
                        </Nav.Item>
                        <Nav.Item className="rightNav navImg">
                            <Nav.Link className="newsRegister">
                                <RegisterLetter>등록요청</RegisterLetter> <RegisterArrow src={registerImg}/>
                            </Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <div>
                        <Route exact path="/" component={home}/>
                        <Route path="/mypage" component={mypage}/>
                        <Route path="/category" component={category}/>
                    </div>
                </Router>
                <Footer>
                    <FooterImg src={footerImg}/>
                </Footer>

                <button id="btnShowRegisterPopup" onClick={this.togglePopup.bind(this)}>show popup</button>
                <button id="btnShowLoginPopup" onClick={this.toggleLoginPopup.bind(this)} goggle={goggleLogin}>show
                    popup
                </button>

                {this.state.showPopup ?
                    <RegisterPopup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }

                {this.state.showLoginPopup ?
                    <LoginPopup
                        text='Close Me'
                        closePopup={this.toggleLoginPopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    };
}

export default App;
