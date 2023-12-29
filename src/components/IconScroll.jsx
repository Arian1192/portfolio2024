import { RxArrowDown } from 'react-icons/rx';
export const IconScroll = () => {
	return (
		<div className="w-auto absolute bottom-0 right-0 h-64 mb-24 pr-2 flex flex-col justify-end items-stretch text-center gap-4 font-Montserrat md:w-full md:justify-center md:items-center text-purple-400 font-semibold">
			<p className="p-2 ">
				<span className="text-md [writing-mode:vertical-lr] md:[writing-mode:horizontal-tb] md:text-2xl">
					Scroll Down
				</span>
			</p>
			<a href="#knowledge">
				<RxArrowDown className="text-4xl animate-bounce" />
			</a>
		</div>
	);
};
