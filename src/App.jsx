import './App.css';
import { AboutMe } from './page/AboutMe';
import { Knowlegde } from './page/Knowlegde';

import { LandingPage } from './page/LandingPage';
function App() {
	return (
		<div className="text-[#FAFAFA]">
			<LandingPage id={'landing'} />
			<Knowlegde id={'knowledge'} />
			<AboutMe id={'aboutme'} />
		</div>
	);
}

export default App;
