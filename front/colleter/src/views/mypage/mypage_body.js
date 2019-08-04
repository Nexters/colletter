import React, { Component } from 'react';

import BookmarkCnt from './mypage_bookmarkCnt'
import BookmarkList from './mypage_bookmarkList'

class Body extends Component {
    render() {
        return (
            <div>
                <BookmarkCnt />
                <BookmarkList />
            </div>
        )
    }
}

export default Body;