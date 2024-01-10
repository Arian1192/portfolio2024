import { ReactTerminal } from 'react-terminal';
import { useState } from 'react';


//TODO: PASARLO A COMPONENTES SEPARADOS Y HACERLOS MAS SIMPLES.


export const WelcomeMessage = () => {
	return (
		<p className='text-sm md:text-lg'>
			Type <strong>&quot;help&quot;</strong> to see the commands
			<br />
		</p>
	);
};

export const WhoAmi = () => {
	return (
		<div>
			<h2>👋 Hey there!</h2>
			<p>
				I&apos;m Arian, a passionate developer based in Barcelona. 💻 I
				specialize in Typescript and Javascript, work magic with Nodejs for the
				backend, and craft awesome user interfaces using React and NextJs for
				the frontend.
			</p>
			<p>
				My database of choice is MongoDB, and I weave code with the elegant
				threads of Mongoose. 🧵 Fascinated by design patterns in functional
				programming and a firm believer in the beauty of clean code.
			</p>
			<p>Let&apos;s code something amazing together! 🚀</p>
			<p>
				Actually I&apos;m working at <a href="https://nuclio.school/">Nuclio</a>{' '}
				as a Mentor and also i&apos;m learning about POO with Java and Spring
				Boot at <a href="https://www.ironhack.com/es-en">IronHack</a>.
			</p>
		</div>
	);
};

export const ErrorMessage = () => {
	return (
		<>
			<span className="bg-gradient-to-r from-purple-600 to-pink-400 inline-block text-transparent bg-clip-text">
				Maybe if u type fuck, you find the question
			</span>
		</>
	);
};

export const HelpCommand = () => {
	return (
		<>
			<ul className='text-xs md:text-lg'>
				<li>
					<strong className="text-purple-400">clear</strong> - Brother, this one
					just cleans the console. Nice and tidy, you know?
				</li>
				<li>
					<strong className="text-purple-400">whoami</strong> - Want to know who
					I am, run it and find out interesting things about me.
				</li>
				<li>
					<strong className="text-purple-400">projects</strong> - Want to see
					what I&apos;ve created? Boom, here you go.
				</li>
				<li>
					<strong className="text-purple-400">skills</strong> - Not everything
					is on this list! But these I know very well!
				</li>
				<li>
					<strong className="text-purple-400">contact</strong> - Don&apos;t like
					the form? Here are my rrss links.
				</li>
			</ul>
		</>
	);
};

export const Terminal = () => {
    const [path, setPath] = useState('~');
	console.log(path);
	const changeDirectory = (directory) => {
		const listDirectory = ['projects', 'skills', 'contact'];

		if (listDirectory.includes(directory)) {
			switch (directory.trim().toLowerCase()) {
				case 'projects':
					setPath('~/projects');
					break;
				case 'skills':
					setPath('~/skills');
					break;
				case 'contact':
					setPath('~/contact');
					break;
				case ' ..':
					setPath('~');
					break;
				default:
					return;
			}
		} else if (directory === '..' || directory === '') {
			setPath('~');
		} else {
			return (
				<>
					Directory{' '}
					<span className="text-yellow-400 underline">{directory}</span> not
					found
				</>
			);
		}
	};

	const errorChangeDirectory = (directory) => {
		return <>Please use cd before {directory} to change directory</>;
	};

	const getCommandsForPath = (path) => {
		const projectsCommands = {
			ls: [
				'blog',
				' ',
				'Frontend-socket-io-Nuclio',
				' ',
				'Backend-socket-io-Nuclio',
				' ',
				'BluetimeCompetition',
				' ',
				'AlexaTwitch-mono-repo ',
				' ',
			],
			cd: (directory) => changeDirectory(directory),
		};

		const skillsCommands = {
			ls: [
				'react',
				' ',
				'javascript',
				' ',
				'typescript',
				' ',
				'nodejs',
				' ',
				'tanstack-react-query',
				' ',
				'axios',
				' ',
				'JWT',
			],
		};

		const contactCommands = {
			ls: [
				'github',
				' ',
				'linkedin',
				' ',
				'X',
				' ',
				'instagram',
				' ',
				'email',
				' ',
			],
			github: <a href="https://github.com/Arian1192">Github Page</a>,
			linkedin: (
				<a href="https://www.linkedin.com/in/ariancollaso/">Linkedin Page</a>
			),
			x: <a href="https://twitter.com/Arcoro1992">Twitter Page</a>,
			instagram: (
				<a href="https://www.instagram.com/arian1192/">Instagram Page</a>
			),
			email: 'Please use the form in the contact section.',
		};

		const errorPathCommand = 'Please use the form in the contact section.';
		switch (path) {
			case '~/projects':
				return projectsCommands;
			case '~/skills':
				return skillsCommands;
			case '~/contact':
				return contactCommands;
			default:
				return errorPathCommand;
		}
	};

	const commands = {
		help: <HelpCommand />,
		ls: ['projects', ' ', 'skills', ' ', 'contact'],
		cd: (directory) => changeDirectory(directory),
		fuck: 'this is not a real terminal man, are you mad ?',
		projects: (directory) => errorChangeDirectory(directory),
		skills: (directory) => errorChangeDirectory(directory),
		whoami: <WhoAmi />,
		...getCommandsForPath(path),
	};

	return (
		<div className="container p-5 h-1/2 text-[20px] md:max-w-4xl z-40 mt-12">
            <ReactTerminal
				commands={commands}
				welcomeMessage={<WelcomeMessage />}
				showControlBar={true}
				themes={{
					'my-custom-theme': {
						themeBGColor: '#151C2C',
						themeToolbarColor: '#151C2d',
						themeColor: '#5AF65C',
						themePromptColor: '#9A39E9',
					},
				}}
				prompt={path}
				theme="my-custom-theme"
				errorMessage={<ErrorMessage />}
			></ReactTerminal>
		</div>
	);
};
