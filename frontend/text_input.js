import * as React from 'react';
import {StyleSheet, TextInput, View, ScrollView, Text, SafeAreaView} from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';

function Input() {
  const {control, setFocus} = useForm({
    defaultValues:{
        name:'',
        CarType: '',
        LicensePlate: '',
        AvailableSeats: '',
        Location:'',
        Time: '',
        ContactNum: '',
        email:'',
    },
    mode: 'onChange',
  });
  return(
    <View style ={styles.input}>
      <ScrollView contentContainerStyle = {styles. ScrollViewStyle}>
        <FormBuilder control= {control} 
        setFocus={setFocus} 
        formConfigArray={
          [{ type: 'name',
            name: 'name',
            rules:{
              required:{
                value: true,
                message: 'Name is required',
              },
            },
          },
          {
            type: 'CarType',
            name: 'Car Type',
            rules:{
              required:{
                value: true,
                message: 'Car Type is required',
              },
            },
          },
          {
            type: 'LicensePlate',
            name: 'License Plate',
            rules:{
              required:{
                value: true,
                message: 'License Plate is required',
              },
            },
          },
          {
            type: 'AvailableSeats',
            name: 'Available seats',
            rules:{
              required:{
                value: true,
                message: 'Available seats is required',
              },
            },
          },
          {
            type: 'Location',
            name: 'Location',
            rules:{
              required:{
                value: true,
                message: 'Location is required',
              },
            },
          },
          {
            type: 'Time',
            name: 'Time',
            rules:{
              required:{
                value: true,
                message: 'Time is required',
              },
            },
          },
          {
            type: 'ContactNum',
            name: 'Contact Number',
            rules:{
              required:{
                value: true,
                message: 'Contact Number is required',
              },
            },
          },
          {
            type: 'email',
            name: 'email',
            rules:{
              required:{
                value: true,
                message: 'Email is required',
              },
            },
          },
        ]}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin:10,
    padding: 10,
    borderWidth: 1,
  },
  ScrollViewStyle: {
    flex: 1,
    justifyContent: 'auto',
  },
});

export default Input;
