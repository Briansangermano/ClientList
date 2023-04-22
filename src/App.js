import { Provider } from 'react-redux';
import store from './Redux/store';
import Form from './Pages/Form';
import List from './Pages/List';
import Analysis from './Pages/Analysis';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path="/form" element={<Form />} />
						<Route path="/analysis" element={<Analysis />} />
						<Route path="/" element={<List />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
