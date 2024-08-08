import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  companyName: yup.string().required('Company name is required'),
  companyWebsite: yup.string().required('Company website is required'),
  companyPhone: yup.string().required('Company phone is required'),
  zipCode: yup.string().required('Zip Code is required'),
  empStrength: yup.string().required('Employee Strength is required'),
  date: yup.string().required('Select Plan start date'),
  plan: yup.string().required('Plan is required'),
  planType: yup.string().required('Plan Type is required'),
  numUsers: yup.number().required('Number of users is required'),
});