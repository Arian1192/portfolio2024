/* eslint-disable react/prop-types */
export const Contact = ({ id }) => {

	return (
		<section
			id={id}
			className="w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex flex-col justify-center items-center overflow-hidden"
		>
			<h1 className="relative z-0 mb-4 mt-12 text-5xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-7xl">
				<span className="text-transparent drop-shadow-2xl bg-clip-text bg-gradient-to-r to-white from-purple-600">
					Contact Me
				</span>{' '}
			</h1>
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<p className="mb-8 lg:mb-16 font-light text-center text-[#FAFAFA] sm:text-xl">
					Hello recruiters, If you&apos;re interested in my profile, drop your
					email. I&apos;ll get in touch as soon as possible. You&apos;ll receive
					an email so we can chat.
				</p>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Your email
						</label>
						<input
							type="email"
							id="email"
							className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="hari_sheldon@fundation"
							required
						/>
					</div>
					<button
						type="submit"
						className="py-3  px-5 text-sm font-medium text-center text-[#FAFAFA] rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};
