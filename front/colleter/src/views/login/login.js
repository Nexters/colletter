/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 07. 26.
 */
import React from 'react';
import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50%;
`;

const googleLogin = (<Login>
    <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
</Login>);

const loginComplete = (
    <div data-onsuccess="onSignIn">환영합니다. {localStorage.getItem('name')}고객님</div>);


class login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var bLogin = false;
        if (localStorage.getItem('id_token') !== null) {
            bLogin = true;
        }

        return (
            <div>
                {(bLogin === false) ? googleLogin : loginComplete}
            </div>);
    }
}

export default login;