import React, {Component} from 'react';

import BookmarkCnt from './mypage_bookmarkCnt'
import BookmarkList from './mypage_bookmarkList'
import CardColum from '../card/cardColum';

class Body extends Component {
    render() {
        return (
            <div>
                <BookmarkCnt/>
                <CardColum/>
            </div>
        )
    }
}

export default Body;