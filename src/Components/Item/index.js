import React from 'react';
import {
  Avatar,
  Button,
} from '@material-ui/core';
import './styles.css';
import { Timestamp } from 'firebase/firestore';

const Item = ({ data }) => {
  const { name, lastname, age, birthday } = data;
  const nameAvatar = () => name[0] + lastname[0];
  
  const returnDateBirthday = () => {
    if (birthday) {
      const timeStamp = new Timestamp(birthday.seconds, birthday.nanoseconds);
      const date = new Date(timeStamp.toDate());
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  }

  return (
    <Button className='itemContainer'>
      <div className='avatarContainer'>
        <Avatar className='avatar'>{nameAvatar()}</Avatar>
      </div>
      <div className='infoContainer'>
        <div className='nameText'>{name + ' ' + lastname}</div>
        <div>Age: {age}</div>
        <div>Birthday: {returnDateBirthday()}</div>
      </div>
    </Button>
  );
};

export default Item;

