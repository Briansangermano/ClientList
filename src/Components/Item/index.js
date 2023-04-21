import React from 'react';
import {
  Avatar,
  Button,
} from '@material-ui/core';
import './styles.css';

const Item = ({ data }) => {
  const { name, lastname, age, birthday } = data;
  const nameAvatar = () => name[0] + lastname[0];

  return (
    <Button className='itemContainer'>
      <div className='avatarContainer'>
        <Avatar className='avatar'>{nameAvatar()}</Avatar>
      </div>
      <div className='infoContainer'>
        <div className='nameText'>{name + ' ' + lastname}</div>
        <div>Age: {age}</div>
        <div>Birthday: {birthday}</div>
      </div>
    </Button>
  );
};

export default Item;

