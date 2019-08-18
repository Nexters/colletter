import React from 'react';
import close from '../../img/ic-closed.png';
import card from '../../img/cardImg.PNG';

import styled from 'styled-components';

import heart from '../../img/ic-heart-popup.png';
import arrow from '../../img/ic-arrow-popup.png';
import {Card} from 'react-bootstrap';

/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 07.
 */

const CloseImg = styled.img`
   width: 28px;
  height: 28px;
  object-fit: contain;
 position: absolute;
    right: 46px;
    top: 46px;
`;

const HeartImg = styled.img`
 margin :9px;
`;

const CardImg = styled.img`
width: 144px;
  height: 144px;
  margin-left:90px;
  margin-right:90px;
`;

const CardCategory = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 1.3em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3bd277;
`;

const CardCount = styled.span`
  font-family: NotoSansCJKkr;
  font-size: 1.3em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #686868;
  margin-left : 15px;
`;

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
`;

const ContainerCardText = styled.div`
    margin-top:6%;
    margin-right:134px;
`;

const ContainerCardTextFooter = styled.div`
 margin-top:5%;
 display:flex;
`;


const ContainerCardImg = styled.div`
    margin-top:6%;
`;

const Rectangle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 2px;
    border: solid 2px #3bd277;
`;
const RectangleRegister = styled.div`
    width: 80%;
    height: 60px;
    border-radius: 3.4px;
    background-color: #3bd277;
    margin-left: 22px;
    text-align: center;
`;
const SpanRegister = styled.p`
 font-family: NotoSansCJKkr;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin-top:10px;
    text-align: center;
  `;

class popup extends React.Component {
    news = [
        {
            id: 1,
            title: '디자인 스펙트럼',
            content: '디자인 스펙트럼은 테크 인더스트리에서 일하고 있는 디자이너들을 위한 커뮤니티입니다. 디자이너들이 서로의 경험과 지식을 나누는 기회를 만들고 디자인 생태계 전반을 건강하게 만드는 방법을 모색하고 있습니다.',
            category: '디자인',
            bookmarkedCount: 34
        },
    ];

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>

                    {this.news.map((news) => {
                        return <Container>
                            <ContainerCardImg>
                                <CardImg src={card}/>
                            </ContainerCardImg>
                            <ContainerCardText>
                                <Card.Title className="popupCardTitle">{news.title}</Card.Title>
                                <div className="cardMinTitle">
                                    <CardCategory>{news.category}</CardCategory><CardCount>좋아요 {news.bookmarkedCount}</CardCount>
                                </div>
                                <Card.Text className="popupCardText">
                                    {news.content}
                                </Card.Text>

                                <ContainerCardTextFooter>
                                    <Rectangle>
                                        <HeartImg src={heart}/>
                                    </Rectangle>
                                    <RectangleRegister>
                                        <SpanRegister>뉴스레터 신청하기 <img src={arrow}/></SpanRegister>
                                    </RectangleRegister>

                                </ContainerCardTextFooter>
                            </ContainerCardText>
                        </Container>
                    })}
                </div>
            </div>
        );
    }
}

export default popup;