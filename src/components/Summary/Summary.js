import React, { Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Summary = () => {
	return (
		<Fragment>
			<Container fluid='true' className='summaryBanner summarySection'>
				<div className='summaryBannerOverlay'>
					<Container className='text-center'>
						<Row>
							<Col lg={8} md={6} sm={12}>
								<Row className='countSection'>
									<Col>
										<h1 className='countNumber'>
											<CountUp start={0} end={100}>
												{({ countUpRef, start }) => (
													<VisibilitySensor
														onChange={start}
														delayedCall>
														<span ref={countUpRef} />
													</VisibilitySensor>
												)}
											</CountUp>
										</h1>
										<h4 className='countTitle'>TOTAL PROJECTS</h4>
										<hr className='bg-white w-25' />
									</Col>
									<Col>
										<h1 className='countNumber'>
											<CountUp start={0} end={100}>
												{({ countUpRef, start }) => (
													<VisibilitySensor
														onChange={start}
														delayedCall>
														<span ref={countUpRef} />
													</VisibilitySensor>
												)}
											</CountUp>
										</h1>
										<h4 className='countTitle'>TOTAL CLIENTS</h4>
										<hr className='bg-white w-25' />
									</Col>
								</Row>
							</Col>
							<Col lg={4} md={6} sm={12}>
								<Card className='workCard'>
									<Card.Body>
										<Card.Title className='cardTitle text-justify'>
											How i Work
										</Card.Title>
										<Card.Text>
											<p className='cardSubTitle text-justify'>
												<FontAwesomeIcon
													className='iconbullet'
													icon={faCheckCircle}
												/>
												Requirement Gathering
											</p>
											<p className='cardSubTitle text-justify'>
												<FontAwesomeIcon
													className='iconbullet'
													icon={faCheckCircle}
												/>
												System Analysis
											</p>
											<p className='cardSubTitle text-justify'>
												<FontAwesomeIcon
													className='iconbullet'
													icon={faCheckCircle}
												/>
												Coding Testing
											</p>
											<p className='cardSubTitle text-justify'>
												<FontAwesomeIcon
													className='iconbullet'
													icon={faCheckCircle}
												/>
												Implementation
											</p>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</Fragment>
	);
};

export default Summary;
