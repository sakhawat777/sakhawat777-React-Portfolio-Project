import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Analysis = () => {
	const [state, setstate] = useState({
		data: [
			{ Technology: 'Java', Projects: 100 },
			{ Technology: 'Kotlin', Projects: 40 },
			{ Technology: 'SQL', Projects: 80 },
			{ Technology: 'Bootstrp', Projects: 90 },
			{ Technology: 'Jquery', Projects: 65 },
			{ Technology: 'React', Projects: 100 },
			{ Technology: 'Node', Projects: 75 },
			{ Technology: 'R-Native', Projects: 95 },
		],
	});
	var blue = 'rgba(0, 115, 230, 0.8)';
	return (
		<Fragment>
			<Container className='text-center'>
				<h1 className='serviceMaintitle'>Technology Used </h1>
				<Row>
					<Col
						style={{ width: '100%', height: '300px' }}
						lg={6}
						md={12}
						sm={12}>
						<ResponsiveContainer>
							<BarChart width={100} height={300} data={state.data}>
								<XAxis dataKey='Technology' />
								<Tooltip />
								<Bar dataKey='Projects' fill={blue}></Bar>
							</BarChart>
						</ResponsiveContainer>
					</Col>
					<Col lg={6} md={12} sm={12}>
						<p className='text-justify analysisDescription'>
							To build android native apps i use ja as well as kotlin
							mainly. React js used for cross platform mobile
							application. I use MySQL database for relational database
							system. To build NoSQL application i use MongoDB, Firebase
							database system is used where it is necessary to provide
							realtime data flow facilities. I always build dynamic
							application. Admin panel is the heart of such kinds of
							application. I always try to provide sufficient features in
							admin panel to dominate application. according to client
							demand I use Node js to build admin panel section.
							Application Security is a big deal for commercial
							application. I always ensure security portion of my
							application more i build a security alert system to notify
							admin when his system at risk.
						</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Analysis;
