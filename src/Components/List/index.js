import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
import { getClientsToFirebase } from '../../Redux/thunks';
import CircularProgress from '@mui/joy/CircularProgress';
import Item from '../Item';
import './styles.css';

const ClientList = ({ clientList, isFeching }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsToFirebase());
  }, [dispatch]);

  return (
    <div className='containerForm'>
      <div className='titleForm'>Client List</div>
      {isFeching ? (
        <div className='circularContainer'>
          <CircularProgress size="lg" />
        </div>
      ) : (
        <List className='listContainer'>
          {clientList?.map((client, index) => (
            <Item key={index} data={client}/>
          ))}
        </List>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clientList: state.clients,
    isFeching: state.isFeching,
  };
}

export default connect(mapStateToProps)(ClientList);
