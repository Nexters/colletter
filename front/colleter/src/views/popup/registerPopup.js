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
import arrow from '../../img/ic-arrow-popup.png';

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

const RectangleRegister = styled.div`
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
        padding-top: 18px;
  `;


class RegisterPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

                    <Form>
                        <FormControl
                            placeholder="어떤 카테고리의 뉴스레터인가요?"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="inputName"
                        />

                        <FormControl
                            placeholder="추천할 뉴스레터 사이트의 링크를 붙여넣어주세요"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="inputName"
                        />

                        <FormControl
                            placeholder="간단한 설명을 적어주시면 정말 감사하겠습니다!!"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className="inputText"
                        />
                    </Form>

                    <RectangleRegister>
                        <SpanRegister>등록요청하기 </SpanRegister>
                    </RectangleRegister>
                </div>
            </div>
        );
    }
}

export default RegisterPopup;