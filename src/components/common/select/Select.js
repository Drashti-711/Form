import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const Select = ({ name, label, options, ...props }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    select
                    label={label}
                    value={value}
                    onChange={onChange}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...props}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
};

export default Select;
