import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import heart from '../../img/ic-heart-default.png';
import card from '../../img/cardImg.PNG';
import styled from 'styled-components';

import jQuery from "jquery";
import {forEach} from 'react-bootstrap/es/utils/ElementChildren';

const $ = jQuery;


/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 07.
 */

const CardCategory = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3bd277;
`;

const CardCount = styled.span`
   font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #686868;
  margin-left : 15px;
`;


class cardDeck extends React.Component {

    constructor(props) {
        super(props);
        let news = props.news;
        if (!news) news = [
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
        ];

        this.state = {
            showPopup: false,
            news: news,
        };
    }

    render() {
        return (
            <CardDeck>
                {this.state.news.map((news) => {
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
            </CardDeck>
        );
    }
}

export default cardDeck;