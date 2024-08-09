import React from 'react'
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form'
import { schema } from './schemas/profileform.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import ProfileForm from './userProfile/ProfileForm';
import CompanyProfileForm from './companyProfile/CompanyProfileForm';
import PlanSelection from './planSelection/PlanSelection';
import { setActiveStep, setCompanyProfile, setSelectPlan, setUserProfile } from '../../redux/reducer/form.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

// Pricing for plans
const pricing = {
    monthly: {
        gold: 50,
        titanium: 80,
    },
    yearly: {
        gold: 500,
        titanium: 800,
    },
};

export const Form = () => {
    const dispatch = useAppDispatch();

    const { activeStep } = useAppSelector((state) => state.form);
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const { watch } = methods;
    const planType = watch('planType');
    const plan = watch('plan');
    const numUsers = watch('numUsers', 1);

    // Check validation before moving to the next step
    const validateStep = async () => {
        let fieldsToValidate = [];

        if (activeStep === 0) {
            fieldsToValidate = ['firstName', 'lastName', 'email', 'companyName', 'companyWebsite', 'companyPhone', 'zipCode'];
        } else if (activeStep === 1) {
            fieldsToValidate = ['empStrength'];
        } else if (activeStep === 2) {
            fieldsToValidate = ['planType', 'plan', 'numUsers', 'date'];
        }

        const isValid = await methods.trigger(fieldsToValidate);
        return isValid;
    };

    const handleNext = async () => {
        const isValid = await validateStep();
        // console.log('isValid', isValid);
        if (!isValid) return;
        dispatch(setActiveStep(activeStep + 1));
    };

    const handleBack = () => {
        dispatch(setActiveStep(activeStep - 1));
    };

    const handleReset = () => {
        dispatch(setActiveStep(0));
        methods.reset();
    };

    const onSubmit = (data) => {
        if (activeStep === 0) {
            dispatch(setUserProfile(data));
        } else if (activeStep === 1) {
            dispatch(setCompanyProfile(data));
        } else if (activeStep === 2) {
            dispatch(setSelectPlan(data));
        }
        console.log(data);
    };

    const planPrice = pricing[planType]?.[plan] ?? 0;
    const totalPrice = planPrice * numUsers;


    return (
        <div>
            <FormProvider {...methods}>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {['User Profile', 'Company Profile', 'Select Plan'].map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {activeStep === 0 && <ProfileForm />}
                        {activeStep === 1 && <CompanyProfileForm />}
                        {activeStep === 2 && <PlanSelection />}

                        <React.Fragment>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: 2 }}>
                                {activeStep !== 0 && (
                                    <Button color="inherit" variant='outlined' onClick={handleBack} sx={{ mr: 1 }}>
                                        Previous
                                    </Button>
                                )}
                                {activeStep !== 2 ? (
                                    <>
                                        <Button type="button" variant='contained' onClick={handleNext} sx={{ mr: 1 }}>
                                            Next
                                        </Button>
                                        <Button type="button" variant='outlined' onClick={handleReset} color="secondary">
                                            Cancel
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={methods.formState.isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </Box>
                        </React.Fragment>
                    </form>
                </Box>
            </FormProvider>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Order Summary</Typography>
                <Typography>Plan Type: {planType && planType?.charAt(0)?.toUpperCase() + planType?.slice(1)}</Typography>
                <Typography>Plan: {plan && plan?.charAt(0)?.toUpperCase() + plan?.slice(1)}</Typography>
                <Typography>Number of Users: {numUsers}</Typography>
                <Typography>Total Price: ${totalPrice}</Typography>
            </Box>
        </div>
    )
}
