'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='flex items-center justify-between max-w-6xl p-4 m-auto bg-primary'>
			<div className='relative z-10 text-secondary'>
				<Link href='/' className='text-3xl font-bold text-darkGray'>
					alx.dev
				</Link>
			</div>
			<div className='relative z-10 md:hidden'>
				{isOpen ? (
					<FaTimes
						onClick={toggleMenu}
						className='text-3xl cursor-pointer text-turquoise hover:text-red'
					/>
				) : (
					<FaBars
						onClick={toggleMenu}
						className='text-3xl cursor-pointer text-darkGray'
					/>
				)}
			</div>
			<div
				className={`md:flex  justify-center items-center absolute  text-gray top-0 right-0 w-full h-1/3 transform transition-transform duration-700 ${
					isOpen
						? 'translate-y-0 flex flex-col '
						: '-translate-y-full flex flex-col'
				} md:transform-none md:bg-transparent md:relative md:flex-row md:space-x-4 md:space-y-0 md:w-auto`}
			>
				<Link
					href='/projects'
					className='px-4 py-2 text-md hover:text-tertiary'
					onClick={toggleMenu}
				>
					Projects
				</Link>
				<Link
					href='/contact'
					className='px-4 py-2 text-md hover:text-tertiary'
					onClick={toggleMenu}
				>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
