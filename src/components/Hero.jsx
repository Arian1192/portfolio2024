export const Hero = () => {
	return (
		<div className="w-full font-Montserrat md:w-1/2 p-10 h-screen flex flex-col justify-end md:justify-center items-start">
			<h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
				<span className="text-transparent bg-clip-text bg-gradient-to-r to-white from-purple-600">
					I&apos;m Arian
				</span>{' '}
			</h1>
			<p className="text-lg md:text-2xl font-normal mb-14 md:mb-0 text-gray-500 dark:text-white">
				Full-stack developer and a mentor at Nuclio Digital School.
			</p>

			{/* <button className="p-2 bg-white text-black">Get my cv</button> */}
		</div>
	);
};
//TODO: crear la logica de descarga del cv
