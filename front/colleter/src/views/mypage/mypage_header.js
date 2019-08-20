import React, { Component } from 'react';

import Profile from './mypage_profile'

import '../../css/mypage_header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Profile />
            </div>
        )
    }
}

export default Header;