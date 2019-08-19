import React from 'react';
import {Carousel} from 'react-bootstrap';
import slider1 from '../../img/img-retail-brew.png';
import slider2 from '../../img/imgdd.png';
import slider3 from '../../img/img.png';

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
width: 100%;
  height: 480px;
`;

const Container = styled.div`
margin-bottom:133px;
`;

class carousel extends React.Component {
    render() {
        return (
            <Container>
                <Carousel className="slider">
                    <Carousel.Item>
                        <Center
                            className="d-block w-100 banner1"
                            src={slider1}
                            alt="First slide"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Center
                            className="d-block w-100 banner2"
                            src={slider2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Center
                            className="d-block w-100 banner3"
                            src={slider3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default carousel;