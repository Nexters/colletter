/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 17.
 */

import React from 'react';
import close from '../../img/ic-closed.png';
import {FormControl, Form} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

import jQuery from "jquery";

const $ = jQuery;

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

const Title = styled.div`
 width: 566px;
  height: 48px;
  font-family: NotoSansCJKkr;
  font-size: 2.3em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.26;
  letter-spacing: normal;
  color: #121212;
   margin-left : 9% 
   margin-top : 10%;
   `;

const MinTitle = styled.div`
 width: 566px;
  height: 66px;
  font-family: NotoSansCJKkr;
  font-size: 1.4em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #686868;
     margin-left : 9% 
   margin-top : 2%;
  `;

const RectangleRegister = styled.button`
    border: 0px;
    width: 80%;
    height: 60px;
    border-radius: 3.4px;
    background-color: #3bd277;
    margin-left: 22px;
    text-align: center;
    margin-top: 6%;
    margin-left: 9%;
`;

const SpanRegister = styled.p`
    line-height: 60px;
    font-family: NotoSansCJKkr;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    color: #ffffff;
    text-align: center;
  `;

const Select = styled.select`
    width: 80%;
    padding: .375rem .75rem;
    margin-top: 4%;
    margin-left: 9%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s 
`
const Option = styled.option`
`

class RegisterPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userHeader: localStorage.getItem('access_token')
        };
    }
 
    register(e) {
        e.preventDefault();
        const params = JSON.stringify({
            "categoryType": $('#categoryType').val(),
            "description": $('#description').val(),
            "uri": $('#uri').val()
        });
        const url = 'http://15.164.112.144:8080/news';

        axios({
            method: 'post',
            url,
            data: params,
            headers: {'Content-Type': 'application/json'}
        }).then(
            r => {
            }
        );
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner_register'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>
                    <Title>
                        등록요청
                    </Title>
                    <MinTitle>
                        좋은 지식 정보를 제공하는 뉴스레터가 있다면<br/>
                        모두와 함께 마구마구 공유해주세요!
                    </MinTitle>

                    <Form onSubmit={this.register}>
                        <Select id="categoryType" placeholder="어떤 카테고리의 뉴스레터인가요?">
                            <Option value="DESIGN">디자인</Option>
                            <Option value="GAME">게임</Option>
                            <Option value="FOOD">음식</Option>
                            <Option value="EDUCATION">교육</Option>
                            <Option value="DEVELOPMENT">개발</Option>
                            <Option value="PLAN">기획</Option>
                        </Select>

                        <FormControl
                            placeholder="추천할 뉴스레터 사이트의 링크를 붙여넣어주세요"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="inputName"
                            id="uri"
                        />

                        <FormControl
                            placeholder="간단한 설명을 적어주시면 정말 감사하겠습니다!!"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="inputText"
                            id="description"
                        />

                        <RectangleRegister>
                            <SpanRegister>등록요청하기 </SpanRegister>
                        </RectangleRegister>
                    </Form>
                </div>
            </div>
        );
    }
}

export default RegisterPopup;