import React from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import heart from '../../img/ic-heart-default.png';
import card from '../../img/cardImg.PNG';
import styled from 'styled-components';
import '../../css/mypage_bookmarkList.css'

import jQuery from "jquery";

const $ = jQuery;


/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 07.
 */

const CardCategory = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3bd277;
`;

const CardCount = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4e4e4e;
    margin-left : 15px;
`;


class cardColum extends React.Component {
    news = [
        {
            id: 1,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 2,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 3,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 4,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 5,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 6,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 7,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 8,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
        {
            id: 9,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
            bookmarkedCount: 34
        },
    ];


    render() {
        return (
            <CardColumns className="list">
                {this.news.map((news) => {
                    return <Card style={{width: '100%', height: '100%'}} key={news.id}>
                        <Card.Body className="cardBody">
                            <Card.Img variant="right" className="heartImg" src={heart}/>
                            <Card.Img variant="right" className="cardImg" src={card}/>

                            <Card.Title className="cardTitle">{news.title}</Card.Title>
                            <Card.Text className="cardText cardMinTitle">
                                {news.content}
                            </Card.Text>

                            <Card.Text className="cardText">
                                <CardCategory>{news.category}</CardCategory><CardCount>좋아요 {news.bookmarkedCount}</CardCount>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </CardColumns>
        );
    }
}

export default cardColum;