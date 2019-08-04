import React, { Component } from 'react';

import '../../css/mypage_bookmarkCnt.css'

class BookmarkCnt extends Component {
    render() {
        return (
            <div>
                <div className='bm_txt'>좋아한 뉴스레터</div>
                <div className='bm_cnt'>42</div>
            </div>
        )
    }
}

export default BookmarkCnt;