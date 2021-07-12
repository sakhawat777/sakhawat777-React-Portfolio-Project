import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import courseImage from '../../asset/image/courses.jpg';

const AllCourses = () => {
	return (
		<Fragment>
			<Container className='text-center mt-5'>
				<Row>
					<Col lg={6} md={12} sm={12} className='p-2'>
						<Row>
							<Col lg={6} md={6} sm={12}>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>
							<Col lg={6} md={6} sm={12} className='p-2'>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>
							<Col lg={6} md={6} sm={12} className='p-2'>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>
						</Row>
					</Col>
					<Col lg={6} md={12} sm={12} className='p-2'>
						<Row>
							<Col lg={6} md={6} sm={12} className='p-2'>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>
							<Col lg={6} md={6} sm={12} className='p-2'>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>

							<Col lg={6} md={6} sm={12} className='p-2'>
								<img className='courseImg' src={courseImage} />
							</Col>
							<Col lg={6} md={6} sm={12}>
								<h5 className='text-justify courseTitle'>
									Web Develpoment
								</h5>
								<p className='text-justify courseTitleDescription'>
									I build native and cross plateform mobile app for
									your business
								</p>
								<a className='courseTitleDetails float-left' href='#'>
									Details
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default AllCourses;
