import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TermDescription = () => {
	return (
		<Fragment>
			<Container className='mt-5'>
				<Row>
					<Col lg={12} md={12} sm={12}>
						<p className='serviceDescription'>
							Welcome to nexuscreator.com! These terms and conditions
							outline the rules and regulations for the use of Nexus
							Creator's Website, located at www.nexuscreator.com. By
							accessing this website we assume you accept these terms and
							conditions. Do not continue to use nexuscreator.com if you
							do not agree to take all of the terms and conditions stated
							on this page. The following terminology applies to these
							Terms and Conditions, Privacy Statement and Disclaimer
							Notice and all Agreements: "Client", "You" and "Your"
							refers to you, the person log on this website and compliant
							to the Company’s terms and conditions. "The Company",
							"Ourselves", "We", "Our" and "Us", refers to our Company.
							"Party", "Parties", or "Us", refers to both the Client and
							ourselves. All terms refer to the offer, acceptance and
							consideration of payment necessary to undertake the process
							of our assistance to the Client in the most appropriate
							manner for the express purpose of meeting the Client’s
							needs in respect of provision of the Company’s stated
							services, in accordance with and subject to, prevailing law
							of Netherlands. Any use of the above terminology or other
							words in the singular, plural, capitalization and/or he/she
							or they, are taken as interchangeable and therefore as
							referring to same.
						</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default TermDescription;
