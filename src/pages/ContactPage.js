import React, { Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const ContactPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='Contact' />
			<ContactSection />
			<Footer />
		</Fragment>
	);
};

export default ContactPage;
