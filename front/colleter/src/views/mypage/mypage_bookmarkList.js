import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardDeck } from 'react-bootstrap';
import heart from '../../img/ic-heart-picked.png';
import card from '../../img/cardImg.PNG';

import '../../css/mypage_bookmarkList.css'

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

class BookmarkList extends Component {
    render() {
        return (
        <CardDeck>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Img variant="right" className="heartImg" src={heart}/>
                    <Card.Img variant="right" className="cardImg" src={card}/>

                    <Card.Title className="cardTitle">뉴닉</Card.Title>
                    <Card.Text className="cardText">
                        금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.
                    </Card.Text>

                    <Card.Text className="cardText">
                        <CardCategory>정치/경제</CardCategory><CardCount>좋아요 4</CardCount>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Img variant="right" className="heartImg" src={heart}/>
                    <Card.Img variant="right" className="cardImg" src={card}/>

                    <Card.Title className="cardTitle">뉴닉</Card.Title>
                    <Card.Text className="cardText">
                        금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.
                    </Card.Text>

                    <Card.Text className="cardText">
                        <CardCategory>정치/경제</CardCategory><CardCount>좋아요 4</CardCount>
                    </Card.Text>
                </Card.Body>
            </Card> <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Img variant="right" className="heartImg" src={heart}/>
                <Card.Img variant="right" className="cardImg" src={card}/>

                <Card.Title className="cardTitle">뉴닉</Card.Title>
                <Card.Text className="cardText">
                    금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.
                </Card.Text>

                <Card.Text className="cardText">
                    <CardCategory>정치/경제</CardCategory><CardCount>좋아요 4</CardCount>
                </Card.Text>
            </Card.Body>
        </Card>
        </CardDeck>
        )
    }
}

export default BookmarkList;