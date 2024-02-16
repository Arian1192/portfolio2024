import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
/* eslint-disable react/prop-types */
export const Contact = ({ id }) => {
	const form = useRef();
	const [sent, setSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_xly05po',
				'template_y80wpp9',
				form.current,
				'P3jJAdpkTt4L6b52d'
			)
			.then(
				(result) => {
					setSent(true);
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

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

				{sent && (
					<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
						<strong className="font-bold">Email Sent! </strong>
						<span className="block sm:inline">
							Your email has been sent successfully.
						</span>
					</div>
				)}
				{!sent && (
					<form onSubmit={sendEmail} ref={form} className="space-y-8">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								name="user_email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="example@fenixproject.com"
								required
							/>
							<div className="sm:col-span-2 mt-2">
								<label
									htmlFor="subject"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 boder-none"
								>
									Subject
								</label>
								<input
									type="text"
									name="subject"
									id="subject"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
									placeholder="Let me know how i can help you"
									required
								/>
							</div>

							<div className="sm:col-span-2 mt-2">
								<label
									htmlFor="message"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
								>
									Your message
								</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
									placeholder="Leave a comment..."
								></textarea>
							</div>
							<div className="w-full flex justify-center items-center">
								<button
									type="submit"
									className=" border border-slate-400 mt-4 p-2 rounded text-gray-800 bg-slate-400 hover:bg-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:text-slate-400 dark:hover:bg-gray-600 dark:hover:border-gray-500 dark:shadow-sm-light dark:hover:shadow-sm-dark transition-all duration-300 ease-in-out hover:shadow-sm-light"
								>
									Send Email
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</section>
	);
};
