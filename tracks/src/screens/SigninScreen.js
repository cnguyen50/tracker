import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'


const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in into your account"
        errorMessage=""
        onSubmit={() => {}}
        submitButtonText="Sign In"
      />
      <NavLink 
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

export default SigninScreen