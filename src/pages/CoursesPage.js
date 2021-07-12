import React, { Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const CoursesPage = () => {
	return (
		<Fragment>
			<TopNavigation />
			<PageTop pageTitle='All Courses' />
			<AllCourses />
			<Footer />
		</Fragment>
	);
};

export default CoursesPage;
