import React, { Component } from 'react';

import '../../css/mypage_logout.css'

class Logout extends Component {
    render() {
        return (
            <div>
                <input type='button' id='logout' value='로그아웃' />
            </div>
        )
    }
}

export default Logout;