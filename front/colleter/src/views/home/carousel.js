import React from 'react';
import {Carousel} from 'react-bootstrap';
import slider from '../../img/slider_test.PNG';
import leftImg from '../../img/leftImg.PNG';
import rightImg from '../../img/rightImg.PNG';
import styled from 'styled-components';


/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 07.
 */

const Left = styled.img`
    position: absolute;
    left: 0px;
    top: 460px;
     width: 16%;
  height: 480px;
   z-index: -1;
`;

const Right = styled.img`
position: absolute;
    right: 0px;
    top: 450px;
    width: 16%;
    height: 478px;
    z-index: -1;
`;

const Center = styled.img`
width: 1280px;
  height: 480px;
`;

const Container = styled.div`
margin-bottom:133px;
`;

class carousel extends React.Component {
    render() {
        return (
            <Container>
                <Left className="imgSide" src={leftImg}/>
                <Carousel className="slider">
                    <Carousel.Item>
                        <Center
                            className="d-block w-100"
                            src={slider}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Center
                            className="d-block w-100"
                            src={slider}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Center
                            className="d-block w-100"
                            src={slider}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Right className="imgSide" src={rightImg}/>
            </Container>
        );
    }
}

export default carousel;