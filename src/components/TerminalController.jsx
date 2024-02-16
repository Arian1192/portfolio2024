/* eslint-disable react/jsx-key */
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState } from 'react';

export const TerminalController = () => {
	const [lineData, setLineData] = useState([]);
	const onInput = (input) => {
		let ld = [...lineData];
		ld.push(<TerminalOutput>{input}</TerminalOutput>);
		const inputTrimmed = input.trim().toLowerCase();
		if (inputTrimmed === 'help') {
			ld.push(<TerminalOutput>Available commands are:</TerminalOutput>);
			ld.push(
				<TerminalOutput>
					<span className="text-purple-500 font-semibold">ls</span> - List the
					content of the folder
				</TerminalOutput>
			);
			ld.push(
				<TerminalOutput>
					<span className="text-purple-500 font-semibold">cd {'<folder>'}</span>{' '}
					- Enter a folder
				</TerminalOutput>
			);
			ld.push(
				<TerminalOutput>
					<span className="text-purple-500 font-semibold">clear</span> - If you
					want to clear the terminal
				</TerminalOutput>
			);
		} else if (inputTrimmed === 'clear') {
			ld = [];
		} else if (inputTrimmed === 'ls') {
			ld.push(<TerminalOutput>projects skills contact</TerminalOutput>);
		}

		setLineData(ld);
	};

	return (
		<div className="container w-3/5 flex mt-20 justify-center items-center">
			<Terminal
				name=""
				colorMode={ColorMode.Dark}
				height={400}
				onInput={onInput}
			>
				{lineData}
			</Terminal>
		</div>
	);
};
