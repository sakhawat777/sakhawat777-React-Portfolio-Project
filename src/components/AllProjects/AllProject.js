import React, { Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import card from '../../asset/image/card.png';
import card2 from '../../asset/image/card2.png';
import card3 from '../../asset/image/card3.png';
import { Link } from 'react-router-dom';

const AllProject = () => {
	return (
		<Fragment>
			<Container className='text-center mt-5'>
				<Row>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									It Solutions
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card2} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									Education
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card3} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									Food Order
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									It Solutions
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card2} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									Education
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} lg={4} className='p-2'>
						<Card className='projectCard'>
							<Card.Img variant='top' src={card3} />
							<Card.Body>
								<Card.Title className='projectCardTitle'>
									Food Order
								</Card.Title>
								<Card.Text className='projectCardTitleDescrption'>
									Some quick example text to build on the card title
									and make up the bulk of the card's content.
								</Card.Text>
								<Button variant='primary'>
									<Link className='linkStyle' to='/ProjectDetails'>
										Details
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default AllProject;
