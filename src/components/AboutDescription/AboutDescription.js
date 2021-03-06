import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutDescription = () => {
	return (
		<Fragment>
			<Container className='mt-5'>
				<Row>
					<Col lg={12} md={12} sm={12}>
						<h1 className='serviceName '>Who i Am</h1>
						<p className='serviceDescription'>
							I am highly talented. experienced, professional, and
							cooperative software engineer. 1 am working in programming
							and web world for more than 4 years .1 assure you a wide
							range of quality IT services. Web development. mobile app
							development and UI design the major field I am an expert
							in. Moreover, I have a teaching passion. I make a video
							tutorial to share my knowledge. My overall skill makes me a
							complete software developer. so you can hire me for your
							projects
						</p>
						<h1 className='serviceName '>My Mission </h1>
						<p className='serviceDescription'>
							My mission is to develop unique ideas and quality software
							that will secure top ranking in the marketplace. peoples
							system and people's hearts Develop robustly. secure.
							dynamic. responsive software for all platforms (computer.
							tab. mobile phone). Provide top-notch customer service.
							customization of our product according to customer demand
							and current technology. Planning advanced techniques for
							optimization, user experience, and satisfaction of
							customers for our software. Planning flexible software that
							will not be bounded by any linguistic or regional
							restriction. I want to flourish software that can blow
							people's heart and soul
						</p>
						<h1 className='serviceName '>My Vision </h1>
						<p className='serviceDescription'>
							My vision Is to brand our firm as the best firm in the
							world. Secure the top place among software providers for
							both local and international market Brand our country as
							the best software provider country. Create employment for
							youth on the field of both software and corporate level
							Provide our country and world with superior software.
							Nurture youths to be highly skilled software engineers
						</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default AboutDescription;
