import React from 'react';
import close from '../../img/ic-closed.png';
import card from '../../img/cardImg.PNG';

import styled from 'styled-components';

import heart from '../../img/ic-heart-popup.png';
import arrow from '../../img/ic-arrow-popup.png';
import {Card} from 'react-bootstrap';
import axios from 'axios';

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
  margin-left:996px;
  margin-top:45px
`;

const HeartImg = styled.img`
 margin :21px;
`;

const CardImg = styled.img`
width: 144px;
  height: 144px;
  margin-left:90px;
  margin-right:90px;
`;

const CardCategory = styled.span`
 width: 64px;
  height: 34px;
  font-family: NotoSansCJKkr;
  font-size: 23px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3bd277;
`;

const CardCount = styled.span`
width: 64px;
  height: 34px;
  font-family: NotoSansCJKkr;
  font-size: 23px;
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
   
    margin-right:134px;
`;

const ContainerCardTextFooter = styled.div`
 margin-top:5%;
 display:flex;
`;


const ContainerCardImg = styled.div`
   
`;

const Rectangle = styled.div`
width: 84px;
  height: 84px;
  border-radius: 2px;
  border: solid 2px #3bd277;
       margin-top:45px;
    border: solid 2px #3bd277;
`;
const RectangleRegister = styled.div`
width: 374px;
  height: 84px;
  border-radius: 3.4px;
  background-color: #3bd277;
    margin-left: 22px;
    margin-top:45px;
    text-align: center;
`;
const SpanRegister = styled.p`
      width: 252px;
    height: 34px;
    font-family: NotoSansCJKkr;
    font-size: 23px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    color: #ffffff;
    color: #ffffff;
    display: flex;
    margin-top: 24px;
    text-align: center;
    margin-left: 83px;
  `;

class popup extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            news: {
                id: 1,
                name: '디자인 스펙트럼',
                content: '디자인 스펙트럼은 테크 인더스트리에서 일하고 있는 디자이너들을 위한 커뮤니티입니다. 디자이너들이 서로의 경험과 지식을 나누는 기회를 만들고 디자인 생태계 전반을 건강하게 만드는 방법을 모색하고 있습니다.',
                category: {
                    name: '디자인'
                },
                bookmarkedCount: 34

            },
        };
    }

    componentDidMount() {

        axios.get(this.props.url + `/news/` + this.props.popupId).then(
            r => {
                this.setState({
                    news: r.data
                });
            }
        );
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>

                    <Container>
                        <ContainerCardImg>
                            <CardImg src={card}/>
                        </ContainerCardImg>
                        <ContainerCardText>
                            <Card.Title className="popupCardTitle">{this.state.news.name}</Card.Title>
                            <div className="cardMinTitle">
                                <CardCategory>{this.state.news.category.name}</CardCategory><CardCount>좋아요 {this.state.news.bookmarkedCount}</CardCount>
                            </div>
                            <Card.Text className="popupCardText">
                                {this.state.news.content}
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
                </div>
            </div>
        );
    }
}

export default popup;