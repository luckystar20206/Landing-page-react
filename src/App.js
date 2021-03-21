import './App.css';
import Navbar from './navbar';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';
import Section4 from './section-4';
import Footer from './footer';

function App() {
	return (
		<div className="overall">
			<div>
				<Navbar />
			</div>
			<div>
				<Section1 />
			</div>
			<div>
				<Section2 />
			</div>
			<div>
				<Section3 />
			</div>
			<div>
				<Section4 />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
