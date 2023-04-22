import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { deleteClientsToFirebase } from '../../Redux/thunks';
import './styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogComponent = ({ open, handleClose, idClient }) => {
	const dispatch = useDispatch();

	const deleteClient = () => {
		dispatch(deleteClientsToFirebase(idClient));
		handleClose();
	}

  return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Do you want to delete this client?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button className='deleteButton' onClick={deleteClient}>Deleted</Button>
				<Button onClick={handleClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
  );
};

export default DialogComponent;

