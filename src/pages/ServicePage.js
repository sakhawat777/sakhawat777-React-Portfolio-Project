import React, { Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const ServicePage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='My Sevices' />
			<Services />
			<ContactSection />
			<Footer />
		</Fragment>
	);
};

export default ServicePage;
