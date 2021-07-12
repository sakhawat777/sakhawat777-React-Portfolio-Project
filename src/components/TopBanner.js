import React, { Fragment } from 'react';
import '../asset/css/custom.css';
import '../asset/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

const TopBanner = () => {
	return (
		<Fragment>
			<Container fluid='true' className='topFixedBanner'>
				<div className='topBannerOverlay'>
					<Container className='topContent'>
						<Row>
							<Col className='text-center'>
								<h1 className='topTitle'>Software Engineer</h1>
								<h4 className='topSubTitle'>
									Mobile & Web Application
								</h4>
								<Button variant='primary'>More Info.</Button>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</Fragment>
	);
};

export default TopBanner;
