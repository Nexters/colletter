import React, { Component } from 'react';

import '../../css/mypage_profile.css'

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <div className='user_data'><img id='user_profile' src={localStorage.getItem('img')} alt='user' /><div id='user_name'>{localStorage.getItem('name')}</div></div>
                <div className='guide_text' data-onsuccess="onSignIn">어서오세요 {localStorage.getItem('name')}님!<br />
                    지식보따리 수집은 잘하고 계신가요? :)</div>
            </div>
        )
    }
}

export default Profile;