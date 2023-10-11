import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ id, title, url, img, desc, stacks }) => {
	return (
		// <div className='overflow-hidden bg-white rounded-lg shadow-lg '>
		// 	<Image
		// 		src={img}
		// 		alt={title}
		// 		width={200}
		// 		height={200}
		// 		className='object-cover object-center w-full h-96 sm:h-48 md:h-56 lg:h-96'
		// 	/>
		// 	<div className='p-4'>
		// 		<h2 className='text-xl font-semibold'>{title}</h2>
		// 		<p className='mb-2 text-sm text-gray-600'>{desc}</p>
		// 		<div className='flex flex-wrap gap-2'>
		// 			{stacks.map((stack, index) => (
		// 				<span
		// 					key={index}
		// 					className='px-2 py-1 text-xs text-blue-800 bg-blue-200 rounded-full'
		// 				>
		// 					{stack}
		// 				</span>
		// 			))}
		// 		</div>
		// 		<Link
		// 			href={url}
		// 			target='_blank'
		// 			rel='noopener noreferrer'
		// 			className='block mt-4 text-blue-500 hover:underline'
		// 		>
		// 			View Project
		// 		</Link>
		// 	</div>
		// </div>
		<div className='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
			<div className='px-6 py-4 sm:flex sm:items-center'>
				<Image
					className='block mx-auto'
					src={img}
					alt={title}
					width={300}
					height={500}
				/>
				<div className='mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left'>
					<p className='text-xl leading-tight'>{title}</p>
					<p className='text-sm leading-tight text-gray-600'>{desc}</p>
				</div>
				<div className='flex flex-wrap gap 2'>
					{stacks.map((stack, index) => (
						<span
							key={index}
							className='px-2 py-1 text-xs text-blue-800 bg-blue-200 rounded-full'
						>
							{stack}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
