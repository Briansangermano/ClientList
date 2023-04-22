import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { setIsFeching, setClients } from './actions';

export const getClientsToFirebase = () => {
	let clientsData = [];
	return async dispatch => {
		try {
			dispatch(setIsFeching());
			const query = await getDocs(collection(db, 'clients'));
			query.forEach((doc) => {
				const id = doc.id;
				clientsData.push({id: id, ...doc.data()});
			});
			dispatch(setClients(clientsData));
		} catch (error) {
			console.log(error);
		}
	};
}
  
export const addClientsToFirebase = (data) => {
	return async dispatch => {
		try {
			dispatch(setIsFeching());
			await addDoc(collection(db, 'clients'), data);
			dispatch(getClientsToFirebase());
		} catch(error) {
			console.log(error);
		}
	};
}

export const deleteClientsToFirebase = (id) => {
	return async dispatch => {
		try {
			dispatch(setIsFeching());
			await deleteDoc(doc(db, 'clients', id));
			dispatch(getClientsToFirebase());
		} catch(error) {
			console.log(error);
		}
	};
}