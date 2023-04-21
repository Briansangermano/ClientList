import { db } from '../firebase';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { setIsFeching, setClients } from './actions';

export const getClientsToFirebase = () => {
	let clientsData = [];
	return async dispatch => {
		dispatch(setIsFeching());
		const query = await getDocs(collection(db, 'clients'));
		query.forEach((doc) => {
			clientsData.push(doc.data());
		});
		dispatch(setClients(clientsData));
	};
}
  
// const data = {
// 	name: "Ottawa",
// 	lastname: "Canada",
// 	age: 24,
// 	birthday: Math.floor((new Date()).getTime() / 1000),
// };
  
export const addClientsToFirebase = (data) => {
	return async dispatch => {
		dispatch(setIsFeching());
		await setDoc(collection(db, 'clients'), data)
		.then(() => console.log('Document has been added successfully'))
		.catch(error => console.log(error));
		dispatch(getClientsToFirebase());
	};
}