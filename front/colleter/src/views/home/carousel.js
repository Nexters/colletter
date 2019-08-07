import React from 'react';
import {Carousel} from 'react-bootstrap';
import slider from '../../img/slider_test.PNG';

/**
 * colleter
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2019. 08. 07.
 */

class carousel extends React.Component {
    render() {
        return (
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default carousel;