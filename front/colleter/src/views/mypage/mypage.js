import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Card, CardColumns} from "react-bootstrap";
import heart from '../../img/ic-heart-picked.png';
import card from '../../img/cardImg.PNG';

import '../../css/cardColum.css'

const Container = styled.div`
    width:1280px;
    margin: 180px auto 0px auto;
`

const Hr = styled.hr`
    border: 1px solid #eeeeee;
    margin-top: 40px;
    margin-bottom: 60px;
`

const Header = styled.div`
    display: flex;
`

const ProFile = styled.div`
    width: -webkit-fill-available;
`

const UserData = styled.div`
    display: flex;
`

const UserProfile = styled.img`
    width: 80px;
    border-radius: 40px;
`

const UserName = styled.div`
    margin-left: 20px;
    line-height: 80px;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #121212;
`

const GuideText = styled.div`
    text-align: left;
    margin-top: 32px;
    font-family: NotoSansCJKkr;
    font-size: 32px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #0f0f0f;
`

const BookmarkCnt = styled.div`
    text-align: left;
`

const BMText = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #b8b8b8;
`

const BMCnt = styled.div`
    margin-top: 8px;
    margin-bottom: 42px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #0f0f0f;
`

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

class mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmark: [],
            cnt: 0,
            url: 'https://colletter.com/api',
            userHeader: localStorage.getItem('access_token'),
        };
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: this.state.url + '/users/bookmark/count',
            headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
        }).then(
            r => {
                this.setState({ cnt: r.data.data });
            },
        );

        axios({
            method: 'get',
            url: this.state.url + '/users/bookmark',
            headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
        }).then(
            r => {
                this.setState({ bookmark: r.data });
            },
        );
    }

    render() {
        return (
            <Container>
                <Header>
                    <ProFile>
                        <UserData>
                            <UserProfile src={localStorage.getItem('img')} alt='user' />
                            <UserName>{localStorage.getItem('name')}</UserName>
                        </UserData>
                        <GuideText data-onsuccess="onSignIn">어서오세요 {localStorage.getItem('name')}님!<br />
                            지식보따리 수집은 잘하고 계신가요? :)</GuideText>
                    </ProFile>
                </Header>
                <Hr />
                <BookmarkCnt>
                    <BMText>좋아한 뉴스레터</BMText>
                    <BMCnt>{this.state.cnt}</BMCnt>
                </BookmarkCnt>
                <CardColumns className="list">
                    {this.state.bookmark.map((news) => {
                        return <Card style={{width: '415px', height: '415px'}} key={news.id}>
                            <Card.Body className="cardBody">
                                <Card.Img variant="right" className="heartImg" src={heart} />
                                <Card.Img variant="right" className="cardImg" src={card}/>

                                <Card.Title className="cardTitle">{news.name}</Card.Title>
                                <Card.Text className="cardText cardMinTitle">
                                    {news.content}
                                </Card.Text>

                                <Card.Text className="cardText">
                                    <CardCategory>{news.category.name}</CardCategory><CardCount>좋아요 {news.bookmarkedCount}</CardCount>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    })}
                </CardColumns>
            </Container>
        );
    }
}

export default mypage;