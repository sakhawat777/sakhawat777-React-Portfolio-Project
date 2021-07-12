import React, { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import RefundSection from '../components/RefundSection/RefundSection';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const RefundPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='Refund Policy' />
			<RefundSection />
			<Footer />
		</Fragment>
	);
};

export default RefundPage;
