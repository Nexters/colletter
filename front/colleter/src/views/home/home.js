/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 07. 26.
 */

import React from 'react';
import styled from 'styled-components';
import category from '../../img/category.PNG';
import Popup from '../popup/popup';
import {CardDeck} from 'react-bootstrap';
import Carousel from './carousel';
import bg from '../../img/bg.png';
import mailBox from '../../img/img_mailbox.png';
import axios from 'axios';
import jQuery from "jquery";
import {Card} from 'react-bootstrap';
import heart from '../../img/ic-heart-default.png';
import card from '../../img/cardImg.PNG';

const $ = jQuery;

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 80px 16% 0px 16%;
  flex-direction: column;
`;

const ColletterPick = styled.div`
 font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: #3bd277;
  margin-bottom: 10px;
 `;

const ColletterPickTitle = styled.div`
 font-family: Baskerville;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: #3bd277;
  margin-bottom: 10px;
 `;

const Title = styled.div`
 font-family: NotoSansCJKkr;
  font-size: 40px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  color: #121212;
  margin-bottom: 13px;
   `;

const MinTitle = styled.div`
 font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #686868;
  margin-bottom:80px;
  `;

const CardMinTitle = styled.div`
 font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #686868;
  `;

const Category = styled.div`
margin-bottom:150px;
`;

const CategoryImg = styled.img`
      width: 23%;
    height: 23%;
    background-color: #ed754a;
    /* margin-left: 16px; */
    margin-top: 25px;
    margin-right: 16px;
`;

const Register = styled.img`
width:100%;
`;

const FooterLetter = styled.div`
position :absolute;
margin-top: 128px;
left:16%;
`;

const FooterRegister = styled.div`
position :absolute;
margin-top: 128px;
left:63%;
`;

const RegisterRectangle = styled.div`
width: 386px;
  height: 64px;
  border: solid 1px #121212;
  background-color: #ffffff;
  
`;

const MailBoxImg = styled.img` 
  width: 90px;
  height: 90px;
      margin-left: 100px;
`;

const RegisterMailLetter = styled.p`
  width: 240px;
  height: 30px;
  font-family: NotoSansCJKkr;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #686868;
      margin: 17px;    
      display:flex;
`;
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


class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            bestNews: [],
            latestNews: [],
            pickNews: []
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentDidMount() {
        $('#btnShowPopup').hide();

        axios.get(`https://colletter.com/news/best/3`).then(
            r => {
                this.setState({
                    bestNews: r.data
                });
            }
        );

        axios.get(`https://colletter.com/news/latest/3`).then(
            r => {
                this.setState({
                    latestNews: r.data
                });
            }
        );

        axios.get(`https://colletter.com/news/pick/3`).then(
            r => {
                this.setState({
                    pickNews: r.data
                });
            }
        );


        $('.cardBody').on("click", function () {
            $('#btnShowPopup').trigger('click');
        });
    }

    render() {

        return (
            <div>
                <Container>
                    <ColletterPickTitle>Colletter Pick</ColletterPickTitle>
                    <Title>
                        매일 매일 배달되는 신선한<br/>
                        디자인 & 아트 작업물, 비헨스
                    </Title>
                    <MinTitle>
                        세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 <br/>
                        바쁜 게 우리 탓은 아니잖아요!
                    </MinTitle>
                    <Carousel/>
                    <ColletterPick>Category</ColletterPick>
                    <Category>
                        <CategoryImg src={category} alt="category"/>
                        <CategoryImg src={category} alt="category"/>
                        <CategoryImg src={category} alt="category"/>
                        <CategoryImg className="lastCategory" src={category} alt="category"/>
                    </Category>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <CardMinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </CardMinTitle>

                    <CardDeck>
                        {this.state.latestNews.map((news) => {
                            return <Card style={{width: '100%', height: '100%'}} key={news.id}>
                                <Card.Body className="cardBody">
                                    <Card.Img variant="right" className="heartImg" src={heart}/>
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
                    </CardDeck>


                    <ColletterPick>Best Newsletter</ColletterPick>
                    <CardMinTitle>
                        콜레티언에게 가장 많은 좋아요를 받은 뉴스레터예요
                    </CardMinTitle>

                    <CardDeck>
                        {this.state.bestNews.map((news) => {
                            return <Card style={{width: '100%', height: '100%'}} key={news.id}>
                                <Card.Body className="cardBody">
                                    <Card.Img variant="right" className="heartImg" src={heart}/>
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
                    </CardDeck>

                    <ColletterPick>Colletter’s Pick</ColletterPick>
                    <CardMinTitle>
                        콜레터가 직접 선정한 뉴스레터를 확인해 보세요
                    </CardMinTitle>
                    <CardDeck>
                        {this.state.pickNews.map((news) => {
                            return <Card style={{width: '100%', height: '100%'}} key={news.id}>
                                <Card.Body className="cardBody">
                                    <Card.Img variant="right" className="heartImg" src={heart}/>
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
                    </CardDeck>

                </Container>
                <div>
                    <FooterLetter>
                        <Title>
                            당신의 지식을<br/>
                            더 넓은 세상에 전달하세요
                        </Title>
                        <MinTitle>
                            콜레터는 세상의 더 많은 뉴스레터를 찾고 있습니다.<br/>
                            지금 바로 콜레터에 뉴스레터를 등록하세요!
                        </MinTitle>
                    </FooterLetter>
                    <FooterRegister>
                        <MailBoxImg src={mailBox}/>
                        <RegisterRectangle>
                            <RegisterMailLetter>콜레터에 뉴스레터를 등록하세요</RegisterMailLetter>
                        </RegisterRectangle>
                    </FooterRegister>
                    <Register src={bg} alt="register"/>
                </div>
                <button id="btnShowPopup" onClick={this.togglePopup.bind(this)}>show popup</button>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default home;

