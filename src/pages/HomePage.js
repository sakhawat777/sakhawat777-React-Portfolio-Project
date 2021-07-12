import React, { Fragment } from 'react';
import TopBanner from '../components/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<TopBanner />
			<Services />
			<Analysis />
			<Summary />
			<RecentProjects />
			<Courses></Courses>
			<Video />
			<ClientReview />
			<Footer />
		</Fragment>
	);
};

export default HomePage;
