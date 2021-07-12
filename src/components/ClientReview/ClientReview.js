import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import CircleImg from '../../asset/image/Sakhawat.jpg';

const ClientReview = () => {
	var settings = {
		autoplayspeed: 3000,
		autoplay: true,
		dots: true,
		infinite: false,
		speed: 3000,
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Fragment>
			<Container className='text-center'>
				<h1 className='serviceMaintitle'>CLIENT SAYS</h1>
				<Slider {...settings}>
					<div>
						<Row className='text-center justify-content-center'>
							<Col lg={6} md={6} sm={12}>
								<img className='circleImage' src={CircleImg} />
								<h1 className='serviceName '>Web Develpoment</h1>
								<p className='serviceDescription'>
									I design modern user interface and other graphical
									components for your business and instution graphical
									components for your business and instution.
								</p>
							</Col>
						</Row>
					</div>
					<div>
						<Row className='text-center justify-content-center'>
							<Col lg={6} md={6} sm={12}>
								<img className='circleImage' src={CircleImg} />
								<h1 className='serviceName '>Web Develpoment</h1>
								<p className='serviceDescription'>
									I design modern user interface and other graphical
									components for your business and instution graphical
									components for your business and instution.
								</p>
							</Col>
						</Row>
					</div>
					<div>
						<Row className='text-center justify-content-center'>
							<Col lg={6} md={6} sm={12}>
								<img className='circleImage' src={CircleImg} />
								<h1 className='serviceName '>Web Develpoment</h1>
								<p className='serviceDescription'>
									I design modern user interface and other graphical
									components for your business and instution graphical
									components for your business and instution.
								</p>
							</Col>
						</Row>
					</div>
				</Slider>
			</Container>
		</Fragment>
	);
};

export default ClientReview;
