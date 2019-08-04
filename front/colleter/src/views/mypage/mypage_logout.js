import React, { Component } from 'react';

import '../../css/mypage_logout.css'

class Logout extends Component {
    handleClick() {
        // localStorage.removeItem('id_token');
        // localStorage.removeItem('name');
        // localStorage.removeItem('img');
        window.location.href = '../';
    }

    render() {
        return (
            <div>
                <button id='logout' onClick={this.handleClick}>로그아웃</button>
            </div>
        )
    }
}

export default Logout;