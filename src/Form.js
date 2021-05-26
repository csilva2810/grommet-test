import React from 'react';
import { Box, Button, Text, Select, DateInput, Heading } from 'grommet';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from './Input';
import Label from './Label';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  country: yup.string().required('Country is required'),
  birthday: yup.string().required('Select your birthday'),
  password: yup.string().required('Type your password'),
});

const UserForm = () => {
  const renderError = (field) => {
    if (touched[field] && errors[field]) {
      return (
        <Box pad={{ top: 'xsmall' }}>
          <Text color="status-error">{errors[field]}</Text>
        </Box>
      );
    }

    return null;
  };

  const onSubmit = (values) => {
    console.log('onSubmit', values);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: '',
      country: '',
      birthday: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  console.log('formValues', values);

  return (
    <Box width="500px">
      <form onSubmit={handleSubmit}>
        <Heading level="3">Form</Heading>
        <Box pad={{ bottom: 'small' }}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Type your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {renderError('name')}
        </Box>

        <Box pad={{ bottom: 'small' }}>
          <Label htmlFor="country">Country</Label>
          <Select
            name="country"
            options={['Brazil', 'Chile']}
            value={values.country}
            onChange={({ option }) => setFieldValue('country', option)}
            onBlur={handleBlur}
            placeholder="Select your country"
          />
          {renderError('country')}
        </Box>

        <Box pad={{ bottom: 'small' }}>
          <Label htmlFor="country">Birthday</Label>
          <DateInput
            format="mm/dd/yyyy"
            value={values.birthday}
            onChange={({ value }) => setFieldValue('birthday', value)}
          />
          {renderError('birthday')}
        </Box>

        <Box pad={{ bottom: 'small' }}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Type your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {renderError('password')}
        </Box>

        <Box direction="row" gap="small" pad={{ top: 'small' }}>
          <Button
            type="reset"
            accent
            label="Reset"
            onClick={() => resetForm()}
          />
          <Button type="submit" primary label="Submit" />
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;
