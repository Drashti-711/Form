import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import { empStrength } from '../../../utility/constants/constants'
import Select from '../../common/select/Select'

const CompanyProfileForm = () => {
    return (
        <div>
            <Box>
                <FormGroup sx={{ display: 'flex' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Front End" />
                    <FormControlLabel control={<Checkbox />} label="Back End" />
                    <FormControlLabel control={<Checkbox />} label="DevOps" />
                </FormGroup>
                <Select name="empStrength" label="Employee Strength" options={empStrength} />
                <FormLabel id="demo-radio-buttons-group-label">WFH Policy</FormLabel>
                <RadioGroup     
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={'yes'}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </Box>
        </div>
    )
}

export default CompanyProfileForm