import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign up for Tracker</Text>
      </Spacer>
      <Input label="Email"/>
      <Spacer/>
      <Input label="Password"/>
      <Spacer>
        <Button
          title="Signup"
          onPress={() => navigation.navigate('Signin')}
        />
      </Spacer>
      {/* <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />  */}
    </View>
  )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen