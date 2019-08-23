/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 07. 26.
 */

import React from 'react';
import styled from 'styled-components';
import Popup from '../popup/popup';
import {CardDeck} from 'react-bootstrap';
import Carousel from './carousel';
import bg from '../../img/bg.png';
import mailBox from '../../img/img_mailbox.png';
import axios from 'axios';
import jQuery from "jquery";
import {Card} from 'react-bootstrap';
import heart from '../../img/ic-heart-default.png';
import heartPicked from '../../img/ic-heart-picked.png';

import '../../css/home.css'

let heartImg = heart;

const $ = jQuery;

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 180px auto 0px auto;
  flex-direction: column;
  width:1280px;
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
            pickNews: [],
            userBookmark: [],
            popupId: 0,
            url: 'https://colletter.com/api',
            userHeader: localStorage.getItem('access_token'),
            arrBookmarkNewId: [],
            categoryData: [],
        };
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

    componentWillMount() {
        $('#btnShowPopup').hide();

        //베스트
        axios.get(this.state.url + `/news/best/3`).then(
            r => {
                this.setState({
                    bestNews: r.data
                });
            }
        );

        //최근
        axios.get(this.state.url + `/news/latest/3`).then(
            r => {
                this.setState({
                    latestNews: r.data
                });
            }
        );

        //픽
        axios.get(this.state.url + `/news/pick/3`).then(
            r => {
                this.setState({
                    pickNews: r.data
                });
            }
        );

        //북마크
        if (this.state.userHeader) {
            let url = this.state.url + `/users/bookmark`;
            axios({
                method: 'get',
                url,
                headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
            }).then(
                r => {
                    this.setState({userBookmark: r.data});
                    let arr = [];
                    this.state.userBookmark.forEach(el => arr.push(el.id));
                    this.setState({arrBookmarkNewId: arr});
                }
            ).catch(function (error) {
                localStorage.clear();
            });
        }


        //카테고리
        axios.get(this.state.url + `/category`).then(
            r => {
                this.setState({
                    categoryData: r.data
                });
            }
        );
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
                // if (this.state.arrBookmarkNewId.includes(id)) heartImg = heart;
                // else heartImg = heartPicked;
                // document.getElementById(id).src = heartImg;
                window.location.reload();
            }
        ).catch(function (error) {
            alert('북마크 등록은 로그인 후 가능합니다.');
            localStorage.clear();
            window.location.reload();
        });
    }

    render() {

        var bannerText = [
            {
                title: '   매일 매일 배달되는 신선한<br/>' +
                    '                            디자인 & 아트 작업물, 비헨스',
                minTitle: '  세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 <br/>\n' +
                    '                            바쁜 게 우리 탓은 아니잖아요!'

            }, {
                title: '     매일 아침 출근길,<br/>' +
                    '                          꼭 필요한 돈 이야기를 만나보세요.',
                minTitle: ' 사회초년생들을 위한 금융경제 뉴스레터를 <br/>\n' +
                    '                              매일 아침 출근길에 뉴스레터로 받아보실 수 있습니다.'
            },
            {
                title: '     해외 디자인 아티클을<br/>' +
                    '                           쉽게 읽는 방법!',
                minTitle: '사이트가 넘치는 해외 디자인 아티클을 번역하여 <br/>\n' +
                    '                           뉴스레터로 보내드립니다.'
            }
        ];
        setInterval(function () {
            $('.carousel-indicators li').each(function (e) {
                if ($($('.carousel-indicators li')[e]).hasClass('active')) {
                    $('#title').html(bannerText[e].title);
                    $('#minTitle').html(bannerText[e].minTitle);
                }
            });
        }, 1000);

        let categoryCount = 0;
        return (
            <div>
                <Container>
                    <ColletterPickTitle>Colletter Pick</ColletterPickTitle>
                    <Title>
                        <p id="title">
                            매일 매일 배달되는 신선한<br/>
                            디자인 & 아트 작업물, 비헨스
                        </p>
                    </Title>
                    <MinTitle>
                        <p id="minTitle">
                            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 <br/>
                            바쁜 게 우리 탓은 아니잖아요!
                        </p>
                    </MinTitle>
                </Container>
                <Carousel/>
                <Container>
                    <ColletterPick>Category</ColletterPick>
                    <Category>
                        {this.state.categoryData.map((category) => {
                            categoryCount++;

                            if (categoryCount < 5) {
                                return <CategoryImg key={category.id} src={category.image} alt="category"/>;
                            }
                        })
                        }

                    </Category>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <CardMinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </CardMinTitle>

                    <CardDeck>
                        {this.state.latestNews.map((news) => {
                            if (this.state.arrBookmarkNewId.includes(news.id)) heartImg = heartPicked
                            else heartImg = heart
                            return <Card style={{width: '415px', height: '415px'}} key={news.id}>
                                <Card.Body className="cardBody" data-id={news.id}
                                           onClick={this.changeId.bind(this, news.id)}>
                                    <Card.Img variant="right" className="heartImg" id={news.id} src={heartImg}
                                              onClick={this.bookmark.bind(this, news.id)}/>
                                    <Card.Img variant="right" className="cardImg" src={news.image}/>

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
                            if (this.state.arrBookmarkNewId.includes(news.id)) heartImg = heartPicked
                            else heartImg = heart
                            return <Card style={{width: '415px', height: '415px'}} key={news.id}>
                                <Card.Body className="cardBody" onClick={this.changeId.bind(this, news.id)}>
                                    <Card.Img variant="right" className="heartImg" src={heartImg}
                                              onClick={this.bookmark.bind(this, news.id)}/>
                                    <Card.Img variant="right" className="cardImg" src={news.image}/>

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
                            return <Card style={{width: '415px', height: '415px'}} key={news.id}>
                                <Card.Body className="cardBody" onClick={this.changeId.bind(this, news.id)}>
                                    <Card.Img variant="right" className="heartImg" src={heartImg}/>
                                    <Card.Img variant="right" className="cardImg" src={news.image}/>

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
                <button id="btnShowPopup" onClick={this.togglePopup.bind(this)} data-id='0'>show popup</button>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        popupId={this.state.popupId}
                        bookmark={(this.state.arrBookmarkNewId.includes(this.state.popupId)) ? true : false}
                        url={this.state.url}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default home;

