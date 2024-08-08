import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const Input = ({ name, label, defaultValue = '', rules = {}, ...rest }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                <TextField
                    onChange={onChange}
                    ref={ref}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    label={label}
                    error={!!error}
                    helperText={error ? error.message : ''}
                    variant="outlined"
                    fullWidth
                    // {...field}
                    {...rest}
                />
            )}
        />
    );
};

export default Input;
