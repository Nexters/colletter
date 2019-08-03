/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 07. 26.
 */

import React from 'react';
import styled from 'styled-components';
import {Carousel, Card, CardDeck} from 'react-bootstrap';
import slider from '../../img/slider_test.PNG';
import category from '../../img/category.PNG';
import heart from '../../img/ic-heart-default.png';
import card from '../../img/cardImg.PNG';
import register from '../../img/register.PNG';
import footer from '../../img/footer.PNG';

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 5%;
  margin-left:21%;
  flex-direction: column;
`;

const ColletterPick = styled.div`
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
  margin-bottom: 10px;
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
  margin-bottom: 6%;
  `;

const Category = styled.div`
   margin-bottom: 6%;
`;

const CategoryImg = styled.img`
  width: 18%;
  height: 18%;
  background-color: #ed754a;
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

const Register = styled.img`
width:100%
`;

class home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Container>
                    <ColletterPick>Colletter Pick</ColletterPick>
                    <Title>
                        매일 매일 배달되는 신선한<br/>
                        디자인 & 아트 작업물, 비헨스
                    </Title>
                    <MinTitle>
                        세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 <br/>
                        바쁜 게 우리 탓은 아니잖아요!
                    </MinTitle>

                    <Carousel className="slider">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <ColletterPick>Category</ColletterPick>
                    <Category>
                        <CategoryImg src={category} alt="category"/>
                    </Category>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>
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
                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>
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
                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>
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

                </Container>
                <Register src={register} alt="register"/>
            </div>
        );
    }
}

export default home;