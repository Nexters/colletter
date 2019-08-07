/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 07. 26.
 */

import React from 'react';
import styled from 'styled-components';
import category from '../../img/category.PNG';
import register from '../../img/register.PNG';
import Popup from '../popup/popup';
import CardDeck from '../cardDeck/cardDeck';
import Carousel from './carousel';

import jQuery from "jquery";

const $ = jQuery;

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

const Register = styled.img`
width:100%
`;

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentDidMount() {
        $('.cardBody').click(function () {
            console.log('asd');
        });
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
                    <Carousel/>

                    <ColletterPick>Category</ColletterPick>
                    <Category>
                        <CategoryImg src={category} alt="category"/>
                    </Category>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>

                    <CardDeck/>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>

                    <CardDeck/>

                    <ColletterPick>Lastest Update</ColletterPick>
                    <MinTitle>
                        가장 최근 업데이트 된 뉴스레터들을 살펴보세요
                    </MinTitle>

                    <CardDeck/>
                </Container>
                <Register src={register} alt="register"/>

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

