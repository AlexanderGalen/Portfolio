import './App.css';
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
		<Header/>
			<div className="container">
				<Routes>
					{/* default to about me if no specific page was requested */}
					<Route path="/*" element={<About/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/portfolio" element={<Portfolio/>}/>
					<Route path="/resume" element={<Resume/>}/>
				</Routes>

				<Footer/>
			</div>
		</Router>
	);
}
