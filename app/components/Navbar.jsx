import React from 'react';
import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Navbar() {
	return (
		<nav className='flex items-center justify-between mx-auto max-w-5xl p-6 bg-blue-200'>
			<div className='logo'>alx.dev</div>
			<ul className='flex gap-6'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/projects'>Projects</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
