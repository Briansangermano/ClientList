import FormClient from './Components/FormClient';
import Header from './Components/Header';
import List from './Components/List';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/form" element={<FormClient />} />
					<Route path="/" element={<List />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
