import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import orangeLogo from '../../asset/image/NavLogo.svg';
import blueLogo from '../../asset/image/NavLogoScroll.svg';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const TopNavigation = () => {
	const [navTitleColor, setnavTitleColor] = useState('navTitle');

	const onScroll = () => {
		if (window.scrollY > 100) {
			return setnavTitleColor('navTitleScroll');
		} else if (window.scrollY < 100);
		{
			return setnavTitleColor('navTitle');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	const [logo, setlogo] = useState([orangeLogo]);
	const onLogo = () => {
		if (window.scrollY > 100) {
			return setlogo([blueLogo]);
		} else if (window.scrollY < 100);
		{
			return setlogo([orangeLogo]);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onLogo);
		return () => window.removeEventListener('scroll', onLogo);
	}, []);
	const [navBack, setnavBack] = useState('navBackground');
	const onNavBackground = () => {
		if (window.scrollY > 100) {
			return setnavBack('navBackgroundScroll');
		} else if (window.scrollY < 100);
		{
			return setnavBack('navBackground');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onNavBackground);
		return () => window.removeEventListener('scroll', onNavBackground);
	}, []);

	const [navbarItem, setnavbarItem] = useState('navItem');
	const onNavbarItem = () => {
		if (window.scrollY > 100) {
			return setnavbarItem('navItemScroll');
		} else if (window.scrollY < 100);
		{
			return setnavbarItem('navItem');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onNavbarItem);
		return () => window.removeEventListener('scroll', onNavbarItem);
	}, []);

	const [navVariant, setnavVariant] = useState('dark');
	const onNavVariant = () => {
		if (window.scrollY > 100) {
			return setnavVariant('light');
		} else if (window.scrollY < 100);
		{
			return setnavVariant('dark');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onNavVariant);
		return () => window.removeEventListener('scroll', onNavVariant);
	}, []);

	return (
		<Fragment>
			<Navbar
				variant={navVariant}
				className={navBack}
				fixed='top'
				collapseOnSelect
				expand='lg'>
				<Navbar.Brand className={navTitleColor}>
					<img src={[logo]} alt='Logo' />
					Md Sakhawat Hossain
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/'>
								HOME
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/service'>
								SERVICES
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/course'>
								COURSES
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/portfolio'>
								PORTFOLIO
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/contact'>
								CONTACT
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink
								exact
								activeStyle={{ color: '#00a8ee' }}
								className={navbarItem}
								to='/about'>
								ABOUT
							</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default TopNavigation;
