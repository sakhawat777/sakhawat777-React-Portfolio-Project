import React, { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TermDescription from '../components/TermDescription/TermDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const TermPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='Term And Condition' />
			<TermDescription />
			<Footer />
		</Fragment>
	);
};

export default TermPage;
