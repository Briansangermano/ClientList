import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './styles.css';

const DatePickerComponent = ({ value, setNewValue }) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            variant='outlined'
            className='textFields'
            label="Birthday"
            slotProps={{
              textField: {
                error: false,
              },
            }}
            value={value}
            onChange={(newValue) => setNewValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
  );
};

export default DatePickerComponent;
