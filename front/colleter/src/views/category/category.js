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
import axios from 'axios';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../../img/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import searching from '../../img/ic-searching.png';
import registerImg from '../../img/ic-arrow.png';

const $ = jQuery;

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 180px auto 0px auto;
  flex-direction: column;
   width:1280px;
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

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            categoryData: [],
            categoryId: 'c_0',
            height: '300px',
            url: 'http://15.164.112.144:8080'
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    changeId(id) {
        this.setState({
            categoryId: id
        });
    }

    componentDidMount() {
        $('#categoryNav').hide();
        $('#appNav').show();

        $('#btnShowPopup').hide();

        $('.cardBody').click(function () {
            $('#btnShowPopup').trigger('click');
        });

        axios.get(this.state.url + `/category`).then(
            r => {
                this.setState({
                    categoryData: r.data
                });
            }
        );
    }


    render() {
        $(window).scroll(function (event) {
            if ($(this).scrollTop() > 400) {
                $('#categoryNav').show();
                $('#appNav').hide();
            } else {
                $('#categoryNav').hide();
                $('#appNav').show();

            }
        });

        return (
            <div>

                <Navbar id="categoryNav" fixed="top">
                    {this.state.categoryData.map((categoryData) => {
                        if (categoryData.id === this.state.categoryId) {
                            return <PickCategory key={categoryData.id}
                                                 id={categoryData.id}
                                                 onClick={this.changeId.bind(this, categoryData.id)}
                            > <span className="spnCategory">{categoryData.name}</span></PickCategory>
                        } else {
                            return <TitleCategory key={categoryData.id}
                                                  onClick={this.changeId.bind(this, categoryData.id)}
                                                  id={categoryData.id}><span
                                className="spnCategory"> {categoryData.name}</span></TitleCategory>
                        }
                    })}
                </Navbar>

                <Container>
                    <Title>
                        원하는 주제를 선택하고<br/>
                        지식을 넓혀보세요
                    </Title>
                    <DivCategory>
                        {this.state.categoryData.map((categoryData) => {
                            if (categoryData.id === this.state.categoryId) {
                                return <PickCategory key={categoryData.id}
                                                     id={categoryData.id}
                                                     onClick={this.changeId.bind(this, categoryData.id)}
                                > <span className="spnCategory">{categoryData.name}</span></PickCategory>
                            } else {
                                return <TitleCategory key={categoryData.id}
                                                      onClick={this.changeId.bind(this, categoryData.id)}
                                                      id={categoryData.id}><span
                                    className="spnCategory"> {categoryData.name}</span></TitleCategory>
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
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
                <button id="btnShowPopup" onClick={this.togglePopup.bind(this)}>show popup</button>

            </div>
        );
    }
}

export default category;

