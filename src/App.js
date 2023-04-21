import Form from './Components/Form';
import Header from './Components/Header';
import List from './Components/List';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Header />
					<Routes>
						<Route path="/form" element={<Form />} />
						<Route path="/" element={<List />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
