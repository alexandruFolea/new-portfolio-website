// DropdownMenu.js
'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function DropdownMenu() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className='sticky top-0 flex items-center justify-between w-full max-w-4xl py-4 m-auto'>
			{/* Button to trigger the dropdown */}
			<div className='relative z-50 px-4 py-2 text-3xl font-bold'>
				<Link href='/'>alx.dev</Link>
			</div>
			<div>
				<button
					onClick={toggleDropdown}
					className='relative z-10 flex items-center px-4 py-2 space-x-2 text-3xl'
				>
					{isDropdownOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Dropdown container */}
			<div
				className={`absolute top-0 left-0 w-full h-96 overflow-hidden transition-all duration-900 ease-in-out transform ${
					isDropdownOpen ? 'translate-y-1/8' : '-translate-y-full'
				}`}
			>
				{/* Dropdown content goes here */}
				<ul className='flex flex-col items-center justify-center h-full p-4 bg-white '>
					<li>
						<Link href='/projects' onClick={toggleDropdown}>
							Projects
						</Link>
					</li>
					<li>
						<Link href='/contact' onClick={toggleDropdown}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
	``;
}
