import React from 'react';
import close from '../../img/ic-closed.png';
import {Form, FormControl} from 'react-bootstrap';
import styled from 'styled-components';

/**
 * git
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 20.
 */
const Login = styled.div`
`;

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

class RegisterPopup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner_login'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>
                    <Title>
                        로그인
                    </Title>
                    <MinTitle>
                        로그인하고 더 많은 뉴스레터들을<br/>
                        마음껏 수집해보시지요오!
                    </MinTitle>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>

                </div>
            </div>
        );
    }
}

export default RegisterPopup;