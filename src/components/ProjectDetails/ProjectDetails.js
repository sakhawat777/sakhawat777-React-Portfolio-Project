import React, { Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import card from '../../asset/image/card.png';

const ProjectDetails = () => {
	return (
		<Fragment>
			<Container className='mt-5'>
				<Row>
					<Col lg={6} md={6} sm={12}>
						<img src={card} />
					</Col>
					<Col lg={6} md={6} sm={12}>
						<h2 className='serviceName'>It Solutions</h2>
						<p className='serviceDescription'>
							With Impel IT Solutions we have the opportunity to help
							Bangladesh to build a strong international IT sector
							meanwhile helping local high skilled professionals to be
							able to keep developing themselves . If more companies get
							involved together we can keep improving the quality and
							knowldege of the teams, share overhead cost and transfer
							our knowledge to Bangladesh. Thus helping Bangladesh to
							build a strong IT sector.
						</p>
						<ul>
							<li className='serviceDescription'>
								Business objective will be to overcome poverty, or one
								or more problems (such as education, health, technology
								access, and environment) which threaten people and
								society; not profit maximization
							</li>
							<li className='serviceDescription'>
								Financial and economic sustainability
							</li>
							<li className='serviceDescription'>
								nvestors get back their investment amount only. No
								dividend is given beyond investment money
							</li>
							<li className='serviceDescription'>
								When investment amount is paid back, company profit
								stays with the company for expansion and improvement
							</li>
							<li>Environmentally conscious</li>
							<li className='serviceDescription'>
								Workforce gets market wage with better working
								conditions
							</li>
							<li className='serviceDescription'>...do it with joy</li>
						</ul>
						<Button variant='primary'>More Info.</Button>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default ProjectDetails;
