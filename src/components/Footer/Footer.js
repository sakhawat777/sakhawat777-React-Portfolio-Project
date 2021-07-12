import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<Fragment>
			<Container fluid={true} className='text-center footerSection'>
				<Row>
					<Col lg={3} md={6} sm={12} className='p-5 text-center'>
						<h1 className='serviceName '>Fellow Me</h1>
						<a className='socialLink' href='#'>
							<FontAwesomeIcon icon={faFacebook} /> Facebook
						</a>
						<br />
						<a className='socialLink' href='#'>
							<FontAwesomeIcon icon={faYoutube} /> YouTube
						</a>
					</Col>
					<Col lg={3} md={6} sm={12} className='p-5 text-center'>
						<h1 className='serviceName '>Address</h1>
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
					<Col lg={3} md={6} sm={12} className='p-5 text-center'>
						<h1 className='serviceName '>Information</h1>
						<Link className='footerLink' to='/about'>
							About Me
						</Link>
						<br />
						<a className='footerLink' href='#'>
							My Resume
						</a>
						<br />
						<Link className='footerLink' to='/contact'>
							Contact Me
						</Link>
					</Col>
					<Col lg={3} md={6} sm={12} className='p-5 text-center'>
						<h1 className='serviceName '>Legal</h1>
						<Link className='footerLink' to='/Refund'>
							Refund Policy
						</Link>
						<br />
						<Link className='footerLink' to='/Terms'>
							Term And Condition
						</Link>
						<br />
						<Link className='footerLink' to='/Privacy'>
							Privacy policy
						</Link>
					</Col>
				</Row>
			</Container>
			<Container fluid={true} className='text-center copyRightSection'>
				<a className='copyRightLink'>nexuscreator.com &copy; 2020-2021</a>
			</Container>
		</Fragment>
	);
};

export default Footer;
