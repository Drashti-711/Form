import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: {
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    companyPhone: '',
    zipcode: ''
  },
  companyProfile: {
    empStrength: '',
    companyWebsite: '',
    companyPhone: ''
  },
  selectPlan: {
    plan: '',
    date: '',
    planType: '',
    numUsers: '',
  },
  activeStep: 0
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
    setCompanyProfile(state, action) {
      state.companyProfile = action.payload;
    },
    setSelectPlan(state, action) {
      state.selectPlan = action.payload;
    },
    setActiveStep(state, action) {
      state.activeStep = action.payload;
    }
  }
});

export const { setUserProfile, setCompanyProfile, setSelectPlan, setActiveStep } = formSlice.actions;
export default formSlice.reducer;
