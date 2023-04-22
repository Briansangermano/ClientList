import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAverageAge, getStandardDeviation } from '../../Redux/selectors';
import { getClientsToFirebase } from '../../Redux/thunks';
import Box from '@mui/material/Box';
import './styles.css';
import Typography from '@mui/material/Typography';

const Analysis = ({ averageAge, standardDeviation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsToFirebase());
  }, [dispatch]);

  return (
    <Box
      component='form'
      className='formContainer'
      noValidate
      autoComplete='off'
    >
      <div className='titleForm'>Clients Analysis</div>
      <div className='containerInfo'>
        <Typography className='textAnalysis' variant="button">Average age among all clients:</Typography>
        <div className='valueText'>{ averageAge }</div>
      </div>
      <div className='containerInfo'>
        <Typography className='textAnalysis' variant="button">Standard deviation between the ages of all customers:</Typography>
        <div className='valueText'>{ standardDeviation }</div>
      </div>
    </Box>
  );
};

const mapStateToProps = state => ({
  averageAge: getAverageAge(state),
  standardDeviation: getStandardDeviation(state),
});

export default connect(mapStateToProps)(Analysis);
