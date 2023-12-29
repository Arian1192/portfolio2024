/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { icons } from '../icons/icons';
import { motion } from 'framer-motion';
import { TechStack } from '../components/TechStack';

const AnimatedIcon = ({ icon }) => {
	return (
		<motion.div
			key={icon} // Añadido el key para reiniciar la animación
			animate={{
				rotate: [0, 2, -2, 0],
				scale: [0.95, 1],
				opacity: [0.94, 1],
				transition: {
					duration: 1,
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'easeInOut',
				},
			}}
		>
			{icon && React.cloneElement(icon, { width: 256, height: 256 })}
		</motion.div>
	);
};

export const Knowlegde = ({ id }) => {
	const [showIcon, setShowIcon] = useState('');
	const [showDescription, setShowDescription] = useState('');
	useEffect(() => {
		const resolver = async () => {
			setShowIcon(icons[0].frontend[0].icon);
			setShowDescription(icons[0].frontend[0].description);
		};
		resolver();
	}, []);
	return (
		<div
			id={id}
			className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col justify-start items-center overflow-hidden "
		>
			<h1 className="relative z-0 mb-4 mt-12 text-5xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-7xl">
				<span className="text-transparent drop-shadow-2xl bg-clip-text bg-gradient-to-r to-white from-purple-600">
					My Knowledge
				</span>{' '}
				<div className="absolute w-[100%] h-96 -z-10 -top-20 left-[60%]  rounded bg-MagicPatternGrid bg-cover "></div>
				<div className="absolute w-[100%] h-80 -z-10 top-60 -left-[60%]  rounded bg-MagicPattern  bg-cover "></div>
			</h1>
			<div className="w-full h-[100%] flex flex-col md:flex-row mt-14">
				<div className="w-full md:w-[50%] h-auto md:h-screen flex flex-col justify-start items-center z-40 p-5 md:p-24 ">
					<AnimatedIcon icon={showIcon} />
					<p className="text-lg w-96 font-Montserrat text-pretty mt-14">
						{showDescription}
					</p>
				</div>
				<div className="w-full md:w-1/2 p-10 md:p-0 h-[100%]  flex flex-col">
					<div className="w-full h-1/4 flex flex-wrap z-40">
						<ol className="relative border-sm border-gray-200 dark:border-gray-700">
							<TechStack
								title="Frontend"
								subTitle="Frontend Tecnologies"
								icons={icons[0].frontend}
								setShowIcon={setShowIcon}
								setShowDescription={setShowDescription}
							/>
							<TechStack
								title="Backend"
								subTitle="Backend Tecnologies"
								icons={icons[0].backend}
								setShowIcon={setShowIcon}
								setShowDescription={setShowDescription}
							/>
							<TechStack
								title="Tools"
								subTitle="My favorite tools"
								icons={icons[0].tools}
								setShowIcon={setShowIcon}
								setShowDescription={setShowDescription}
							/>
							<TechStack
								title="Methodologies"
								subTitle="Methodologies that I use"
								icons={icons[0].methodologies}
								setShowIcon={setShowIcon}
								setShowDescription={setShowDescription}
							/>
						</ol>
					</div>
					<div>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

