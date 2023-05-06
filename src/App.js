import React from 'react';
import Navbar from "./Components/Navbar";
import Slideshow from './Components/slideshow/Slideshow';
import About from './Components/about/About';
import Achievements from './Components/achievements/Achievements';
import Cards from './Components/cards/Cards';
import Parallaxo from './Components/parallaxo/Parallaxo';
import Oilproducts from './Components/oilproducts/Oilproducts';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Slideshow/>
			<About/>
			<Achievements/>
			<Cards/>
			<Oilproducts/>
			<Parallaxo/>
			<Achievements/>

		</React.Fragment>
	);
}

export default App;
