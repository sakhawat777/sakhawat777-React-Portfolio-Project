import React, { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const PrivacyPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='Privacy policy' />
			<PrivacyDescription />
			<Footer />
		</Fragment>
	);
};

export default PrivacyPage;
