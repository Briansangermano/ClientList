import React, { useState } from 'react';
import './styles.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Form = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Age: ${age}, Birthday: ${birthday}`);
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
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Lastname'
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        className='textFields'
        required
        variant='outlined'
        label='Birthday'
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <Button className='addButton' variant="contained" onClick={handleSubmit}>Add Client</Button>
    </Box>
  );
};

export default Form;
