import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Vanta } from '../components/Vanta';
import { Hero } from '../components/Hero';
import StarsCanvas from '../components/StartBackground';
import { IconScroll } from '../components/IconScroll';

export const LandingPage = () => {
	return (
		<div className="relative">
			<Background />
			<Vanta />
			<Navbar />
			<Hero />
			<IconScroll />
			<StarsCanvas />
		</div>
	);
};
