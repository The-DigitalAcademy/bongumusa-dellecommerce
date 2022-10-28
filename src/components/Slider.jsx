import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
        <div>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg"
                        alt="First slide"
                        style={{ height: '500px' }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://hisense.com.au/wp-content/uploads/2021/06/40_A4G-Product_Page_1.jpg"
                        alt="Second slide"
                        style={{ height: '500px' }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/191:100/w_1280,c_limit/PS4-Pro-SOURCE-Sony.jpg"
                        alt="Third slide"
                        style={{ height: '500px' }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
