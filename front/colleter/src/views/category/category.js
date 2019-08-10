/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 10.
 */


import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/ic-arrow-dropdown.png';
import Popup from '../popup/popup';
import CardColum from '../card/cardColum';
import jQuery from "jquery";
import {CardColumns} from 'react-bootstrap';

const $ = jQuery;

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 5%;
  margin-left:320px;
  margin-right:320px;
  width:1280px;
  flex-direction: column;
`;

const Title = styled.div`
 font-family: NotoSansCJKkr;
  font-size: 44px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  color: #121212;
  margin-bottom:55px;
   `;

const TitleCategory = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: #a2a2a2;
  margin-right:30px;
  `;

const PickCategory = styled.div`
    font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: #3bd277;
  margin-right:30px;
  `;

const DivCategory = styled.div`
display:flex;
flex-direction:colum;
margin-bottom:216px;
`;

const RegisterDiv = styled.div`
width: 110px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #b8b8b8;
`;
const CountNews = styled.div`
 
  height: 36px;
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f0f0f;
  margin-bottom:22px;
  `;

const Rectangle = styled.div`
 width: 190px;
  height: 50px;
  border-radius: 2px;
  background-color: #3bd277;
      position: relative;
    float: right;
    display:flex;
`;
const RectangleSpan = styled.div`
 width: 60px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin-left:20px;
  margin-top:13px;
  margin-bottom:13px;
`;

const ArrowStyle = styled.img`
width: 20px;
  height: 20px;
  object-fit: contain;
      margin-top: 15px;
    margin-left: 64px;
`;

class category extends React.Component {
    categoryData = [
        {name: '디자인', id: 1},
        {name: '개발', id: 2},
        {name: 'IT/스타트업', id: 3},
        {name: '예술/문화', id: 4},
        {name: '정치/경제', id: 5},
        {name: '금융', id: 6},
        {name: '경제/경영', id: 7},
        {name: '시사/상식', id: 8},
    ];

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
        $('#btnShowPopup').hide();

        $('.cardBody').click(function () {
            $('#btnShowPopup').trigger('click');
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Title>
                        원하는 주제를 선택하고<br/>
                        지식을 넓혀보세요
                    </Title>
                    <DivCategory>
                        {this.categoryData.map((categoryData) => {
                            if (categoryData.id === 1) {
                                return <PickCategory id={categoryData.id}> {categoryData.name}</PickCategory>
                            } else {
                                return <TitleCategory id={categoryData.id}> {categoryData.name}</TitleCategory>
                            }
                        })}
                    </DivCategory>
                    <RegisterDiv>
                        등록 뉴스레터
                    </RegisterDiv>
                    <CountNews>
                        64
                        <Rectangle>
                            <RectangleSpan>최신순 </RectangleSpan>
                            <ArrowStyle src={arrow}/>
                        </Rectangle>
                    </CountNews>
                    <CardColum/>
                </Container>

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

export default category;

