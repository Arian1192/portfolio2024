/* eslint-disable react/prop-types */


export const TechStack = ({ title, subTitle, icons, setShowIcon, setShowDescription }) => {

  return (
		<li className="mb-10 ms-4">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			<time className="mb-1 text-sm font-normal leading-none text-purple-400 dark:text-purple-500">
				{title}
			</time>
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
				{subTitle}
			</h3>
			<div className="w-full flex flex-wrap grow  gap-5 mt-5">
				{icons.map((ic, i) => {
					return (
						<span
							onClick={() => {
								setShowIcon(ic.icon);
								setShowDescription(ic.description);
							}}
							key={i}
							className="cursor-pointer h-full flex flex-row justify-center items-center hover:scale-110 transform transition-all duration-500 ease-in-out hover:animate"
						>
							<ic.icon width={50} height={50} />
						</span>
					);
				})}
			</div>
		</li>
	);
}
