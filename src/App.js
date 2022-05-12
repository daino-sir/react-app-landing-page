import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'animate.css';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import About from './pages/AboutPage';
import Footer from './components/Footer/Footer';
import Misfire from './pages/Misfire';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={About} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/not-found-404" exact component={Misfire} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
