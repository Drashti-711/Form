import { Box } from '@mui/material'
import React from 'react'
import Input from '../../common/input/Input'

const ProfileForm = () => {
  return (
    <div>
      <Box>
        <Input name="firstName" label="First Name" variant="outlined" fullWidth margin="normal" />
        <Input name="lastName" label="Last Name" variant="outlined" fullWidth margin="normal" />
        <Input name="email" label="Email" variant="outlined" fullWidth margin="normal" />
        <Input name="companyName" label="Company Name" variant="outlined" fullWidth margin="normal" />
        <Input name="companyWebsite" label="Company Website" variant="outlined" fullWidth margin="normal" />
        <Input name="companyPhone" label="Company Phone" variant="outlined" fullWidth margin="normal" />
        <Input name="zipCode" label="Zip COde" variant="outlined" fullWidth margin="normal" />
      </Box>
    </div>
  )
}

export default ProfileForm