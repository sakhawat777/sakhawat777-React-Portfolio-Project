import React, { Fragment } from 'react';
import AllProject from '../components/AllProjects/AllProject';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const PortfolioPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='Portfolio' />
			<AllProject />
			<Footer />
		</Fragment>
	);
};

export default PortfolioPage;
