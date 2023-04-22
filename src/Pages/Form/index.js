import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addClientsToFirebase } from '../../Redux/thunks';
import { Timestamp } from "@firebase/firestore";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DatePickerComponent from '../../Components/DatePicker';
import './styles.css';


const Form = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (name && lastname && age && birthday) {
      event.preventDefault();
      const data = {
        name,
        lastname,
        age,
        birthday: Timestamp.fromDate(new Date(birthday)),
      }
      dispatch(addClientsToFirebase(data));
      setShowError(false);
      navigate('/', { replace: true });
    } else {
      setShowError(true);
    }
  };

  const setValueBirthday = useCallback((value) => {
    setBirthday(value);
  }, []);

  return (
    <Box
      component='form'
      className='formContainer'
      noValidate
      autoComplete='off'
    >
      <div className='titleForm'>Add Client</div>
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Lastname'
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <DatePickerComponent value={birthday} setNewValue={setValueBirthday} />
      <Button className='addButton' variant="contained" onClick={handleSubmit}>Add Client</Button>
      {showError && <Typography className='textError'>Please, complete all fields</Typography>}
    </Box>
  );
};

export default Form;
