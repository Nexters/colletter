import React from 'react';
import close from '../../img/ic-closed.png';
import card from '../../img/cardImg.PNG';

import styled from 'styled-components';

import heart from '../../img/ic-heart-default.png';
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
  float: right;
  margin: 15px;
`;
const CardImg = styled.img`
width: 144px;
  height: 144px;
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

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
`;

const ContainerCardText = styled.div`
 margin: 7%
`;

const ContainerCardImg = styled.div`
     margin: 10px;
     margin-left:90px;
     margin-top: 99px;
`;

const Rectangle = styled.div`
    width: 84px;
    height: 84px;
    border-radius: 2px;
    border: solid 2px #3bd277;
`;

class popup extends React.Component {
    news = [
        {
            id: 1,
            title: '뉴닉',
            content: '금주의 핫한 디자인을 빠르게 받아볼 수 있는 디자인 뉴스레터 입니다.',
            category: '정치/경제',
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
                                <Card.Title className="cardTitle">{news.title}</Card.Title>
                                <CardCategory>{news.category}</CardCategory><CardCount>좋아요 {news.bookmarkedCount}</CardCount>
                                <Card.Text className="cardText">
                                    {news.content}
                                </Card.Text>
                                <Rectangle></Rectangle>
                            </ContainerCardText>
                        </Container>
                    })}
                </div>
            </div>
        );
    }
}

export default popup;