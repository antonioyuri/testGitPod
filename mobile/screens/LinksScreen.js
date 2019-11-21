import React, { useState, useEffect,Component,Fragment } from 'react';
import { ExpoLinksView } from '@expo/samples';


import * as yup from 'yup'
import { Formik } from 'formik'


import { TextInput, Text, Button, Alert } from 'react-native';

export default function LinksScreen() {
 

  const [email, setEmail]= useState('');



    return (
       <Formik
        initialValues={{ email: ''}}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email(' Digite um e-mail valido')
            .required(' Campo  Obrigatorio'),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <Fragment>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            }
            <Button
              title='Sign In'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
  );
}


LinksScreen.navigationOptions = {
  title: 'Links',
};

 async function handleSubmit() {
    console.log(email);
  };
