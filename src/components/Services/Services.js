import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import graphicsLogo from '../../asset/image/ghaphics.svg';

const Services = () => {
	return (
		<Fragment>
			<Container className='text-center'>
				<h1 className='serviceMaintitle'>MY SERVICES</h1>
				<Row>
					<Col lg={4} md={6} sm={12}>
						<div className='serviceCard text-center'>
							<img src={webLogo} />
							<h2 className='serviceName '>Web Development</h2>
							<p className='serviceDescription'>
								I design and develop static and dynamic websites as per
								your requirements as we belive , "Web is world's next
								home".
							</p>
						</div>
					</Col>

					<Col lg={4} md={6} sm={12}>
						<div className='serviceCard text-center'>
							<img src={mobileLogo} />
							<h2 className='serviceName '>Mobile Development</h2>
							<p className='serviceDescription'>
								I build native and cross platfrom mobile app for your
								business and institution as per your requirements.
							</p>
						</div>
					</Col>
					<Col lg={4} md={6} sm={12}>
						<div className='serviceCard text-center'>
							<img src={graphicsLogo} />
							<h2 className='serviceName '>Graphics Design</h2>
							<p className='serviceDescription'>
								I design mordern user interface and other graphical
								components for your business and institution.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Services;
