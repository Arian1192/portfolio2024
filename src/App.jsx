import './App.css';
import { Knowlegde } from './page/Knowlegde';

import { LandingPage } from './page/LandingPage';
function App() {
	return (
		<div className="text-[#FAFAFA]">
			<LandingPage id={'landing'} />
			<Knowlegde id={'knowledge'} />
		</div>
	);
}

export default App;
