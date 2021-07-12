import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
	return (
		<Fragment>
			<Container className='mt-5'>
				<Row>
					<Col lg={6} md={6} sm={12}>
						<h1 className='serviceName '>Quice Connect</h1>
						<Form>
							<Form.Group>
								<Form.Label className='serviceDescription'>
									Name
								</Form.Label>
								<Form.Control type='text' />
							</Form.Group>
							<Form.Group>
								<Form.Label className='serviceDescription'>
									Email Address
								</Form.Label>
								<Form.Control type='email' />
							</Form.Group>
							<Form.Group>
								<Form.Label className='serviceDescription'>
									Message
								</Form.Label>
								<Form.Control as='textarea' rows={3} />
							</Form.Group>

							<Button variant='primary' type='submit'>
								Submit
							</Button>
						</Form>
					</Col>
					<Col lg={6} md={6} sm={12}>
						<h1 className='serviceName '>Discuss Now</h1>
						<p className='serviceDescription'>
							House# 1, Road# 1, 5th Floor, Shyamoli, -1207,
							Sher-e-Bangla Nagar, Dhaka
						</p>
						<p className='serviceDescription'>
							<FontAwesomeIcon icon={faEnvelope} /> biplobbms@gmail.com
						</p>
						<p className='serviceDescription'>
							<FontAwesomeIcon icon={faPhone} /> +8801700000000
						</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default ContactSection;
