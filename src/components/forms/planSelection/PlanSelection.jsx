import React from 'react'
import Input from '../../common/input/Input'
import CustomDatePicker from '../../common/datepicker/DatePicker'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { planList, planType } from '../../../utility/constants/constants'
import { Controller, useFormContext } from 'react-hook-form'

const PlanSelection = () => {
    const { control } = useFormContext()
    return (
        <div>
            <div style={{ margin: '20px' }}>
                <CustomDatePicker name="date"
                    label="Select Plan Start Date"
                />
            </div>
            <div style={{ margin: '20px' }}>
                <InputLabel>Plan</InputLabel>
                <Controller
                    name={'plan'}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Select
                            fullWidth
                            name={'plan'}
                            label={'plan'}
                            {...field}
                            error={error?.message}
                        >
                            {planList.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <InputLabel>Plan Type</InputLabel>
                <Controller
                    name={'planType'}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Select
                            fullWidth
                            name={'planType'}
                            label={'Plan Type'}
                            error={error?.message}
                            {...field}
                        >
                            {planType.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            </div>
            <Input
                name="numUsers"
                label="Number of Users"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </div>
    )
}

export default PlanSelection