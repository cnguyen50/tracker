import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm
        headerText="Sign in into your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
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