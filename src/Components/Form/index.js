import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addClientsToFirebase } from '../../Redux/thunks';
import Button from '@mui/material/Button';
import './styles.css';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Form = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${name}, Apellido: ${lastname}, Age: ${age}, Birthday: ${birthday}`);
    const data = {
      name,
      lastname,
      age,
      birthday,
    }
    dispatch(addClientsToFirebase(data));
  };

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
      {/* <TextField
        className='textFields'
        required
        variant='outlined'
        label='Birthday'
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      /> */}
      <DatePicker
        label="Controlled picker"
        value={birthday}
        onChange={(newValue) => setBirthday(newValue)}
      />
      <Button className='addButton' variant="contained" onClick={handleSubmit}>Add Client</Button>
    </Box>
  );
};

export default Form;
