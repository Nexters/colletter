import React, { Component } from 'react';

import Body from './mypage_body';
import Header from './mypage_header';

import '../../css/mypage.css'

class mypage extends Component {
    render() {
        return (
            <div className='mypage'>
                <Header />
                <hr className='hr'/>
                <Body />
            </div>
        );
    }
}

export default mypage;