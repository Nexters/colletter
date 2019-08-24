import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Popup from '../popup/popup';
import jQuery from "jquery";
import {Card, CardColumns} from "react-bootstrap";
import heart from '../../img/ic-heart-picked.png';

const $ = jQuery;

const Container = styled.div`
    width:1280px;
    margin: 180px auto 0px auto;
`;

const Hr = styled.hr`
    border: 1px solid #eeeeee;
    margin-top: 40px;
    margin-bottom: 60px;
`;

const Header = styled.div`
    display: flex;
`;

const ProFile = styled.div`
    width: -webkit-fill-available;
`;

const UserData = styled.div`
    display: flex;
`;

const UserProfile = styled.img`
    width: 80px;
    border-radius: 40px;
`;

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
`;

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
`;

const BookmarkCnt = styled.div`
    text-align: left;
`;

const BMText = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #b8b8b8;
`;

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
`;

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
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #686868;
    margin-left : 15px;
`;

class mypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
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

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });

        if (this.state.showPopup) {
            $('#appNav').show();
        } else {
            $('#appNav').hide();
        }
    }

    changeId(id) {
        this.setState({
            popupId: id,
            showPopup: !this.state.showPopup
        });

        if (this.state.showPopup) {
            $('#appNav').show();
        } else {
            $('#appNav').hide();
        }
    }

    bookmark(id, e) {
        e.stopPropagation();
        let url = this.state.url + `/users/bookmark/${id}`;
        axios({
            method: 'put',
            url,
            headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
        }).then(
            r => {
                window.location.reload();
            }
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
                <CardColumns className="list" style={{marginBottom: '200px'}}>
                    {this.state.bookmark.map((news) => {
                        return <Card style={{width: '415px', height: '415px', marginBottom:'18px',marginRight:'18px'}} key={news.id}>
                            <Card.Body className="cardBody" data-id={news.id} onClick={this.changeId.bind(this, news.id)}>
                                <Card.Img variant="right" className="heartImg" src={heart} onClick={this.bookmark.bind(this, news.id)}/>
                                <Card.Img variant="right" className="cardImg" src={news.image}/>

                                <Card.Title className="cardTitle">{news.name}</Card.Title>
                                <Card.Text className="cardText cardMinTitle">
                                    {news.content}
                                </Card.Text>

                                <Card.Text className="cardText">
                                    <CardCategory>{news.category.nameKR}</CardCategory>
                                    <CardCount>좋아요 <span style={{color: '#424242', fontWeight: '300'}}>{news.bookmarkedCount}</span></CardCount>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    })}
                </CardColumns>

                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        popupId={this.state.popupId}
                        bookmark={ true }
                        url={this.state.url}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </Container>
        );
    }
}

export default mypage;