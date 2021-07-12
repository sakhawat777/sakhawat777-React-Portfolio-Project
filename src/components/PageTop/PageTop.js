import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PageTop = (props) => {
	return (
		<Fragment>
			<Container fluid='true' className='topFixedPage'>
				<div className='topPageOverlay'>
					<Container className='topPageContent'>
						<Row>
							<Col className='text-center'>
								<h4 className='pageTitle'>{props.pageTitle}</h4>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		</Fragment>
	);
};

export default PageTop;
