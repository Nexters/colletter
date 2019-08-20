import React from 'react';
import close from '../../img/ic-closed.png';

import styled from 'styled-components';
import {GoogleLogin} from 'react-google-login';
import jQuery from "jquery";

const $ = jQuery;
/**
 * git
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 20.
 */
const Login = styled.div`
`;

const CloseImg = styled.img`
   width: 28px;
  height: 28px;
  object-fit: contain;
 position: absolute;
    right: 46px;
    top: 46px;
`;

const Title = styled.div`
 width: 566px;
  height: 48px;
  font-family: NotoSansCJKkr;
  font-size: 2.3em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.26;
  letter-spacing: normal;
  color: #121212;
   margin-left : 9% 
   margin-top : 10%;
   `;

const MinTitle = styled.div`
 width: 566px;
  height: 66px;
  font-family: NotoSansCJKkr;
  font-size: 1.4em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #686868;
     margin-left : 9% 
   margin-top : 2%;
  `;

class RegisterPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    responseGoogle(googleUser) {
        let profile = googleUser.getBasicProfile();
        // The ID token you need to pass to your backend:
        let id_token = googleUser.getAuthResponse().id_token;

        let name = profile.getName();
        let email = profile.getEmail();
        let img = profile.getImageUrl();
        localStorage.setItem('id_token', id_token);
        localStorage.setItem('name', name);
        localStorage.setItem('img', img);
        localStorage.setItem('email', email);


        $.ajax({
            type: "POST",
            url: "http://15.164.112.144:8080/users/login",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                image: img,
                name: name,
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("accept", "*/*");
            },
            success: function (data) {
                localStorage.setItem('access_token', data.data);
                window.location.reload();
            },
            error: function (error) {
            }
        });
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner_login'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>
                    <Title>
                        로그인
                    </Title>
                    <MinTitle>
                        로그인하고 더 많은 뉴스레터들을<br/>
                        마음껏 수집해보시지요오!
                    </MinTitle>
                    <GoogleLogin
                        clientId="765093244572-6a5pf561h2rqmh977qqlum0ia916u8re.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />,
                </div>
            </div>
        );
    }
}

export default RegisterPopup;