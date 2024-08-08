import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CustomDatePicker = ({ name, label, ...props }) => {
    const { control } = useFormContext()
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DatePicker
                label={label}
                value={value}
                onChange={(newValue) => onChange(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>

    );
};

export default CustomDatePicker;
