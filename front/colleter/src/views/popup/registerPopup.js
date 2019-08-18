/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 17.
 */

import React from 'react';
import close from '../../img/ic-closed.png';

import styled from 'styled-components';

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


class RegisterPopup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <CloseImg onClick={this.props.closePopup} src={close} alt="close" href="/"/>


                </div>
            </div>
        );
    }
}

export default RegisterPopup;