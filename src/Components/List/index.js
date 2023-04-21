import React from 'react';
import { List } from '@material-ui/core';
import Item from '../Item';
import './styles.css';

const ClientList = () => {
  const customers = [
    {name: 'Brian', lastname:'pedro', birthday: 12, age: 46},
    {name: 'juan2', lastname:'pedro', birthday: 12, age: 46},
    {name: 'juan3', lastname:'pedro', birthday: 12, age: 46},
  ]

  return (
    <div className='containerForm'>
      <div className='titleForm'>Client List</div>
      <List className='listContainer'>
        {customers?.map((client, index) => (
          <Item key={index} data={client}/>
        ))}
      </List>
    </div>
  );
};

export default ClientList;

