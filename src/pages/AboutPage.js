import React, { Fragment } from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const AboutPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='About Me' />
			<AboutDescription />
			<Footer />
		</Fragment>
	);
};

export default AboutPage;
