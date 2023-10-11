import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from './db';

export default function page() {
	return (
		<div className='grid max-w-6xl grid-cols-1 gap-4 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectCard key={project.id} {...project} />
			))}
		</div>
	);
}
