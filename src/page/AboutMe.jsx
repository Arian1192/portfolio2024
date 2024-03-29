/* eslint-disable react/prop-types */
// import Arian from '../assets/Arian.jpg';
import { useState } from 'react';
import { Terminal } from '../components/Terminal';
import { TerminalController } from '../components/TerminalController';
export const AboutMe = ({ id }) => {
	const [isRecruiter, setIsRecruiter] = useState(false);

	return (
		<div
			id={id}
			className="w-full h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col justify-center items-center overflow-hidden "
		>
			<h1 className="relative z-0 mb-4 mt-12 text-5xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-7xl">
				<span className="text-transparent drop-shadow-2xl bg-clip-text bg-gradient-to-r to-white from-purple-600">
					About Me
				</span>{' '}
				<div className="absolute w-[100%] h-96 -z-10 -top-10 rotate-90 left-[60%]  bg-MagicPatternGrid bg-cover animate-pulse rounded-full object-cover"></div>
				<div className="absolute w-[100%] h-80 -z-10 top-60 -left-[70%]  rounded-full object-cover bg-MagicPattern  bg-cover animate-pulse"></div>
			</h1>
			<div>
				<p className="text-lg w-96 font-Montserrat text-pretty mt-14">
					If your are a recruiter, please click on the button below.
				</p>
				<button onClick={() => setIsRecruiter(true)}>Recruiter Button</button>
			</div>
			{/* <div className="z-40 relative">
				<img
					src={Arian}
					alt="Arian"
					className="w-80 z-0 h-80 rounded-full object-cover  mt-10"
				></img>
				<div className="absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-fuchsia-600 to-red-600  bg-white/4 animate-pulse rounded-full mb-4 -z-10 top-10 blur-md left-0  w-80 h-80 "></div>
			</div> */}
			{/* <TerminalController /> */}
			<Terminal
				isRecruiter={isRecruiter}
				text={`Please recruiter type help to see the commands available`}
			/>
		</div>
	);
};
