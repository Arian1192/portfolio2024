export const Navbar = () => {
	return (
		<nav className="absolute w-full">
			<ul className="font-Montserrat p-10 flex">
				<li className="w-3/4 ">
					<span className="text-4xl">A</span>
					<span className="text-4xl font-extralight">C</span>
				</li>
				<div className="hidden md:flex md:visible md:w-1/2 gap-4  rounded-md justify-evenly items-center p-4 filter backdrop-blur-md">
					<li>
						<a
							href="#landing"
							className="text-xl font-medium hover:text-purple-300"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#knowledge"
							className="text-xl font-medium hover:text-purple-300"
						>
							Knowledge
						</a>
					</li>
					<li>
						<a
							href="#aboutme"
							className="text-xl font-medium hover:text-purple-300"
						>
							About me
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-xl font-medium hover:text-purple-300"
						>
							Contact
						</a>
					</li>
				</div>
			</ul>
		</nav>
	);
};
