// import React from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';

// const SimpleForm = () => {
//   const { control, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Here you can perform further actions with the form data, like sending it to a server
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forms</Text>
//       <Controller
//         control={control}
//         name="fieldName"
//         render={({ field }) => (
//           <TextInput
//             {...field}
//             style={styles.input}
//             placeholder="Enter your data"
//             // Add other TextInput props as needed
//           />
//         )}
//       />
//       <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//     width: '70%',
//   },
// });

// export default SimpleForm;

import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

function BasicExample() {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Form Builder Basic Demo</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
              textInputProps: {
                label: 'Email',
              },
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
              textInputProps: {
                label: 'Password',
              },
            },
          ]}
        />
        <Button
          mode={'contained'}
          onPress={handleSubmit((data) => {
            console.log('form data', data);
          })}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default BasicExample;