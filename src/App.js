import "./App.css";
import Currentdate from "./components/Currentdate";
import Api from "./components/Api";

function App() {
	return (
		<div className="App">
			<div className="font">
				<p>What's the Weather?</p>
			</div>

			<Currentdate />
			<Api />
		</div>
	);
}

export default App;
