import React, { Component } from 'react';

import Profile from './mypage_profile'
import Logout from './mypage_logout'

import '../../css/mypage_header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Profile />
                <Logout />
            </div>
        )
    }
}

export default Header;