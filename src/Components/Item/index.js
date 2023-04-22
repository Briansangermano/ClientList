import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { Timestamp } from 'firebase/firestore';
import DialogComponent from '../Dialog';
import './styles.css';

const Item = ({ data }) => {
  const { id, name, lastname, age, birthday } = data;
  const [open, setOpen] = useState(false);
  
  const nameAvatar = () => name[0] + lastname[0];
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const returnDateBirthday = () => {
    if (birthday) {
      const timeStamp = new Timestamp(birthday.seconds, birthday.nanoseconds);
      const date = new Date(timeStamp.toDate());
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  }

  return (
    <>
      <Button className='itemContainer' onClick={handleClickOpen}>
        <div className='avatarContainer'>
          <Avatar className='avatar'>{nameAvatar()}</Avatar>
        </div>
        <div className='infoContainer'>
          <div className='nameText'>{name + ' ' + lastname}</div>
          <div>Age: {age}</div>
          <div>Birthday: {returnDateBirthday()}</div>
        </div>
      </Button>
      <DialogComponent open={open} handleClose={handleClose} idClient={id} />
    </>
  );
};

export default Item;

